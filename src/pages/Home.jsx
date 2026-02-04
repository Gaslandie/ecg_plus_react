import React from 'react';
import { Link } from 'react-router-dom';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import constructionImg from '../assets/img/construction.jpeg';
import industrie from '../assets/img/industrie.jpeg';
import commerce from '../assets/img/commerce.jpeg';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.png';
import nongo from '../assets/img/nongo.jpeg';

function Home() {
  return (
    <main>
      {/* Section Présentation stylée */}
      <section className="presentation-section py-5" style={{background: 'linear-gradient(120deg, #fafafa 60%, #ffe5c2 100%)'}}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-7">
              <h1 className="display-3 fw-bold mb-3 gradient-text">ECG PLUS SARL</h1>
              <h2 className="mb-2 text-dark">Entreprise de Construction Générale et Travaux Publics</h2>
              <ul className="list-unstyled fs-5 mb-3">
                <li><strong>Adresse :</strong> Maneah / Coyah</li>
                <li><strong>Téléphone :</strong> 623 96 62 78 / 628 33 86 41</li>
                <li><strong>E-mail :</strong> <a href="mailto:daoudafofanadf66@gmail.com">daoudafofanadf66@gmail.com</a></li>
                <li><strong>Capital social :</strong> 10.000.000 GNF</li>
                <li><strong>RCCM :</strong> GN.TCC.2021.00364</li>
                <li><strong>Site web :</strong> <a href="https://ecgplus.com" target="_blank" rel="noopener noreferrer">ecgplus.com</a></li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge bg-primary fs-6">Construction</span>
                <span className="badge bg-secondary fs-6">Expertise</span>
                <span className="badge bg-warning text-dark fs-6">Génie Civil</span>
                <span className="badge bg-success fs-6">Commerce Général</span>
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
                  <li><strong>Références bancaires :</strong> FIRSTBANK: 302203000027011</li>
                  <li><strong>N° Entreprise :</strong> RCCM/GN.TCC.2021.B.00331</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="display-4">
            <span>Entreprise de Construction</span><br />
            <span>Générale et Travaux Publics</span>
          </h1>
          <h3 className="text-white mt-3">Bâtir l'Avenir, Construire l'Excellence Durable.</h3>
          <Link to="/contact" className="btn btn-contact mt-4">Contactez-Nous</Link>
        </div>
        <div
          className="scroll-down"
          onClick={() => document.getElementById('apropos').scrollIntoView({ behavior: 'smooth' })}
          aria-label="Faire défiler vers la section À propos"
        >
          ↓
        </div>
      </header>

      {/* Section about */}
      <section id="apropos" className="section-spacing" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <h2 className="fw-bold text-center">À propos</h2>
          <div className="apropos-content">
            <p>
              Votre projet de construction mérite une solution sur mesure, pensée pour répondre
              précisément à vos attentes, qu'il s'agisse de bâtiments, de génie civil ou
              d'infrastructures énergétiques. ECG PLUS conçoit et réalise des ouvrages modernes,
              robustes et durables. Chaque projet est conçu pour garantir une excellence
              technique, valoriser votre patrimoine et contribuer efficacement à l'atteinte de
              vos objectifs professionnels.
            </p>
            <p>
              Grâce à un accompagnement personnalisé, nos experts vous assistent à chaque étape :
              de la réflexion initiale et des études de faisabilité jusqu'à la livraison finale du
              chantier. Votre cahier des charges et votre vision sont au cœur de notre démarche.
              Nous mettons un point d'honneur à transformer vos ambitions en résultats concrets,
              en vous apportant un savoir-faire éprouvé, une écoute attentive et un suivi rigoureux
              garantissant la réussite et la pérennité de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Section Services & Expertises - Modern Design */}
      <section id="services" className="services-modern-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5 display-4 fw-bold text-center gradient-text">Services & Expertises</h2>
          <div className="services-cards-wrapper d-flex flex-nowrap overflow-auto pb-3">
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-lightning-charge"></i></div>
              <h5>Ingénierie Électrique & Systèmes Autonomes</h5>
              <p>
                Instrumentation, automatisme, installation de groupes électrogènes, de panneaux solaires et de systèmes hydriques pour l'autonomie énergétique.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-building"></i></div>
              <h5>Construction Résidentielle, Commerciale & Industrielle</h5>
              <p>
                Complexes résidentiels, infrastructures commerciales et industrielles, projets robustes et durables en Guinée et sous-région.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-diagram-3"></i></div>
              <h5>Génie Civil, Métallique & Projets Miniers</h5>
              <p>
                Génie civil, construction métallique, chaudronnerie, isolation, tuyauterie industrielle et solutions pour l'industrie minière.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
            <div className="service-modern-card mx-3">
              <div className="service-icon-bg mb-3"><i className="bi bi-clipboard-data"></i></div>
              <h5>Étude, Expertise Bâtiment & Commerce</h5>
              <p>
                Études techniques, expertises, rénovation, maintenance, fourniture de matériaux et équipements de construction.
              </p>
              <Link to="/expertiseservices" className="service-link">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section réalisations */}
      <section className="realisations-section py-5 my-md-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">Nos Réalisations</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card realisation-card h-100">
                <h5>Bibliothèque Municipale de Kankan</h5>
                <img src={kankan} className="card-img-top realisation-image" alt="Réalisation 1" />
                <div className="card-body">
                  <p className="card-text">
                    Ville de Kankan (05.2023 – 11.2023). Ouvrage public majeur
                    illustrant notre engagement dans le développement des infrastructures
                    communautaires et culturelles en Guinée.
                  </p>
                  <Link to="/realisations#kankan" className="btn btn-sm btn-outline-primary">Détails du Projet</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card realisation-card h-100">
                <h5>Projet Résidentiel à Dubréka Fihaima</h5>
                <img src={dubreka} className="card-img-top realisation-image" alt="Réalisation 2" />
                <div className="card-body">
                  <p className="card-text">
                    Projet réalisé entre 2020 et 2021. Illustration de notre expertise
                    en construction résidentielle de qualité, conforme aux standards
                    techniques et architecturaux les plus exigeants.
                  </p>
                  <Link to="/realisations#dubreka" className="btn btn-sm btn-outline-primary">Détails du Projet</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card realisation-card h-100">
                <h5>Immeuble R+2 et Rénovation de Résidence Privée</h5>
                <img src={nongo} className="card-img-top realisation-image" alt="Réalisation 3" />
                <div className="card-body">
                  <p className="card-text">
                    Projets réalisés entre 2018 et 2024. Illustration de notre double
                    compétence en construction neuve (immeuble R+2 à la Cimenterie
                    d'Ansoumaniah Village) et en rénovation de résidences privées à Nongo.
                  </p>
                  <Link to="/realisations#renovation" className="btn btn-sm btn-outline-primary">Détails du Projet</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section contact */}
      <section className="contact-section text-center py-5 my-md-5" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto py-3">
              <h2 className="mb-4 display-5 fw-bold">Prêt à Construire Votre Prochain Projet ?</h2>
              <p className="mb-4 lead">
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
    </main>
  );
}

export default Home;