import { Link } from 'react-router-dom';
import { projectPath } from '../data/projects';
import { useI18n } from '../i18n/I18nContext';

export default function ProjectCard({ project, from = '/realisations' }) {
  const { t } = useI18n();
  return (
    <article className="portfolio-card">
      <Link className="portfolio-card__link" to={projectPath(project)} state={{ portfolioFrom: from }}>
        <div className="portfolio-card__media">
          <img {...project.image} sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 1000px) 45vw, 390px"
            alt="" loading="lazy" decoding="async" />
        </div>
        <h3>{t(`realisationsPage.projects.cards.${project.key}.title`)}</h3>
        {project.imageKind !== 'photo' && <p className="portfolio-card__caption">{t(`portfolio.imageKinds.${project.imageKind}`)}</p>}
      </Link>
    </article>
  );
}
