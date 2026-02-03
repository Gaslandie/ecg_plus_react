import React from 'react';
import { Link } from 'react-router-dom';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import industrie from '../assets/img/industrie.jpeg';
import commerce from '../assets/img/commerce.jpeg';

const ExpertiseServices = () => (
  <main>
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold text-white contact-title" data-aos="fade-up">Nos Domaines d'Expertise</h1>
        <p className="lead text-white">Des fondations solides aux solutions énergétiques autonomes et durables.</p>
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
