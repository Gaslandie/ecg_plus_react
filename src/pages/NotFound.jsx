import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/portfolio.css';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <main className="portfolio-page portfolio-not-found page-without-hero ds-container">
      <p className="ds-eyebrow">404</p>
      <h1>{t('seo.notFound.heading')}</h1>
      <p>{t('seo.notFound.description')}</p>
      <Link to="/" className="ds-btn ds-btn--primary">{t('seo.notFound.back')}</Link>
    </main>
  );
}
