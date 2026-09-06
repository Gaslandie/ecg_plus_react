import { build } from 'vite';
import { checkIcons } from './check-icons.mjs';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Le serveur ne reçoit que du HTML/CSS/JS. Le rendu React se fait pendant le build.
await checkIcons();
await build();
const temporary = resolve('node_modules/.cache/ecg-prerender');
try {
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: temporary, emptyOutDir: true }, publicDir: false });
  const { render, publicPaths } = await import(pathToFileURL(resolve(temporary, 'entry-server.js')).href);
  const template = await readFile('dist/index.html', 'utf8');
  for (const path of [...publicPaths, '/404', '/confirmation']) {
    // Confirmation exige un envoi accepté : aucun message de succès dans le HTML public.
    const { body, head } = render(path);
    const isConfirmation = path === '/confirmation';
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace(/<meta name="description"[^>]*>/, '')
      .replace('<!--ecg-head-->', head)
      .replace('<div id="root"></div>', `<div id="root"${isConfirmation ? '' : ` data-prerendered-route="${path}"`}>${isConfirmation ? '' : body}</div>`);
    const file = resolve('dist', path === '/' ? 'index.html' : `${path.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  const urls = publicPaths.map(path => `  <url><loc>https://ecgplusgn.com${path}</loc></url>`).join('\n');
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  console.log(`Pré-rendu : ${publicPaths.length} pages publiques, page 404 et enveloppe de confirmation.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
