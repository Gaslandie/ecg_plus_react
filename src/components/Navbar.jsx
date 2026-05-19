import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import { useI18n } from '../i18n/I18nContext.jsx';

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || 0;
        setIsScrolled(scrollTop > 20);
        const doc = document.documentElement;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const progress = scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;
        setScrollProgress(progress);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile au changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll quand menu ouvert
  useEffect(() => {
    document.body.classList.toggle('ecg-nav-open', menuOpen);
    return () => document.body.classList.remove('ecg-nav-open');
  }, [menuOpen]);

  // Ferme le menu si on passe en desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)');
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Mesure la hauteur réelle de la nav pour --navbar-height
  useEffect(() => {
    const updateHeight = () => {
      const navEl = document.querySelector('.ecg-nav');
      if (navEl) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${navEl.getBoundingClientRect().height}px`
        );
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isScrolled]);

  // Transparente uniquement sur la Home, avant scroll (au-dessus du hero)
  const isOverHero = location.pathname === '/' && !isScrolled;

  const navClasses = [
    'ecg-nav',
    isScrolled ? 'is-scrolled' : '',
    isOverHero ? '' : 'is-solid',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="ds-container ecg-nav__inner">
        <Link to="/" className="ecg-nav__brand" aria-label="Accueil">
          <img src={logo} alt="Logo ECG Plus" className="ecg-nav__logo" loading="lazy" />
          <span className="ecg-nav__brand-text">ECG PLUS</span>
        </Link>

        <div className="ecg-nav__actions">
          <ul id="ecg-nav-menu" className={`ecg-nav__menu${menuOpen ? ' is-open' : ''}`}>
            <li>
              <NavLink end to="/" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/presentation" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>
                {t('nav.presentation')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/expertiseservices" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>
                {t('nav.expertise')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/realisations" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>
                {t('nav.realisations')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>

          <div className="ecg-langswitch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`ecg-langswitch__btn${lang === 'fr' ? ' is-active' : ''}`}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <span className="ecg-langswitch__sep" aria-hidden="true">/</span>
            <button
              type="button"
              className={`ecg-langswitch__btn${lang === 'en' ? ' is-active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={`ecg-nav__toggler${menuOpen ? ' is-open' : ''}`}
            aria-controls="ecg-nav-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="ecg-nav__toggler-bar" aria-hidden="true"></span>
            <span className="ecg-nav__toggler-bar" aria-hidden="true"></span>
            <span className="ecg-nav__toggler-bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div className="ecg-nav__progress" aria-hidden="true">
        <span className="ecg-nav__progress-bar" style={{ width: `${scrollProgress}%` }}></span>
      </div>
    </nav>
  );
};

export default Navbar;
