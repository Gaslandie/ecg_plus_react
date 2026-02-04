import React from 'react';
import { Link } from 'react-router-dom';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import industrie from '../assets/img/industrie.jpeg';
import commerce from '../assets/img/commerce.jpeg';

const ExpertiseServices = () => (
  <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Nos Domaines d'Expertise</h1>
        <p className="lead text-white mb-4">18 ans d’expérience, une équipe multidisciplinaire et des solutions innovantes pour tous vos projets de construction, d’énergie et d’industrie.</p>
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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="team-box p-4 rounded shadow-sm bg-white h-100">
              <h3 className="fw-bold mb-3 text-primary">Nos Moyens Humains</h3>
              <p>Notre équipe est composée d’ingénieurs, techniciens, ouvriers qualifiés, conseillers et gestionnaires, tous animés par la passion de l’excellence et du service client.</p>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-person-badge-fill text-secondary me-2"></i> Ingénieurs & techniciens spécialisés</li>
                <li><i className="bi bi-tools text-secondary me-2"></i> Ouvriers qualifiés & équipe de dépannage</li>
                <li><i className="bi bi-briefcase-fill text-secondary me-2"></i> Gestionnaires & administrateurs</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={batiment} alt="Notre équipe ECG PLUS" className="img-fluid rounded shadow-lg" style={{maxHeight: '320px', objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">Nos 4 Piliers d'Action</h2>

        <div id="construction" className="expertise-block card shadow-lg mb-5 text-white" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-bricks me-3"></i> 1. Construction Générale & Travaux Publics
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead">
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
                <img src={batiment} alt="Construction BTP" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>

        <div id="ingenierie" className="expertise-block card shadow-lg mb-5" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-lightbulb-fill me-3 text-accent"></i> 2. Ingénierie Électrique & Systèmes Autonomes
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
                <img src={ingeelectric} alt="Système Solaire" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>

        <div id="multitechnique" className="expertise-block card shadow-lg mb-5 text-white" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-gear-fill me-3 text-secondary"></i> 3. Solutions Multi-techniques et Industrie
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="lead">
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
                <img src={industrie} alt="Construction Métallique" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>

        <div id="etudes" className="expertise-block card shadow-lg mb-5" data-aos="fade-up">
          <div className="card-body p-5">
            <h3 className="card-title fw-bold mb-4">
              <i className="bi bi-file-earmark-check-fill me-3 text-accent"></i> 4. Étude, Expertise Bâtiment & Commerce Général
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
                <img src={commerce} alt="Bureau d'études" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 p-4 bg-light rounded shadow-sm" data-aos="fade-up">
          <h3 className="fw-bold">Un projet spécifique ou complexe ?</h3>
          <p className="lead">
            Contactez-nous pour une analyse détaillée de vos besoins et l'élaboration
            d'un devis personnalisé, adapté à vos exigences.
          </p>
          <Link to="/contact" className="btn btn-custom btn-lg">Démarrer Votre Projet</Link>
        </div>
      </div>
    </section>
  </main>
);

export default ExpertiseServices;
