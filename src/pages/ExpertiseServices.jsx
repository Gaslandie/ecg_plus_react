import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services } from '../data/services';
import { projects, projectPath } from '../data/projects';
import PageHeader from '../components/PageHeader.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import band768 from '../assets/img/chantier-ferraillage-768.webp';
import band1280 from '../assets/img/chantier-ferraillage-1280.webp';
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
    <main className="services-page ecg-page page-without-hero">
      <PageHeader
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        lead={content.hero.subtitle}
        actions={(
          <div className="ecg-actions">
            <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--dark">
              {content.hero.contact}<i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <a href="#expertises" className="ecg-link">
              <span>{content.hero.explore}</span><i className="bi bi-arrow-down" aria-hidden="true" />
            </a>
          </div>
        )}
        media={(
          <figure>
            <img src={band1280} srcSet={`${band768} 768w, ${band1280} 1280w`}
              sizes="(max-width: 1440px) calc(100vw - 2 * var(--ds-gutter)), 1600px" width="1280" height="720"
              alt={content.hero.imageAlt} fetchPriority="high" decoding="async" />
          </figure>
        )}
      />

      <nav className="ecg-subnav-bar" aria-label={content.navigation.label}>
        <div className="ds-container">
          <p className="ecg-subnav-bar__title">{content.navigation.title}</p>
          <ul className="ecg-subnav">
            {services.map((service, index) => (
              <li key={service.id}>
                <a href={`#${service.id}`}><span className="ecg-subnav__num">0{index + 1}</span>{content.pillars[service.key].shortTitle}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div id="expertises" tabIndex={-1} className="services-domains">
        {services.map((service, index) => {
          const pillar = content.pillars[service.key];
          const project = projects.find(item => item.key === service.projectKey);
          const visual = project ? (project.card || project.image) : service.image;
          return (
            <section key={service.id} className={`ecg-section service-domain${index % 2 ? ' is-reversed' : ''}`} aria-labelledby={service.id}>
              <div className="ds-container service-domain__grid">
                <div className="service-domain__body" data-reveal>
                  <p className="ecg-eyebrow ecg-eyebrow--indexed">
                    <span className="ecg-eyebrow__num">0{index + 1}</span><span>{t('simple.expertise')}</span>
                  </p>
                  <h2 id={service.id} tabIndex={-1} className="ecg-title">{pillar.heading}</h2>
                  <p className="ecg-lead">{pillar.lead}</p>
                  <ul className="ecg-checklist">
                    {pillar.items.map(item => (
                      <li key={item}><i className="bi bi-check2" aria-hidden="true" /><span>{item}</span></li>
                    ))}
                  </ul>
                  <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--outline-ink">
                    {pillar.contact}<i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
                <figure className="service-domain__visual" data-reveal>
                  <img {...visual} sizes="(max-width: 900px) calc(100vw - 2.5rem), 42vw"
                    alt={project ? t(`portfolio.details.${project.key}.imageAlt`) : pillar.imageAlt}
                    loading="lazy" decoding="async" />
                  <figcaption>
                    {project ? (
                      <>
                        <span className="service-domain__caption-label">{content.reference}</span>
                        <Link to={projectPath(project)} className="ecg-link">
                          <span>{t(`realisationsPage.projects.cards.${project.key}.title`)}</span><i className="bi bi-arrow-up-right" aria-hidden="true" />
                        </Link>
                      </>
                    ) : <span className="service-domain__caption-label">{pillar.caption}</span>}
                  </figcaption>
                </figure>
              </div>
            </section>
          );
        })}
      </div>

      <section id="methode" className="ecg-section ecg-section--paper services-process" aria-labelledby="process-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead eyebrow={content.process.eyebrow} title={content.process.title} titleId="process-title" lead={content.process.intro} />
          </div>
          <ol className="ecg-steps" data-reveal-group>
            {content.process.steps.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="ecg-steps__num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ecg-section services-equipment" aria-labelledby="equipment-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead eyebrow={content.equipment.eyebrow} title={content.equipment.title} titleId="equipment-title" lead={content.equipment.intro} />
          </div>
          <div className="ecg-columns" data-reveal-group>
            {content.equipment.sections.map(section => (
              <div key={section.title} className="ecg-columns__item" data-reveal>
                <h3>{section.title}</h3>
                <ul className="ecg-list">{section.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={content.finalCta.eyebrow}
        title={content.finalCta.title}
        text={content.finalCta.text}
        primary={{ to: '/contact', label: content.finalCta.primary }}
        secondary={{ to: '/realisations', label: content.finalCta.secondary }}
      />
    </main>
  );
}
