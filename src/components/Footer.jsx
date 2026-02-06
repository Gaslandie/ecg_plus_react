import logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section footer-premium text-white py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="row g-4 align-items-stretch mb-4">
          <div className="col-lg-5 col-md-6">
            <div className="footer-col h-100">
              <div className="d-flex align-items-center gap-3 mb-3 footer-brand-row">
                <img src={logo} alt="Logo ECG Plus" className="logo-footer-img" loading="lazy" />
                <div>
                  <h5 className="mb-1 footer-brand-title">ECG PLUS</h5>
                  <p className="mb-0 footer-muted small">Construire durablement, partout en Guinée.</p>
                </div>
              </div>
              <p className="mb-0 small footer-muted">&copy; 2025 ECG PLUS SARL. Tous droits réservés.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-col h-100" data-aos="fade-up" data-aos-delay="150">
              <h5 className="mb-3 footer-title">Contactez-Nous</h5>
              <ul className="list-unstyled footer-list">
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  <span>Manéah, Préfecture de Coyah, République de Guinée</span>
                </li>
                <li>
                  <i className="bi bi-telephone me-2"></i>
                  <a href="tel:+224623966278" className="footer-link">+224 623 96 62 78</a>
                </li>
                <li>
                  <i className="bi bi-envelope me-2"></i>
                  <a href="mailto:contact@ecgplusgn.com" className="footer-link">contact@ecgplusgn.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-col h-100" data-aos="fade-up" data-aos-delay="200">
              <h5 className="mb-3 footer-title">Liens Rapides</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/" className="footer-link">Accueil</Link></li>
                <li><Link to="/presentation" className="footer-link">Présentation</Link></li>
                <li><Link to="/expertiseservices" className="footer-link">Expertise & Services</Link></li>
                <li><Link to="/realisations" className="footer-link">Réalisations</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div id="contact" className="footer-bottom py-3">
          <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center">
            <div className="d-flex justify-content-center flex-wrap gap-3 align-items-center footer-social">
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
