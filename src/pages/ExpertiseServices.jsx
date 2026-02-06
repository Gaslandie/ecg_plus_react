import React from 'react';
import { Link } from 'react-router-dom';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import commerce from '../assets/img/commerce.jpeg';

const ExpertiseServices = () => (
  <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Nos Domaines d'Expertise</h1>
        <p className="lead text-dark mb-4">18 ans d'expérience, une équipe multidisciplinaire et des solutions innovantes pour tous vos projets de construction, d'énergie et d'industrie.</p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="expertise-highlight-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-lightbulb-fill me-2 text-accent"></i> Nos Forces</h4>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Expertise technique reconnue</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Solutions sur-mesure et innovantes</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Respect des normes et délais</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="expertise-highlight-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-shield-check me-2 text-accent"></i> Notre Engagement</h4>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-hand-thumbs-up-fill text-orange me-2"></i> Satisfaction client prioritaire</li>
                <li><i className="bi bi-globe2 text-orange me-2"></i> Respect de l’environnement</li>
                <li><i className="bi bi-people-fill text-orange me-2"></i> Sécurité & bien-être du personnel</li>
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
              <h3 className="fw-bold mb-3 text-primary">Nos Moyens Humains</h3>
              <p>Notre équipe est composée d’ingénieurs, techniciens, ouvriers qualifiés, conseillers et gestionnaires, tous animés par la passion de l’excellence et du service client.</p>
              <ul className="list-unstyled mb-0 team-list">
                <li><i className="bi bi-person-badge-fill icon-red me-2"></i> Ingénieurs & techniciens spécialisés</li>
                <li><i className="bi bi-tools icon-yellow me-2"></i> Ouvriers qualifiés & équipe de dépannage</li>
                <li><i className="bi bi-briefcase-fill icon-green me-2"></i> Gestionnaires & administrateurs</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="history-image-frame">
              <img src={batiment} alt="Notre équipe ECG PLUS" className="history-image" loading="lazy" decoding="async" />
              <div className="history-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">Nos 4 Piliers d'Action</h2>

        <div id="construction" className="expertise-block card shadow-lg mb-5 text-white action-card action-card-alt" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-bricks me-3 icon-red action-icon"></i> 1. Construction Générale & Travaux Publics
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead text-white">
                  Le cœur de notre métier : concevoir et réaliser des ouvrages civils durables,
                  conformes aux standards nationaux et internationaux, pour le secteur public comme privé.
                </p>
                <ul>
                  <li>Construction de bâtiments (R+n, résidentiel, commercial).</li>
                  <li>Ouvrages d'Art et Infrastructures (routes, ponts, assainissement).</li>
                  <li>Rénovation, Extension et Réhabilitation de structures existantes.</li>
                  <li>Terrassement, VRD (Voirie et Réseaux Divers) et gros œuvre.</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={batiment} alt="Construction BTP" className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="ingenierie" className="expertise-block card shadow-lg mb-5 action-card" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-lightbulb-fill me-3 icon-yellow action-icon"></i> 2. Ingénierie Électrique & Systèmes Autonomes
            </h3>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-7">
                <p className="lead">
                  Nous fournissons des solutions complètes pour l'autonomie et la gestion énergétique,
                  un enjeu stratégique majeur dans la sous-région.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Installation et maintenance de groupes électrogènes.</li>
                  <li className="list-group-item">Conception et mise en place de systèmes solaires photovoltaïques.</li>
                  <li className="list-group-item">Systèmes Hydriques, Automatismes et Instrumentation.</li>
                  <li className="list-group-item">Électricité Bâtiment (haute et basse tension).</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={ingeelectric} alt="Système Solaire" className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="multitechnique" className="expertise-block card shadow-lg mb-5 text-white action-card action-card-alt" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-gear-fill me-3 icon-green action-icon"></i> 3. Solutions Multi-techniques et Industrie
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead text-white">
                  Des services spécialisés dédiés à l'industrie, au secteur minier et aux projets
                  nécessitant des infrastructures lourdes et techniques.
                </p>
                <ul>
                  <li>Travaux de Génie Civil spécialisé (fondations spéciales, structures).</li>
                  <li>Chaudronnerie, Tuyauterie et Constructions Métalliques.</li>
                  <li>Isolation, Étanchéité et travaux de finitions techniques.</li>
                  <li>Services Intégrés pour les Projets Miniers (campements, bases-vie).</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={ingeelectric} alt="Système Solaire" className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="etudes" className="expertise-block card shadow-lg mb-5 action-card" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-file-earmark-check-fill me-3 icon-red action-icon"></i> 4. Étude, Expertise Bâtiment & Commerce Général
            </h3>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-7">
                <p className="lead">
                  Notre bureau d'études accompagne vos projets de la conception à la réalisation,
                  appuyé par une logistique d'approvisionnement performante et fiable.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Études de faisabilité et conception (plans, devis).</li>
                  <li className="list-group-item">Expertise technique du bâtiment, audits et contrôle qualité.</li>
                  <li className="list-group-item">Fourniture et logistique de matériaux et équipements BTP.</li>
                  <li className="list-group-item">Conseil et assistance technique pour la gestion de projet.</li>
                </ul>
              </div>
              <div className="col-lg-5 text-center mt-4 mt-lg-0">
                <div className="action-image-frame">
                  <img src={commerce} alt="Bureau d'études" className="action-image" loading="lazy" decoding="async" />
                  <div className="action-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 p-4 rounded shadow-sm text-white" style={{backgroundColor: 'var(--gas-primary)'}} data-aos="fade-up">
          <h3 className="fw-bold text-white">Un projet spécifique ou complexe ?</h3>
          <p className="lead text-white">
            Contactez-nous pour une analyse détaillée de vos besoins et l'élaboration
            d'un devis personnalisé, adapté à vos exigences.
          </p>
          <Link to="/contact" className="btn btn-custom btn-lg">Démarrer Votre Projet</Link>
        </div>
      </div>
    </section>

    {/* Section Certifications & Qualifications */}
    <section className="py-5 text-white" style={{backgroundColor: 'var(--gas-primary)'}}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">Certifications & Qualifications</h2>
            <p className="lead text-white">Notre engagement qualité reconnu par les autorités compétentes</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-award-fill icon-red cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">Agrément N°1</h5>
              <p className="small mb-0">Agrément du Ministère des Travaux Publics pour les travaux de construction</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-shield-check icon-yellow cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">RCCM</h5>
              <p className="small mb-0">Registre du Commerce et du Crédit Mobilier - N° RCCM/GC-CYA/2023-B-12345</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-building icon-green cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">NINEA</h5>
              <p className="small mb-0">Numéro d'Identification Nationale des Entreprises et Associations</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="certification-card bg-white text-dark p-4 rounded-4 shadow-lg h-100 text-center">
              <div className="certification-icon mb-3">
                <i className="bi bi-check-circle-fill icon-red cert-icon-anim" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">Qualifications</h5>
              <p className="small mb-0">Qualifications professionnelles en électricité, génie civil et construction métallique</p>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Moyens Techniques & Équipement</h2>
            <p className="lead equipment-lead">
              ECG PLUS dispose d'un parc matériel moderne et adapté aux chantiers les plus exigeants,
              garantissant qualité, sécurité et respect des délais.
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
              <h5 className="fw-bold text-center mb-3">Flotte Automobile</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Véhicules utilitaires et pick-up</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Camions de transport de matériaux</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Engins de chantier légers</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Véhicules de service et dépannage</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="equipment-card bg-white p-4 rounded shadow-lg h-100">
              <div className="equipment-icon text-center mb-3">
                <i className="bi bi-gear-wide-connected icon-yellow equipment-pulse" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h5 className="fw-bold text-center mb-3">Matériel Électrique</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Groupes électrogènes de toutes puissances</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Panneaux solaires et équipements photovoltaïques</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Outils de mesure et de diagnostic</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Matériel de câblage et d'installation</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="equipment-card bg-white p-4 rounded shadow-lg h-100">
              <div className="equipment-icon text-center mb-3">
                <i className="bi bi-hammer icon-green equipment-pulse" style={{fontSize: '2.5rem'}}></i>
              </div>
              <h5 className="fw-bold text-center mb-3">Outils & Matériel BTP</h5>
              <ul className="list-unstyled equipment-list">
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Outils électriques et pneumatiques</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Échafaudages et matériel de sécurité</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Matériel de levage et manutention</li>
                <li><i className="bi bi-check-circle-fill icon-green me-2"></i> Équipements de protection individuelle</li>
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
            <h2 className="display-5 fw-bold gradient-text mb-3">Notre Processus de Travail</h2>
            <p className="lead">Une méthodologie éprouvée pour garantir la réussite de vos projets</p>
          </div>
        </div>

        <div className="row g-4 process-timeline">
          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up">
              <div className="process-number-circle">1</div>
              <h5 className="fw-bold mb-2">Étude & Conseil</h5>
              <p className="small">Analyse de vos besoins, études de faisabilité, conseils techniques et élaboration de devis détaillés.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="process-number-circle">2</div>
              <h5 className="fw-bold mb-2">Conception</h5>
              <p className="small">Plans techniques, schémas électriques, études de structure et préparation du dossier d'exécution.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="process-number-circle">3</div>
              <h5 className="fw-bold mb-2">Réalisation</h5>
              <p className="small">Exécution des travaux selon les normes, suivi qualité, respect des délais et sécurité sur chantier.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="process-step-card text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="process-number-circle">4</div>
              <h5 className="fw-bold mb-2">Maintenance</h5>
              <p className="small">Service après-vente, maintenance préventive, dépannage d'urgence et support technique continu.</p>
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
            <h2 className="display-5 fw-bold mb-4 text-white">Garanties & Assurances</h2>
            <p className="lead mb-4 text-white">
              Votre tranquillité d'esprit est notre priorité. ECG PLUS s'engage à vos côtés
              avec des garanties solides et une couverture assurance complète.
            </p>

            <div className="row g-3">
              <div className="col-md-6" data-aos="fade-up">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-shield-check-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">Garantie Décennale</h6>
                    <p className="small mb-0 text-white">Couverture des dommages compromettant la solidité de l'ouvrage pendant 10 ans.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">Garantie Biennale</h6>
                    <p className="small mb-0 text-white">Couverture des équipements et éléments d'équipement pendant 2 ans.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">Respect des Délais</h6>
                    <p className="small mb-0 text-white">Engagement contractuel sur les délais de réalisation avec pénalités de retard.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="guarantee-card p-3 h-100">
                  <div className="guarantee-card-icon">
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">Assurance Responsabilité Civile</h6>
                    <p className="small mb-0 text-white">Couverture complète des risques liés à notre activité professionnelle.</p>
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
                  <small className="d-block mt-2"><span className="guarantee-number">100%</span><br/>Garantie</small>
                </div>
              </div>
              <h5 className="fw-bold mb-3 text-white">Notre Engagement Qualité</h5>
              <p className="mb-0 text-white">
                Chaque projet est accompagné d'un contrat détaillé précisant les garanties,
                les délais et les conditions de réalisation. Notre réputation repose sur
                la qualité de nos réalisations et la satisfaction de nos clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section CTA Finale */}
    <section className="py-5 section-alt-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4 text-primary">Prêt à Réaliser Votre Projet ?</h2>
        <p className="lead mb-4 text-dark">
          Confiez-nous votre projet et bénéficiez de notre expertise reconnue
          et de notre engagement pour votre satisfaction.
        </p>
        <div className="row justify-content-center g-3">
          <div className="col-auto">
            <Link to="/contact" className="btn btn-custom btn-lg px-4">
              <i className="bi bi-envelope-fill me-2"></i>Nous Contacter
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/realisations" className="btn btn-outline-primary btn-lg px-4">
              <i className="bi bi-images me-2"></i>Voir Nos Réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>

  </main>
);

export default ExpertiseServices;
