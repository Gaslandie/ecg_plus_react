import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';

// Liste des quatre expertises : sur grand écran, un visuel fixe change au
// survol ou au focus de chaque ligne ; sur mobile, chaque ligne a sa vignette.
export default function ExpertiseShowcase() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  return (
    <div className="ecg-showcase">
      <div className="ecg-showcase__media" aria-hidden="true">
        {services.map((service, index) => (
          <img key={service.key} {...service.image} sizes="(max-width: 900px) 1px, 38vw" alt=""
            loading="lazy" decoding="async" className={index === active ? 'is-active' : ''} />
        ))}
        <span className="ecg-showcase__caption">
          <span>0{active + 1}</span>{t(`expertiseServicesPage.pillars.${services[active].key}.shortTitle`)}
        </span>
      </div>

      <ol className="ecg-showcase__list" data-reveal-group>
        {services.map((service, index) => (
          <li key={service.key} className="ecg-showcase__item" data-active={index === active ? '' : undefined} data-reveal>
            <Link to={servicePath(service)} className="ecg-showcase__link"
              onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
              <span className="ecg-showcase__thumb" aria-hidden="true">
                <img {...service.image} sizes="(max-width: 900px) calc(100vw - 2.5rem), 1px" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="ecg-showcase__num">0{index + 1}</span>
              <div className="ecg-showcase__text">
                <h3 className="ecg-showcase__title">{t(`expertiseServicesPage.pillars.${service.key}.shortTitle`)}</h3>
                <p className="ecg-showcase__desc">{t(`homePage.expertises.${service.key}`)}</p>
                <span className="ecg-showcase__cta">
                  <span>{t('homePage.expertises.itemCta')}</span><i className="bi bi-arrow-right" aria-hidden="true" />
                </span>
              </div>
              <span className="ecg-showcase__arrow" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
