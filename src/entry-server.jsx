import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Presentation from './pages/Presentation.jsx';
import ExpertiseServices from './pages/ExpertiseServices.jsx';
import Realisations from './pages/Realisations.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Confirmation from './pages/Confirmation.jsx';
import NotFound from './pages/NotFound.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { getPageSeo, getPageComponentName, publicPaths, renderSeoHead } from './seo/pages.js';
import { languageFromPath, withoutLanguage } from './i18n/paths.js';

export { publicPaths };
const pages = { Home, Presentation, ExpertiseServices, Realisations, Contact, ProjectDetails, Confirmation, NotFound };
export function render(path) {
  const lang = languageFromPath(path);
  return {
    body: withoutLanguage(path) === '/confirmation' ? '' : renderToString(<StaticRouter location={path} basename={lang === 'en' ? '/en' : '/'}><I18nProvider initialLang={lang}><App pages={pages} /></I18nProvider></StaticRouter>),
    head: renderSeoHead(getPageSeo(path, lang)),
    pageComponentName: getPageComponentName(path),
  };
}
