import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useI18n } from '../i18n/I18nContext.jsx';
import { useClientReady } from '../hooks/useClientReady.js';
import Photo from '../components/Photo.jsx';
import { services } from '../data/services';
import study from '../assets/img/etudes-800.webp';
import PageHeader from '../components/PageHeader.jsx';
import SectionHead from '../components/SectionHead.jsx';
import '../styles/contact.css';

const ENDPOINT = 'https://api.web3forms.com/submit';
// Clé publique existante : le destinataire reste configuré chez Web3Forms.
const ACCESS_KEY = '4cd0b824-f70a-4e1e-8f73-6a69021e83c8';
// Clé publique hCaptcha fournie officiellement par Web3Forms pour son offre gratuite.
// La vérification serveur doit être exigée avec « Block Spam > hCaptcha » chez Web3Forms.
const CAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
const REQUIRED_FIELDS = ['name', 'email', 'message'];
const FORM_FIELDS = ['name', 'email', 'phone', 'service', 'message'];
const FIELD_LIMITS = { name: 150, email: 254, phone: 50, message: 5000 };
const RECENT_SUBMISSION_KEY = 'ecg-contact-recent';
const RECENT_SUBMISSION_TTL = 10 * 60 * 1000;
let recentSubmission = null;

// Garde-fou de l'onglet uniquement : Web3Forms ne documente pas de clé
// d'idempotence serveur. Aucun nom, email ou message n'est stocké ici.
async function submissionFingerprint(values) {
  if (!window.crypto?.subtle) return null;
  const data = JSON.stringify(['name', 'email', 'phone', 'service', 'message'].map(key => values[key] || ''));
  const hash = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  return Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
}

function readRecentSubmission() {
  try {
    const stored = window.sessionStorage.getItem(RECENT_SUBMISSION_KEY);
    if (stored) recentSubmission = JSON.parse(stored);
  } catch { /* La mémoire de cet onglet reste utilisable si le stockage est bloqué. */ }
  const age = Date.now() - recentSubmission?.at;
  if (!recentSubmission || !/^[a-f0-9]{64}$/.test(recentSubmission.fingerprint)
    || !['pending', 'sent'].includes(recentSubmission.status) || !Number.isFinite(age)
    || age < 0 || age >= RECENT_SUBMISSION_TTL) return null;
  return recentSubmission;
}

function rememberSubmission(fingerprint, status) {
  if (!fingerprint) return;
  recentSubmission = { fingerprint, status, at: Date.now() };
  try {
    window.sessionStorage.setItem(RECENT_SUBMISSION_KEY, JSON.stringify(recentSubmission));
  } catch { /* Le garde-fou en mémoire reste actif. */ }
}

function forgetSubmission(fingerprint) {
  if (!fingerprint || readRecentSubmission()?.fingerprint !== fingerprint) return;
  recentSubmission = null;
  try { window.sessionStorage.removeItem(RECENT_SUBMISSION_KEY); } catch { /* Stockage bloqué. */ }
}

function validateField(field) {
  if (REQUIRED_FIELDS.includes(field.name) && !field.value.trim()) return 'required';
  if (field.value.length > FIELD_LIMITS[field.name]) return 'tooLong';
  if (field.type === 'email' && field.value && field.validity.typeMismatch) return 'email';
  if (field.name === 'service' && field.value && !services.some(service => service.id === field.value)) return 'service';
  return null;
}

const Contact = () => {
  const { t, lang } = useI18n();
  const copy = t('contactPage');
  const clientReady = useClientReady();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [validationAttempt, setValidationAttempt] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [retryAcknowledged, setRetryAcknowledged] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaRef = useRef(null);
  const captchaTokenRef = useRef('');
  const formRef = useRef(null);
  const submitErrorRef = useRef(null);
  const requestRef = useRef(null);
  const retryUntilRef = useRef(0);
  const cooldownTimerRef = useRef(null);

  useEffect(() => {
    if (validationAttempt) {
      const firstInvalid = formRef.current?.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus({ preventScroll: true });
      firstInvalid?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    }
  }, [validationAttempt]);

  useEffect(() => {
    if (submitError) {
      submitErrorRef.current?.focus({ preventScroll: true });
      submitErrorRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    }
  }, [submitError]);

  useEffect(() => () => {
    requestRef.current?.abort();
    requestRef.current = null;
    window.clearTimeout(cooldownTimerRef.current);
  }, []);

  const updateFieldError = (field) => {
    if (!FORM_FIELDS.includes(field.name)) return;
    const error = validateField(field);
    setErrors(previous => {
      const next = { ...previous };
      if (error) next[field.name] = error;
      else delete next[field.name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (requestRef.current || Date.now() < retryUntilRef.current) return;
    const form = event.currentTarget;
    if (form.elements.namedItem('botcheck').checked) {
      setSubmitError('blocked');
      return;
    }
    const nextErrors = {};
    for (const name of FORM_FIELDS) {
      const error = validateField(form.elements.namedItem(name));
      if (error) nextErrors[name] = error;
    }
    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length) {
      setValidationAttempt(attempt => attempt + 1);
      return;
    }
    const captchaToken = captchaTokenRef.current;
    if (!captchaToken) {
      setSubmitError(captchaLoaded ? 'captchaRequired' : 'captchaUnavailable');
      return;
    }

    // Contrôles de confort côté navigateur ; le serveur Web3Forms reste responsable
    // du filtrage réel. Ne transmettre que les champs prévus, jamais un champ ajouté.
    const values = Object.fromEntries(FORM_FIELDS.map(name => [name, form.elements.namedItem(name).value.trim()]));
    const controller = new AbortController();
    requestRef.current = controller;
    setIsSubmitting(true);
    let fingerprint = null;
    let requestSent = false;
    let confirmed = false;
    let retryDelay = 2000;
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      fingerprint = await submissionFingerprint(values);
      if (requestRef.current !== controller || controller.signal.aborted) return;
      const recent = readRecentSubmission();
      if (fingerprint && recent?.fingerprint === fingerprint) {
        if (recent.status === 'sent') {
          setSubmitError('duplicate');
          return;
        }
        if (!retryAcknowledged) {
          setSubmitError('unconfirmed');
          return;
        }
      }
      // Une expiration pendant le calcul du verrou interdit aussi cet envoi.
      if (captchaTokenRef.current !== captchaToken) {
        setSubmitError('captchaRequired');
        return;
      }
      // Ce marqueur reste présent si la page est quittée ou rechargée avant la réponse.
      rememberSubmission(fingerprint, 'pending');
      setRetryAcknowledged(false);
      requestSent = true;
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...values,
          access_key: ACCESS_KEY,
          subject: copy.form.emailSubject,
          from_name: 'ECG PLUS',
          language: lang,
          botcheck: form.elements.namedItem('botcheck').checked,
          'h-captcha-response': captchaToken,
        }),
      });
      if (requestRef.current !== controller) return;
      if (response.status === 429) {
        forgetSubmission(fingerprint);
        const retryAfter = response.headers.get('Retry-After');
        const delay = retryAfter && /^\d+$/.test(retryAfter)
          ? Number(retryAfter) * 1000 : Date.parse(retryAfter) - Date.now();
        // Web3Forms annonce un blocage d'une heure en l'absence de précision.
        // La borne haute évite le débordement du minuteur du navigateur.
        retryDelay = Math.min(Math.max(Number.isFinite(delay) ? delay : 3600000, 2000), 2147483647);
        setSubmitError('rateLimited');
        return;
      }
      const data = await response.json();
      if (requestRef.current !== controller) return;
      if (response.ok && data.success === true) {
        confirmed = true;
        rememberSubmission(fingerprint, 'sent');
        form.reset();
        navigate('/confirmation', { state: { contactSubmitted: true } });
      } else if (response.status < 500 && data.success === false) {
        forgetSubmission(fingerprint);
        setSubmitError('failed');
      } else {
        // Une erreur serveur peut survenir après réception : ne pas inviter à renvoyer aveuglément.
        setSubmitError('unconfirmed');
      }
    } catch {
      // Une réponse perdue ne prouve pas un échec de livraison. Aucun nouvel envoi automatique.
      if (requestRef.current === controller) setSubmitError('unconfirmed');
    } finally {
      window.clearTimeout(timeout);
      if (requestSent) {
        // Un jeton ne sert qu’une fois, même si la réponse est perdue ou refusée.
        captchaTokenRef.current = '';
        captchaRef.current?.resetCaptcha();
      }
      if (requestRef.current === controller) {
        requestRef.current = null;
        // Un retour immédiat peut interrompre la navigation avant le démontage.
        // Le marqueur « sent » bloque toujours les doublons, sans figer le formulaire.
        setIsSubmitting(false);
        if (!confirmed && requestSent) {
          retryUntilRef.current = Date.now() + retryDelay;
          setIsCoolingDown(true);
          cooldownTimerRef.current = window.setTimeout(() => setIsCoolingDown(false), retryDelay);
        }
      }
    }
  };

  const errorText = (name) => ['tooLong', 'service'].includes(errors[name])
    ? copy.form.errors[errors[name]]
    : errors[name] === 'email' ? copy.form.errors.email : copy.form.errors[name];
  const isCaptchaError = submitError?.startsWith('captcha');

  const fieldProps = (name, hint) => ({
    id: `contact-${name}`,
    name,
    required: REQUIRED_FIELDS.includes(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': [hint, errors[name] && `contact-${name}-error`, name === 'message' && submitError && !isCaptchaError && 'contact-submit-error'].filter(Boolean).join(' ') || undefined,
    onBlur: event => updateFieldError(event.target),
    onChange: event => { if (errors[name]) updateFieldError(event.target); },
  });

  const fieldError = (name) => errors[name] && (
    <p id={`contact-${name}-error`} className="contact-form__error" aria-live="polite">{errorText(name)}</p>
  );
  const submissionFeedback = submitError && (
    <>
      <p id={isCaptchaError ? 'contact-captcha-error' : 'contact-submit-error'}
        className="contact-form__error" role="alert" ref={submitErrorRef} tabIndex={-1}>
        {copy.form.errors[submitError]}
      </p>
      {submitError === 'unconfirmed' && (
        <label className="contact-form__retry" htmlFor="contact-confirm-resend">
          <input id="contact-confirm-resend" type="checkbox" checked={retryAcknowledged}
            aria-describedby="contact-submit-error" onChange={event => setRetryAcknowledged(event.target.checked)} />
          <span>{copy.form.confirmResend}</span>
        </label>
      )}
    </>
  );

  return (
    <main className="contact-page ecg-page page-without-hero">
      <PageHeader
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        lead={copy.hero.subtitle}
        media={<Photo image={{src:study,width:800,height:534}} alt={t('referenceUi.contactImageAlt')} caption={t('referenceUi.contactImageCaption')} priority zoom={false} />}
        actions={<p className="contact-call">{copy.hero.call} <a href="tel:+224623417510">+224 623 41 75 10</a></p>}
      />

      <section className="ecg-section" aria-label={t('simple.contactDetails')}>
        <div className="ds-container contact-summary">
          <article><i className="bi bi-geo-alt-fill" aria-hidden="true" /><h2>{copy.info.hqTitle}</h2><p>{copy.info.hqAddress}</p></article>
          <article><i className="bi bi-telephone-fill" aria-hidden="true" /><h2>{copy.info.phoneTitle}</h2><a href="tel:+224623417510">+224 623 41 75 10</a></article>
          <article><i className="bi bi-envelope-fill" aria-hidden="true" /><h2>{copy.info.emailTitle}</h2><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></article>
        </div>
      </section>
      <div className="contact-body">
        <div className="ecg-section contact-layout ds-container">
          <section className="contact-form-section" aria-labelledby="contact-form-title">
            <div className="contact-form__head">
              <p className="ecg-eyebrow">{t('referenceUi.contactFormEyebrow')}</p>
              <h2 id="contact-form-title">{t('referenceUi.contactFormTitle')}</h2>
              <p id="contact-required">{copy.form.required}</p>
            </div>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} onChange={event => {
              if (event.target.id === 'contact-confirm-resend') return;
              setRetryAcknowledged(false);
              if (submitError === 'duplicate' || submitError === 'unconfirmed') setSubmitError(null);
            }} noValidate aria-labelledby="contact-form-title" aria-describedby="contact-required">
              <noscript><p>{copy.form.noScript} <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></p></noscript>
              <fieldset className="contact-form__fields" disabled={isSubmitting || !clientReady}>
                <legend className="visually-hidden">{copy.form.title}</legend>
                <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
                <div className="contact-form__field">
                  <label htmlFor="contact-name">{copy.form.name} <span aria-hidden="true">*</span></label>
                  <input {...fieldProps('name')} type="text" autoComplete="name" maxLength={FIELD_LIMITS.name} />
                  {fieldError('name')}
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-phone">{copy.form.phone} <span className="contact-form__optional">{copy.form.optional}</span></label>
                  <input {...fieldProps('phone')} type="tel" autoComplete="tel" inputMode="tel" maxLength={FIELD_LIMITS.phone} />
                  {fieldError('phone')}
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email">{copy.form.email} <span aria-hidden="true">*</span></label>
                  <input {...fieldProps('email')} type="email" autoComplete="email" inputMode="email" maxLength={FIELD_LIMITS.email} />
                  {fieldError('email')}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-service">{t('referenceUi.contactService')} <span className="contact-form__optional">{copy.form.optional}</span></label>
                  <select {...fieldProps('service')} defaultValue="">
                    <option value="">{t('referenceUi.chooseService')}</option>
                    {services.map(service => <option key={service.key} value={service.id}>{t(`expertiseServicesPage.pillars.${service.key}.shortTitle`)}</option>)}
                  </select>
                  {fieldError('service')}
                </div>
                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="contact-message">{copy.form.message} <span aria-hidden="true">*</span></label>
                  <p id="contact-message-hint" className="contact-form__hint">{copy.form.messageHint}</p>
                  <textarea {...fieldProps('message', 'contact-message-hint contact-message-safety')} rows={5} maxLength={FIELD_LIMITS.message} />
                  <p id="contact-message-safety" className="contact-form__hint">{copy.form.note}</p>
                  {fieldError('message')}
                  {!isCaptchaError && submissionFeedback}
                </div>
              </fieldset>
              <div className="contact-form__captcha" role="group" aria-labelledby="contact-captcha-label"
                aria-describedby={isCaptchaError ? 'contact-captcha-error' : undefined}>
                <p id="contact-captcha-label" className="contact-form__hint">{copy.form.captchaLabel}</p>
                {clientReady && <HCaptcha ref={captchaRef} sitekey={CAPTCHA_SITE_KEY} reCaptchaCompat={false}
                  size="compact" languageOverride={lang} sentry={false} userJourneys={false}
                  onLoad={() => setCaptchaLoaded(true)}
                  onVerify={token => {
                    captchaTokenRef.current = token;
                    setCaptchaLoaded(true);
                    setSubmitError(previous => previous?.startsWith('captcha') ? null : previous);
                  }}
                  onExpire={() => { captchaTokenRef.current = ''; setSubmitError('captchaExpired'); }}
                  onError={() => { captchaTokenRef.current = ''; setCaptchaLoaded(false); setSubmitError('captchaUnavailable'); }} />}
                {!captchaLoaded && <p className="contact-form__hint" role="status">{copy.form.captchaLoading}</p>}
                {isCaptchaError && submissionFeedback}
              </div>
              <div role="status" className="contact-form__status">{isSubmitting ? copy.form.sending : isCoolingDown ? copy.form.wait : ''}</div>
              <div className="contact-form__submit">
                <button className="ds-btn ds-btn--pill ds-btn--dark" type="submit" disabled={isSubmitting || isCoolingDown || !clientReady || (submitError === 'unconfirmed' && !retryAcknowledged)}>
                  {isSubmitting ? copy.form.sending : isCoolingDown ? copy.form.wait : submitError === 'unconfirmed' && retryAcknowledged ? copy.form.resend : copy.form.submit}<i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </form>
          </section>

          <aside className="contact-details" aria-labelledby="contact-details-title">
            <p className="ecg-eyebrow">{t('referenceUi.contactDetailsEyebrow')}</p>
            <h2 id="contact-details-title">{t('simple.contactDetails')}</h2>
            <address>
              <div className="contact-details__item">
                <h3>{copy.info.phoneTitle}</h3>
                <a href="tel:+224623417510">+224 623 41 75 10</a>
              </div>
              <div className="contact-details__item">
                <h3>{copy.info.emailTitle}</h3>
                <a href="mailto:contact@ecgplusgn.com"><span>contact@<wbr />ecgplusgn.com</span></a>
              </div>
              <div className="contact-details__item">
                <h3>{copy.info.hqTitle}</h3>
                <p>{copy.info.hqAddress}</p>
                <a className="contact-details__map" href="https://www.google.com/maps/search/?api=1&query=Man%C3%A9ah%2C%20Coyah%2C%20Guin%C3%A9e" target="_blank" rel="noopener noreferrer">
                  <span>{copy.info.map}<span className="visually-hidden"> — {copy.info.newTab}</span></span>
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </address>
            <div className="contact-details__hours">
              <h3>{copy.schedule.title}</h3>
              <dl>
                <div><dt>{copy.schedule.weekday}</dt><dd>08:00 – 17:00</dd></div>
                <div><dt>{copy.schedule.weekend}</dt><dd>{copy.schedule.closed}</dd></div>
              </dl>
              <p>{copy.schedule.timezone}</p>
            </div>
          </aside>
        </div>
      </div>

      <section className="ecg-section contact-faq" aria-labelledby="contact-faq-title">
        <div className="ds-container contact-faq__grid">
          <div data-reveal>
            <SectionHead eyebrow={copy.faq.eyebrow} title={copy.faq.title} titleId="contact-faq-title" lead={copy.faq.intro} align="stack" />
          </div>
          <div className="ecg-accordion" data-reveal>
            {copy.faq.items.map(item => (
              <details key={item.question}>
                <summary>{item.question}<i className="bi bi-plus-lg" aria-hidden="true" /></summary>
                <div className="ecg-accordion__body"><p>{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
