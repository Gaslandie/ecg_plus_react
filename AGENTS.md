# AGENTS.md — ECG PLUS

Guide pour agents (Codex, Claude Code, etc.) travaillant sur ce projet.

## 1. Le projet

**ECG PLUS** est le site vitrine d'une entreprise de **construction et génie civil basée en Guinée**. Cible : clients B2B (publics et privés), appels d'offres.

Site en production : https://ecgplusgn.com

## 2. Stack technique

- **Framework** : React 19 + Vite 7
- **Routing** : react-router-dom 7
- **UI** : Bootstrap 5.3 + Bootstrap Icons
- **Animations** : AOS (Animate On Scroll)
- **i18n** : système custom (FR/EN) dans `src/i18n/`
- **Polices** : Montserrat (titres) + Roboto (texte) via Google Fonts
- **Couleur principale actuelle** : `#0f3d3e` (teal foncé)

## 3. Structure du projet

```
src/
├── App.jsx              # Routing + init AOS + préloader
├── main.jsx             # Entry point (Bootstrap CSS, i18n, BrowserRouter)
├── index.css            # Styles globaux
├── App.css              # Styles App
├── assets/
│   ├── css/style.css    # ⚠️ ~5300 lignes (hérité d'un template, à nettoyer)
│   └── img/             # Images du site
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── TopBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Presentation.jsx
│   ├── ExpertiseServices.jsx
│   ├── Realisations.jsx
│   ├── Contact.jsx
│   └── Confirmation.jsx
└── i18n/
    ├── I18nContext.jsx
    └── translations.js
```

## 4. Commandes

```bash
npm run dev      # Dev server (http://localhost:5173)
npm run build    # Build production → dist/
npm run lint     # ESLint
npm run preview  # Prévisualiser le build
```

## 5. Déploiement

**Automatique** via GitHub Actions à chaque push sur `main` :
- Workflow : `.github/workflows/deploy.yml`
- Build Vite → upload du dossier `dist/` vers Bluehost via FTPS
- Secrets configurés dans GitHub : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`

⚠️ **Plus besoin de FileZilla** — ne pas uploader manuellement, toujours passer par git push.

## 6. État actuel

### ✅ Fait
- Architecture React + routing en place
- 6 pages fonctionnelles (Home, Présentation, Services, Réalisations, Contact, Confirmation)
- Navbar + Footer + TopBar
- i18n FR/EN complet sur tout le site
- Responsive de base
- Animations AOS
- Déploiement automatique GitHub Actions → Bluehost (mis en place le 2026-05-19)

### 🚧 En cours — Refonte UI complète

**Direction artistique validée** : **Premium / moderne / haut de gamme**
(style épuré, espaces blancs généreux, typographie soignée, photos de qualité — inspiré du niveau de qualité de sites comme bouygues-construction.com).

**Référence d'inspiration principale** : **bouygues-construction.com**
- Photos plein écran de grande qualité
- Typographie sobre et imposante
- Espaces blancs généreux
- Navigation discrète mais efficace
- Mise en avant des réalisations comme preuve de crédibilité

**Stack conservée** : Bootstrap 5 (pas de migration Tailwind), mais customisation forte pour sortir du look "Bootstrap par défaut".

### 📋 Reste à faire (ordre de priorité)

1. **Design System** à formaliser :
   - Palette de couleurs finale (potentiellement faire évoluer le `#0f3d3e`)
   - Échelle typographique
   - Composants de base (boutons, cartes, sections, espacements)
   - Documenter dans un fichier dédié ou via variables CSS

2. **Refonte page par page** (dans cet ordre) :
   - [ ] **Home** — vitrine principale, premier contact (priorité max)
   - [ ] **Realisations** — preuve de crédibilité, décisive en construction
   - [ ] **ExpertiseServices** — l'offre
   - [ ] **Presentation** — à propos / équipe / valeurs
   - [ ] **Contact** — CTA final
   - [ ] **Confirmation** — page de remerciement après envoi formulaire

3. **Nettoyage du CSS hérité** :
   - `src/assets/css/style.css` fait ~5300 lignes (template originel)
   - À auditer et purger au fur et à mesure de la refonte de chaque page

4. **Optimisation** :
   - Compression et formats modernes pour les images (WebP, AVIF)
   - Lazy loading des images
   - Audit Lighthouse (perf, accessibilité, SEO)

5. **Micro-interactions et polish** :
   - Affiner les animations AOS (actuellement génériques)
   - États hover/focus soignés
   - Transitions de pages éventuelles

## 7. Conventions à respecter

- **Garder Bootstrap** : ne pas introduire Tailwind, MUI, shadcn, etc.
- **Style "premium" obligatoire** : sobriété, espaces, qualité photo > densité d'information
- **Itératif et page par page** : valider une page avant de passer à la suivante
- **Toujours bilingue FR/EN** : toute nouvelle chaîne doit passer par `src/i18n/translations.js`
- **Pas de commit auto** : ne jamais `git commit` sans demande explicite de l'utilisateur
- **Déploiement = push sur main** : tout push sur main part en prod, à utiliser avec attention

## 8. Notes importantes

- L'utilisateur est **novice** sur certaines pratiques DevOps — expliquer les étapes, ne pas supposer.
- Le déploiement étant automatique, ne pousser sur `main` que du code testé en local.
- Avant de pousser une refonte importante, valider visuellement en local (`npm run dev`).
