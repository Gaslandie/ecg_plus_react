import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/portfolio.css';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <main className="portfolio-page portfolio-not-found ecg-page page-without-hero">
      <div className="ds-container portfolio-not-found__inner">
        <p className="ecg-eyebrow">404</p>
        <h1>{t('seo.notFound.heading')}</h1>
        <p className="ecg-lead">{t('seo.notFound.description')}</p>
        <Link to="/" className="ds-btn ds-btn--pill ds-btn--dark">{t('seo.notFound.back')}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
      </div>
    </main>
  );
}
