import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => (
  <main className="confirmation-section d-flex align-items-center justify-content-center" style={{minHeight: '70vh', background: 'var(--gas-light)'}}>
    <div className="container text-center py-5">
      <div className="confirmation-card bg-white shadow-lg rounded-4 p-5 mx-auto" style={{maxWidth: 480}}>
        <h1 className="display-5 fw-bold text-success mb-4">
          <i className="bi bi-check-circle-fill me-2"></i>Merci !
        </h1>
        <p className="lead mb-4">Votre message a bien été envoyé.<br/>Notre équipe vous répondra dans les meilleurs délais.</p>
        <Link to="/" className="btn btn-custom btn-lg">Retour à l'accueil</Link>
      </div>
    </div>
  </main>
);

export default Confirmation;
