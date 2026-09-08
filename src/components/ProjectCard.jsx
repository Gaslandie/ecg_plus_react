import { Link } from 'react-router-dom';
import { projectPath } from '../data/projects';
import { useI18n } from '../i18n/I18nContext';

// Carte projet : photo en couverture, badge de domaine, titre et repères.
// Les visuels composites (photo + vue 3D) utilisent leur recadrage photo (project.card).
export default function ProjectCard({ project, from = '/realisations', sizes, loading = 'lazy', headingLevel = 'h3' }) {
  const { t } = useI18n();
  const Heading = headingLevel;
  const image = project.card || project.image;
  const meta = [project.location, project.period].filter(Boolean).join(' · ') || t(`portfolio.imageKinds.${project.imageKind}`);
  return (
    <article className="ecg-card">
      <Link className="ecg-card__link" to={projectPath(project)} state={{ portfolioFrom: from }}>
        <div className="ecg-card__media">
          <img {...image} sizes={sizes || '(max-width: 600px) calc(100vw - 2.5rem), (max-width: 1100px) 45vw, 30vw'}
            alt="" loading={loading} decoding="async" />
          <span className="ecg-card__badge">{t(`realisationsPage.projects.cards.${project.key}.badge`)}</span>
        </div>
        <div className="ecg-card__body">
          <div className="ecg-card__text">
            <Heading className="ecg-card__title">{t(`realisationsPage.projects.cards.${project.key}.title`)}</Heading>
            <span className="ecg-card__meta">{meta}</span>
          </div>
          <span className="ecg-card__cta">{t('homePage.projects.cardCta')}<span className="ecg-card__arrow" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span></span>
        </div>
      </Link>
    </article>
  );
}
