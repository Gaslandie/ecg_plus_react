
import { lazy, StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/fonts/fonts.css';
import './assets/fonts/bootstrap-icons-subset.css';
import './assets/css/style.css';
import './styles/design-system.css';
import './styles/content.css';
import './styles/chrome.css';
// Conserver les styles disponibles dès le HTML, même avant le code de la page.
import './styles/home.css';
import './styles/presentation.css';
import './styles/expertise.css';
import './styles/portfolio.css';
import './styles/contact.css';
import './styles/confirmation.css';
import './index.css';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { getPageComponentName } from './seo/pages.js';

const pageLoaders = {
  Home: () => import('./pages/Home.jsx'),
  Presentation: () => import('./pages/Presentation.jsx'),
  ExpertiseServices: () => import('./pages/ExpertiseServices.jsx'),
  Realisations: () => import('./pages/Realisations.jsx'),
  Contact: () => import('./pages/Contact.jsx'),
  ProjectDetails: () => import('./pages/ProjectDetails.jsx'),
  Confirmation: () => import('./pages/Confirmation.jsx'),
  NotFound: () => import('./pages/NotFound.jsx'),
};
const pages = Object.fromEntries(Object.entries(pageLoaders).map(([name, load]) => [name, lazy(load)]));

const app = (
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App pages={pages} />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root');
const route = window.location.pathname.replace(/\/+$/, '') || '/';
// Les filtres, ancres et états de navigation peuvent différer du HTML statique.
const canHydrate = root.dataset.prerenderedRoute === route
  && !window.location.search && !window.location.hash && !window.history.state?.usr;
// La page initiale est prête avant l'hydratation : les préférences de langue
// et de mouvement ne doivent pas remplacer son HTML par un écran de chargement.
const initialPage = getPageComponentName(route);
pageLoaders[initialPage]().then(module => {
  pages[initialPage] = module.default;
  if (canHydrate) hydrateRoot(root, app);
  else createRoot(root).render(app);
}).catch(error => {
  // Le HTML et les liens ordinaires restent utilisables si le réseau coupe.
  console.error('ECG PLUS : chargement de la page impossible.', error);
});
