
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/css/style.css'; /* legacy styles (toujours utilisés par les pages non refondues) */
import './styles/design-system.css';
import './styles/chrome.css';
import './index.css';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
);
