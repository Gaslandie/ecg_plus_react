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

      {/* Section Services et expertises */}
      <section id="services" className="section-spacing bg-light text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5">Services & Expertises</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="service-box p-4 h-100 shadow-sm bg-white rounded">
                <img src={ingeelectric} height="200" alt="Ingénierie Électrique et Systèmes Autonomes" loading="lazy" />
                <h5>Ingénierie Électrique et Systèmes Autonomes</h5>
                <p className="text-muted">
                  Instrumentation, automatisme, installation de groupes électrogènes, de panneaux
                  solaires et de systèmes hydriques, garantissant l'autonomie et l'indépendance
                  énergétique de vos bâtiments.
                </p>
                <Link to="/expertiseservices">→ En savoir plus</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box p-4 h-100 shadow-sm bg-white rounded">
                <img src={constructionImg} height="200" alt="Construction : Résidentielle, Commerciale et Industrielle" loading="lazy" />
                <h5>Construction : Résidentielle, Commerciale et Industrielle</h5>
                <p className="text-muted">
                  Des complexes résidentiels aux infrastructures commerciales et industrielles,
                  ECG PLUS réalise des projets de construction robustes et durables en Guinée et dans
                  la sous-région.
                </p>
                <Link to="/expertiseservices">→ En savoir plus</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box p-4 h-100 shadow-sm bg-white rounded">
                <img src={industrie} height="200" alt="Génie Civil, Construction Métallique et Projets Miniers" />
                <h5>Génie Civil, Construction Métallique et Projets Miniers</h5>
                <p className="text-muted">
                  Travaux de génie civil, construction métallique, chaudronnerie,
                  isolation et étanchéité, ainsi que des solutions intégrées pour l'industrie minière,
                  incluant la tuyauterie industrielle et les structures métalliques.
                </p>
                <Link to="/expertiseservices">→ En savoir plus</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box p-4 h-100 shadow-sm bg-white rounded">
                <img src={commerce} height="200" alt="Étude, Expertise Bâtiment et Commerce Général" />
                <h5>Étude, Expertise Bâtiment et Commerce Général</h5>
                <p className="text-muted">
                  Études techniques et expertises approfondies pour la rénovation et la
                  maintenance des bâtiments, ainsi que la fourniture de matériaux et d'équipements
                  de construction dans le cadre de nos activités de commerce général.
                </p>
                <Link to="/expertiseservices">→ En savoir plus</Link>
              </div>
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