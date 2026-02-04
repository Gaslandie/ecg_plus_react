
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import kagbelen from '../assets/img/kagbelen.png';
import r4 from '../assets/img/r+4.png';
import hangar from '../assets/img/hangar.png';
import ansoumania from '../assets/img/ansoumania.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Realisations = () => (
  <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center section-alt-white" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Nos Réalisations</h1>
        <p className="lead text-dark mb-4">Plus de 50 projets livrés en 18 ans, dans toutes les régions guinéennes et la sous-région. Notre expertise s'exprime à travers des ouvrages publics, résidentiels, industriels et des rénovations majeures.</p>
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-md-3">
            <div className="key-figure-box p-3 rounded shadow-sm bg-white">
              <div className="display-5 fw-bold text-orange">50+</div>
              <div className="fw-semibold">Projets réalisés</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="key-figure-box p-3 rounded shadow-sm bg-white">
              <div className="display-5 fw-bold text-orange">18</div>
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
          <div className="col-md-6">
            <div className="value-box p-4 rounded shadow-sm bg-white h-100">
              <h3 className="fw-bold mb-3 text-primary">Notre Valeur Ajoutée</h3>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-award-fill text-orange me-2"></i> Qualité et respect des normes</li>
                <li><i className="bi bi-clock-history text-orange me-2"></i> Respect des délais et engagements</li>
                <li><i className="bi bi-people-fill text-orange me-2"></i> Équipe multidisciplinaire expérimentée</li>
                <li><i className="bi bi-globe2 text-orange me-2"></i> Projets sur tout le territoire guinéen</li>
                <li><i className="bi bi-hand-thumbs-up-fill text-orange me-2"></i> Satisfaction client prioritaire</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold mb-3 text-secondary">Témoignage</h4>
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
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={kankan} className="card-img-top project-img" alt="Bibliothèque Municipale de Kankan" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Ouvrage Public</span>
                <h4 className="card-title fw-bold text-primary">Bibliothèque Municipale de Kankan</h4>
                <p className="card-text text-muted">Construction complète d'un ouvrage public majeur.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-geo-alt-fill text-orange me-2"></i><strong>Lieu :</strong> Kankan, Guinée</li>
                  <li><i className="bi bi-calendar-fill text-orange me-2"></i><strong>Période :</strong> 2023</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projet 2 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={dubreka} className="card-img-top project-img" alt="Résidence Dubréka" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Résidentiel</span>
                <h4 className="card-title fw-bold text-primary">Résidence Privée Dubréka Fihaima</h4>
                <p className="card-text text-muted">Construction d’une villa moderne haut standing.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-geo-alt-fill text-orange me-2"></i><strong>Lieu :</strong> Dubréka, Guinée</li>
                  <li><i className="bi bi-calendar-fill text-orange me-2"></i><strong>Période :</strong> 2020 - 2021</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projet 3 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={kagbelen} className="card-img-top project-img" alt="Projet Kagbelen" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Génie Civil</span>
                <h4 className="card-title fw-bold text-primary">Projet Kagbelen Dondolikhouré</h4>
                <p className="card-text text-muted">Réalisation d'envergure en zone industrielle.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-geo-alt-fill text-orange me-2"></i><strong>Lieu :</strong> Kagbelen, Guinée</li>
                  <li><i className="bi bi-shield-check text-orange me-2"></i><strong>Type :</strong> Construction Durable</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projet 4 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={r4} className="card-img-top project-img" alt="Conception R+4" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Bureau d'Études</span>
                <h4 className="card-title fw-bold text-primary">Conceptions & Modélisations R+4</h4>
                <p className="card-text text-muted">Plans architecturaux et études techniques complexes.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-vector-pen text-orange me-2"></i><strong>Spécialité :</strong> Optimisation structurelle</li>
                  <li><i className="bi bi-building text-orange me-2"></i><strong>Usage :</strong> Mixte (Habitation/Commerce)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projet 5 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={hangar} className="card-img-top project-img" alt="Hangar Industriel" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Industriel</span>
                <h4 className="card-title fw-bold text-primary">Hangars & Bâtiments Logistiques</h4>
                <p className="card-text text-muted">Charpentes métalliques et solutions de stockage.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-geo-alt-fill text-orange me-2"></i><strong>Lieu :</strong> Zone Industrielle</li>
                  <li><i className="bi bi-hammer text-orange me-2"></i><strong>Nature :</strong> Construction Métallique</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projet 6 */}
          <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 portfolio-card border-0 shadow-lg">
              <div className="project-img-container">
                <img src={ansoumania} className="card-img-top project-img" alt="Immeuble R+2" loading="lazy" />
              </div>
              <div className="card-body p-4 border-start border-orange border-5">
                <span className="badge bg-secondary mb-2">Bâtiment Mixte</span>
                <h4 className="card-title fw-bold text-primary">Immeuble R+2 Ansoumaniah</h4>
                <p className="card-text text-muted">Réalisation d'un immeuble à usage d'habitation.</p>
                <ul className="list-unstyled small mt-3">
                  <li><i className="bi bi-geo-alt-fill text-orange me-2"></i><strong>Lieu :</strong> Cimenterie, Guinée</li>
                  <li><i className="bi bi-calendar-fill text-orange me-2"></i><strong>Période :</strong> 2023 - 2024</li>
                </ul>
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
                <i className="bi bi-building-fill text-primary" style={{fontSize: '3rem'}}></i>
              </div>
              <div className="stats-number display-4 fw-bold text-primary mb-2">50+</div>
              <div className="stats-label fw-semibold text-black">Projets Réalisés</div>
              <div className="stats-subtitle small text-muted mt-1">Dans tous les secteurs</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-geo-alt-fill text-success" style={{fontSize: '3rem'}}></i>
              </div>
              <div className="stats-number display-4 fw-bold text-success mb-2">8</div>
              <div className="stats-label fw-semibold text-black">Régions Couvertes</div>
              <div className="stats-subtitle small text-muted mt-1">Toute la Guinée</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-people-fill text-warning" style={{fontSize: '3rem'}}></i>
              </div>
              <div className="stats-number display-4 fw-bold text-warning mb-2">25</div>
              <div className="stats-label fw-semibold text-black">Professionnels</div>
              <div className="stats-subtitle small text-muted mt-1">Équipe qualifiée</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div className="stats-card text-center p-4 bg-white text-dark rounded shadow-lg">
              <div className="stats-icon mb-3">
                <i className="bi bi-trophy-fill text-danger" style={{fontSize: '3rem'}}></i>
              </div>
              <div className="stats-number display-4 fw-bold text-danger mb-2">100%</div>
              <div className="stats-label fw-semibold text-black">Satisfaction Client</div>
              <div className="stats-subtitle small text-muted mt-1">Taux de réussite</div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="achievement-highlight p-4 bg-white text-dark rounded shadow-lg">
              <h4 className="fw-bold mb-3 text-primary">Notre Plus Grande Réussite</h4>
              <p className="lead mb-3">
                <strong>0 réclamation majeure</strong> sur nos projets livrés ces 5 dernières années,
                attestant de notre engagement qualité et de la satisfaction de nos clients.
              </p>
              <div className="row text-center g-3">
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-success mb-1">98%</div>
                    <small className="text-muted">Projets dans les délais</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-primary mb-1">95%</div>
                    <small className="text-muted">Dans le budget prévu</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="metric">
                    <div className="h3 fw-bold text-warning mb-1">100%</div>
                    <small className="text-muted">Conformité normes</small>
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
            <div className="domain-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-building text-primary" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-3">Bâtiment & Construction</h5>
              <ul className="list-unstyled small text-start">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Résidentiel (R+1 à R+4)</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Commercial & Bureaux</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Rénovation & Extension</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Ouvrages publics</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="domain-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-lightning-fill text-warning" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-3">Énergie & Électricité</h5>
              <ul className="list-unstyled small text-start">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Groupes électrogènes</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Panneaux solaires</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Réseaux électriques</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Systèmes autonomes</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="domain-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-gear-fill text-danger" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-3">Génie Civil & Industrie</h5>
              <ul className="list-unstyled small text-start">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Travaux publics</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Construction métallique</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Infrastructures industrielles</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Zones logistiques</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="domain-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="domain-icon mb-3">
                <i className="bi bi-clipboard-data text-info" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-3">Études & Expertise</h5>
              <ul className="list-unstyled small text-start">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Bureau d'études</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Plans & Devis</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Expertise bâtiment</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Conseil technique</li>
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
            <i className="bi bi-geo-alt-fill text-primary" style={{fontSize: '5rem'}}></i>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="region-card p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-house-fill text-primary" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Conakry & Région</h6>
              <p className="small mb-2">Zone principale d'intervention</p>
              <div className="region-stats">
                <span className="badge bg-primary">35+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="region-card p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-tree-fill text-success" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Régions Intérieures</h6>
              <p className="small mb-2">Kankan, Nzérékoré, etc.</p>
              <div className="region-stats">
                <span className="badge bg-success">12+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="region-card p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-water text-info" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Zones Côtières</h6>
              <p className="small mb-2">Boffa, Boké, Dubréka</p>
              <div className="region-stats">
                <span className="badge bg-info">8+ projets</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="region-card p-4 rounded shadow-sm h-100 text-center bg-white">
              <div className="region-icon mb-3">
                <i className="bi bi-hammer text-warning" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h6 className="fw-bold mb-2 text-black">Zones Minières</h6>
              <p className="small mb-2">Projets industriels</p>
              <div className="region-stats">
                <span className="badge bg-warning">5+ projets</span>
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
            <div className="testimonial-card bg-white p-4 rounded shadow-lg h-100">
              <div className="testimonial-header d-flex align-items-center mb-3">
                <div className="testimonial-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                  <i className="bi bi-building"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Ministère des Travaux Publics</h6>
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
                <p className="mb-3">"ECG PLUS a démontré une expertise remarquable dans la construction de nos infrastructures publiques. Leur respect des délais et leur qualité de travail sont exemplaires."</p>
                <footer className="blockquote-footer">Direction des Infrastructures, 2024</footer>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-card bg-white p-4 rounded shadow-lg h-100">
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
                <p className="mb-3">"De la conception à la livraison, ECG PLUS nous a accompagnés avec professionnalisme. Notre villa répond exactement à nos attentes et le chantier s'est déroulé sans accroc."</p>
                <footer className="blockquote-footer">Famille Diallo, 2023</footer>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card bg-white p-4 rounded shadow-lg h-100">
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
                <p className="mb-3">"Pour notre extension industrielle, ECG PLUS a livré un hangar métallique de qualité supérieure. Leur expertise en construction industrielle est indéniable."</p>
                <footer className="blockquote-footer">Société ABC Industries, 2024</footer>
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

        <div className="process-timeline position-relative">
          <div className="timeline-line"></div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-right">
              <div className="process-timeline-item text-center">
                <div className="process-timeline-circle bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fw-bold">1</span>
                </div>
                <h5 className="fw-bold mb-2">Étude & Devis</h5>
                <p className="small">Analyse détaillée de vos besoins, visite du site, établissement d'un devis précis et planning prévisionnel.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-left">
              <div className="process-timeline-item text-center">
                <div className="process-timeline-circle bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fw-bold">2</span>
                </div>
                <h5 className="fw-bold mb-2">Conception</h5>
                <p className="small">Réalisation des plans techniques, obtention des autorisations administratives et préparation du chantier.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-right">
              <div className="process-timeline-item text-center">
                <div className="process-timeline-circle bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fw-bold">3</span>
                </div>
                <h5 className="fw-bold mb-2">Exécution</h5>
                <p className="small">Mobilisation des équipes et du matériel, suivi quotidien du chantier, contrôles qualité réguliers.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-left">
              <div className="process-timeline-item text-center">
                <div className="process-timeline-circle bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fw-bold">4</span>
                </div>
                <h5 className="fw-bold mb-2">Livraison</h5>
                <p className="small">Réception définitive, remise des garanties, formation à l'utilisation et service après-vente.</p>
              </div>
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
            <div className="cta-feature p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-lightbulb-fill text-warning mb-3" style={{fontSize: '2.5rem'}}></i>
              <h5 className="fw-bold mb-2">Conseil Gratuit</h5>
              <p className="small mb-0">Étude préliminaire et conseils techniques sans engagement</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="cta-feature p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-calculator-fill text-primary mb-3" style={{fontSize: '2.5rem'}}></i>
              <h5 className="fw-bold mb-2">Devis Détaillé</h5>
              <p className="small mb-0">Estimation précise et transparente de votre projet</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="cta-feature p-4 bg-white text-dark rounded shadow-lg">
              <i className="bi bi-clock-fill text-success mb-3" style={{fontSize: '2.5rem'}}></i>
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

export default Realisations;
