import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Photo from '../components/Photo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import CtaBand from '../components/CtaBand.jsx';
import '../styles/portfolio.css';

export default function Realisations() {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <main className="portfolio-page ecg-page page-without-hero">
      <PageHeader
        eyebrow={t('portfolio.eyebrow')}
        title={t('portfolio.title')}
        lead={t('portfolio.intro')}
        media={<Photo image={projects[0].image} alt={t('portfolio.details.kankan.imageAlt')} caption={t('referenceUi.projectsCaption')} priority zoom={false} />}
        actions={(
          <Link to="/contact" className="ds-btn ds-btn--pill ds-btn--dark">
            {t('portfolio.introCta')}<i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        )}
      />

      <section className="ecg-section portfolio-catalogue" aria-labelledby="portfolio-list-title">
        <div className="ds-container">
          <div className="portfolio-toolbar">
            <h2 id="portfolio-list-title" className="portfolio-toolbar__title">
              <span className="ecg-eyebrow">{t('portfolio.listTitle')}</span>
            </h2>
          </div>
          <p className="portfolio-count">
            {projects.length} {t(projects.length === 1 ? 'portfolio.result' : 'portfolio.results')}
          </p>
          <ul className="ecg-card-grid" id="portfolio-results" data-reveal-group>
            {projects.map((project, index) => (
              <li key={project.key} data-reveal>
                <ProjectCard project={project} from={`${location.pathname}${location.search}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 575px) calc(100vw - 40px), (max-width: 1100px) 45vw, 30vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow={t('portfolio.contactEyebrow')}
        title={t('portfolio.contactTitle')}
        text={t('portfolio.contactText')}
        primary={{ to: '/contact', label: t('portfolio.contactCta') }}
        secondary={{ to: '/expertiseservices', label: t('portfolio.discoverExpertise') }}
      />
    </main>
  );
}
