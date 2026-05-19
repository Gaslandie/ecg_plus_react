import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/contact.css';

const Confirmation = () => {
  const { t } = useI18n();
  return (
    <main className="ecg-confirmation">
      <div className="ecg-confirmation__card" data-aos="fade-up">
        <div className="ecg-confirmation__icon">
          <i className="bi bi-check2" aria-hidden="true"></i>
        </div>
        <h1>{t('confirmation.title')}</h1>
        <p>
          {t('confirmation.text').split('\n').map((line, idx, arr) => (
            <React.Fragment key={idx}>
              {line}
              {idx < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <Link to="/" className="ds-btn ds-btn--primary">
          {t('confirmation.back')}
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </main>
  );
};

export default Confirmation;
