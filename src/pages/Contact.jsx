import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
const Contact = () => {
  const { t, lang } = useI18n();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/confirmation`
    : '/confirmation';
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
    const weekday = getPart('weekday').toLowerCase();
    const weekdayIndexMap = lang === 'en'
      ? {
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6,
        sun: 7,
      }
      : {
        lun: 1,
        mar: 2,
        mer: 3,
        jeu: 4,
        ven: 5,
        sam: 6,
        dim: 7,
      };
    const weekdayKey = weekday.replace('.', '').slice(0, 3);
    const dayIndex = weekdayIndexMap[weekdayKey] || 0;
    const currentMinutes = hour * 60 + minute;
    const openMinutes = 8 * 60;
    const closeMinutes = 17 * 60;
    const isWeekday = dayIndex >= 1 && dayIndex <= 5;
    const isOnline = isWeekday && currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    let nextSlotLabel = '';

    const formatSlot = (label, hourValue) => `${label} ${String(hourValue).padStart(2, '0')}:00`;

    if (isOnline) {
      nextSlotLabel = t('contactPage.info.availableNow');
    } else if (isWeekday && currentMinutes < openMinutes) {
      nextSlotLabel = formatSlot(weekday, 8);
    } else {
      const nextDay = isWeekday && currentMinutes < closeMinutes ? dayIndex : dayIndex + 1;
      const nextWeekdayIndex = nextDay <= 5 ? nextDay : 1;
      const reverseMap = lang === 'en'
        ? {
          1: 'Mon',
          2: 'Tue',
          3: 'Wed',
          4: 'Thu',
          5: 'Fri',
          6: 'Sat',
          7: 'Sun',
        }
        : {
          1: 'lun.',
          2: 'mar.',
          3: 'mer.',
          4: 'jeu.',
          5: 'ven.',
          6: 'sam.',
          7: 'dim.',
        };
      nextSlotLabel = formatSlot(reverseMap[nextWeekdayIndex], 8);
    }

    return {
      isOnline,
      statusLabel: isOnline ? t('contactPage.info.statusOnline') : t('contactPage.info.statusOffline'),
      nextSlot: nextSlotLabel,
      timezone: t('contactPage.info.timezone'),
    };
  }, [lang, t]);

  const handleInput = (event) => {
    const field = event.target;
    if (field.checkValidity()) {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    form.classList.add('was-validated');
    setIsSubmitting(true);
  };

  return (
  <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section hero-section-contact text-center d-flex align-items-center section-alt-white" data-aos="fade-up" data-aos-delay="100">
      <div className="hero-section-overlay" aria-hidden="true"></div>
      <div className="container position-relative" style={{zIndex: 1}}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">{t('contactPage.hero.title')}</h1>
        <p className="lead text-dark mb-4">{t('contactPage.hero.subtitle')}</p>
       
      </div>
    </section>

    <section className="py-5 section-alt-blue">
      <div className="container my-4">
        <h2 className="text-center display-4 fw-bold mb-5">{t('contactPage.intro.title')}</h2>
        <div className="row g-5">
          <div className="col-lg-4 order-lg-2">
            <div className="contact-info-panel p-4 rounded-4 shadow-lg">
              <h3 className="fw-bold mb-4 text-white">{t('contactPage.info.title')}</h3>
              <div className="availability-badge-circle mb-4">
                <div className={`availability-dot ${availability.isOnline ? 'online' : 'offline'}`}></div>
                <div className="availability-text">
                  <span className={`availability-status ${availability.isOnline ? 'text-success' : 'text-danger'}`}>
                    {availability.statusLabel}
                  </span>
                  <small className="d-block">{t('contactPage.info.nextSlot')} : {availability.nextSlot} ({availability.timezone})</small>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-card-icon icon-red">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="contact-card-content contact-card-content-dark">
                  <h6 className="fw-bold mb-1">{t('contactPage.info.hqTitle')}</h6>
                  <p className="mb-0">{t('contactPage.info.hqAddress')}</p>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-card-icon icon-yellow">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h6 className="fw-bold mb-1">{t('contactPage.info.phoneTitle')}</h6>
                  <p className="mb-0"><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                  <p className="mb-0"><a href="tel:+224628338641" className="text-decoration-none">+224 628 33 86 41</a></p>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-card-icon icon-green">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h6 className="fw-bold mb-1">{t('contactPage.info.emailTitle')}</h6>
                  <p className="mb-0"><a href="mailto:contact@ecgplusgn.com" className="text-decoration-none">contact@ecgplusgn.com</a></p>
                </div>
              </div>
              <div className="contact-schedule-card rounded-4" data-aos="fade-up" data-aos-delay="400">
                <div className="d-flex align-items-center mb-3">
                  <span className="contact-card-icon icon-yellow me-3"><i className="bi bi-clock-fill"></i></span>
                  <div>
                    <h6 className="fw-bold mb-0">{t('contactPage.schedule.title')}</h6>
                    <small className="text-muted">{t('contactPage.schedule.tz')}</small>
                  </div>
                </div>
                <div className="schedule-table">
                  <div className="schedule-row">
                    <span>{t('contactPage.schedule.weekday')}</span>
                    <strong>08:00 - 17:00</strong>
                  </div>
                  <div className="schedule-row">
                    <span>{t('contactPage.schedule.saturday')}</span>
                    <strong>{t('contactPage.schedule.closed')}</strong>
                  </div>
                  <div className="schedule-row">
                    <span>{t('contactPage.schedule.sunday')}</span>
                    <strong>{t('contactPage.schedule.closed')}</strong>
                  </div>
                  <div className="schedule-row schedule-row-emergency">
                    <span>{t('contactPage.schedule.emergency')}</span>
                    <strong>{t('contactPage.schedule.emergencyHours')}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <form
              className="contact-form-premium p-4 rounded-4 shadow-lg bg-white needs-validation"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              style={{maxWidth: '700px', margin: '0 auto'}}
            >
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="access_key" value="4cd0b824-f70a-4e1e-8f73-6a69021e83c8" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputName" name="name" placeholder={t('contactPage.form.name')} required onInput={handleInput} />
                    <label htmlFor="inputName">{t('contactPage.form.name')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-person-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidName')}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputSociete" name="societe" placeholder={t('contactPage.form.company')} onInput={handleInput} />
                    <label htmlFor="inputSociete">{t('contactPage.form.company')}</label>
                    <span className="floating-icon"><i className="bi bi-building"></i></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="email" className="form-control form-control-lg ps-5" id="inputEmail" name="email" placeholder={t('contactPage.form.email')} required onInput={handleInput} />
                    <label htmlFor="inputEmail">{t('contactPage.form.email')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-envelope-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidEmail')}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="tel" className="form-control form-control-lg ps-5" id="inputPhone" name="phone" placeholder={t('contactPage.form.phone')} required onInput={handleInput} />
                    <label htmlFor="inputPhone">{t('contactPage.form.phone')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-telephone-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidPhone')}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <select id="inputTypeProjet" className="form-select form-select-lg ps-5" name="type_projet" required onInput={handleInput}>
                      <option value="">{t('contactPage.form.selectPlaceholder')}</option>
                      <option value="construction">{t('contactPage.form.typeConstruction')}</option>
                      <option value="renovation">{t('contactPage.form.typeRenovation')}</option>
                      <option value="expertise">{t('contactPage.form.typeExpertise')}</option>
                      <option value="autre">{t('contactPage.form.typeOther')}</option>
                    </select>
                    <label htmlFor="inputTypeProjet">{t('contactPage.form.type')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-diagram-3-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidType')}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputSubject" name="subject" placeholder={t('contactPage.form.subject')} required onInput={handleInput} />
                    <label htmlFor="inputSubject">{t('contactPage.form.subject')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-chat-left-text-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidSubject')}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating form-floating-icon">
                    <textarea className="form-control form-control-lg ps-5" id="inputProjectDetails" name="message" rows="5" placeholder={t('contactPage.form.messagePlaceholder')} required onInput={handleInput}></textarea>
                    <label htmlFor="inputProjectDetails">{t('contactPage.form.message')} <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-pencil-fill"></i></span>
                    <div className="invalid-feedback">{t('contactPage.form.invalidMessage')}</div>
                  </div>
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-custom btn-lg mt-2 contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {t('contactPage.form.sending')}
                      </>
                    ) : (
                      t('contactPage.form.submit')
                    )}
                  </button>
                </div>
                <div className="col-12">
                  <p className="form-text mt-3 text-end"><span className="text-danger">*</span> {t('contactPage.form.required')}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <h3 className="fw-bold text-center mb-4">{t('contactPage.map.title')}</h3>
            <div className="map-responsive rounded shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
                width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section FAQ */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('contactPage.faq.title')}</h2>
            <p className="lead">{t('contactPage.faq.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion1">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q1')}
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    {t('contactPage.faq.a1')}
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q2')}
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    {t('contactPage.faq.a2')}
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q3')}
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    {t('contactPage.faq.a3')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion2">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q4')}
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    {t('contactPage.faq.a4')}
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q5')}
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    {t('contactPage.faq.a5')}
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>{t('contactPage.faq.q6')}
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    {t('contactPage.faq.a6')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  );
};

export default Contact;
