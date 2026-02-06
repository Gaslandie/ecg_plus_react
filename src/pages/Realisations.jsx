
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import kagbelen from '../assets/img/kagbelen.png';
import r4 from '../assets/img/r+4.png';
import hangar from '../assets/img/hangar.png';
import ansoumania from '../assets/img/ansoumania.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

function Realisations() {
  const { t } = useI18n();
  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = document.querySelectorAll('.stat-value[data-target]');
    counters.forEach((el) => {
      const target = Number(el.getAttribute('data-target')) || 0;
      if (prefersReduced) {
        el.textContent = String(target);
        return;
      }
      const duration = 1500;
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = String(value);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, []);

  return (
    <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section hero-section-realisations text-center d-flex align-items-center section-alt-white" data-aos="fade-up" data-aos-delay="100">
      <div className="hero-section-overlay" aria-hidden="true"></div>
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">{t('realisationsPage.hero.title')}</h1>
        <p className="lead text-dark mb-4">{t('realisationsPage.hero.subtitle')}</p>
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div className="key-figure-box p-3 rounded shadow-sm bg-white text-center">
              <div className="key-figure-icon mb-2">
                <i className="bi bi-building text-warning"></i>
              </div>
              <div className="display-5 fw-bold text-orange">
                <span className="stat-value" data-target="25">0</span>+
              </div>
              <div className="fw-semibold">{t('realisationsPage.hero.stats.projects')}</div>
            </div>
          </div>
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="key-figure-box p-3 rounded shadow-sm bg-white text-center">
              <div className="key-figure-icon mb-2">
                <i className="bi bi-clock-history text-warning"></i>
              </div>
              <div className="display-5 fw-bold text-orange">
                <span className="stat-value" data-target="18">0</span>
              </div>
              <div className="fw-semibold">{t('realisationsPage.hero.stats.years')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section Valeur Ajoutée / Témoignages */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="value-box value-box-premium p-4 rounded shadow-sm bg-white h-100">
              <h3 className="fw-bold mb-3 text-primary">{t('realisationsPage.valueAdded.title')}</h3>
              <ul className="list-unstyled mb-0 value-list">
                <li><i className="bi bi-award-fill icon-yellow me-2"></i> {t('realisationsPage.valueAdded.items.0')}</li>
                <li><i className="bi bi-clock-history icon-red me-2"></i> {t('realisationsPage.valueAdded.items.1')}</li>
                <li><i className="bi bi-people-fill icon-green me-2"></i> {t('realisationsPage.valueAdded.items.2')}</li>
                <li><i className="bi bi-globe2 icon-yellow me-2"></i> {t('realisationsPage.valueAdded.items.3')}</li>
                <li><i className="bi bi-hand-thumbs-up-fill icon-red me-2"></i> {t('realisationsPage.valueAdded.items.4')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-box testimonial-box-premium p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold mb-3 text-secondary">{t('realisationsPage.testimonial.title')}</h4>
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '52px', height: '52px'}}>
                  <i className="bi bi-building"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{t('realisationsPage.testimonial.clientTitle')}</h6>
                  <small className="text-muted">{t('realisationsPage.testimonial.clientSubtitle')}</small>
                </div>
              </div>
              <div className="testimonial-stars mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <blockquote className="blockquote mb-0">
                <p className="mb-2">“{t('realisationsPage.testimonial.quote')}”</p>
                <footer className="blockquote-footer">{t('realisationsPage.testimonial.footer')}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Projets réalisés */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 section-title">{t('realisationsPage.projects.title')}</h2>
        <div className="row g-4">
          {/* Projet 1 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={kankan} className="realisation-image" alt="Bibliothèque Municipale de Kankan" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.kankan.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.kankan.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.kankan.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 2 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={dubreka} className="realisation-image" alt="Résidence Privée Dubréka Fihaima" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.dubreka.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.dubreka.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.dubreka.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 3 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={kagbelen} className="realisation-image" alt="Projet Kagbelen Dondolikhouré" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.kagbelen.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.kagbelen.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.kagbelen.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 4 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={r4} className="realisation-image" alt="Conceptions & Modélisations R+4" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.r4.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.r4.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.r4.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 5 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={hangar} className="realisation-image" alt="Hangars & Bâtiments Logistiques" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.hangar.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.hangar.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.hangar.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 6 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={ansoumania} className="realisation-image" alt="Immeuble R+2 Ansoumaniah" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>{t('realisationsPage.projects.cards.ansoumania.badge')}</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">{t('realisationsPage.projects.cards.ansoumania.title')}</h5>
                  <p className="mb-2 text-white-50 small">{t('realisationsPage.projects.cards.ansoumania.meta')}</p>
                  <Link to="/realisations" className="btn btn-sm btn-light fw-bold">{t('realisationsPage.projects.view')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="lead text-muted">{t('realisationsPage.projects.more')}</p>
          <Link to="/contact" className="btn btn-custom btn-lg">{t('realisationsPage.projects.cta')}</Link>
        </div>
      </div>
    </section>
    {/* Section Statistiques Détaillées */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">{t('realisationsPage.stats.title')}</h2>
            <p className="lead">{t('realisationsPage.stats.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-3 col-sm-6" data-aos="fade-up">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-building-fill icon-red stats-icon-lg"></i>
              </div>
              <div className="stats-number display-4 fw-bold text-primary mb-2">
                <span className="stat-value" data-target="25">0</span>+
              </div>
              <div className="stats-label fw-semibold text-black">{t('realisationsPage.stats.projects')}</div>
              <div className="stats-subtitle small text-muted mt-1">{t('realisationsPage.stats.sectors')}</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-geo-alt-fill icon-green stats-icon-lg"></i>
              </div>
              <div className="stats-number display-4 fw-bold text-success mb-2">
                <span className="stat-value" data-target="4">0</span>
              </div>
              <div className="stats-label fw-semibold text-black">{t('realisationsPage.stats.regions')}</div>
              <div className="stats-subtitle small text-muted mt-1">{t('realisationsPage.stats.guinea')}</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-people-fill icon-yellow stats-icon-lg"></i>
              </div>
              <div className="stats-number display-4 fw-bold text-warning mb-2">
                <span className="stat-value" data-target="50">0</span>+
              </div>
              <div className="stats-label fw-semibold text-black">{t('realisationsPage.stats.professionals')}</div>
              <div className="stats-subtitle small text-muted mt-1">{t('realisationsPage.stats.qualified')}</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-trophy-fill icon-red stats-icon-lg"></i>
              </div>
              <div className="stats-number display-4 fw-bold text-danger mb-2">
                <span className="stat-value" data-target="100">0</span>%
              </div>
              <div className="stats-label fw-semibold text-black">{t('realisationsPage.stats.satisfaction')}</div>
              <div className="stats-subtitle small text-muted mt-1">{t('realisationsPage.stats.success')}</div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="achievement-highlight p-4 bg-white text-dark rounded shadow-lg border-start border-5 border-orange">
              <h4 className="fw-bold mb-3 text-primary">{t('realisationsPage.achievement.title')}</h4>
              <p className="lead mb-3">
                {t('realisationsPage.achievement.lead')}
              </p>
              <div className="row text-center g-3">
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-success mb-1">
                      <span className="stat-value" data-target="98">0</span>%
                    </div>
                    <small className="text-muted">{t('realisationsPage.achievement.onTime')}</small>
                    <div className="metric-progress mt-2">
                      <span style={{width: '98%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-primary mb-1">
                      <span className="stat-value" data-target="95">0</span>%
                    </div>
                    <small className="text-muted">{t('realisationsPage.achievement.budget')}</small>
                    <div className="metric-progress mt-2">
                      <span style={{width: '95%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-warning mb-1">
                      <span className="stat-value" data-target="100">0</span>%
                    </div>
                    <small className="text-muted">{t('realisationsPage.achievement.standards')}</small>
                    <div className="metric-progress mt-2">
                      <span style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Domaines d'Intervention */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('realisationsPage.domains.title')}</h2>
            <p className="lead">{t('realisationsPage.domains.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6" data-aos="fade-up">
            <div className="domain-card domain-card-premium domain-card-blue bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-building icon-red domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">{t('realisationsPage.domains.building')}</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.building.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.building.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.building.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.building.3')}</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="domain-card domain-card-premium domain-card-yellow bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-lightning-fill icon-yellow domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">{t('realisationsPage.domains.energy')}</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.energy.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.energy.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.energy.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.energy.3')}</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="domain-card domain-card-premium domain-card-red bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-gear-fill icon-red domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">{t('realisationsPage.domains.civil')}</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.civil.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.civil.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.civil.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.civil.3')}</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="domain-card domain-card-premium domain-card-green bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-clipboard-data icon-green domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">{t('realisationsPage.domains.studies')}</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.studies.0')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.studies.1')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.studies.2')}</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>{t('realisationsPage.domains.lists.studies.3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Présence Géographique */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('realisationsPage.presence.title')}</h2>
            <p className="lead">
              {t('realisationsPage.presence.text')}
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <i className="bi bi-geo-alt-fill region-header-icon" style={{fontSize: '5rem'}}></i>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-house-fill icon-red"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">{t('realisationsPage.presence.conakry')}</h6>
              <p className="small mb-2">{t('realisationsPage.presence.conakryText')}</p>
              <div className="region-stats">
                <span className="badge bg-primary region-badge">{t('realisationsPage.presence.badges.conakry')}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-tree-fill icon-green"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">{t('realisationsPage.presence.regions')}</h6>
              <p className="small mb-2">{t('realisationsPage.presence.regionsText')}</p>
              <div className="region-stats">
                <span className="badge bg-success region-badge">{t('realisationsPage.presence.badges.regions')}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-water icon-yellow"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">{t('realisationsPage.presence.coast')}</h6>
              <p className="small mb-2">{t('realisationsPage.presence.coastText')}</p>
              <div className="region-stats">
                <span className="badge bg-info region-badge">{t('realisationsPage.presence.badges.coast')}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-hammer icon-red"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">{t('realisationsPage.presence.mining')}</h6>
              <p className="small mb-2">{t('realisationsPage.presence.miningText')}</p>
              <div className="region-stats">
                <span className="badge bg-warning region-badge">{t('realisationsPage.presence.badges.mining')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Témoignages Détaillés */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('realisationsPage.trust.title')}</h2>
            <p className="lead">{t('realisationsPage.trust.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-up">
            <div className="testimonial-card testimonial-card-premium bg-white p-4 rounded shadow-lg h-100">
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                  <i className="bi bi-building"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{t('realisationsPage.trust.t1title')}</h6>
                  <small className="text-muted">{t('realisationsPage.trust.t1subtitle')}</small>
                </div>
              </div>
              <div className="testimonial-stars mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <blockquote className="blockquote mb-0">
                <p className="mb-3 fst-italic">"{t('realisationsPage.trust.t1quote')}"</p>
                <footer className="blockquote-footer text-end testimonial-signature">{t('realisationsPage.trust.t1footer')}</footer>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-card testimonial-card-premium bg-white p-4 rounded shadow-lg h-100">
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                  <i className="bi bi-house"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{t('realisationsPage.trust.t2title')}</h6>
                  <small className="text-muted">{t('realisationsPage.trust.t2subtitle')}</small>
                </div>
              </div>
              <div className="testimonial-stars mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <blockquote className="blockquote mb-0">
                <p className="mb-3 fst-italic">"{t('realisationsPage.trust.t2quote')}"</p>
                <footer className="blockquote-footer text-end testimonial-signature">{t('realisationsPage.trust.t2footer')}</footer>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card testimonial-card-premium bg-white p-4 rounded shadow-lg h-100">
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                  <i className="bi bi-factory"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{t('realisationsPage.trust.t3title')}</h6>
                  <small className="text-muted">{t('realisationsPage.trust.t3subtitle')}</small>
                </div>
              </div>
              <div className="testimonial-stars mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <blockquote className="blockquote mb-0">
                <p className="mb-3 fst-italic">"{t('realisationsPage.trust.t3quote')}"</p>
                <footer className="blockquote-footer text-end testimonial-signature">{t('realisationsPage.trust.t3footer')}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Processus de Réalisation */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">{t('realisationsPage.process.title')}</h2>
            <p className="lead">{t('realisationsPage.process.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4 process-timeline">
          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up">
              <div className="process-number-circle">1</div>
              <h5 className="fw-bold mb-2">{t('realisationsPage.process.step1')}</h5>
              <p className="small">{t('realisationsPage.process.step1text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="process-number-circle">2</div>
              <h5 className="fw-bold mb-2">{t('realisationsPage.process.step2')}</h5>
              <p className="small">{t('realisationsPage.process.step2text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="process-number-circle">3</div>
              <h5 className="fw-bold mb-2">{t('realisationsPage.process.step3')}</h5>
              <p className="small">{t('realisationsPage.process.step3text')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="process-number-circle">4</div>
              <h5 className="fw-bold mb-2">{t('realisationsPage.process.step4')}</h5>
              <p className="small">{t('realisationsPage.process.step4text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section CTA Finale Étendue */}
    <section className="py-5 section-alt-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4 text-primary">{t('realisationsPage.cta.title')}</h2>
        <p className="lead mb-5 text-dark">
          {t('realisationsPage.cta.text')}
        </p>

        <div className="row justify-content-center g-4 mb-5">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-lightbulb-fill icon-yellow cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">{t('realisationsPage.cta.feature1')}</h5>
              <p className="small mb-0">{t('realisationsPage.cta.feature1text')}</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-calculator-fill icon-red cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">{t('realisationsPage.cta.feature2')}</h5>
              <p className="small mb-0">{t('realisationsPage.cta.feature2text')}</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-clock-fill icon-green cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">{t('realisationsPage.cta.feature3')}</h5>
              <p className="small mb-0">{t('realisationsPage.cta.feature3text')}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-3">
          <div className="col-auto">
            <Link to="/contact" className="btn btn-custom btn-lg px-5 py-3">
              <i className="bi bi-envelope-fill me-2"></i>{t('realisationsPage.cta.primary')}
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/expertise-services" className="btn btn-outline-primary btn-lg px-5 py-3">
              <i className="bi bi-tools me-2"></i>{t('realisationsPage.cta.secondary')}
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <small className="text-muted">
            {t('common.response24h')}
          </small>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Realisations;
