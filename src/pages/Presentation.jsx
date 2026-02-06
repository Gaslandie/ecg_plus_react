import React, { useEffect } from 'react';
import ecgbg from '../assets/img/ecgbg.jpeg';


const Presentation = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.querySelector('.experience-number[data-target]');
    if (!el) return;
    const target = Number(el.getAttribute('data-target')) || 0;
    if (prefersReduced) {
      el.textContent = String(target);
      return;
    }
    const duration = 1400;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = String(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, []);

  return (
  <main className="page-without-hero presentation-page">

    {/* Hero Section Présentation */}
    <section className="hero-section presentation-hero text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold mb-3 presentation-hero-title">
          <span className="hero-line-1">Présentation d'</span>
          <span className="hero-line-2">ECG PLUS</span>
        </h1>
        <p className="lead text-dark mb-4 presentation-hero-subtitle">18 ans d'excellence dans la construction et les travaux publics en Guinée</p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded-4 shadow-lg bg-white">
              <h4 className="fw-bold text-primary mb-2">
                <i className="bi bi-building me-2 icon-red"></i>Construction
              </h4>
              <p className="small mb-0">Bâtiments résidentiels, commerciaux et industriels</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded-4 shadow-lg bg-white">
              <h4 className="fw-bold text-primary mb-2">
                <i className="bi bi-lightning-charge me-2 icon-yellow"></i>Énergie
              </h4>
              <p className="small mb-0">Solutions électriques et systèmes autonomes</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="presentation-highlight p-4 rounded-4 shadow-lg bg-white">
              <h4 className="fw-bold text-primary mb-2">
                <i className="bi bi-tools me-2 icon-green"></i>Génie Civil
              </h4>
              <p className="small mb-0">Travaux publics et infrastructures</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Identité Complète */}
    <section id="identite" className="identity-section py-5" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="plaque-info shadow-lg p-4 rounded border-start border-primary border-5 bg-white identity-card">
              <h2 className="text-primary fw-bold mb-4">
                <i className="bi bi-building me-2"></i>Identité de l'Entreprise
              </h2>
              <div className="table-responsive">
                <table className="table table-sm table-borderless mb-0 identity-table">
                  <tbody>
                    <tr>
                      <td><i className="bi bi-building me-2 text-primary"></i><strong>Raison Sociale :</strong></td>
                      <td>ECG PLUS SARL</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-shield-check me-2 text-primary"></i><strong>Statut Légal :</strong></td>
                      <td>SARL</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-cash-stack me-2 text-primary"></i><strong>Capital Social :</strong></td>
                      <td>10.000.000 GNF</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-file-earmark-text me-2 text-primary"></i><strong>RCCM :</strong></td>
                      <td>GN.TCC.2021.B.00331</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-geo-alt me-2 text-primary"></i><strong>Siège Social :</strong></td>
                      <td>Manéah / Préfecture de Coyah / Guinée</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-telephone me-2 text-primary"></i><strong>Téléphone :</strong></td>
                      <td>(+224) 623 96 62 78 / 628 33 86 41</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-envelope me-2 text-primary"></i><strong>E-mail :</strong></td>
                      <td>contact@ecgplusgn.com</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-globe me-2 text-primary"></i><strong>Site web :</strong></td>
                      <td>www.ecgplusgn.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="experience-showcase">
              <div className="experience-badge d-flex align-items-center p-4 mb-4 text-white rounded-4 shadow-lg">
                <div className="number display-2 fw-bold me-4 experience-number" data-target="18">0</div>
                <div>
                  <h3 className="fw-bold mb-1">Ans d'Expertise</h3>
                  <p className="mb-0 opacity-75">
                    Un acteur majeur en Guinée et dans la sous-région
                  </p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-card text-center p-3 bg-success text-white rounded-3">
                      <h4 className="mb-1">25+</h4>
                      <small>Projets Réalisés</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card text-center p-3 bg-warning rounded-3">
                      <h4 className="mb-1">100%</h4>
                      <small>Satisfaction Client</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Présentation Détaillée */}
    <section className="presentation-detailed py-5" aria-label="Présentation détaillée">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Notre Présentation</h2>

        <div className="row g-5">
          <div className="col-lg-8 mx-auto">
            <div className="presentation-content">
              <div className="content-section mb-5 section-divider">
                <h3 className="text-primary mb-4 section-title">
                  <i className="bi bi-clock-history me-2 section-icon"></i>Historique
                </h3>
                <p className="lead lead-enhanced">
                  Depuis sa fondation il y a 18 ans, ECG PLUS s'est imposé comme un acteur majeur
                  dans le domaine de la construction et de l'expertise des bâtiments en Guinée et
                  aujourd'hui dans la sous-région.
                </p>
                <p className="paragraph-animate">
                  Notre engagement envers l'excellence et notre expertise technique nous permettent
                  de répondre aux défis les plus complexes de nos clients avec efficacité et innovation,
                  ce qui nous a d'ailleurs permis la réalisation de plusieurs ouvrages un peu partout
                  dans les régions guinéennes.
                </p>
              </div>

              <div className="content-section mb-5 section-divider">
                <h3 className="text-primary mb-4 section-title">
                  <i className="bi bi-tools me-2 section-icon"></i>Notre Expertise
                </h3>
                <p className="paragraph-animate">
                  À ECG PLUS, nous combinons une connaissance approfondie du secteur avec une
                  expérience pratique étendue pour offrir des solutions de construction robustes et durables.
                </p>
                <div className="expertise-list cards-alt">
                  <div className="expertise-item-card">
                    <div className="expertise-icon">
                      <i className="bi bi-check-circle-fill icon-green"></i>
                    </div>
                    <div>
                      <h6 className="expertise-title">Construction</h6>
                      <p className="expertise-text">
                        Projets résidentiels, commerciaux et industriels réalisés avec rigueur.
                      </p>
                    </div>
                  </div>
                  <div className="expertise-item-card alt">
                    <div className="expertise-icon">
                      <i className="bi bi-check-circle-fill icon-green"></i>
                    </div>
                    <div>
                      <h6 className="expertise-title">Énergie Autonome</h6>
                      <p className="expertise-text">
                        Systèmes autonomes hydriques pour une indépendance énergétique complète.
                      </p>
                    </div>
                  </div>
                  <div className="expertise-item-card">
                    <div className="expertise-icon">
                      <i className="bi bi-check-circle-fill icon-green"></i>
                    </div>
                    <div>
                      <h6 className="expertise-title">Études & Expertise</h6>
                      <p className="expertise-text">
                        Analyses techniques précises pour diagnostiquer et optimiser vos bâtiments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-section">
                <h3 className="text-primary mb-4 section-title">
                  <i className="bi bi-eye me-2 section-icon"></i>Notre Vision
                </h3>
                <p className="lead text-primary fw-bold lead-enhanced">
                  Construction durable selon les exigences du client en vue de sa satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Valeurs & Engagements */}
    <section className="values-section values-premium py-5" aria-label="Valeurs et engagements">
      <div className="values-shapes" aria-hidden="true">
        <span className="values-shape values-shape-1"></span>
        <span className="values-shape values-shape-2"></span>
        <span className="values-shape values-shape-3"></span>
      </div>
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Valeurs & Engagements</h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="value-card value-card-premium text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-people-fill icon-red value-icon-lg"></i>
              </div>
              <h5 className="text-primary mb-3">Équipe Multidisciplinaire</h5>
              <p className="small">
                Mise en commun de nos compétences individuelles et collectives au service de l'entreprise.
                Notre équipe forme une entité cohérente travaillant dans l'intérêt exclusif et l'honneur de l'entreprise.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card value-card-premium text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-shield-check icon-yellow value-icon-lg"></i>
              </div>
              <h5 className="text-primary mb-3">Qualité & Sécurité</h5>
              <p className="small">
                L'habilité dans le travail avec des ressources qualifiées. Zéro accident de travail.
                Respect des normes et standards nationaux et internationaux.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card value-card-premium text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-hand-thumbs-up-fill icon-yellow value-icon-lg"></i>
              </div>
              <h5 className="text-primary mb-3">Satisfaction Client</h5>
              <p className="small">
                Rendre crédible notre entreprise par la qualité de nos prestations.
                Respect de nos engagements et des délais auprès des fournisseurs et clients.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="value-card value-card-premium text-center p-4 h-100 bg-white rounded-4 shadow-lg">
              <div className="value-icon mb-3">
                <i className="bi bi-tree icon-green value-icon-lg"></i>
              </div>
              <h5 className="text-primary mb-3">Environnement</h5>
              <p className="small">
                Protection de l'environnement et contribution à la préservation de l'écosystème.
                Engagement citoyen manifeste pour la protection de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Moyens Humains */}
    <section className="team-section py-5" aria-label="Moyens humains">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Moyens Humains</h2>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="team-description">
              <p className="lead mb-4">
                ECG PLUS travaille de commun accord avec une équipe multidisciplinaire composée
                d'ingénieurs, d'administrateurs, de gestionnaires, de sociologue, de technicien,
                pétrie d'expériences dans plusieurs domaines.
              </p>

              <div className="team-categories mb-4">
                <div className="team-category d-flex align-items-center mb-3 team-category-card">
                  <div className="category-icon me-3">
                    <i className="bi bi-tools icon-red team-icon"></i>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Personnel Technique de Chantier</h6>
                    <p className="small mb-0 text-dark">Ingénieurs, techniciens superviseurs, ouvriers qualifiés, équipe de dépannage</p>
                  </div>
                </div>

                <div className="team-category d-flex align-items-center mb-3 team-category-card">
                  <div className="category-icon me-3">
                    <i className="bi bi-people-fill icon-yellow team-icon"></i>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Personnel d'Appui</h6>
                    <p className="small mb-0 text-dark">Conseillers techniques, ingénieur en Génie Civil, gestionnaires de projet</p>
                  </div>
                </div>

                <div className="team-category d-flex align-items-center team-category-card">
                  <div className="category-icon me-3">
                    <i className="bi bi-tools icon-green team-icon"></i>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{color: 'var(--gas-primary)'}}>Équipe de Maintenance</h6>
                    <p className="small mb-0 text-dark">Mécaniciens, soudeurs, électriciens spécialisés</p>
                  </div>
                </div>
              </div>

              <div className="team-stats d-flex justify-content-around">
                <div className="stat text-center">
                  <div className="team-stat-circle">
                    <span className="stat-number">50+</span>
                  </div>
                  <small className="text-dark">Collaborateurs</small>
                </div>
                <div className="stat text-center">
                  <div className="team-stat-circle">
                    <span className="stat-number">18</span>
                  </div>
                  <small className="text-dark">Années d'Expérience</small>
                </div>
                <div className="stat text-center">
                  <div className="team-stat-circle">
                    <span className="stat-number">100%</span>
                  </div>
                  <small className="text-dark">Engagement</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="team-image-container">
              <div className="team-placeholder team-placeholder-card text-white d-flex align-items-center justify-content-center rounded-4 shadow-lg" style={{height: '400px', backgroundColor: 'var(--gas-primary)'}}>
                <div className="text-center">
                  <i className="bi bi-people-fill team-placeholder-icon"></i>
                  <h4 className="mt-3">Notre Équipe d'Experts</h4>
                  <p className="mb-0 text-white">Professionnels qualifiés et expérimentés</p>
                  <div className="mt-3">
                    <span className="badge bg-white text-primary me-2 team-badge">50+ Collaborateurs</span>
                    <span className="badge bg-white text-primary team-badge">18 Ans d'Expérience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Documents Juridiques */}
    <section className="documents-section py-5" style={{backgroundColor: 'var(--gas-primary)'}} aria-label="Documents juridiques">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Documents Juridiques</h2>

        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-file-earmark-text text-primary document-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-primary mb-3">RCCM</h5>
              <p className="small text-muted mb-2">Registre du Commerce et du Crédit Mobilier</p>
              <div className="document-number p-2 rounded document-badge">
                <strong>GN.TCC.2021.B.00331</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-cash-coin text-success document-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-success mb-3">Capital Social</h5>
              <p className="small text-muted mb-2">Capital social de l'entreprise</p>
              <div className="document-number p-2 rounded document-badge">
                <strong>10.000.000 GNF</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="document-card text-center p-4 bg-white rounded-4 shadow-lg h-100">
              <div className="document-icon mb-3">
                <i className="bi bi-bank text-warning document-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="text-warning mb-3">Références Bancaires</h5>
              <p className="small text-muted mb-2">Banque partenaire</p>
              <div className="document-number p-2 rounded document-badge">
                <strong>FIRSTBANK</strong><br/>
                <small>302203000027011</small>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="legal-notice p-4 bg-white rounded-4 shadow-lg legal-card">
            <h5 className="text-primary mb-3">Mentions Légales</h5>
            <p className="small text-muted mb-0">
              ECG PLUS SARL est une société à responsabilité limitée immatriculée au Registre du Commerce
              et du Crédit Mobilier sous le numéro GN.TCC.2021.B.00331, avec un capital social de 10.000.000 GNF.
              Siège social : Manéah / Préfecture de Coyah / République de Guinée.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 section-alt-white" aria-label="Historique et image">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3 gradient-text">Notre Histoire</h2>
            <p className="lead">
              Depuis sa fondation il y a 18 ans, ECG PLUS s'est imposé comme un acteur majeur
              dans la construction et l’expertise bâtiment en Guinée et dans la sous-région.
            </p>
            <ul className="list-unstyled mt-4 history-points">
              <li className="history-point" data-aos="fade-up" data-aos-delay="0">
                <i className="bi bi-check-circle-fill text-success me-2 history-icon"></i>18 ans d’expérience
              </li>
              <li className="history-point" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-check-circle-fill text-success me-2 history-icon"></i>25+ projets réalisés
              </li>
              <li className="history-point" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-check-circle-fill text-success me-2 history-icon"></i>Équipe multidisciplinaire
              </li>
            </ul>
          </div>
          <div className="col-lg-5 text-center">
            <div className="history-image-frame">
              <img
                src={ecgbg}
                alt="Historique ECG PLUS"
                className="history-image"
                loading="lazy"
                decoding="async"
              />
              <div className="history-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
);

};

export default Presentation;
