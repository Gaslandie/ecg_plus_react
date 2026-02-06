import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import '../assets/css/style.css';

const Navbar = () => {
  const handleNavClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" data-aos="fade-down" role="navigation" aria-label="Main navigation">
    <div className="container-fluid d-flex justify-content-between">
      <Link className="navbar-brand d-flex align-items-center" to="/" aria-label="Accueil">
        <img src={logo} alt="Logo ECG Plus" className="me-2 logo-navbar-img" loading="lazy" />
        <span className="navbar-brand-custom text-white fw-bold ms-3">ECG PLUS</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/" end onClick={handleNavClick}>Accueil</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/presentation" onClick={handleNavClick}>Présentation</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/expertiseservices" onClick={handleNavClick}>Expertise & Services</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/realisations" onClick={handleNavClick}>Réalisations</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/contact" onClick={handleNavClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
