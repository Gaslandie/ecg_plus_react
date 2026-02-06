import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';

const TopBar = ({ hidden }) => {
  const { lang, setLang } = useI18n();

  return (
    <div className={`top-bar${hidden ? ' hidden' : ''}`}>
      <div className="container">
        <div className="top-bar-content">
          <div className="top-bar-social">
            <a href="mailto:contact@ecgplusgn.com" aria-label="Email ECG PLUS">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://wa.me/224623966278" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ECG PLUS">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/daouda-fofana-1b01261a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ECG PLUS">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <div className="top-bar-contact">
            <a href="tel:+224623966278">
              <i className="bi bi-telephone-fill"></i>
              <span>+224 623 96 62 78</span>
            </a>
            <a href="mailto:contact@ecgplusgn.com" className="d-none d-md-inline-flex">
              <i className="bi bi-envelope"></i>
              <span>contact@ecgplusgn.com</span>
            </a>
          </div>

        <div className="top-bar-hours d-none d-lg-flex">
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn${lang === 'fr' ? ' active' : ''}`}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
