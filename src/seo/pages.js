import { projects, projectPath } from '../data/projects.js';
import { translations } from '../i18n/translations.js';
import shareImage from '../assets/img/bgAccueil-1280.webp';
import logo from '../assets/img/logo-160.webp';

export const SITE_URL = 'https://ecgplusgn.com';
export const publicPaths = ['/', '/presentation', '/expertiseservices', '/realisations', '/contact', ...projects.map(projectPath)];
export const normalizePath = path => path.replace(/\/+$/, '') || '/';
const absolute = path => new URL(path, SITE_URL).href;

export function getPageSeo(pathname, lang = 'fr') {
  const path = normalizePath(pathname);
  const dict = translations[lang] || translations.fr;
  const pageKey = { '/': 'home', '/presentation': 'presentation', '/expertiseservices': 'services', '/realisations': 'projects', '/contact': 'contact', '/confirmation': 'confirmation' }[path];
  const project = projects.find(item => projectPath(item) === path);
  const title = project ? `${dict.realisationsPage.projects.cards[project.key].title} | ECG PLUS` : dict.seo[pageKey || 'notFound'].title;
  const description = project ? dict.portfolio.details[project.key].intro : dict.seo[pageKey || 'notFound'].description;
  const indexable = publicPaths.includes(path);
  const canonical = indexable ? absolute(path) : null;
  const image = absolute(project?.image.src || shareImage);
  const organization = {
    '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'ECG PLUS SARL', url: SITE_URL,
    logo: absolute(logo), email: 'contact@ecgplusgn.com', telephone: '+224623417510',
    address: { '@type': 'PostalAddress', addressLocality: 'Manéah, Coyah', addressCountry: 'GN' },
  };
  const structuredData = indexable ? { '@context': 'https://schema.org', '@graph': [organization, {
    '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description,
    inLanguage: lang, publisher: { '@id': organization['@id'] },
    ...(project ? { primaryImageOfPage: { '@type': 'ImageObject', url: image } } : {}),
  }, ...(project ? [{
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.nav.home, item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: dict.nav.realisations, item: `${SITE_URL}/realisations` },
      { '@type': 'ListItem', position: 3, name: dict.realisationsPage.projects.cards[project.key].title, item: canonical },
    ],
  }] : [])] } : null;
  return { title, description, canonical, image, imageAlt: project ? dict.portfolio.details[project.key].imageAlt : dict.seo.imageAlt, lang, indexable, structuredData };
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
export const serializeJson = value => JSON.stringify(value).replace(/</g, '\\u003c');

export function renderSeoHead(seo) {
  const meta = (name, content, property = false) => `<meta data-ecg-seo ${property ? 'property' : 'name'}="${name}" content="${escapeHtml(content)}" />`;
  return [
    `<title>${escapeHtml(seo.title)}</title>`, meta('description', seo.description),
    meta('robots', seo.indexable ? 'index,follow,max-image-preview:large' : 'noindex,follow'),
    seo.canonical && `<link data-ecg-seo rel="canonical" href="${seo.canonical}" />`,
    meta('og:type', 'website', true), meta('og:site_name', 'ECG PLUS', true), meta('og:title', seo.title, true),
    meta('og:description', seo.description, true), seo.canonical && meta('og:url', seo.canonical, true),
    meta('og:image', seo.image, true), meta('og:image:alt', seo.imageAlt, true),
    meta('og:locale', seo.lang === 'en' ? 'en_GB' : 'fr_FR', true),
    meta('twitter:card', 'summary_large_image'), meta('twitter:title', seo.title),
    meta('twitter:description', seo.description), meta('twitter:image', seo.image), meta('twitter:image:alt', seo.imageAlt),
    seo.structuredData && `<script data-ecg-seo type="application/ld+json">${serializeJson(seo.structuredData)}</script>`,
  ].filter(Boolean).join('\n    ');
}
