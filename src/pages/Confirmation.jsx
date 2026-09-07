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
    <main className="ecg-confirmation ecg-page page-without-hero">
      <div className="ds-container confirmation-layout">
        <section className="confirmation-message" aria-labelledby="confirmation-title">
          <p id="confirmation-status" className="visually-hidden">{copy.status}</p>
          <span className="confirmation-message__icon" aria-hidden="true"><i className="bi bi-check2" /></span>
          <p className="ecg-eyebrow">{copy.pageTitle}</p>
          <h1 id="confirmation-title" ref={titleRef} tabIndex={-1} aria-describedby="confirmation-status">{copy.title}</h1>
          <p className="confirmation-message__lead">{copy.text}</p>
          <p className="confirmation-message__note">{copy.note}</p>
          <div className="confirmation-actions">
            <Link to="/realisations" className="ds-btn ds-btn--pill ds-btn--dark">{copy.projects}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
            <Link to="/" className="ecg-link"><span>{copy.back}</span><i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
        </section>
        <aside className="confirmation-followup" aria-labelledby="confirmation-followup-title">
          <p className="ecg-eyebrow">{copy.followup.eyebrow}</p>
          <h2 id="confirmation-followup-title">{copy.followup.title}</h2>
          <p>{copy.followup.text}</p>
          <a className="ecg-link" href={`mailto:contact@ecgplusgn.com?subject=${encodeURIComponent(copy.followup.subject)}`}>
            <span>contact@ecgplusgn.com</span><i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
          <p className="confirmation-followup__phone">{copy.followup.phoneLabel} <a href="tel:+224623417510">+224 623 41 75 10</a></p>
        </aside>
      </div>
    </main>
  );
};

export default Confirmation;
