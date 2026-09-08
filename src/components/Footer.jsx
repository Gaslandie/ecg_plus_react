import logo from '../assets/img/logo-160.webp';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="ecg-footer" data-menu-inert="">
      <div className="ds-container">
        <div className="ecg-footer__grid">
          <div className="ecg-footer__col">
            <Link to="/" className="ecg-footer__brand" aria-label={t('a11y.brandHome')}>
              <img src={logo} alt="" className="ecg-footer__logo" width="160" height="141" loading="lazy" decoding="async" />
              <div><span className="ecg-footer__brand-title">ECG PLUS</span><small>{t('referenceUi.brandSubtitle')}</small></div>
            </Link>
            <p className="ecg-footer__tagline">{t('footer.tagline')}</p>
            <div className="ecg-footer__socials">
              <a href="https://wa.me/224623417510" target="_blank" rel="noopener noreferrer" aria-label={t('footer.whatsappLabel')}><i className="bi bi-whatsapp" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedinLabel')}><i className="bi bi-linkedin" aria-hidden="true" /></a>
              <a href="mailto:contact@ecgplusgn.com" aria-label={t('footer.emailLabel')}><i className="bi bi-envelope-fill" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="ecg-footer__col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="ecg-footer__list">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/presentation">{t('nav.company')}</Link></li>
              <li><Link to="/expertiseservices">{t('nav.expertiseShort')}</Link></li>
              <li><Link to="/realisations">{t('nav.realisations')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div className="ecg-footer__col">
            <h4>{t('referenceUi.allExpertise')}</h4>
            <ul className="ecg-footer__list">{services.map(service => <li key={service.key}><Link to={servicePath(service)}>{t(`expertiseServicesPage.pillars.${service.key}.shortTitle`)}</Link></li>)}</ul>
          </div>
          <div className="ecg-footer__col">
            <h4>{t('nav.contact')}</h4>
            <ul className="ecg-footer__list">
              <li><i className="bi bi-geo-alt-fill" aria-hidden="true" /><span>{t('footer.address')}</span></li>
              <li><i className="bi bi-telephone-fill" aria-hidden="true" /><a href="tel:+224623417510">+224 623 41 75 10</a></li>
              <li><i className="bi bi-envelope-fill" aria-hidden="true" /><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></li>
            </ul>
          </div>
        </div>
        <div className="ecg-footer__bottom">
          <p className="ecg-footer__copyright">&copy; {new Date().getFullYear()} ECG PLUS SARL. {t('footer.rights')}</p>
          <button className="ecg-footer__top" type="button" onClick={() => {
            document.getElementById('main-content')?.focus({preventScroll:true});
            window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
          }}>{t('referenceUi.backTop')} ↑</button>
        </div>
      </div>
    </footer>
  );
}
