import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import PageHeader from '../components/PageHeader.jsx';
import CtaBand from '../components/CtaBand.jsx';
import '../styles/portfolio.css';

export default function Realisations() {
  const { t } = useI18n();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('categorie');
  const category = projectCategories.includes(requested) ? requested : 'all';
  const visible = projects.filter(project => category === 'all' || project.category === category);

  const changeCategory = (next) => {
    setSearchParams(current => {
      const updated = new URLSearchParams(current);
      if (next === 'all') updated.delete('categorie');
      else updated.set('categorie', next);
      return updated;
    }, { preventScrollReset: true });
  };

  return (
    <main className="portfolio-page ecg-page page-without-hero">
      <PageHeader
        eyebrow={t('portfolio.eyebrow')}
        title={t('portfolio.title')}
        lead={t('portfolio.intro')}
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
            <fieldset className="portfolio-filters">
              <legend className="visually-hidden">{t('portfolio.filterLabel')}</legend>
              <div className="portfolio-filters__buttons">
                {projectCategories.map(value => (
                  <button key={value} type="button" className="ecg-chip" aria-pressed={category === value}
                    aria-controls="portfolio-results" onClick={() => changeCategory(value)}>
                    {t(`portfolio.categories.${value}`)}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
            {visible.length} {t(visible.length === 1 ? 'portfolio.result' : 'portfolio.results')}
          </p>
          <ul className="ecg-card-grid ecg-card-grid--featured" id="portfolio-results" data-reveal-group>
            {visible.map((project, index) => (
              <li key={project.key} data-reveal>
                <ProjectCard project={project} from={`${location.pathname}${location.search}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes={index === 0 ? '(max-width: 600px) calc(100vw - 2.5rem), (max-width: 1100px) calc(100vw - 12vw), 56vw' : undefined} />
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
