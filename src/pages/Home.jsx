import React from 'react';
import { Link } from 'react-router-dom';
import bgAccueil from '../assets/img/bgAccueil.jpg';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import nongo from '../assets/img/nongo.jpeg';

function Home() {
  React.useEffect(() => {
    const img = new Image();
    img.src = bgAccueil;
  }, []);

  return (
    <main className="page-with-hero">
      {/* Section Hero Améliorée */}
      <header className="hero" style={{ backgroundImage: `url(${bgAccueil})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-container" data-aos="fade-up" data-aos-delay="200">
            <h1 className="display-4 hero-title">
              <span className="hero-line-1">Entreprise de Construction</span><br />
              <span className="hero-line-2">Générale et Travaux Publics</span>
            </h1>
            <h3 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              Bâtir l'Avenir, Construire l'Excellence Durable.
            </h3>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="600">
              <div className="stat-item">
                <span className="stat-number">18+</span>
                <span className="stat-label">Années d'Expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projets Réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction Client</span>
              </div>
            </div>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
              <Link to="/contact" className="btn btn-contact-primary">Contactez-Nous</Link>
              <Link to="/realisations" className="btn btn-contact-secondary">Voir Nos Réalisations</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div
            className="scroll-down"
            onClick={() => document.getElementById('apropos').scrollIntoView({ behavior: 'smooth' })}
            aria-label="Faire défiler vers la section À propos"
          >
            <span className="scroll-text">Découvrir</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </header>

      {/* Section about enrichie */}
      <section id="apropos" className="section-spacing section-alt-white" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">À propos d'ECG PLUS</h2>

          {/* Historique */}
          <div className="row apropos-block">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-4">
                    <i className="bi bi-clock-history me-2"></i>Notre Histoire - 18 Ans d'Excellence
                  </h3>
                  <p className="lead">
                    Depuis sa fondation il y a 18 ans, ECG PLUS s'est imposé comme un acteur majeur
                    dans le domaine de la construction et de l'expertise des bâtiments en Guinée et
                    aujourd'hui dans la sous-région.
                  </p>
                  <p>
                    Notre engagement envers l'excellence et notre expertise technique nous permettent
                    de répondre aux défis les plus complexes de nos clients avec efficacité et innovation,
                    ce qui nous a d'ailleurs permis la réalisation de plusieurs ouvrages un peu partout
                    dans les régions guinéennes.
                  </p>
                  <div className="row text-center mt-4">
                    <div className="col-md-4">
                      <div className="stat-box p-3 text-white rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                        <h4 className="mb-1">18+</h4>
                        <small>Années d'Expérience</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-box p-3 text-white rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                        <h4 className="mb-1">25+</h4>
                        <small>Projets Réalisés</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-box p-3 text-white rounded" style={{backgroundColor: 'var(--gas-primary)'}}>
                        <h4 className="mb-1">100%</h4>
                        <small>Satisfaction Client</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notre Expertise */}
          <div className="apropos-expertise section-alt-blue apropos-block">
            <div className="row g-4">
              <div className="col-lg-10 mx-auto">
                <h3 className="text-primary text-center mb-4">
                  <i className="bi bi-tools me-2"></i>Notre Expertise
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="expertise-card h-100 p-4 border rounded shadow-sm">
                      <h5 className="text-primary mb-3">
                        <i className="bi bi-house-door me-2"></i>Construction & Bâtiment
                      </h5>
                      <p>
                        Nous réalisons des projets de construction variés, allant des complexes résidentiels
                        aux structures commerciales et industrielles. Nous déployons des systèmes autonomes
                        hydriques pour une indépendance totale des bâtiments en électricité.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="expertise-card h-100 p-4 border rounded shadow-sm">
                      <h5 className="text-primary mb-3">
                        <i className="bi bi-search me-2"></i>Étude & Expertise
                      </h5>
                      <p>
                        Notre équipe d'experts réalise des études approfondies et des analyses précises
                        pour évaluer l'état des bâtiments et recommander les meilleures pratiques de
                        rénovation et de maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nos Valeurs */}
          <div className="row apropos-block">
            <div className="col-lg-10 mx-auto">
              <h3 className="text-primary text-center mb-4">
                <i className="bi bi-heart me-2"></i>Nos Valeurs & Engagements
              </h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="value-card text-center p-4 h-100 border rounded shadow-sm">
                    <div className="value-icon mb-3">
                      <i className="bi bi-people-fill" style={{fontSize: '2rem', color: '#dc3545'}}></i>
                    </div>
                    <h6 className="text-primary mb-2">Équipe Multidisciplinaire</h6>
                    <p className="small">
                      Mise en commun de nos compétences individuelles et collectives au service de l'entreprise.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="value-card text-center p-4 h-100 border rounded shadow-sm">
                    <div className="value-icon mb-3">
                      <i className="bi bi-shield-check" style={{fontSize: '2rem', color: '#ffc107'}}></i>
                    </div>
                    <h6 className="mb-2" style={{color: 'var(--gas-primary)'}}>Qualité & Sécurité</h6>
                    <p className="small">
                      L'habilité dans le travail avec zéro accident et respect des normes internationales.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="value-card text-center p-4 h-100 border rounded shadow-sm">
                    <div className="value-icon mb-3">
                      <i className="bi bi-tree" style={{fontSize: '2rem', color: '#28a745'}}></i>
                    </div>
                    <h6 className="mb-2" style={{color: 'var(--gas-primary)'}}>Environnement</h6>
                    <p className="small">
                      Protection de l'environnement et contribution à la préservation de l'écosystème.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Présentation stylée */}
      <section className="presentation-section py-5 section-alt-blue">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-7">
              <h1 className="display-3 fw-bold mb-3 text-white">ECG PLUS SARL</h1>
              <h2 className="mb-2 text-white">Entreprise de Construction Générale et Travaux Publics</h2>
              <ul className="list-unstyled fs-5 mb-3 text-white">
                <li><strong>Adresse :</strong> Maneah / Coyah</li>
                <li><strong>Téléphone :</strong> 623 96 62 78 / 628 33 86 41</li>
                  <li><strong>E-mail :</strong> <a href="mailto:contact@ecgplusgn.com" className="text-white">contact@ecgplusgn.com</a></li>
                <li><strong>Capital social :</strong> 10.000.000 GNF</li>
                <li><strong>RCCM :</strong> GN.TCC.2021.00364</li>
                <li><strong>Site web :</strong> <a href="https://ecgplusgn.com" target="_blank" rel="noopener noreferrer" className="text-white">ecgplusgn.com</a></li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Construction</span>
                <span className="badge fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Expertise</span>
                <span className="badge fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Génie Civil</span>
                <span className="badge fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Commerce Général</span>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="presentation-card shadow-lg rounded-4 p-4 bg-white">
                <h4 className="mb-3 text-primary">Plaque Signalétique</h4>
                <ul className="list-unstyled text-start fs-6">
                  <li><strong>Raison sociale :</strong> ECG PLUS</li>
                  <li><strong>Sigle :</strong> ECG PLUS</li>
                  <li><strong>Statut légal :</strong> SARL</li>
                  <li><strong>Capital social :</strong> 10.000.000 GNF</li>
                  <li><strong>Siège social :</strong> Maneah / Pref. Coyah / Guinée</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services & Expertises - Modern Design */}
      <section id="services" className="services-modern-section my-3 py-5" style={{backgroundColor: 'white'}} data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5 display-4 fw-bold text-center" style={{color: 'var(--gas-primary)'}}>Services & Expertises</h2>
          <div className="services-cards-wrapper d-flex flex-nowrap overflow-auto pb-3">
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-lightning-charge" style={{color: '#dc3545'}}></i></div>
              <h5>Ingénierie Électrique & Systèmes Autonomes</h5>
              <p>
                Instrumentation, automatisme, installation de groupes électrogènes, de panneaux solaires et de systèmes hydriques pour l'autonomie énergétique.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-building" style={{color: '#ffc107'}}></i></div>
              <h5>Construction Résidentielle, Commerciale & Industrielle</h5>
              <p>
                Complexes résidentiels, infrastructures commerciales et industrielles, projets robustes et durables en Guinée et sous-région.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-diagram-3" style={{color: '#28a745'}}></i></div>
              <h5>Génie Civil, Métallique & Projets Miniers</h5>
              <p>
                Génie civil, construction métallique, chaudronnerie, isolation, tuyauterie industrielle et solutions pour l'industrie minière.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-clipboard-data" style={{color: '#dc3545'}}></i></div>
              <h5>Étude, Expertise Bâtiment & Commerce</h5>
              <p>
                Études techniques, expertises, rénovation, maintenance, fourniture de matériaux et équipements de construction.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe & Moyens Humains */}
      <section className="team-section py-5 section-alt-blue" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold text-white">Notre Équipe</h2>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="team-content">
                <h3 className="text-white mb-4">Une Équipe Multidisciplinaire d'Experts</h3>
                <p className="lead mb-4 text-white">
                  ECG PLUS travaille de commun accord avec une équipe multidisciplinaire composée
                  d'ingénieurs, d'administrateurs, de gestionnaires, de techniciens, pétrie d'expériences
                  dans plusieurs domaines.
                </p>

                <div className="team-categories mb-4">
                  <div className="team-category d-flex align-items-center mb-3">
                    <div className="category-icon me-3">
                      <i className="bi bi-tools" style={{fontSize: '1.5rem', color: '#dc3545'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Personnel Technique de Chantier</h6>
                      <p className="small mb-0 text-dark">Ingénieurs, techniciens superviseurs, ouvriers qualifiés, équipe de dépannage</p>
                    </div>
                  </div>

                  <div className="team-category d-flex align-items-center mb-3">
                    <div className="category-icon me-3">
                      <i className="bi bi-people-fill" style={{fontSize: '1.5rem', color: '#ffc107'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Personnel d'Appui</h6>
                      <p className="small mb-0 text-dark">Conseillers, ingénieurs en génie civil, gestionnaires de projet</p>
                    </div>
                  </div>

                  <div className="team-category d-flex align-items-center">
                    <div className="category-icon me-3">
                      <i className="bi bi-tools" style={{fontSize: '1.5rem', color: '#28a745'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Équipe de Maintenance</h6>
                      <p className="small mb-0 text-dark">Mécaniciens, soudeurs, électriciens spécialisés</p>
                    </div>
                  </div>
                </div>

                <div className="team-stats d-flex justify-content-around">
                  <div className="stat text-center">
                    <h4 className="mb-1 text-white">50+</h4>
                    <small className="text-white">Collaborateurs</small>
                  </div>
                  <div className="stat text-center">
                    <h4 className="mb-1 text-white">18</h4>
                    <small className="text-white">Années d'Expérience</small>
                  </div>
                  <div className="stat text-center">
                    <h4 className="mb-1 text-white">100%</h4>
                    <small className="text-white">Engagement</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-image-container text-center">
                <div className="team-placeholder text-white d-flex align-items-center justify-content-center rounded-4 shadow-lg" style={{height: '400px', backgroundColor: 'var(--gas-primary)'}}>
                  <div className="text-center">
                    <i className="bi bi-people-fill" style={{fontSize: '4rem', opacity: '0.3'}}></i>
                    <h5 className="mt-3">Notre Équipe d'Experts</h5>
                    <p className="mb-0">Professionnels qualifiés et expérimentés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section réalisations modernisée */}
      <section className="realisations-section py-5 my-md-5 section-alt-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Réalisations</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
                <div className="realisation-img-wrapper">
                  <img src={kankan} className="realisation-image" alt="Réalisation 1" />
                  <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Public</span>
                  <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                    <h5 className="fw-bold text-white mb-2">Bibliothèque Municipale de Kankan</h5>
                    <p className="mb-2 text-white-50 small">Kankan • 05.2023 – 11.2023</p>
                    <Link to="/realisations#kankan" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
                <div className="realisation-img-wrapper">
                  <img src={dubreka} className="realisation-image" alt="Réalisation 2" />
                  <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Résidentiel</span>
                  <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                    <h5 className="fw-bold text-white mb-2">Projet Résidentiel à Dubréka Fihaima</h5>
                    <p className="mb-2 text-white-50 small">Dubréka • 2020 – 2021</p>
                    <Link to="/realisations#dubreka" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="realisation-modern-card position-relative overflow-hidden shadow-lg rounded-4 h-100">
                <div className="realisation-img-wrapper">
                  <img src={nongo} className="realisation-image" alt="Réalisation 3" />
                  <span className="badge position-absolute top-0 start-0 m-3 fs-6" style={{backgroundColor: 'var(--gas-primary)', color: 'white'}}>Mixte</span>
                  <div className="realisation-overlay d-flex flex-column justify-content-end p-3">
                    <h5 className="fw-bold text-white mb-2">Immeuble R+2 & Rénovation Privée</h5>
                    <p className="mb-2 text-white-50 small">Ansoumaniah & Nongo • 2018 – 2024</p>
                    <Link to="/realisations#renovation" className="btn btn-sm btn-light fw-bold">Voir les Projets</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section contact avec fond uni */}
      <section className="contact-section text-center py-5 my-md-5 section-alt-blue" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto py-3">
              <h2 className="mb-4 display-5 fw-bold" style={{color: 'var(--gas-light)'}}>Prêt à Construire Votre Prochain Projet ?</h2>
              <p className="mb-4 lead" style={{color: 'var(--gas-light)'}}>
                Contactez ECG PLUS dès aujourd'hui pour discuter de vos besoins en
                construction et découvrir comment nous pouvons transformer vos idées
                en réalisations durables et concrètes.
              </p>
              <Link to="/contact" className="btn btn-custom btn-lg mt-3">Contactez-Nous</Link>
            </div>
            <div className="col-md-6 mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded shadow"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages & Confiance */}
      <section className="testimonials-section py-5 section-alt-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Ils nous font confiance</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card h-100 p-4 bg-white rounded-4 shadow-lg border-0">
                <div className="testimonial-content mb-3">
                  <p className="mb-3 fst-italic">
                    "ECG PLUS a réalisé notre complexe résidentiel avec une qualité exceptionnelle.
                    Leur équipe professionnelle et leur respect des délais nous ont pleinement satisfaits."
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-avatar me-3">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', backgroundColor: '#dc3545'}}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Client Résidentiel</h6>
                    <small className="text-muted">Conakry, Guinée</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card h-100 p-4 bg-white rounded-4 shadow-lg border-0">
                <div className="testimonial-content mb-3">
                  <p className="mb-3 fst-italic">
                    "Pour nos installations minières, ECG PLUS a fait preuve d'une expertise remarquable
                    dans la construction métallique et les systèmes électriques. Travail de qualité supérieure."
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-avatar me-3">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', backgroundColor: 'var(--gas-primary)'}}>
                      <i className="bi bi-building"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Client Industriel</h6>
                    <small className="text-muted">Kankan, Guinée</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card h-100 p-4 bg-white rounded-4 shadow-lg border-0">
                <div className="testimonial-content mb-3">
                  <p className="mb-3 fst-italic">
                    "L'expertise technique d'ECG PLUS dans le génie civil et les travaux publics
                    nous a permis de réaliser notre projet d'infrastructure dans les délais impartis."
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-avatar me-3">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', backgroundColor: '#28a745'}}>
                      <i className="bi bi-gear"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-1 text-warning">Client Public</h6>
                    <small className="text-muted">Dubréka, Guinée</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section CTA Finale */}
          <div className="text-center mt-5">
            <div className="cta-final p-5 bg-primary text-white rounded-4 shadow-lg">
              <h3 className="mb-3">Prêt à réaliser votre projet ?</h3>
              <p className="lead mb- text-white">
                Contactez notre équipe d'experts pour une consultation gratuite et un devis personnalisé.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-light btn-lg">
                  <i className="bi bi-envelope me-2"></i>Nous contacter
                </Link>
                <Link to="/expertiseservices" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-tools me-2"></i>Nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
