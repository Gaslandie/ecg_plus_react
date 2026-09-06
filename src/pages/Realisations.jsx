import { useLocation, useSearchParams } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
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
    <main className="portfolio-page page-without-hero">
      <header className="ecg-page-intro ds-container">
        <h1>{t('simple.projects')}</h1>
        <p>{t('portfolio.intro')}</p>
      </header>
      <section className="portfolio-catalogue ds-container" aria-labelledby="portfolio-list-title">
        <h2 id="portfolio-list-title" className="visually-hidden">{t('portfolio.listTitle')}</h2>
        <fieldset className="portfolio-filters">
          <legend className="visually-hidden">{t('portfolio.filterLabel')}</legend>
          <div className="portfolio-filters__buttons">
            {projectCategories.map(value => (
              <button key={value} type="button" aria-pressed={category === value}
                aria-controls="portfolio-results" onClick={() => changeCategory(value)}>
                {t(`portfolio.categories.${value}`)}
              </button>
            ))}
          </div>
        </fieldset>
        <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
          {visible.length} {t(visible.length === 1 ? 'portfolio.result' : 'portfolio.results')}
        </p>
        <ul className="portfolio-grid" id="portfolio-results">
          {visible.map(project => (
            <li key={project.key}>
              <ProjectCard project={project} from={`${location.pathname}${location.search}`} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
