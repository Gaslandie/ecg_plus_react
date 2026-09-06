import { Link, useLocation, useParams } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/portfolio.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const { t } = useI18n();
  const project = projects.find(item => item.slug === slug);
  const title = project ? t(`realisationsPage.projects.cards.${project.key}.title`) : t('portfolio.notFoundTitle');
  const requestedFrom = location.state?.portfolioFrom;
  const backTo = typeof requestedFrom === 'string' && /^\/realisations(?:\?|$)/.test(requestedFrom)
    ? requestedFrom : '/realisations';

  if (!project) {
    return (
      <main className="portfolio-page portfolio-not-found page-without-hero ds-container">
        <p className="ds-eyebrow">404</p>
        <h1>{title}</h1>
        <p>{t('portfolio.notFoundText')}</p>
        <Link to="/realisations" className="ds-btn ds-btn--primary">{t('portfolio.backToProjects')}</Link>
      </main>
    );
  }

  const key = `portfolio.details.${project.key}`;
  const related = projects.filter(item => item.key !== project.key)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 2);

  return (
    <main className="portfolio-page page-without-hero">
      <header className="ecg-page-intro ds-container">
        <h1>{title}</h1>
        <p className="project-intro__lead">{t(`${key}.intro`)}</p>
      </header>
      <section className="project-overview ds-container" aria-labelledby="project-overview-title">
        <figure className="project-visual">
          <img {...project.image} sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 62vw, 800px"
            alt={t(`${key}.imageAlt`)} fetchPriority="high" decoding="async" />
          <figcaption>
            <span>{t(`portfolio.imageKinds.${project.imageKind}`)}</span>
            <a href={project.image.src} target="_blank" rel="noopener noreferrer">
              {t('portfolio.enlargeImage')} <i className="bi bi-arrow-up-right" aria-hidden="true" />
              <span className="visually-hidden"> — {t('portfolio.newTab')}</span>
            </a>
          </figcaption>
        </figure>
        <div className="project-overview__body">
          <h2 id="project-overview-title" className="visually-hidden">{t('portfolio.overviewTitle')}</h2>
          <dl className="project-facts">
            <div><dt>{t('portfolio.typeLabel')}</dt><dd>{t(`realisationsPage.projects.cards.${project.key}.badge`)}</dd></div>
            {project.location && <div><dt>{t('portfolio.locationLabel')}</dt><dd>{project.location}</dd></div>}
            {project.period && <div><dt>{t('portfolio.periodLabel')}</dt><dd>{project.period}</dd></div>}
          </dl>
          <Link to="/contact" className="ecg-content-link">
            {t('portfolio.detailContact')}
          </Link>
        </div>
      </section>
      <section className="project-related ds-container" aria-labelledby="related-projects-title">
        <div className="project-related__head">
          <h2 id="related-projects-title">{t('portfolio.relatedTitle')}</h2>
        </div>
        <ul className="portfolio-grid">
          {related.map(item => <li key={item.key}><ProjectCard project={item} from={backTo} /></li>)}
        </ul>
        <div className="ecg-section-end">
          <Link className="ecg-content-link" to={backTo}>{t('portfolio.backToProjects')}</Link>
        </div>
      </section>
    </main>
  );
}
