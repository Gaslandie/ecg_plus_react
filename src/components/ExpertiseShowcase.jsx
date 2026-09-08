import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';

export default function ExpertiseShowcase() {
  const { t } = useI18n();
  return (
    <ol className="ecg-directory" data-reveal-group>
      {services.map((service, index) => (
        <li key={service.key} data-reveal>
          <Link to={servicePath(service)} className="ecg-directory__row">
            <span className="ecg-directory__number" aria-hidden="true">0{index + 1}</span>
            <div className="ecg-directory__photo"><img {...service.image} sizes="(max-width: 575px) calc(100vw - 40px), 240px" alt="" loading="lazy" decoding="async" /></div>
            <div className="ecg-directory__copy">
              <span className="ecg-directory__label">ECG PLUS <span> / 0{index + 1}</span></span>
              <h3>{t(`expertiseServicesPage.pillars.${service.key}.title`)}</h3>
              <p>{t(`homePage.expertises.${service.key}`)}</p>
            </div>
            <span className="ecg-round-arrow" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
