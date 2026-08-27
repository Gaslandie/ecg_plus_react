import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/contact.css';

function Confirmation() {
  const { t } = useI18n();

  return (
    <main className="ecg-confirmation-page">
      <div className="ecg-confirmation-page__lines" aria-hidden="true" />
      <div className="ds-container ecg-confirmation-page__layout">
        <section className="ecg-confirmation-message" data-aos="fade-up">
          <div className="ecg-confirmation-message__icon">
            <i className="bi bi-check2" aria-hidden="true" />
          </div>
          <span className="ds-eyebrow">{t('confirmation.eyebrow')}</span>
          <h1>{t('confirmation.title')}</h1>
          <p>{t('confirmation.text')}</p>
          <div className="ecg-confirmation-message__actions">
            <Link to="/" className="ds-btn ds-btn--accent">
              {t('confirmation.back')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/realisations" className="ds-btn ds-btn--ghost">
              {t('confirmation.projects')}
            </Link>
          </div>
        </section>

        <aside className="ecg-confirmation-next" data-aos="fade-up" data-aos-delay="100">
          <span className="ecg-confirmation-next__eyebrow">{t('confirmation.nextTitle')}</span>
          <div className="ecg-confirmation-next__steps">
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <span>0{index}</span>
                <p>{t(`confirmation.step${index}`)}</p>
              </div>
            ))}
          </div>
          <div className="ecg-confirmation-next__contact">
            <span>{t('confirmation.urgent')}</span>
            <a href="tel:+224623417510">
              +224 623 41 75 10
              <i className="bi bi-telephone-outbound" aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Confirmation;
