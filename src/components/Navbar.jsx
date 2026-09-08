import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-160.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';

function NavDropdown({ label, links, active }) {
  const ref = useRef(null);
  useEffect(() => {
    const closeOutside = event => {
      if (!ref.current?.contains(event.target)) ref.current?.removeAttribute('open');
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('focusin', closeOutside);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('focusin', closeOutside);
    };
  }, []);
  return (
    <details ref={ref} className="ecg-nav__dropdown" onKeyDown={event => {
      if (event.key === 'Escape' && ref.current.open) {
        event.preventDefault(); event.stopPropagation();
        ref.current.open = false;
        ref.current.querySelector('summary').focus();
      }
    }}>
      <summary className={`ecg-nav__link${active ? ' is-active' : ''}`}>{label}<span className="ecg-chevron" aria-hidden="true" /></summary>
      <ul className="ecg-nav__submenu">
        {links.map(link => <li key={link.to}><Link to={link.to} onClick={() => { ref.current.open = false; }}>{link.label}</Link></li>)}
      </ul>
    </details>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(location.pathname);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    if (menuOpen) setMenuOpen(false);
  }
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const wide = window.matchMedia('(min-width: 992px)');
    const onResize = () => { if (wide.matches) setMenuOpen(false); };
    wide.addEventListener('change', onResize);
    return () => { window.removeEventListener('scroll', onScroll); wide.removeEventListener('change', onResize); };
  }, []);
  useEffect(() => {
    const update = () => document.documentElement.style.setProperty('--navbar-height', `${navRef.current.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.body.classList.toggle('ecg-nav-open', menuOpen);
    const closeOutside = event => { if (!navRef.current?.contains(event.target)) setMenuOpen(false); };
    if (menuOpen) document.addEventListener('pointerdown', closeOutside);
    return () => { document.body.classList.remove('ecg-nav-open'); document.removeEventListener('pointerdown', closeOutside); };
  }, [menuOpen]);
  const servicesLinks = [
    { to: '/expertiseservices', label: t('nav.allServices') },
    ...services.map(service => ({ to: servicePath(service), label: t(`expertiseServicesPage.pillars.${service.key}.title`) })),
  ];
  return (
    <header className={`ecg-site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="ecg-topbar">
        <div className="ds-container ecg-topbar__inner">
          <span>{t('referenceUi.topbar')}</span>
          <div><a href="tel:+224623417510"><i className="bi bi-telephone-fill" aria-hidden="true" />+224 623 41 75 10</a><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></div>
        </div>
      </div>
      <nav ref={navRef} className="ecg-nav" aria-label={t('a11y.mainNav')} onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); toggleRef.current.focus(); }
      }}>
        <div className="ds-container ecg-nav__inner">
          <Link to="/" className="ecg-nav__brand" aria-label={t('a11y.brandHome')} onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="" width="160" height="141" className="ecg-nav__logo" />
            <span className="ecg-nav__brand-text">ECG PLUS<small>{t('referenceUi.brandSubtitle')}</small></span>
          </Link>
          <button ref={toggleRef} type="button" className={`ecg-nav__toggler${menuOpen ? ' is-open' : ''}`}
            aria-controls="ecg-navigation-menu" aria-expanded={menuOpen}
            aria-label={t(menuOpen ? 'a11y.closeMenu' : 'a11y.openMenu')} onClick={() => setMenuOpen(value => !value)}>
            <span /><span /><span />
          </button>
          <div id="ecg-navigation-menu" className={`ecg-nav__collapse${menuOpen ? ' is-open' : ''}`} onClick={event => {
            if (event.target.closest('a')) setMenuOpen(false);
          }}>
            <ul className="ecg-nav__menu">
              <li><NavLink to="/" end className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>{t('nav.home')}</NavLink></li>
              <li><NavLink to="/presentation" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>{t('nav.company')}</NavLink></li>
              <li><NavDropdown label={t('nav.expertiseShort')} links={servicesLinks} active={location.pathname === '/expertiseservices'} /></li>
              <li><NavLink to="/realisations" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>{t('nav.realisations')}</NavLink></li>
            </ul>
            <Link to="/contact" className="ds-btn ds-btn--accent ecg-nav__project">{t('homePage.contact.cta')}<i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
            <div className="ecg-langswitch" role="group" aria-label={t('a11y.langSwitch')}>
              {['fr', 'en'].map(language => <button key={language} type="button" lang={language} aria-pressed={lang === language}
                aria-label={t(language === 'fr' ? 'a11y.langFr' : 'a11y.langEn')} onClick={() => setLang(language)}>{language.toUpperCase()}</button>)}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
