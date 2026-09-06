import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { useClientReady } from '../hooks/useClientReady.js';
import '../styles/contact.css';

const ENDPOINT = 'https://api.web3forms.com/submit';
// Clé publique existante : le destinataire reste configuré chez Web3Forms.
const ACCESS_KEY = '4cd0b824-f70a-4e1e-8f73-6a69021e83c8';
const REQUIRED_FIELDS = ['name', 'email', 'message'];

function validateField(field) {
  if (!field.value.trim()) return 'required';
  if (field.type === 'email' && field.validity.typeMismatch) return 'email';
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
  const [submitError, setSubmitError] = useState(null);
  const errorSummaryRef = useRef(null);
  const submitErrorRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    if (validationAttempt) errorSummaryRef.current?.focus();
  }, [validationAttempt]);

  useEffect(() => {
    if (submitError) submitErrorRef.current?.focus();
  }, [submitError]);

  useEffect(() => () => {
    requestRef.current?.abort();
    requestRef.current = null;
  }, []);

  const updateFieldError = (field) => {
    if (!REQUIRED_FIELDS.includes(field.name)) return;
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
    if (requestRef.current) return;
    const form = event.currentTarget;
    const nextErrors = {};
    for (const name of REQUIRED_FIELDS) {
      const error = validateField(form.elements.namedItem(name));
      if (error) nextErrors[name] = error;
    }
    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length) {
      setValidationAttempt(attempt => attempt + 1);
      return;
    }

    const values = Object.fromEntries(new FormData(form));
    const controller = new AbortController();
    requestRef.current = controller;
    setIsSubmitting(true);
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])),
          access_key: ACCESS_KEY,
          subject: copy.form.emailSubject,
          from_name: 'ECG PLUS',
          language: lang,
          botcheck: form.elements.namedItem('botcheck').checked,
        }),
      });
      if (requestRef.current !== controller) return;
      if (response.status === 429) {
        setSubmitError('rateLimited');
        return;
      }
      const data = await response.json();
      if (requestRef.current !== controller) return;
      if (response.ok && data.success === true) {
        navigate('/confirmation', { state: { contactSubmitted: true } });
      } else {
        setSubmitError('failed');
      }
    } catch {
      // Une réponse perdue ne prouve pas un échec de livraison. Aucun nouvel envoi automatique.
      if (requestRef.current === controller) setSubmitError('unconfirmed');
    } finally {
      window.clearTimeout(timeout);
      if (requestRef.current === controller) {
        requestRef.current = null;
        setIsSubmitting(false);
      }
    }
  };

  const errorText = (name) => errors[name] === 'email'
    ? copy.form.errors.email
    : copy.form.errors[name];

  const fieldProps = (name, hint) => ({
    id: `contact-${name}`,
    name,
    required: true,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': [hint, errors[name] && `contact-${name}-error`].filter(Boolean).join(' ') || undefined,
    onBlur: event => updateFieldError(event.target),
    onChange: event => { if (errors[name]) updateFieldError(event.target); },
  });

  const fieldError = (name) => errors[name] && (
    <p id={`contact-${name}-error`} className="contact-form__error">{errorText(name)}</p>
  );

  return (
    <main className="contact-page page-without-hero">
      <header className="ecg-page-intro ds-container">
        <h1>{t('simple.contact')}</h1>
        <p>{copy.hero.subtitle}</p>
      </header>

      <div className="contact-layout ds-container">
        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <div className="contact-form__head">
            <h2 id="contact-form-title">{t('simple.message')}</h2>
            <p id="contact-required">{copy.form.required}</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title" aria-describedby="contact-required">
            <noscript><p>{copy.form.noScript} <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></p></noscript>
            {Object.keys(errors).length > 0 && (
              <div className="contact-form__notice" ref={errorSummaryRef} tabIndex={-1}>
                <h3>{copy.form.errors.title}</h3>
                <ul>
                  {REQUIRED_FIELDS.filter(name => errors[name]).map(name => (
                    <li key={name}>
                      <a href={`#contact-${name}`} onClick={event => {
                        event.preventDefault();
                        document.getElementById(`contact-${name}`).focus();
                      }}>{errorText(name)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <fieldset className="contact-form__fields" disabled={isSubmitting || !clientReady}>
              <legend className="visually-hidden">{copy.form.title}</legend>
              <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
              <div className="contact-form__field">
                <label htmlFor="contact-name">{copy.form.name} <span aria-hidden="true">*</span></label>
                <input {...fieldProps('name')} type="text" autoComplete="name" maxLength={150} />
                {fieldError('name')}
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">{copy.form.email} <span aria-hidden="true">*</span></label>
                <input {...fieldProps('email')} type="email" autoComplete="email" inputMode="email" maxLength={254} />
                {fieldError('email')}
              </div>
              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-phone">{copy.form.phone} <span className="contact-form__optional">{copy.form.optional}</span></label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={50} />
              </div>
              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-message">{copy.form.message} <span aria-hidden="true">*</span></label>
                <p id="contact-message-hint" className="contact-form__hint">{copy.form.messageHint}</p>
                <textarea {...fieldProps('message', 'contact-message-hint')} rows={5} maxLength={5000} />
                {fieldError('message')}
              </div>
            </fieldset>
            <div role="status" className="contact-form__status">{isSubmitting ? copy.form.sending : ''}</div>
            {submitError && (
              <div className="contact-form__notice" ref={submitErrorRef} tabIndex={-1}>
                <h3>{copy.form.errors.sendTitle}</h3>
                <p>{copy.form.errors[submitError]}</p>
                <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
              </div>
            )}
            <div className="contact-form__submit">
              <button className="ds-btn ds-btn--primary" type="submit" disabled={isSubmitting || !clientReady}>
                {isSubmitting ? copy.form.sending : copy.form.submit}
              </button>
            </div>
          </form>
        </section>

        <aside className="contact-details" aria-labelledby="contact-details-title">
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

    </main>
  );
};

export default Contact;
