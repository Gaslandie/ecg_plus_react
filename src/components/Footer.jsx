import logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

const Footer = () => {
  const { t } = useI18n();
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
              <p className="mb-0 small footer-muted">&copy; 2025 ECG PLUS SARL. {t('footer.rights')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-col h-100" data-aos="fade-up" data-aos-delay="150">
              <h5 className="mb-3 footer-title">{t('footer.contactUs')}</h5>
              <ul className="list-unstyled footer-list">
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  <span>{t('footer.address')}</span>
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
              <h5 className="mb-3 footer-title">{t('footer.quickLinks')}</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/" className="footer-link">{t('nav.home')}</Link></li>
                <li><Link to="/presentation" className="footer-link">{t('nav.presentation')}</Link></li>
                <li><Link to="/expertiseservices" className="footer-link">{t('nav.expertise')}</Link></li>
                <li><Link to="/realisations" className="footer-link">{t('nav.realisations')}</Link></li>
                <li><Link to="/contact" className="footer-link">{t('nav.contact')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div id="contact" className="footer-bottom py-3">
          <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center">
            <div className="d-flex justify-content-center flex-wrap gap-3 align-items-center footer-social">
              <a href="mailto:contact@ecgplusgn.com" aria-label={t('footer.emailLabel')} className="footer-icon-link">
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a href="https://wa.me/224623966278" target="_blank" rel="noopener noreferrer" aria-label={t('footer.whatsappLabel')} className="footer-icon-link">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedinLabel')} className="footer-icon-link">
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
