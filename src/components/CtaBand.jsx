import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import study from '../assets/img/etudes-800.webp';

export default function CtaBand({ eyebrow, title, text, primary, secondary, details = false, id = 'cta-title' }) {
  const { t } = useI18n();
  return (
    <section className="ecg-cta" aria-labelledby={id}>
      <div className="ds-container">
        <div className="ecg-cta__inner">
          <div className="ecg-cta__photo"><img src={study} width="800" height="534" alt={t('referenceUi.contactImageAlt')} loading="lazy" decoding="async" /></div>
          <div className="ecg-cta__body" data-reveal>
            {eyebrow && <p className="ecg-eyebrow ecg-eyebrow--light">{eyebrow}</p>}
            <h2 id={id} className="ecg-cta__title">{title}</h2>
            {text && <p className="ecg-cta__text">{text}</p>}
            <div className="ecg-cta__actions">
              <Link to={primary.to} className="ds-btn ds-btn--light">{primary.label}<i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
              {secondary ? <Link to={secondary.to} className="ecg-link ecg-link--light"><span>{secondary.label}</span><i className="bi bi-arrow-right" aria-hidden="true" /></Link>
                : <a className="ecg-cta__phone" href="tel:+224623417510"><i className="bi bi-telephone-fill" aria-hidden="true" />+224 623 41 75 10</a>}
            </div>
            {details && <div className="ecg-cta__details">
              <span><i className="bi bi-geo-alt-fill" aria-hidden="true" />{t('homePage.contact.addressValue')}</span>
              <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com<i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
