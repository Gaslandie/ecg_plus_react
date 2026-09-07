import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

// Bandeau d'invitation au contact, partagé par les pages.
export default function CtaBand({ eyebrow, title, text, primary, secondary, details = false, id = 'cta-title' }) {
  const { t } = useI18n();
  return (
    <section className="ecg-cta" aria-labelledby={id}>
      <div className="ds-container ecg-cta__inner">
        <div className="ecg-cta__body" data-reveal>
          {eyebrow && <p className="ecg-eyebrow ecg-eyebrow--light">{eyebrow}</p>}
          <h2 id={id} className="ecg-cta__title">{title}</h2>
          {text && <p className="ecg-cta__text">{text}</p>}
          <div className="ecg-cta__actions">
            <Link to={primary.to} className="ds-btn ds-btn--pill ds-btn--accent">
              {primary.label}<i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="ecg-link ecg-link--light">
                <span>{secondary.label}</span><i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
        {details && (
          <dl className="ecg-cta__details" data-reveal>
            <div>
              <dt>{t('homePage.contact.phoneLabel')}</dt>
              <dd><a href="tel:+224623417510">+224 623 41 75 10</a></dd>
            </div>
            <div>
              <dt>{t('homePage.contact.emailLabel')}</dt>
              <dd><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></dd>
            </div>
            <div>
              <dt>{t('homePage.contact.addressLabel')}</dt>
              <dd>{t('homePage.contact.addressValue')}</dd>
            </div>
          </dl>
        )}
      </div>
    </section>
  );
}
