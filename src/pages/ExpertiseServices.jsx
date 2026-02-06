import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import commerce from '../assets/img/commerce.jpeg';

const ExpertiseServices = () => {
  const { t } = useI18n();

  return (
  <main className="page-without-hero expertise-page">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">{t('expertiseServicesPage.hero.title')}</h1>
        <p className="lead text-dark mb-4">{t('expertiseServicesPage.hero.subtitle')}</p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="expertise-highlight-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-lightbulb-fill me-2 text-accent"></i> {t('expertiseServicesPage.hero.strengths')}</h4>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> {t('expertiseServicesPage.hero.strengthsItems.0')}</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> {t('expertiseServicesPage.hero.strengthsItems.1')}</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> {t('expertiseServicesPage.hero.strengthsItems.2')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="expertise-highlight-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-shield-check me-2 text-accent"></i> {t('expertiseServicesPage.hero.commitments')}</h4>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-hand-thumbs-up-fill text-orange me-2"></i> {t('expertiseServicesPage.hero.commitmentsItems.0')}</li>
                <li><i className="bi bi-globe2 text-orange me-2"></i> {t('expertiseServicesPage.hero.commitmentsItems.1')}</li>
                <li><i className="bi bi-people-fill text-orange me-2"></i> {t('expertiseServicesPage.hero.commitmentsItems.2')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section Moyens Humains & Équipe */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="team-box p-4 rounded shadow-sm bg-white h-100 identity-card">
              <h3 className="fw-bold mb-3 text-primary">{t('expertiseServicesPage.team.title')}</h3>
              <p>{t('expertiseServicesPage.team.text')}</p>
              <ul className="list-unstyled mb-0 team-list">
                <li><i className="bi bi-person-badge-fill icon-red me-2"></i> {t('expertiseServicesPage.team.items.0')}</li>
                <li><i className="bi bi-tools icon-yellow me-2"></i> {t('expertiseServicesPage.team.items.1')}</li>
                <li><i className="bi bi-briefcase-fill icon-green me-2"></i> {t('expertiseServicesPage.team.items.2')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="history-image-frame">
              <img src={batiment} alt={t('expertiseServicesPage.team.imageAlt')} className="history-image" loading="lazy" decoding="async" />
              <div className="history-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">{t('expertiseServicesPage.pillars.title')}</h2>

        <div id="construction" className="expertise-block card shadow-lg mb-5 action-card action-card-alt" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-bricks me-3 icon-red action-icon"></i> 1. {t('expertiseServicesPage.pillars.p1.title')}
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead text-white">
                  {t('expertiseServicesPage.pillars.p1.lead')}
                </p>
                <ul>
                  <li>{t('expertiseServicesPage.pillars.p1.items.0')}</li>
                  <li>{t('expertiseServicesPage.pillars.p1.items.1')}</li>
                  <li>{t('expertiseServicesPage.pillars.p1.items.2')}</li>
                  <li>{t('expertiseServicesPage.pillars.p1.items.3')}</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={batiment} alt={t('expertiseServicesPage.pillars.p1.imageAlt')} className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="ingenierie" className="expertise-block card shadow-lg mb-5 action-card" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-lightbulb-fill me-3 icon-yellow action-icon"></i> 2. {t('expertiseServicesPage.pillars.p2.title')}
            </h3>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-7">
                <p className="lead">
                  {t('expertiseServicesPage.pillars.p2.lead')}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p2.items.0')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p2.items.1')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p2.items.2')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p2.items.3')}</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={ingeelectric} alt={t('expertiseServicesPage.pillars.p2.imageAlt')} className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="multitechnique" className="expertise-block card shadow-lg mb-5 action-card action-card-alt" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-gear-fill me-3 icon-green action-icon"></i> 3. {t('expertiseServicesPage.pillars.p3.title')}
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead text-white">
                  {t('expertiseServicesPage.pillars.p3.lead')}
                </p>
                <ul>
                  <li>{t('expertiseServicesPage.pillars.p3.items.0')}</li>
                  <li>{t('expertiseServicesPage.pillars.p3.items.1')}</li>
                  <li>{t('expertiseServicesPage.pillars.p3.items.2')}</li>
                  <li>{t('expertiseServicesPage.pillars.p3.items.3')}</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={ingeelectric} alt={t('expertiseServicesPage.pillars.p3.imageAlt')} className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="etudes" className="expertise-block card shadow-lg mb-5 action-card" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-file-earmark-check-fill me-3 icon-red action-icon"></i> 4. {t('expertiseServicesPage.pillars.p4.title')}
            </h3>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-7">
                <p className="lead">
                  {t('expertiseServicesPage.pillars.p4.lead')}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p4.items.0')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p4.items.1')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p4.items.2')}</li>
                  <li className="list-group-item">{t('expertiseServicesPage.pillars.p4.items.3')}</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={commerce} alt={t('expertiseServicesPage.pillars.p4.imageAlt')} className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 p-4 rounded shadow-sm text-white" style={{backgroundColor: 'var(--gas-primary)'}} data-aos="fade-up">
          <h3 className="fw-bold text-white">{t('expertiseServicesPage.pillars.ctaTitle')}</h3>
          <p className="lead text-white">
            {t('expertiseServicesPage.pillars.ctaText')}
          </p>
          <Link to="/contact" className="btn btn-custom btn-lg">{t('expertiseServicesPage.pillars.ctaButton')}</Link>
        </div>
      </div>
    </section>

    {/* Section Certifications & Qualifications */}
    <section className="py-5 text-white" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">{t('expertiseServicesPage.certifications.title')}</h2>
            <p className="lead text-white">{t('expertiseServicesPage.certifications.subtitle')}</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-award-fill icon-red cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.certifications.cards.0.title')}</h5>
              <p className="small mb-0">{t('expertiseServicesPage.certifications.cards.0.text')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-shield-check icon-yellow cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.certifications.cards.1.title')}</h5>
              <p className="small mb-0">{t('expertiseServicesPage.certifications.cards.1.text')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-building icon-green cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.certifications.cards.2.title')}</h5>
              <p className="small mb-0">{t('expertiseServicesPage.certifications.cards.2.text')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-check-circle-fill icon-red cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.certifications.cards.3.title')}</h5>
              <p className="small mb-0">{t('expertiseServicesPage.certifications.cards.3.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Moyens Techniques & Équipement */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('expertiseServicesPage.equipment.title')}</h2>
            <p className="lead equipment-lead">
              {t('expertiseServicesPage.equipment.lead')}
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="bi bi-tools equipment-header-icon" style={{fontSize: '5rem'}}></i>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="equipment-card bg-white p-4 rounded shadow-lg h-100">
              <div className="equipment-icon text-center mb-3">
                <i className="bi bi-truck icon-red equipment-pulse" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h5 className="fw-bold text-center mb-3">{t('expertiseServicesPage.equipment.sections.0.title')}</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.0.items.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.0.items.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.0.items.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.0.items.3')}</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="equipment-card bg-white p-4 rounded shadow-lg h-100">
              <div className="equipment-icon text-center mb-3">
                <i className="bi bi-gear-wide-connected icon-yellow equipment-pulse" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h5 className="fw-bold text-center mb-3">{t('expertiseServicesPage.equipment.sections.1.title')}</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.1.items.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.1.items.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.1.items.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.1.items.3')}</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="equipment-card bg-white p-4 rounded shadow-lg h-100">
              <div className="equipment-icon text-center mb-3">
                <i className="bi bi-hammer icon-green equipment-pulse" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h5 className="fw-bold text-center mb-3">{t('expertiseServicesPage.equipment.sections.2.title')}</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.2.items.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.2.items.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.2.items.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> {t('expertiseServicesPage.equipment.sections.2.items.3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Processus de Travail */}
    <section className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('expertiseServicesPage.process.title')}</h2>
            <p className="lead">{t('expertiseServicesPage.process.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4 process-timeline">
          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up">
              <div className="process-number-circle">1</div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.process.steps.0.title')}</h5>
              <p className="small">{t('expertiseServicesPage.process.steps.0.text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="process-number-circle">2</div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.process.steps.1.title')}</h5>
              <p className="small">{t('expertiseServicesPage.process.steps.1.text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="process-number-circle">3</div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.process.steps.2.title')}</h5>
              <p className="small">{t('expertiseServicesPage.process.steps.2.text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="process-number-circle">4</div>
              <h5 className="fw-bold mb-2">{t('expertiseServicesPage.process.steps.3.title')}</h5>
              <p className="small">{t('expertiseServicesPage.process.steps.3.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Garanties & Assurances */}
    <section className="py-5 text-white" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4 text-white">{t('expertiseServicesPage.guarantees.title')}</h2>
            <p className="lead mb-4 text-white">
              {t('expertiseServicesPage.guarantees.lead')}
            </p>

            <div className="row g-3">
              <div className="col-md-6" data-aos="fade-up">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-shield-check-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">{t('expertiseServicesPage.guarantees.items.0.title')}</h6>
                    <p className="small mb-0 text-white">{t('expertiseServicesPage.guarantees.items.0.text')}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">{t('expertiseServicesPage.guarantees.items.1.title')}</h6>
                    <p className="small mb-0 text-white">{t('expertiseServicesPage.guarantees.items.1.text')}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">{t('expertiseServicesPage.guarantees.items.2.title')}</h6>
                    <p className="small mb-0 text-white">{t('expertiseServicesPage.guarantees.items.2.text')}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">{t('expertiseServicesPage.guarantees.items.3.title')}</h6>
                    <p className="small mb-0 text-white">{t('expertiseServicesPage.guarantees.items.3.text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="guarantee-visual text-center">
              <div className="guarantee-badge text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                <div className="text-center">
                  <i className="bi bi-shield-check d-block guarantee-badge-icon"></i>
                  <small className="d-block mt-2"><span className="guarantee-number">{t('expertiseServicesPage.guarantees.badgePercent')}</span><br/>{t('expertiseServicesPage.guarantees.badge')}</small>
                </div>
              </div>
              <h5 className="fw-bold mb-3 text-white">{t('expertiseServicesPage.guarantees.badgeTitle')}</h5>
              <p className="mb-0 text-white">
                {t('expertiseServicesPage.guarantees.badgeText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section CTA Finale */}
    <section className="py-5 section-alt-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4 text-primary">{t('expertiseServicesPage.finalCta.title')}</h2>
        <p className="lead mb-4 text-dark">
          {t('expertiseServicesPage.finalCta.text')}
        </p>
        <div className="row justify-content-center g-3">
          <div className="col-auto">
            <Link to="/contact" className="btn btn-custom btn-lg px-4">
              <i className="bi bi-envelope-fill me-2"></i>{t('expertiseServicesPage.finalCta.primary')}
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/realisations" className="btn btn-outline-primary btn-lg px-4">
              <i className="bi bi-images me-2"></i>{t('expertiseServicesPage.finalCta.secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>

  </main>
  );
};

export default ExpertiseServices;
