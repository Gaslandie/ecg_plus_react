
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import kagbelen from '../assets/img/kagbelen.png';
import r4 from '../assets/img/r+4.png';
import hangar from '../assets/img/hangar.png';
import ansoumania from '../assets/img/ansoumania.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Realisations = () => (
  <main>

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Nos Réalisations</h1>
        <p className="lead text-white mb-4">Plus de 50 projets livrés en 18 ans, dans toutes les régions guinéennes et la sous-région. Notre expertise s’exprime à travers des ouvrages publics, résidentiels, industriels et des rénovations majeures.</p>
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
    <section className="py-5 bg-light">
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
    <section className="py-5 bg-light">
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
  </main>
);

export default Realisations;
