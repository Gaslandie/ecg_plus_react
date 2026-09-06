import { useEffect, useRef } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/confirmation.css';

const Confirmation = () => {
  const { t } = useI18n();
  const { state } = useLocation();
  const copy = t('confirmation');
  const confirmed = state?.contactSubmitted === true;
  const titleRef = useRef(null);

  useEffect(() => {
    if (confirmed) titleRef.current?.focus({ preventScroll: true });
  }, [confirmed]);

  if (!confirmed) return <Navigate to="/contact" replace />;

  return (
    <main className="ecg-confirmation page-without-hero">
      <div className="ds-container confirmation-layout">
        <section className="confirmation-message" aria-labelledby="confirmation-title">
          <p id="confirmation-status" className="visually-hidden">{copy.status}</p>
          <h1 id="confirmation-title" ref={titleRef} tabIndex={-1} aria-describedby="confirmation-status">{copy.pageTitle}</h1>
          <p className="confirmation-message__lead">{copy.text}</p>
          <div className="confirmation-actions">
            <Link to="/" className="confirmation-text-link">{copy.back}</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Confirmation;
