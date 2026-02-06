
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import kagbelen from '../assets/img/kagbelen.png';
import r4 from '../assets/img/r+4.png';
import hangar from '../assets/img/hangar.png';
import ansoumania from '../assets/img/ansoumania.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Realisations() {
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
    <section className="hero-section text-center d-flex align-items-center section-alt-white" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Nos Réalisations</h1>
        <p className="lead text-dark mb-4">Plus de 25 projets livrés en 18 ans, dans toutes les régions guinéennes et la sous-région. Notre expertise s'exprime à travers des ouvrages publics, résidentiels, industriels et des rénovations majeures.</p>
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div className="key-figure-box p-3 rounded shadow-sm bg-white text-center">
              <div className="key-figure-icon mb-2">
                <i className="bi bi-building text-warning"></i>
              </div>
              <div className="display-5 fw-bold text-orange">
                <span className="stat-value" data-target="25">0</span>+
              </div>
              <div className="fw-semibold">Projets réalisés</div>
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
              <div className="fw-semibold">Années d’expertise</div>
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
              <h3 className="fw-bold mb-3 text-primary">Notre Valeur Ajoutée</h3>
              <ul className="list-unstyled mb-0 value-list">
                <li><i className="bi bi-award-fill icon-yellow me-2"></i> Qualité et respect des normes</li>
                <li><i className="bi bi-clock-history icon-red me-2"></i> Respect des délais et engagements</li>
                <li><i className="bi bi-people-fill icon-green me-2"></i> Équipe multidisciplinaire expérimentée</li>
                <li><i className="bi bi-globe2 icon-yellow me-2"></i> Projets sur tout le territoire guinéen</li>
                <li><i className="bi bi-hand-thumbs-up-fill icon-red me-2"></i> Satisfaction client prioritaire</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-box testimonial-box-premium p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold mb-3 text-secondary">Témoignage</h4>
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '52px', height: '52px'}}>
                  <i className="bi bi-building"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Client institutionnel</h6>
                  <small className="text-muted">Projet public</small>
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
                <p className="mb-2">“ECG PLUS a su livrer notre projet dans les délais, avec une qualité irréprochable et un accompagnement professionnel à chaque étape.”</p>
                <footer className="blockquote-footer">Client institutionnel, 2023</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Projets réalisés */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 section-title">Quelques projets réalisés</h2>
        <div className="row g-4">
          {/* Projet 1 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={kankan} className="realisation-image" alt="Bibliothèque Municipale de Kankan" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Ouvrage Public</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Bibliothèque Municipale de Kankan</h5>
                  <p className="mb-2 text-white-50 small">Kankan • 2023</p>
                  <Link to="/realisations#kankan" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 2 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={dubreka} className="realisation-image" alt="Résidence Privée Dubréka Fihaima" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Résidentiel</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Résidence Privée Dubréka Fihaima</h5>
                  <p className="mb-2 text-white-50 small">Dubréka • 2020 - 2021</p>
                  <Link to="/realisations#dubreka" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 3 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={kagbelen} className="realisation-image" alt="Projet Kagbelen Dondolikhouré" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Génie Civil</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Projet Kagbelen Dondolikhouré</h5>
                  <p className="mb-2 text-white-50 small">Kagbelen • Construction durable</p>
                  <Link to="/realisations#kagbelen" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 4 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={r4} className="realisation-image" alt="Conceptions & Modélisations R+4" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Bureau d'Études</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Conceptions & Modélisations R+4</h5>
                  <p className="mb-2 text-white-50 small">Optimisation structurelle</p>
                  <Link to="/realisations#r4" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 5 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={hangar} className="realisation-image" alt="Hangars & Bâtiments Logistiques" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Industriel</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Hangars & Bâtiments Logistiques</h5>
                  <p className="mb-2 text-white-50 small">Zone industrielle • Construction métallique</p>
                  <Link to="/realisations#hangar" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Projet 6 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
              <div className="realisation-img-wrapper">
                <img src={ansoumania} className="realisation-image" alt="Immeuble R+2 Ansoumaniah" loading="lazy" decoding="async" />
                <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Bâtiment Mixte</span>
                <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold text-white mb-2">Immeuble R+2 Ansoumaniah</h5>
                  <p className="mb-2 text-white-50 small">Cimenterie • 2023 - 2024</p>
                  <Link to="/realisations#ansoumania" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="lead text-muted">D’autres références peuvent être communiquées sur demande.</p>
          <Link to="/contact" className="btn btn-custom btn-lg">Parlez-nous de votre projet</Link>
        </div>
      </div>
    </section>
    {/* Section Statistiques Détaillées */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">ECG PLUS en Chiffres</h2>
            <p className="lead">18 ans d'excellence et de réalisations concrètes</p>
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
              <div className="stats-label fw-semibold text-black">Projets Réalisés</div>
              <div className="stats-subtitle small text-muted mt-1">Dans tous les secteurs</div>
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
              <div className="stats-label fw-semibold text-black">Régions Couvertes</div>
              <div className="stats-subtitle small text-muted mt-1">Toute la Guinée</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-people-fill icon-yellow stats-icon-lg"></i>
              </div>
              <div className="stats-number display-4 fw-bold text-warning mb-2">
                <span className="stat-value" data-target="25">0</span>
              </div>
              <div className="stats-label fw-semibold text-black">Professionnels</div>
              <div className="stats-subtitle small text-muted mt-1">Équipe qualifiée</div>
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
              <div className="stats-label fw-semibold text-black">Satisfaction Client</div>
              <div className="stats-subtitle small text-muted mt-1">Taux de réussite</div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="achievement-highlight p-4 bg-white text-dark rounded shadow-lg border-start border-5 border-orange">
              <h4 className="fw-bold mb-3 text-primary">Notre Plus Grande Réussite</h4>
              <p className="lead mb-3">
                <strong>0 réclamation majeure</strong> sur nos projets livrés ces 5 dernières années,
                attestant de notre engagement qualité et de la satisfaction de nos clients.
              </p>
              <div className="row text-center g-3">
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-success mb-1">
                      <span className="stat-value" data-target="98">0</span>%
                    </div>
                    <small className="text-muted">Projets dans les délais</small>
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
                    <small className="text-muted">Dans le budget prévu</small>
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
                    <small className="text-muted">Conformité normes</small>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Nos Domaines d'Intervention</h2>
            <p className="lead">Une expertise transversale au service de tous les secteurs</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6" data-aos="fade-up">
            <div className="domain-card domain-card-premium domain-card-blue bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-building icon-red domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">Bâtiment & Construction</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Résidentiel (R+1 à R+4)</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Commercial & Bureaux</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Rénovation & Extension</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Ouvrages publics</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="domain-card domain-card-premium domain-card-yellow bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-lightning-fill icon-yellow domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">Énergie & Électricité</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Groupes électrogènes</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Panneaux solaires</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Réseaux électriques</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Systèmes autonomes</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="domain-card domain-card-premium domain-card-red bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-gear-fill icon-red domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">Génie Civil & Industrie</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Travaux publics</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Construction métallique</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Infrastructures industrielles</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Zones logistiques</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="domain-card domain-card-premium domain-card-green bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-clipboard-data icon-green domain-icon-pulse"></i>
              </div>
              <h5 className="fw-bold mb-3">Études & Expertise</h5>
              <ul className="list-unstyled small text-start domain-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Bureau d'études</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Plans & Devis</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Expertise bâtiment</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i>Conseil technique</li>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Notre Présence en Guinée</h2>
            <p className="lead">
              ECG PLUS intervient sur l'ensemble du territoire guinéen, de Conakry aux régions les plus reculées,
              garantissant proximité et réactivité pour tous vos projets.
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
              <h6 className="fw-bold mb-2 text-black">Conakry & Région</h6>
              <p className="small mb-2">Zone principale d'intervention</p>
              <div className="region-stats">
                <span className="badge bg-primary region-badge">35+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-tree-fill icon-green"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Régions Intérieures</h6>
              <p className="small mb-2">Kankan, Nzérékoré, etc.</p>
              <div className="region-stats">
                <span className="badge bg-success region-badge">12+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-water icon-yellow"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Zones Côtières</h6>
              <p className="small mb-2">Boffa, Boké, Dubréka</p>
              <div className="region-stats">
                <span className="badge bg-info region-badge">4+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="region-card region-card-premium p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-hammer icon-red"></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Zones Minières</h6>
              <p className="small mb-2">Projets industriels</p>
              <div className="region-stats">
                <span className="badge bg-warning region-badge">5+ projets</span>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Ils Nous Font Confiance</h2>
            <p className="lead">Découvrez les témoignages de nos clients satisfaits</p>
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
                  <h6 className="fw-bold mb-0">Direction des Infrastructures</h6>
                  <small className="text-muted">Client Institutionnel</small>
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
                <p className="mb-3 fst-italic">"ECG PLUS a démontré une expertise remarquable dans la construction de nos infrastructures publiques. Leur respect des délais et leur qualité de travail sont exemplaires."</p>
                <footer className="blockquote-footer text-end testimonial-signature">Direction des Infrastructures, 2024</footer>
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
                  <h6 className="fw-bold mb-0">Client Particulier</h6>
                  <small className="text-muted">Villa R+1 Dubréka</small>
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
                <p className="mb-3 fst-italic">"De la conception à la livraison, ECG PLUS nous a accompagnés avec professionnalisme. Notre villa répond exactement à nos attentes et le chantier s'est déroulé sans accroc."</p>
                <footer className="blockquote-footer text-end testimonial-signature">Famille Diallo, 2023</footer>
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
                  <h6 className="fw-bold mb-0">Entreprise Industrielle</h6>
                  <small className="text-muted">Hangar Logistique</small>
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
                <p className="mb-3 fst-italic">"Pour notre extension industrielle, ECG PLUS a livré un hangar métallique de qualité supérieure. Leur expertise en construction industrielle est indéniable."</p>
                <footer className="blockquote-footer text-end testimonial-signature">Société ABC Industries, 2024</footer>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Notre Méthode de Travail</h2>
            <p className="lead">Un processus rigoureux pour garantir l'excellence de chaque projet</p>
          </div>
        </div>

        <div className="row g-4 process-timeline">
          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up">
              <div className="process-number-circle">1</div>
              <h5 className="fw-bold mb-2">Étude & Devis</h5>
              <p className="small">Analyse détaillée de vos besoins, visite du site, établissement d'un devis précis et planning prévisionnel.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="process-number-circle">2</div>
              <h5 className="fw-bold mb-2">Conception</h5>
              <p className="small">Réalisation des plans techniques, obtention des autorisations administratives et préparation du chantier.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="process-number-circle">3</div>
              <h5 className="fw-bold mb-2">Exécution</h5>
              <p className="small">Mobilisation des équipes et du matériel, suivi quotidien du chantier, contrôles qualité réguliers.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="process-number-circle">4</div>
              <h5 className="fw-bold mb-2">Livraison</h5>
              <p className="small">Réception définitive, remise des garanties, formation à l'utilisation et service après-vente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section CTA Finale Étendue */}
    <section className="py-5 section-alt-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4 text-primary">Votre Projet, Notre Expertise</h2>
        <p className="lead mb-5 text-dark">
          Avec plus de 50 réalisations réussies et une présence dans toute la Guinée,
          ECG PLUS est le partenaire idéal pour concrétiser vos ambitions.
        </p>

        <div className="row justify-content-center g-4 mb-5">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-lightbulb-fill icon-yellow cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">Conseil Gratuit</h5>
              <p className="small mb-0">Étude préliminaire et conseils techniques sans engagement</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-calculator-fill icon-red cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">Devis Détaillé</h5>
              <p className="small mb-0">Estimation précise et transparente de votre projet</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="cta-feature cta-feature-premium p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-clock-fill icon-green cta-feature-icon mb-3"></i>
              <h5 className="fw-bold mb-2">Accompagnement Complet</h5>
              <p className="small mb-0">Du concept à la livraison, nous vous accompagnons</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-3">
          <div className="col-auto">
            <Link to="/contact" className="btn btn-custom btn-lg px-5 py-3">
              <i className="bi bi-envelope-fill me-2"></i>Démarrer Mon Projet
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/expertise-services" className="btn btn-outline-primary btn-lg px-5 py-3">
              <i className="bi bi-tools me-2"></i>Découvrir Nos Services
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <small className="text-muted">
            Réponse sous 24h • Devis gratuit • Accompagnement personnalisé
          </small>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Realisations;
