# ECG PLUS

Site vitrine bilingue (FR/EN) de ECG PLUS SARL, entreprise de construction et de génie civil en Guinée. React 19, React Router 7, Vite 7 et composants visuels personnalisés, avec Bootstrap conservé.

## Développement et vérification

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check:build
npm run preview
```

`npm run build` produit dans `dist/` les fichiers prêts à déployer. Il construit le client, rend les onze pages publiques en HTML français, génère le sitemap et supprime le bundle temporaire de rendu. Aucun serveur Node.js n’est nécessaire chez l’hébergeur.

`npm run check:build` vérifie le contenu initial, les métadonnées, les URLs canoniques, le sitemap, les ressources référencées et l’absence de fausse confirmation dans le HTML public. Ce contrôle s’exécute aussi avant le déploiement GitHub Actions.

## Pré-rendu et langues

- `src/entry-server.jsx` réutilise les composants React pour produire le HTML initial.
- Le client hydrate ce contenu. Les filtres, ancres et états de navigation utilisent un rendu client quand leur état diffère de la page statique.
- La préférence FR/EN enregistrée, puis celle du navigateur, est restaurée après hydratation sans écraser la préférence stockée.
- Le HTML initial est français. Les versions anglaises partagent actuellement les mêmes URLs ; aucun `hreflang` vers une URL linguistique inexistante n’est publié.
- Le formulaire attend JavaScript avant de s’activer ; les coordonnées et le lien email restent disponibles sans JavaScript.

## Référencement

`src/seo/pages.js` centralise titres, descriptions, canoniques, aperçus de partage et données structurées, en réutilisant les traductions et le catalogue de projets. Toute nouvelle chaîne est traduite dans `src/i18n/translations.js`.

Le build génère `sitemap.xml` à partir des routes publiques. Confirmation et les pages introuvables sont `noindex` et absentes du sitemap. Les données structurées ne contiennent ni avis, ni garanties, ni coordonnées géographiques inventées.

## Hébergement et déploiement

Un push sur `main` déclenche le workflow GitHub Actions vers Bluehost. Aucun commit ni push automatique ne doit être effectué sans demande explicite.

Le fichier `public/.htaccess`, copié dans `dist/`, est nécessaire sur Apache : il associe les URLs publiques aux fichiers HTML générés, normalise les URLs, sert la page 404 avec le statut HTTP correspondant et configure cache/compression lorsque les modules concernés sont disponibles. Le serveur Vite de prévisualisation reproduit les routes HTML et les erreurs 404 ; il ne valide pas les modules Apache de l’hébergeur.

Conserver l’ensemble du dossier `dist/` lors du déploiement, notamment les pages HTML, le sous-dossier `realisations/`, les assets et `.htaccess`.

## Ressources visuelles

Les photos WebP et les polices sont locales. Les icônes Bootstrap utilisent un sous-ensemble généré à partir des symboles présents dans les sources ; le build détecte tout nouveau symbole manquant. La procédure facultative de régénération est dans [src/assets/fonts/README.md](src/assets/fonts/README.md).
