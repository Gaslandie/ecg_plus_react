import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { getPageSeo, renderSeoHead } from '../seo/pages.js';

export default function PageSeo() {
  const { pathname } = useLocation();
  const { lang } = useI18n();
  useEffect(() => {
    const seo = getPageSeo(pathname, lang);
    // Même source que le HTML préconstruit ; aucune balise canonique concurrente.
    document.head.querySelectorAll('[data-ecg-seo], title, meta[name="description"], meta[name="robots"], link[rel="canonical"]').forEach(node => node.remove());
    document.head.insertAdjacentHTML('beforeend', renderSeoHead(seo));
  }, [pathname, lang]);
  return null;
}
