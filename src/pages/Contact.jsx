import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import heroPages from '../assets/img/hero-pages.jpg';
import '../styles/realisations.css';
import '../styles/contact.css';

const Contact = () => {
  const { t, lang } = useI18n();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/confirmation`
    : '/confirmation';

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bg = document.querySelector('.ecg-real-hero__bg');
    if (!bg || prefersReduced) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY * 0.15;
        bg.style.transform = `translateY(${y}px) scale(1.08)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Disponibilité (heures bureau Africa/Conakry)
  const availability = React.useMemo(() => {
    const locale = lang === 'en' ? 'en-GB' : 'fr-FR';
    const parts = new Intl.DateTimeFormat(locale, {
      timeZone: 'Africa/Conakry',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const getPart = (type) => parts.find((p) => p.type === type)?.value || '';
    const hour = Number(getPart('hour'));
    const minute = Number(getPart('minute'));
    const weekday = getPart('weekday').toLowerCase().replace('.', '').slice(0, 3);
    const weekdayMap = lang === 'en'
      ? { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 }
      : { lun: 1, mar: 2, mer: 3, jeu: 4, ven: 5, sam: 6, dim: 7 };
    const dayIndex = weekdayMap[weekday] || 0;
    const currentMinutes = hour * 60 + minute;
    const isWeekday = dayIndex >= 1 && dayIndex <= 5;
    const isOnline = isWeekday && currentMinutes >= 480 && currentMinutes < 1020;

    return {
      isOnline,
      statusLabel: isOnline ? t('contactPage.info.statusOnline') : t('contactPage.info.statusOffline'),
      timezone: t('contactPage.info.timezone'),
    };
  }, [lang, t]);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const faqs = [0, 1, 2, 3, 4, 5];

  return (
    <main className="page-with-hero">
      {/* HERO */}
      <header className="ecg-real-hero" style={{ minHeight: '60vh' }}>
        <img className="ecg-real-hero__bg" src={heroPages} alt="" fetchpriority="high" decoding="async" width="1920" height="1280" />
        <div className="ecg-real-hero__overlay" />
        <div className="ecg-real-hero__content ds-container">
          <span className="ds-eyebrow ecg-real-hero__eyebrow">{t('home.contact.eyebrow')}</span>
          <h1 className="ecg-real-hero__title">{t('contactPage.hero.title')}</h1>
          <p className="ecg-real-hero__intro">{t('contactPage.hero.subtitle')}</p>
        </div>
      </header>

      {/* FORM + INFO PANEL */}
      <section className="ecg-contact-page" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-contact-page__grid">
            {/* FORM */}
            <form
              className="ecg-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="access_key" value="4cd0b824-f70a-4e1e-8f73-6a69021e83c8" />

              <div className="ecg-form__head">
                <h2>{t('contactPage.intro.title')}</h2>
                <p>{t('contactPage.form.required')}</p>
              </div>

              <div className="ecg-form__grid">
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-name">
                    {t('contactPage.form.name')} <span className="ecg-form__required">*</span>
                  </label>
                  <input className="ecg-form__input" id="f-name" name="name" type="text" required placeholder="—" />
                </div>
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-company">{t('contactPage.form.company')}</label>
                  <input className="ecg-form__input" id="f-company" name="societe" type="text" placeholder="—" />
                </div>
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-email">
                    {t('contactPage.form.email')} <span className="ecg-form__required">*</span>
                  </label>
                  <input className="ecg-form__input" id="f-email" name="email" type="email" required placeholder="—" />
                </div>
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-phone">
                    {t('contactPage.form.phone')} <span className="ecg-form__required">*</span>
                  </label>
                  <input className="ecg-form__input" id="f-phone" name="phone" type="tel" required placeholder="—" />
                </div>
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-type">
                    {t('contactPage.form.type')} <span className="ecg-form__required">*</span>
                  </label>
                  <select className="ecg-form__select" id="f-type" name="type_projet" required defaultValue="">
                    <option value="" disabled>{t('contactPage.form.selectPlaceholder')}</option>
                    <option value="construction">{t('contactPage.form.typeConstruction')}</option>
                    <option value="renovation">{t('contactPage.form.typeRenovation')}</option>
                    <option value="expertise">{t('contactPage.form.typeExpertise')}</option>
                    <option value="autre">{t('contactPage.form.typeOther')}</option>
                  </select>
                </div>
                <div className="ecg-form__field">
                  <label className="ecg-form__label" htmlFor="f-subject">
                    {t('contactPage.form.subject')} <span className="ecg-form__required">*</span>
                  </label>
                  <input className="ecg-form__input" id="f-subject" name="subject" type="text" required placeholder="—" />
                </div>
                <div className="ecg-form__field is-full">
                  <label className="ecg-form__label" htmlFor="f-message">
                    {t('contactPage.form.message')} <span className="ecg-form__required">*</span>
                  </label>
                  <textarea className="ecg-form__textarea" id="f-message" name="message" required placeholder={t('contactPage.form.messagePlaceholder')}></textarea>
                </div>

                <div className="ecg-form__submit">
                  <p className="ecg-form__required-note">
                    <span className="ecg-form__required">*</span> {t('contactPage.form.required')}
                  </p>
                  <button type="submit" className="ds-btn ds-btn--primary" disabled={isSubmitting}>
                    {isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.submit')}
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>

            {/* INFO PANEL */}
            <aside className="ecg-contact-info">
              <div className="ecg-contact-info__head">
                <h3>{t('contactPage.info.title')}</h3>
              </div>

              <div className="ecg-availability">
                <span className={`ecg-availability__dot${availability.isOnline ? ' is-online' : ''}`} aria-hidden="true"></span>
                <div className="ecg-availability__text">
                  <span className="ecg-availability__status">{availability.statusLabel}</span>
                  <span className="ecg-availability__slot">{availability.timezone}</span>
                </div>
              </div>

              <ul className="ecg-contact-info__list">
                <li className="ecg-contact-info__item">
                  <span className="ecg-contact-info__label">{t('contactPage.info.hqTitle')}</span>
                  <span className="ecg-contact-info__value">{t('contactPage.info.hqAddress')}</span>
                </li>
                <li className="ecg-contact-info__item">
                  <span className="ecg-contact-info__label">{t('contactPage.info.phoneTitle')}</span>
                  <span className="ecg-contact-info__value">
                    <a href="tel:+224623966278">+224 623 96 62 78</a><br />
                    <a href="tel:+224628338641">+224 628 33 86 41</a>
                  </span>
                </li>
                <li className="ecg-contact-info__item">
                  <span className="ecg-contact-info__label">{t('contactPage.info.emailTitle')}</span>
                  <span className="ecg-contact-info__value">
                    <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
                  </span>
                </li>
                <li className="ecg-contact-info__item">
                  <span className="ecg-contact-info__label">{t('contactPage.schedule.title')}</span>
                  <div className="ecg-schedule">
                    <div className="ecg-schedule__row">
                      <span>{t('contactPage.schedule.weekday')}</span>
                      <strong>08:00 — 17:00</strong>
                    </div>
                    <div className="ecg-schedule__row">
                      <span>{t('contactPage.schedule.saturday')}</span>
                      <strong>{t('contactPage.schedule.closed')}</strong>
                    </div>
                    <div className="ecg-schedule__row">
                      <span>{t('contactPage.schedule.sunday')}</span>
                      <strong>{t('contactPage.schedule.closed')}</strong>
                    </div>
                    <div className="ecg-schedule__row is-emergency">
                      <span>{t('contactPage.schedule.emergency')}</span>
                      <strong>{t('contactPage.schedule.emergencyHours')}</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="ecg-contact-map">
        <div className="ds-container">
          <div className="ecg-contact-map__frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
              title="Carte ECG PLUS - Coyah"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ — accordéon custom */}
      <section className="ecg-faq" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-faq__head">
            <span className="ds-eyebrow">FAQ</span>
            <h2>{t('contactPage.faq.title')}</h2>
            <p>{t('contactPage.faq.subtitle')}</p>
          </div>
          <div className="ecg-faq__list">
            {faqs.map((idx) => {
              const i = idx + 1;
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`ecg-faq__item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="ecg-faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{t(`contactPage.faq.q${i}`)}</span>
                    <span className="ecg-faq__icon" aria-hidden="true"><i className="bi bi-plus"></i></span>
                  </button>
                  <div className="ecg-faq__answer">
                    <div className="ecg-faq__answer-inner">{t(`contactPage.faq.a${i}`)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
