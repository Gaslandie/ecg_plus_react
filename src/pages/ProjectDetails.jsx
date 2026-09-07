import { Link, useLocation, useParams } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import PageHeader from '../components/PageHeader.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
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
      <main className="portfolio-page portfolio-not-found ecg-page page-without-hero">
        <div className="ds-container portfolio-not-found__inner">
          <p className="ecg-eyebrow">404</p>
          <h1>{title}</h1>
          <p className="ecg-lead">{t('portfolio.notFoundText')}</p>
          <Link to="/realisations" className="ds-btn ds-btn--pill ds-btn--dark">
            {t('portfolio.backToProjects')}<i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  const key = `portfolio.details.${project.key}`;
  const related = projects.filter(item => item.key !== project.key)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 3);

  return (
    <main className="portfolio-page ecg-page page-without-hero">
      <PageHeader
        breadcrumb={(
          <nav aria-label={t('portfolio.breadcrumb')}>
            <ol className="ecg-breadcrumb">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to={backTo}>{t('nav.realisations')}</Link></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        )}
        eyebrow={t(`realisationsPage.projects.cards.${project.key}.badge`)}
        title={title}
        lead={t(`${key}.intro`)}
        actions={(
          <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--dark">
            {t('portfolio.detailContact')}<i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        )}
      />

      <section className="ecg-section project-overview" aria-labelledby="project-overview-title">
        <div className="ds-container project-overview__grid">
          <figure className="project-visual" data-reveal>
            <div className="project-visual__frame">
              <img {...project.image} sizes="(max-width: 900px) calc(100vw - 2.5rem), 56vw"
                alt={t(`${key}.imageAlt`)} fetchPriority="high" decoding="async" />
            </div>
            <figcaption>
              <span>{t(`portfolio.imageKinds.${project.imageKind}`)}</span>
              <a href={project.image.src} target="_blank" rel="noopener noreferrer">
                {t('portfolio.enlargeImage')} <i className="bi bi-arrow-up-right" aria-hidden="true" />
                <span className="visually-hidden"> — {t('portfolio.newTab')}</span>
              </a>
            </figcaption>
          </figure>
          <aside className="project-sheet" data-reveal>
            <h2 id="project-overview-title" className="project-sheet__title">{t('portfolio.overviewTitle')}</h2>
            <dl className="ecg-facts">
              <div><dt>{t('portfolio.typeLabel')}</dt><dd>{t(`realisationsPage.projects.cards.${project.key}.badge`)}</dd></div>
              {project.location && <div><dt>{t('portfolio.locationLabel')}</dt><dd>{project.location}</dd></div>}
              {project.period && <div><dt>{t('portfolio.periodLabel')}</dt><dd>{project.period}</dd></div>}
              <div><dt>{t('portfolio.visualLabel')}</dt><dd>{t(`portfolio.imageKinds.${project.imageKind}`)}</dd></div>
            </dl>
            <p className="project-sheet__text">{t(`${key}.description`)}</p>
            <Link to="/expertiseservices" className="ecg-link">
              <span>{t('portfolio.discoverExpertise')}</span><i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="ecg-section ecg-section--paper project-related" aria-labelledby="related-projects-title">
        <div className="ds-container">
          <div data-reveal>
            <SectionHead
              eyebrow={t('nav.realisations')}
              title={t('portfolio.relatedTitle')}
              titleId="related-projects-title"
              action={(
                <Link className="ecg-link" to={backTo}>
                  <span>{t('portfolio.backToProjects')}</span><i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              )}
            />
          </div>
          <ul className="ecg-card-grid" data-reveal-group>
            {related.map(item => <li key={item.key} data-reveal><ProjectCard project={item} from={backTo} /></li>)}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow={t('portfolio.contactEyebrow')}
        title={t('portfolio.contactTitle')}
        text={t('portfolio.contactText')}
        primary={{ to: '/contact', label: t('portfolio.contactCta') }}
      />
    </main>
  );
}
