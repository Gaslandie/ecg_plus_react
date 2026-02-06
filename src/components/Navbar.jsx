import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import TopBar from './TopBar';
import '../assets/css/style.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [topBarHidden, setTopBarHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || 0;
      setIsScrolled(scrollTop > 20);
      setTopBarHidden(scrollTop > 80);
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('navbarNav');
    if (!navbar) return;
    const handleShown = () => setMenuOpen(true);
    const handleHidden = () => setMenuOpen(false);
    navbar.addEventListener('shown.bs.collapse', handleShown);
    navbar.addEventListener('hidden.bs.collapse', handleHidden);
    return () => {
      navbar.removeEventListener('shown.bs.collapse', handleShown);
      navbar.removeEventListener('hidden.bs.collapse', handleHidden);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)');
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const handleNavClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
    setMenuOpen(false);
  };

  return (
  <>
  <TopBar hidden={topBarHidden} />
  <nav className={`navbar navbar-expand-lg navbar-dark fixed-top${isScrolled ? ' navbar-scrolled' : ''}${topBarHidden ? ' no-topbar' : ''}`} role="navigation" aria-label="Main navigation">
    <div className={`navbar-backdrop${menuOpen ? ' show' : ''}`} onClick={handleNavClick} aria-hidden="true"></div>
    <div className="container-fluid d-flex justify-content-between">
      <Link className="navbar-brand d-flex align-items-center" to="/" aria-label="Accueil">
        <img src={logo} alt="Logo ECG Plus" className="me-2 logo-navbar-img" loading="lazy" />
        <span className="navbar-brand-custom text-white fw-bold ms-3">ECG PLUS</span>
      </Link>
      <button
        className={`navbar-toggler premium-toggler${menuOpen ? ' is-open' : ''}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto nav-gap">
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/" end onClick={handleNavClick}>Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/presentation" onClick={handleNavClick}>Présentation</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/expertiseservices" onClick={handleNavClick}>Expertise & Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/realisations" onClick={handleNavClick}>Réalisations</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/contact" onClick={handleNavClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-progress" aria-hidden="true">
      <span style={{ width: `${scrollProgress}%` }}></span>
    </div>
    <div className="page-progress-pill" aria-hidden="true">
      <span style={{ width: `${scrollProgress}%` }}></span>
    </div>
  </nav>
  </>
  );
};

export default Navbar;
