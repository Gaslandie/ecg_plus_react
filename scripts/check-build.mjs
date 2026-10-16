import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
assert(urls.length >= 11 && new Set(urls.map(url => url.href)).size === urls.length, 'Sitemap incomplet ou doublonné');
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  assert.equal(url.origin, 'https://ecgplusgn.com');
  assert(!url.search && !url.hash && !url.pathname.includes('confirmation'));
  const path = url.pathname === '/' ? 'index.html' : url.pathname.slice(1) + '.html';
  const html = await readFile(resolve('dist', path), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path} : contenu HTML absent`);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${path} : titre unique`);
  const title = html.match(/<title>(.*?)<\/title>/s)[1];
  assert(title.trim() && !/undefined|null|\[object Object\]/.test(title), `${path} : titre vide ou invalide`);
  assert(!titles.has(title), `${path} : titre partagé avec une autre page`); titles.add(title);
  const matches = [...html.matchAll(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/g)];
  assert.equal(matches.length, 1, `${path} : description unique`);
  const description = matches[0][1];
  assert(description.trim() && !/undefined|null|\[object Object\]/.test(description), `${path} : description vide ou invalide`);
  assert(!descriptions.has(description), `${path} : description partagée avec une autre page`); descriptions.add(description);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path} : canonique unique`);
  assert(html.includes(`rel="canonical" href="${url.href}"`), `${path} : canonique incorrecte`);
  assert(html.includes(`property="og:title" content="${title}"`), `${path} : titre de partage différent`);
  assert(html.includes(`property="og:description" content="${description}"`), `${path} : description de partage différente`);
  assert(html.includes(`property="og:url" content="${url.href}"`), `${path} : URL de partage différente`);
  assert(html.includes('content="index,follow,max-image-preview:large"'));
  assert(html.includes('property="og:image"') && html.includes('name="twitter:card"'));
  const shareImage = new URL(html.match(/property="og:image" content="([^"]+)"/)[1]);
  assert.equal(shareImage.origin, url.origin, `${path} : image de partage externe`);
  assert((await stat(resolve('dist', shareImage.pathname.slice(1)))).isFile(), `${path} : image de partage absente`);
  for (const [property, content] of [['og:image:type', 'image/jpeg'], ['og:image:width', '1200'], ['og:image:height', '630']]) {
    assert(html.includes(`property="${property}" content="${content}"`), `${path} : ${property} incorrect`);
  }
  assert(html.includes(`name="twitter:image" content="${shareImage.href}"`), `${path} : image de partage différente pour X`);
  assert(/property="og:image:alt" content="[^"]+"/.test(html), `${path} : description d’image absente`);
  const data = JSON.parse(html.match(/<script data-ecg-seo type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert(data['@graph'].some(entity => entity['@type'] === 'WebPage' && entity.url === url.href));
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)) {
    assert((await stat(resolve('dist', asset.slice(1)))).isFile(), `${path} : asset manquant`);
  }
}
const contact = await readFile('dist/contact.html', 'utf8');
assert(/<fieldset class="contact-form__fields" disabled=""/.test(contact), 'Formulaire actif avant JavaScript');
assert(contact.includes('<noscript>') && contact.includes('mailto:contact@ecgplusgn.com'));
for (const file of ['404.html', 'confirmation.html']) {
  const html = await readFile(`dist/${file}`, 'utf8');
  assert(html.includes('content="noindex,follow"'));
  assert(!html.includes('rel="canonical"'));
  if (file === 'confirmation.html') assert(html.includes('<div id="root"></div>'), 'Fausse confirmation dans le HTML public');
}
assert((await readFile('dist/robots.txt', 'utf8')).includes('Sitemap: https://ecgplusgn.com/sitemap.xml'));
console.log(`${urls.length} pages préconstruites, métadonnées, sitemap, assets et états non indexables vérifiés.`);
