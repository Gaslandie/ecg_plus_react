import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';

const TopBar = () => {
  const [visible, setVisible] = useState(typeof window !== 'undefined' ? window.scrollY === 0 : true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
        document.body.classList.remove('topbar-hidden');
      } else {
        setVisible(false);
        document.body.classList.add('topbar-hidden');
      }
    };

    // initialize state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('topbar-hidden');
    };
  }, []);

  return (
    <div className={`top-bar py-1 px-4 d-flex align-items-center justify-content-between ${visible ? '' : 'topbar-hidden'}`}>
      <div className="topbar-contact d-flex align-items-center">
        <span className="me-3"><i className="bi bi-envelope"></i> <a href="mailto:daoudafofanadf66@gmail.com" className="topbar-link">daoudafofanadf66@gmail.com</a></span>
        <span className="me-3"><i className="bi bi-telephone"></i> <a href="tel:+224623966278" className="topbar-link">+224 623 96 62 78</a></span>
        <span className="me-3"><i className="bi bi-whatsapp"></i> <a href="https://wa.me/224623966278" target="_blank" rel="noopener noreferrer" className="topbar-link">WhatsApp</a></span>
      </div>
      <div className="topbar-social d-flex align-items-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mx-2"><i className="bi bi-facebook"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="mx-2"><i className="bi bi-twitter"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-2"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  );
};

export default TopBar;
