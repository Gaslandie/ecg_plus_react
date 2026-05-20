import logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="ecg-footer" data-aos="fade-up" data-aos-delay="100">
      <div className="ds-container">
        <div className="ecg-footer__grid">
          {/* Brand */}
          <div className="ecg-footer__col">
            <div className="ecg-footer__brand">
              <img src={logo} alt="Logo ECG Plus" className="ecg-footer__logo" loading="lazy" />
              <h3 className="ecg-footer__brand-title">ECG PLUS</h3>
            </div>
            <p className="ecg-footer__tagline">
              Construire durablement, partout en Guinée. 18 ans d'excellence dans la construction et le génie civil.
            </p>
          </div>

          {/* Contact */}
          <div className="ecg-footer__col">
            <h4>{t('footer.contactUs')}</h4>
            <ul className="ecg-footer__list">
              <li>
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <span>{t('footer.address')}</span>
              </li>
              <li>
                <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                <a href="tel:+224623966278">+224 623 96 62 78</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="ecg-footer__col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="ecg-footer__list">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/presentation">{t('nav.presentation')}</Link></li>
              <li><Link to="/expertiseservices">{t('nav.expertise')}</Link></li>
              <li><Link to="/realisations">{t('nav.realisations')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="ecg-footer__bottom">
          <p className="ecg-footer__copyright">
            &copy; 2025 ECG PLUS SARL. {t('footer.rights')}
          </p>
          <div className="ecg-footer__socials">
            <a href="mailto:contact@ecgplusgn.com" aria-label={t('footer.emailLabel')}>
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://wa.me/224623966278" target="_blank" rel="noopener noreferrer" aria-label={t('footer.whatsappLabel')}>
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedinLabel')}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
