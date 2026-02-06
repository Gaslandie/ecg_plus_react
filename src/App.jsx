

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import ExpertiseServices from './pages/ExpertiseServices';
import Realisations from './pages/Realisations';
import Confirmation from './pages/Confirmation';
import logo from './assets/img/logo.jpeg';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: window.matchMedia('(max-width: 768px)').matches ? 650 : 900,
      easing: 'ease-out-cubic',
      once: false,
    });

    const setNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${navbar.getBoundingClientRect().height}px`
        );
      }
    };

    setNavbarHeight();
    window.addEventListener('resize', setNavbarHeight);
    // Hide preloader after page load
    const preloader = document.getElementById('preloader');
    if (preloader) {
      const hidePreloader = () => {
        setTimeout(() => {
          if (preloader) {
            preloader.classList.add('preloader-hidden');
            // after the opacity transition, remove from flow
            setTimeout(() => {
              preloader.style.display = 'none';
            }, 600);
          }
        }, 500);
      };
      if (document.readyState === 'complete') {
        hidePreloader();
      } else {
        window.addEventListener('load', hidePreloader);
      }
    }

    return () => {
      window.removeEventListener('resize', setNavbarHeight);
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
      <div id="preloader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement en cours...</span>
        </div>
      </div>
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

      <div className="modal fade" id="logoModal" tabIndex="-1" aria-labelledby="logoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body p-0 text-center">
              <img src={logo} alt="Logo ECG Plus Agrandissement" className="img-fluid logo-modal-zoom" />
              <button type="button" className="btn-close btn-close-white mt-3" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
