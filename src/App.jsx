

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import ExpertiseServices from './pages/ExpertiseServices';
import Realisations from './pages/Realisations';
import logo from './assets/img/logo.jpeg';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      once: false,
    });
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
  }, []);

  return (
    <>
      <div id="preloader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement en cours...</span>
        </div>
      </div>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/expertiseservices" element={<ExpertiseServices />} />
        <Route path="/realisations" element={<Realisations />} />
      </Routes>
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
