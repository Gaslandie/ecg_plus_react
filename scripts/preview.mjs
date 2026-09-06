import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

// Vite preview ne lit pas .htaccess : reproduire les routes HTML et les 404 en local.
export function staticPagesPreview() {
  return {
    name: 'ecg-static-pages-preview',
    configurePreviewServer(server) {
      const directory = resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use(async (req, res, next) => {
        try {
          if (!['GET', 'HEAD'].includes(req.method)) return next();
          const url = new URL(req.url, 'http://localhost');
          const path = decodeURIComponent(url.pathname);
          const target = resolve(directory, `.${path}`);
          if (target !== directory && !target.startsWith(directory + sep)) { res.statusCode = 400; return res.end(); }
          const exists = async file => (await stat(file).catch(() => null))?.isFile();
          if (path === '/' || await exists(target)) return next();
          const route = path.replace(/\/+$/, '');
          const htmlFile = resolve(directory, `.${route}.html`);
          if (await exists(htmlFile)) {
            if (path.endsWith('/')) { res.writeHead(301, { Location: route + url.search }); return res.end(); }
            req.url = `${route}.html${url.search}`;
            return next();
          }
          if (await exists(resolve(directory, '404.html'))) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
            return res.end(req.method === 'HEAD' ? undefined : await readFile(resolve(directory, '404.html')));
          }
          next();
        } catch (error) { next(error); }
      });
    },
  };
}
