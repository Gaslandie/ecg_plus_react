import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import '../assets/css/style.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" data-aos="fade-down" role="navigation" aria-label="Main navigation">
    <div className="container-fluid d-flex justify-content-between">
      <a className="navbar-brand d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#logoModal" role="button" aria-label="Voir le logo agrandi">
        <img src={logo} alt="Logo ECG Plus" height="100" className="me-2 logo-navbar-img" loading="lazy" />
        <span className="navbar-brand-custom text-white fw-bold ms-3">ECG PLUS</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/presentation">Présentation</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/expertiseservices">Expertise & Services</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/realisations">Réalisations</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
