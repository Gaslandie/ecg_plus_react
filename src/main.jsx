
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/fonts/fonts.css';
import './assets/fonts/bootstrap-icons-subset.css';
import './assets/css/style.css';
import './styles/design-system.css';
import './styles/content.css';
import './styles/chrome.css';
import './index.css';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';

const app = (
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root');
const route = window.location.pathname.replace(/\/+$/, '') || '/';
// Les filtres, ancres et états de navigation peuvent différer du HTML statique.
const canHydrate = root.dataset.prerenderedRoute === route
  && !window.location.search && !window.location.hash && !window.history.state?.usr;
if (canHydrate) hydrateRoot(root, app);
else createRoot(root).render(app);
