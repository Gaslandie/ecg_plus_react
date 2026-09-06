import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { getPageSeo, publicPaths, renderSeoHead } from './seo/pages.js';

export { publicPaths };
export function render(path) {
  return {
    body: path === '/confirmation' ? '' : renderToString(<StaticRouter location={path}><I18nProvider><App /></I18nProvider></StaticRouter>),
    head: renderSeoHead(getPageSeo(path)),
  };
}
