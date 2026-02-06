import React from 'react';

const TopBar = ({ hidden }) => (
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
          <i className="bi bi-clock-fill"></i>
          <span>Lun–Ven 8h–17h</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
