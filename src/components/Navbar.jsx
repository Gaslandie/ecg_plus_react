import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import { useI18n } from '../i18n/I18nContext.jsx';

const LangSwitch = ({ lang, setLang, label }) => (
  <div className="ecg-langswitch" role="group" aria-label={label}>
    <button
      type="button"
      className={`ecg-langswitch__btn${lang === 'fr' ? ' is-active' : ''}`}
      onClick={() => setLang('fr')}
      aria-pressed={lang === 'fr'}
    >
      FR
    </button>
    <span className="ecg-langswitch__sep" aria-hidden="true">/</span>
    <button
      type="button"
      className={`ecg-langswitch__btn${lang === 'en' ? ' is-active' : ''}`}
      onClick={() => setLang('en')}
      aria-pressed={lang === 'en'}
    >
      EN
    </button>
  </div>
);

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openPath, setOpenPath] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuOpen = openPath === location.pathname;

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

  // Lock body scroll quand menu ouvert
  useEffect(() => {
    document.body.classList.toggle('ecg-nav-open', menuOpen);
    return () => document.body.classList.remove('ecg-nav-open');
  }, [menuOpen]);

  // Ferme le menu si on passe en desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)');
    const handleChange = (event) => {
      if (event.matches) setOpenPath(null);
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

  // Pages avec hero plein écran : navbar transparente avant scroll.
  // Quand le menu mobile est ouvert, la navbar doit être solide pour
  // se raccorder visuellement au panneau du menu.
  const heroRoutes = ['/', '/realisations', '/expertiseservices', '/presentation', '/contact'];
  const isOverHero = heroRoutes.includes(location.pathname) && !isScrolled && !menuOpen;

  const navClasses = [
    'ecg-nav',
    isScrolled ? 'is-scrolled' : '',
    isOverHero ? '' : 'is-solid',
  ].filter(Boolean).join(' ');

  const handleNavClick = () => setOpenPath(null);

  const navLinks = [
    { to: '/', end: true, label: t('nav.home') },
    { to: '/presentation', label: t('nav.presentation') },
    { to: '/expertiseservices', label: t('nav.expertise') },
    { to: '/realisations', label: t('nav.realisations') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className={navClasses} aria-label={t('a11y.mainNavigation')}>
        <div className="ds-container ecg-nav__inner">
          <Link to="/" className="ecg-nav__brand" aria-label={t('a11y.homeLink')} onClick={handleNavClick}>
            <img
              src={logo}
              alt={t('common.brand')}
              className="ecg-nav__logo"
              width="1080"
              height="946"
              decoding="async"
            />
            <span className="ecg-nav__brand-text">ECG PLUS</span>
          </Link>

          <div className="ecg-nav__actions">
            {/* Menu desktop — inline dans la barre */}
            <ul className="ecg-nav__menu">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    end={link.end}
                    to={link.to}
                    className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <LangSwitch lang={lang} setLang={setLang} label={t('a11y.languageSwitch')} />

            <button
              type="button"
              className={`ecg-nav__toggler${menuOpen ? ' is-open' : ''}`}
              aria-controls="ecg-mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
              onClick={() => setOpenPath(menuOpen ? null : location.pathname)}
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

      {/* Menu mobile — panneau plein écran, RENDU HORS de la navbar pour
          ne pas être affecté par son backdrop-filter (containing block) */}
      <div
        id="ecg-mobile-menu"
        className={`ecg-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="ecg-mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                end={link.end}
                to={link.to}
                onClick={handleNavClick}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }) => `ecg-mobile-menu__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Voile sombre derrière le menu */}
      <div
        className={`ecg-mobile-overlay${menuOpen ? ' is-open' : ''}`}
        onClick={() => setOpenPath(null)}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;
