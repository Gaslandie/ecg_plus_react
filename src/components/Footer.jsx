import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import '../assets/css/style.css';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/224628373724', '_blank');
  };

  return (
    <footer className="footer-section text-white py-4" data-aos="zoom-in" data-aos-delay="300">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <img src={logo} alt="Logo ECG Plus" height="80" className="mb-2 logo-footer-img" loading="lazy" />
            <p className="mb-0">&copy; 2025 ECG PLUS SARL. Tous droits réservés.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Contactez-Nous</h5>
            <p className="mb-1">Adresse : Manéah, Préfecture de Coyah, République de Guinée</p>
            <p className="mb-1">Téléphone: +224 623 96 62 78</p>
            <p className="mb-1">Email: daoudafofanadf66@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Accueil</Link></li>
              <li><Link to="/presentation" className="text-white">Présentation</Link></li>
              <li><Link to="/expertiseservices" className="text-white">Expertise & Services</Link></li>
              <li><Link to="/realisations" className="text-white">Réalisations</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div id="contact" className="text-white py-4">
          <div className="container text-center">
            <div className="d-flex justify-content-center flex-wrap gap-4">
              {/* Email */}
              <a href="mailto:daoudafofanadf66@gmail.com" aria-label="Envoyer un email à ECG PLUS" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <i className="fas fa-envelope fa-lg"></i>
                <span>daoudafofanadf66@gmail.com</span>
              </a>
              {/* WhatsApp */}
              <a href="#" onClick={openWhatsApp} aria-label="Contacter via WhatsApp" className="text-white text-decoration-none d-flex align-items-center gap-2" rel="noopener noreferrer">
                <i className="fab fa-whatsapp fa-lg"></i>
                <span>WhatsApp ECG PLUS</span>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn ECG PLUS" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <i className="fab fa-linkedin fa-lg"></i>
                <span>LinkedIn ECG PLUS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
