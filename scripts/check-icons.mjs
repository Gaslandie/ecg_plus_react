import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function checkIcons() {
  const icons = new Set();
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await walk(path);
      else if (/\.(js|jsx)$/.test(path)) {
        for (const [icon] of (await readFile(path, 'utf8')).matchAll(/\bbi-[a-z0-9-]+/g)) icons.add(icon);
      }
    }
  }
  await walk('src');
  const css = await readFile('src/assets/fonts/bootstrap-icons-subset.css', 'utf8');
  const available = new Set([...css.matchAll(/\.(bi-[a-z0-9-]+)::before/g)].map(match => match[1]));
  const missing = [...icons].filter(icon => !available.has(icon));
  if (missing.length) throw new Error(`Icônes manquantes : ${missing.join(', ')}. Régénérer avec scripts/subset-icons.py (voir src/assets/fonts/README.md).`);
}
