

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import ExpertiseServices from './pages/ExpertiseServices';
import Realisations from './pages/Realisations';
import Confirmation from './pages/Confirmation';
import bgAccueilHero from './assets/img/bgAccueil.webp';
import heroPagesImg from './assets/img/hero-pages.webp';
import { useI18n } from './i18n/I18nContext.jsx';

const SEO_ROUTE_KEYS = {
  '/': 'home',
  '/presentation': 'presentation',
  '/expertiseservices': 'expertise',
  '/realisations': 'realisations',
  '/contact': 'contact',
  '/confirmation': 'confirmation',
};

function App() {
  const location = useLocation();
  const { t } = useI18n();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  }, [location.pathname]);

  useEffect(() => {
    const routeKey = SEO_ROUTE_KEYS[location.pathname] || 'home';
    const title = t(`seo.${routeKey}.title`);
    const description = t(`seo.${routeKey}.description`);
    const isConfirmation = routeKey === 'confirmation';

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    descriptionMeta?.setAttribute('content', description);

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}${location.pathname}`);

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', isConfirmation ? 'noindex, nofollow' : 'index, follow');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}${location.pathname}`);
  }, [location.pathname, t]);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: window.matchMedia('(max-width: 768px)').matches ? 650 : 900,
      easing: 'ease-out-cubic',
      once: true,
    });

    const setNavbarHeight = () => {
      const navbar = document.querySelector('.ecg-nav');
      if (navbar) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${navbar.getBoundingClientRect().height}px`
        );
      }
    };

    setNavbarHeight();
    window.addEventListener('resize', setNavbarHeight);

    return () => {
      window.removeEventListener('resize', setNavbarHeight);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Préchargement des hero images en idle pour que la navigation client-side
  // soit instantanée (l'image est déjà en cache navigateur quand on arrive)
  useEffect(() => {
    const heroes = [bgAccueilHero, heroPagesImg];
    const preload = () => {
      heroes.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    let id;
    if ('requestIdleCallback' in window) {
      id = window.requestIdleCallback(preload, { timeout: 2000 });
    } else {
      id = window.setTimeout(preload, 1500);
    }
    return () => {
      if ('cancelIdleCallback' in window && id) {
        window.cancelIdleCallback(id);
      } else if (id) {
        window.clearTimeout(id);
      }
    };
  }, []);

  useEffect(() => {
    const applyAosDefaults = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (!section.hasAttribute('data-aos')) {
          section.setAttribute('data-aos', 'fade-up');
          section.setAttribute('data-aos-delay', '100');
          section.setAttribute('data-aos-duration', '900');
          section.setAttribute('data-aos-auto', 'true');
        }
      });
    };

    const applyAosMobileOverride = () => {
      if (!window.matchMedia('(max-width: 768px)').matches) return;
      const animatedNodes = document.querySelectorAll('[data-aos]');
      animatedNodes.forEach((node) => {
        node.setAttribute('data-aos', 'fade-up');
        node.setAttribute('data-aos-delay', '0');
        node.setAttribute('data-aos-duration', '650');
      });
    };

    const applyAosStagger = () => {
      if (window.matchMedia('(max-width: 768px)').matches) return;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const autoNodes = Array.from(section.querySelectorAll('[data-aos-auto="true"]'))
          .filter((node) => node.tagName !== 'SECTION');
        if (!autoNodes.length) return;

        const sectionRect = section.getBoundingClientRect();
        const items = autoNodes.map((node) => {
          const rect = node.getBoundingClientRect();
          const top = rect.top - sectionRect.top;
          return {
            node,
            top,
            left: rect.left,
          };
        });

        const rows = new Map();
        items.forEach((item) => {
          const key = Math.round(item.top / 24) * 24;
          if (!rows.has(key)) rows.set(key, []);
          rows.get(key).push(item);
        });

        const rowKeys = Array.from(rows.keys()).sort((a, b) => a - b);
        rowKeys.forEach((key, rowIndex) => {
          const rowItems = rows.get(key).sort((a, b) => a.left - b.left);
          rowItems.forEach((item, colIndex) => {
            const delay = Math.min(colIndex * 90 + rowIndex * 60, 420);
            item.node.setAttribute('data-aos-delay', String(delay));
          });
        });
      });
    };

    const applyAosEnhancements = () => {
      const selectors = [
        '.card',
        '.service-modern-card',
        '.realisation-modern-card',
        '.expertise-card',
        '.expertise-block',
        '.value-card',
        '.stat-card',
        '.presentation-highlight',
        '.gallery-item',
        '.equipment-card',
        '.process-step',
        '.guarantee-item',
        '.team-category',
        '.team-placeholder',
        '.certification-card',
        '.stats-card',
        '.region-card',
        '.process-timeline-item',
      ];
      const animations = ['fade-up', 'zoom-in', 'fade-right', 'fade-left'];
      const nodes = document.querySelectorAll(selectors.join(','));
      let index = 0;
      nodes.forEach((node) => {
        if (node.hasAttribute('data-aos')) return;
        const animation = window.matchMedia('(max-width: 768px)').matches ? 'fade-up' : animations[index % animations.length];
        node.setAttribute('data-aos', animation);
        node.setAttribute('data-aos-delay', window.matchMedia('(max-width: 768px)').matches ? '0' : '0');
        node.setAttribute('data-aos-duration', window.matchMedia('(max-width: 768px)').matches ? '650' : '900');
        node.setAttribute('data-aos-auto', 'true');
        index += 1;
      });
    };

    applyAosDefaults();
    applyAosEnhancements();
    applyAosStagger();
    applyAosMobileOverride();
    const timer = window.setTimeout(() => {
      applyAosDefaults();
      applyAosEnhancements();
      applyAosStagger();
      applyAosMobileOverride();
      AOS.refreshHard();
    }, 60);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertiseservices" element={<ExpertiseServices />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
      <Footer />
      <button
        type="button"
        className={`back-to-top${showBackToTop ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('a11y.backToTop')}
      >
        ↑
      </button>
    </>
  );
}

export default App;
