import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import heroPages from '../assets/img/hero-pages.jpg';
import '../styles/realisations.css';
import '../styles/contact.css';

function Contact() {
  const { t, lang } = useI18n();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/confirmation`
    : '/confirmation';

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const background = document.querySelector('.ecg-contact-shell .ecg-real-hero__bg');
    if (!background || prefersReduced) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        background.style.transform = `translate3d(0, ${window.scrollY * 0.1}px, 0) scale(1.06)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const availability = React.useMemo(() => {
    const locale = lang === 'en' ? 'en-GB' : 'fr-FR';
    const parts = new Intl.DateTimeFormat(locale, {
      timeZone: 'Africa/Conakry',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const getPart = (type) => parts.find((part) => part.type === type)?.value || '';
    const hour = Number(getPart('hour'));
    const minute = Number(getPart('minute'));
    const weekday = getPart('weekday').toLowerCase().replace('.', '').slice(0, 3);
    const weekdayMap = lang === 'en'
      ? { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 }
      : { lun: 1, mar: 2, mer: 3, jeu: 4, ven: 5, sam: 6, dim: 7 };
    const dayIndex = weekdayMap[weekday] || 0;
    const currentMinutes = hour * 60 + minute;
    const isOnline = dayIndex >= 1 && dayIndex <= 5 && currentMinutes >= 480 && currentMinutes < 1020;

    return {
      isOnline,
      statusLabel: isOnline ? t('contactPage.info.statusOnline') : t('contactPage.info.statusOffline'),
      timezone: t('contactPage.info.timezone'),
    };
  }, [lang, t]);

  const faqs = [1, 2, 3, 4, 5, 6];

  return (
    <main className="page-with-hero ecg-contact-shell">
      <header className="ecg-real-hero ecg-contact-hero">
        <img
          className="ecg-real-hero__bg"
          src={heroPages}
          alt=""
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1280"
        />
        <span className="ecg-real-hero__overlay" aria-hidden="true" />
        <span className="ecg-real-hero__lines" aria-hidden="true" />

        <div className="ecg-real-hero__content ds-container">
          <span className="ecg-real-hero__eyebrow">
            <span aria-hidden="true" />
            {t('contactPage.hero.eyebrow')}
          </span>
          <h1 className="ecg-real-hero__title">
            <span>{t('contactPage.hero.titleLine1')}</span>
            <strong>{t('contactPage.hero.titleLine2')}</strong>
          </h1>
          <p className="ecg-real-hero__intro">{t('contactPage.hero.subtitle')}</p>
          <a href="#demande" className="ds-btn ds-btn--accent">
            {t('contactPage.hero.discover')}
            <i className="bi bi-arrow-down" aria-hidden="true" />
          </a>
        </div>

        <div className="ecg-real-hero__stats">
          <div className="ds-container ecg-real-hero__stats-inner">
            <div>
              <strong>48<span>h</span></strong>
              <p>{t('contactPage.hero.stats.quote')}</p>
            </div>
            <div>
              <strong>24<span>/7</span></strong>
              <p>{t('contactPage.hero.stats.emergency')}</p>
            </div>
            <div>
              <strong>GMT</strong>
              <p>{t('contactPage.hero.stats.timezone')}</p>
            </div>
            <a href="tel:+224623417510">
              <span>+224 623 41 75 10</span>
              <i className="bi bi-telephone-outbound" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="demande" className="ecg-contact-workspace">
        <div className="ds-container">
          <div className="ecg-contact-workspace__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('contactPage.intro.eyebrow')}</span>
              <h2>{t('contactPage.intro.title')}</h2>
            </div>
            <p>{t('contactPage.intro.text')}</p>
          </div>

          <div className="ecg-contact-workspace__grid">
            <form
              className="ecg-contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={() => setIsSubmitting(true)}
              data-aos="fade-up"
            >
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="access_key" value="4cd0b824-f70a-4e1e-8f73-6a69021e83c8" />

              <div className="ecg-contact-form__head">
                <span>01</span>
                <div>
                  <h3>{t('contactPage.form.title')}</h3>
                  <p>{t('contactPage.form.helper')}</p>
                </div>
              </div>

              <div className="ecg-contact-form__grid">
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-name">{t('contactPage.form.name')} <span>*</span></label>
                  <input id="f-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-company">{t('contactPage.form.company')}</label>
                  <input id="f-company" name="societe" type="text" autoComplete="organization" />
                </div>
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-email">{t('contactPage.form.email')} <span>*</span></label>
                  <input id="f-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-phone">{t('contactPage.form.phone')} <span>*</span></label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-type">{t('contactPage.form.type')} <span>*</span></label>
                  <select id="f-type" name="type_projet" required defaultValue="">
                    <option value="" disabled>{t('contactPage.form.selectPlaceholder')}</option>
                    <option value="construction">{t('contactPage.form.typeConstruction')}</option>
                    <option value="renovation">{t('contactPage.form.typeRenovation')}</option>
                    <option value="expertise">{t('contactPage.form.typeExpertise')}</option>
                    <option value="autre">{t('contactPage.form.typeOther')}</option>
                  </select>
                </div>
                <div className="ecg-contact-form__field">
                  <label htmlFor="f-subject">{t('contactPage.form.subject')} <span>*</span></label>
                  <input id="f-subject" name="subject" type="text" required />
                </div>
                <div className="ecg-contact-form__field is-full">
                  <label htmlFor="f-message">{t('contactPage.form.message')} <span>*</span></label>
                  <textarea id="f-message" name="message" required placeholder={t('contactPage.form.messagePlaceholder')} />
                </div>
              </div>

              <div className="ecg-contact-form__submit">
                <p><span>*</span> {t('contactPage.form.required')}</p>
                <button type="submit" className="ds-btn ds-btn--primary" disabled={isSubmitting}>
                  {isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.submit')}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </form>

            <aside className="ecg-contact-panel" data-aos="fade-up" data-aos-delay="100">
              <div className="ecg-contact-panel__head">
                <span>02</span>
                <h3>{t('contactPage.info.title')}</h3>
              </div>

              <div className="ecg-contact-availability">
                <span className={`ecg-contact-availability__dot${availability.isOnline ? ' is-online' : ''}`} aria-hidden="true" />
                <div>
                  <strong>{availability.statusLabel}</strong>
                  <small>{availability.timezone} · Conakry</small>
                </div>
              </div>

              <div className="ecg-contact-panel__items">
                <div>
                  <span>{t('contactPage.info.phoneTitle')}</span>
                  <a href="tel:+224623417510">+224 623 41 75 10</a>
                </div>
                <div>
                  <span>{t('contactPage.info.emailTitle')}</span>
                  <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
                </div>
                <div>
                  <span>{t('contactPage.info.hqTitle')}</span>
                  <p>{t('contactPage.info.hqAddress')}</p>
                </div>
              </div>

              <div className="ecg-contact-panel__schedule">
                <span>{t('contactPage.schedule.title')}</span>
                <div><small>{t('contactPage.schedule.weekday')}</small><strong>08:00 — 17:00</strong></div>
                <div><small>{t('contactPage.schedule.saturday')}</small><strong>{t('contactPage.schedule.closed')}</strong></div>
                <div><small>{t('contactPage.schedule.sunday')}</small><strong>{t('contactPage.schedule.closed')}</strong></div>
                <div className="is-accent"><small>{t('contactPage.schedule.emergency')}</small><strong>{t('contactPage.schedule.emergencyHours')}</strong></div>
              </div>

              <Link to="/realisations" className="ecg-contact-panel__link">
                {t('contactPage.info.projectsCta')}
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="ecg-contact-location">
        <div className="ds-container">
          <div className="ecg-contact-location__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('contactPage.map.eyebrow')}</span>
              <h2>{t('contactPage.map.title')}</h2>
            </div>
            <p>{t('contactPage.map.intro')}</p>
          </div>

          <div className="ecg-contact-location__frame" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
              title={t('contactPage.map.title')}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="ecg-contact-location__label">
              <span>ECG PLUS</span>
              <strong>Manéah · Coyah</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ecg-contact-faq">
        <div className="ds-container">
          <div className="ecg-contact-faq__layout">
            <div className="ecg-contact-faq__head" data-aos="fade-up">
              <span className="ds-eyebrow">FAQ</span>
              <h2>{t('contactPage.faq.title')}</h2>
              <p>{t('contactPage.faq.subtitle')}</p>
              <a href="tel:+224623417510" className="ecg-real-text-link">
                {t('contactPage.faq.callCta')}
                <span aria-hidden="true"><i className="bi bi-telephone" /></span>
              </a>
            </div>

            <div className="ecg-contact-faq__list" data-aos="fade-up" data-aos-delay="100">
              {faqs.map((index, itemIndex) => {
                const isOpen = openFaq === itemIndex;
                return (
                  <article key={index} className={`ecg-contact-faq__item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="ecg-contact-faq__question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : itemIndex)}
                    >
                      <span><small>0{index}</small>{t(`contactPage.faq.q${index}`)}</span>
                      <i className="bi bi-plus" aria-hidden="true" />
                    </button>
                    <div id={`faq-answer-${index}`} className="ecg-contact-faq__answer">
                      <p>{t(`contactPage.faq.a${index}`)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
