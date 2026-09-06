import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services } from '../data/services';
import { projects, projectPath } from '../data/projects';
import '../styles/expertise.css';

const revealService = (id) => {
  const target = document.getElementById(id);
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({ behavior: 'instant', block: 'start' });
};

export default function ExpertiseServices() {
  const { t } = useI18n();
  const { hash } = useLocation();
  const content = t('expertiseServicesPage');

  useEffect(() => {
    // Cette page positionne ses ancres elle-même. La restauration native de
    // l’historique peut sinon déplacer la vue après le retour à une expertise.
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previousRestoration; };
  }, []);

  useEffect(() => {
    const id = hash.slice(1);
    if (id === 'expertises' || services.some(service => service.id === id)) {
      revealService(id);
    }
  }, [hash]);

  return (
    <main className="services-page page-without-hero">
      <header className="ecg-page-intro ds-container">
        <h1>{t('simple.services')}</h1>
        <p>{content.hero.subtitle}</p>
      </header>

      <div id="expertises" tabIndex={-1} className="services-domains ds-container">
        {services.map((service) => {
          const pillar = content.pillars[service.key];
          const project = projects.find(item => item.key === service.projectKey);
          return (
            <section key={service.id} className="service-domain" aria-labelledby={service.id}>
              <div className="service-domain__body">
                <h2 id={service.id} tabIndex={-1}>{pillar.shortTitle}</h2>
                <p>{t(`homePage.expertises.${service.key}`)}</p>
              </div>
              <figure className="service-domain__visual">
                <img {...(project ? project.image : service.image)}
                  sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 45vw, 550px"
                  alt={project ? t(`portfolio.details.${project.key}.imageAlt`) : pillar.imageAlt}
                  loading="lazy" decoding="async" />
                <figcaption>
                  {project ? <>
                    {project.imageKind !== 'photo' && <p className="service-domain__caption-label">{t(`portfolio.imageKinds.${project.imageKind}`)}</p>}
                    <Link to={projectPath(project)} className="service-domain__project-link">
                      <span>{t(`realisationsPage.projects.cards.${project.key}.title`)}</span>
                    </Link>
                  </> : <p className="service-domain__caption-label">{pillar.caption}</p>}
                </figcaption>
              </figure>
            </section>
          );
        })}
      </div>

      <div className="services-contact ds-container">
        <Link to="/contact" className="ecg-content-link">{t('homePage.contact.cta')}</Link>
      </div>
    </main>
  );
}
