import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageSeo from './components/PageSeo.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import ExpertiseServices from './pages/ExpertiseServices';
import Realisations from './pages/Realisations';
import ProjectDetails from './pages/ProjectDetails';
import Confirmation from './pages/Confirmation';
import { useI18n } from './i18n/I18nContext.jsx';
import { useReveal } from './hooks/useReveal.js';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const location = useLocation();
  const { t } = useI18n();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const previousPath = useRef(location.pathname);

  // Révélation au défilement des blocs [data-reveal] (recalculée à chaque navigation, filtres compris).
  useReveal(location.key);

  useEffect(() => {
    const changedPage = previousPath.current !== location.pathname;
    previousPath.current = location.pathname;
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'instant' });
    } else if (changedPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const focusTarget = document.getElementById('confirmation-title') || document.getElementById('main-content');
      focusTarget?.focus({ preventScroll: true });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById('main-content')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <>
      <PageSeo />
      <a className="ds-skip-link" href="#main-content" data-menu-inert="">
        {t('a11y.skipToContent')}
      </a>
      <Navbar />
      <div
        id="main-content"
        className="page-transition"
        key={location.pathname}
        tabIndex={-1}
        data-menu-inert=""
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertiseservices" element={<ExpertiseServices />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:slug" element={<ProjectDetails />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <button
        type="button"
        className={`back-to-top${showBackToTop ? ' show' : ''}`}
        onClick={scrollToTop}
        aria-label={t('a11y.backToTop')}
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        data-menu-inert=""
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>
    </>
  );
}

export default App;
