import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-160.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';

// Pages avec hero plein écran : navbar transparente avant scroll.
const HERO_ROUTES = ['/'];

const FOCUSABLE = 'summary, a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const LangSwitch = ({ lang, setLang, t }) => (
  <div className="ecg-langswitch" role="group" aria-label={t('a11y.langSwitch')}>
    <button
      type="button"
      lang="fr"
      className={`ecg-langswitch__btn${lang === 'fr' ? ' is-active' : ''}`}
      aria-pressed={lang === 'fr'}
      aria-label={t('a11y.langFr')}
      onClick={() => setLang('fr')}
    >
      FR
    </button>
    <span className="ecg-langswitch__sep" aria-hidden="true">/</span>
    <button
      type="button"
      lang="en"
      className={`ecg-langswitch__btn${lang === 'en' ? ' is-active' : ''}`}
      aria-pressed={lang === 'en'}
      aria-label={t('a11y.langEn')}
      onClick={() => setLang('en')}
    >
      EN
    </button>
  </div>
);

function NavDropdown({ label, links }) {
  const ref = useRef(null);
  useEffect(() => {
    const closeOutside = (event) => {
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
    <details ref={ref} className="ecg-nav__dropdown" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        event.preventDefault(); ref.current.removeAttribute('open');
        ref.current.querySelector('summary')?.focus();
      }
    }}>
      <summary className="ecg-nav__link">{label}<span className="ecg-chevron" aria-hidden="true" /></summary>
      <ul className="ecg-nav__submenu">
        {links.map(link => <li key={link.to}><Link to={link.to} onClick={() => ref.current.removeAttribute('open')}>{link.label}</Link></li>)}
      </ul>
    </details>
  );
}

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastPathname, setLastPathname] = useState(location.pathname);

  const navRef = useRef(null);
  const panelRef = useRef(null);
  const togglerRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Ferme le menu au changement de route (ajustement d'état pendant le rendu,
  // recommandé par React plutôt qu'un setState dans un effet).
  if (lastPathname !== location.pathname) {
    setLastPathname(location.pathname);
    if (menuOpen) setMenuOpen(false);
  }

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

  // Menu ouvert : verrou du scroll, contenu arrière inerte, Échap, gestion du focus.
  useEffect(() => {
    document.body.classList.toggle('ecg-nav-open', menuOpen);

    const inertTargets = Array.from(document.querySelectorAll('[data-menu-inert]'));
    inertTargets.forEach((el) => {
      el.inert = menuOpen;
    });

    if (menuOpen) {
      wasOpenRef.current = true;
      navRef.current?.querySelectorAll('details[open]').forEach(el => el.removeAttribute('open'));
      const firstLink = panelRef.current?.querySelector(FOCUSABLE);
      // Laisse la transition démarrer avant de déplacer le focus.
      const focusTimer = window.setTimeout(() => firstLink?.focus({ preventScroll: true }), 50);

      const onKeyDown = (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          setMenuOpen(false);
          return;
        }
        if (event.key !== 'Tab') return;
        // Piège de focus : navbar (marque, langue, bouton) + panneau du menu.
        const scope = [navRef.current, panelRef.current].filter(Boolean);
        const focusables = scope
          .flatMap((root) => Array.from(root.querySelectorAll(FOCUSABLE)))
          .filter((el) => !el.closest('[inert]') && getComputedStyle(el).visibility !== 'hidden' && (el.offsetParent !== null || el === document.activeElement));
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', onKeyDown);

      return () => {
        window.clearTimeout(focusTimer);
        document.removeEventListener('keydown', onKeyDown);
        document.body.classList.remove('ecg-nav-open');
        inertTargets.forEach((el) => {
          el.inert = false;
        });
      };
    }

    // Fermeture : restitue le focus au bouton d'ouverture si le focus était dans le panneau.
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      const active = document.activeElement;
      if (!active || active === document.body || panelRef.current?.contains(active)) {
        togglerRef.current?.focus({ preventScroll: true });
      }
    }

    return () => {
      document.body.classList.remove('ecg-nav-open');
      inertTargets.forEach((el) => {
        el.inert = false;
      });
    };
  }, [menuOpen]);

  // Observe aussi la fin de transition et les changements de taille du texte.
  useEffect(() => {
    const updateHeight = () => {
      const navEl = navRef.current;
      if (navEl) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${navEl.getBoundingClientRect().height}px`
        );
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  // Quand le menu mobile est ouvert, la navbar doit être solide pour
  // se raccorder visuellement au panneau du menu.
  const isOverHero = HERO_ROUTES.includes(location.pathname) && !isScrolled && !menuOpen;

  const navClasses = [
    'ecg-nav',
    isScrolled ? 'is-scrolled' : '',
    isOverHero ? '' : 'is-solid',
    menuOpen ? 'is-menu-open' : '',
  ].filter(Boolean).join(' ');

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navLinks = [
    { to: '/', end: true, label: t('nav.home') },
    { to: '/presentation', label: t('nav.presentation') },
    { to: '/expertiseservices', label: t('nav.expertise') },
    { to: '/realisations', label: t('nav.realisations') },
    { to: '/contact', label: t('nav.contact') },
  ];
  const companyLinks = [
    { to: '/presentation', label: t('nav.company') },
    { to: '/presentation#equipe', label: t('nav.team') },
    { to: '/presentation#engagements', label: t('nav.commitments') },
    { to: '/presentation#identite', label: t('nav.identity') },
  ];
  const serviceLinks = [
    { to: '/expertiseservices', label: t('nav.allServices') },
    ...services.map(service => ({ to: servicePath(service), label: t(`expertiseServicesPage.pillars.${service.key}.title`) })),
  ];

  return (
    <>
      <nav ref={navRef} className={navClasses} aria-label={t('a11y.mainNav')}>
        <div className="ecg-nav__inner">
          <Link to="/" className="ecg-nav__brand" aria-label={t('a11y.brandHome')} onClick={closeMenu}>
            <img src={logo} alt="" className="ecg-nav__logo" width="160" height="141" decoding="async" />
            <span className="ecg-nav__brand-text" aria-hidden="true">ECG PLUS</span>
          </Link>

          <div className="ecg-nav__actions">
            {/* Menu desktop — inline dans la barre */}
            <ul className="ecg-nav__menu" inert={menuOpen}>
              <li><NavDropdown label={t('nav.expertiseShort')} links={serviceLinks} /></li>
              <li><NavDropdown label={t('nav.company')} links={companyLinks} /></li>
              <li><NavLink to="/realisations" className={({ isActive }) => `ecg-nav__link${isActive ? ' is-active' : ''}`}>{t('nav.realisations')}</NavLink></li>
            </ul>

            <Link to="/contact" className="ecg-nav__project" inert={menuOpen}>
              {t('nav.project')}<i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>

            <LangSwitch lang={lang} setLang={setLang} t={t} />

            <button
              ref={togglerRef}
              type="button"
              className={`ecg-nav__toggler${menuOpen ? ' is-open' : ''}`}
              aria-controls="ecg-mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
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

      {/* Menu mobile — panneau plein écran, RENDU HORS de la navbar pour
          ne pas être affecté par son backdrop-filter (containing block) */}
      <nav
        id="ecg-mobile-menu"
        ref={panelRef}
        className={`ecg-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-label={t('a11y.mobileMenu')}
        aria-hidden={!menuOpen}
      >
        <p className="ecg-mobile-menu__eyebrow">{t('nav.menuEyebrow')}</p>
        <ul className="ecg-mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                end={link.end}
                to={link.to}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }) => `ecg-mobile-menu__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ecg-mobile-menu__footer">
          <span>{t('nav.stayInTouch')}</span>
          <a href="mailto:contact@ecgplusgn.com" tabIndex={menuOpen ? 0 : -1}>contact@ecgplusgn.com</a>
          <a href="tel:+224623417510" tabIndex={menuOpen ? 0 : -1}>+224 623 41 75 10</a>
          <a href="https://wa.me/224623417510" target="_blank" rel="noopener noreferrer" aria-label={t('footer.whatsappLabel')} tabIndex={menuOpen ? 0 : -1}><i className="bi bi-whatsapp" aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedinLabel')} tabIndex={menuOpen ? 0 : -1}><i className="bi bi-linkedin" aria-hidden="true" /></a>
        </div>
      </nav>

      {/* Voile sombre derrière le menu */}
      <div
        className={`ecg-mobile-overlay${menuOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;
