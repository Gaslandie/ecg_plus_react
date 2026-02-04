import logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section text-white py-4" data-aos="zoom-in" data-aos-delay="300">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <img src={logo} alt="Logo ECG Plus" className="mb-2 logo-footer-img" loading="lazy" />
            <p className="mb-0 small">&copy; 2025 ECG PLUS SARL. Tous droits réservés.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3">Contactez-Nous</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Manéah, Préfecture de Coyah, République de Guinée</p>
            <p className="mb-1"><i className="bi bi-telephone me-2"></i><a href="tel:+224623966278" className="footer-link">+224 623 96 62 78</a></p>
            <p className="mb-1"><i className="bi bi-envelope me-2"></i><a href="mailto:contact@ecgplusgn.com" className="footer-link">contact@ecgplusgn.com</a></p>
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
        <div id="contact" className="text-white py-3">
          <div className="container text-center">
            <div className="d-flex justify-content-center flex-wrap gap-4 align-items-center">
              <a href="mailto:contact@ecgplusgn.com" aria-label="Envoyer un email à ECG PLUS" className="footer-icon-link">
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a href="https://wa.me/224623966278" target="_blank" rel="noopener noreferrer" aria-label="Contacter via WhatsApp" className="footer-icon-link">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn ECG PLUS" className="footer-icon-link">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
