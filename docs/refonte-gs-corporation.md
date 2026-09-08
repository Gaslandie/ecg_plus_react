# Refonte UI/UX — référence GS Corporation

Référence : https://gaslandie.github.io/gs_corporation/ — consultation le 8 septembre 2026.

## Benchmark

Six pages examinées dans Chrome à 1440 px : accueil, groupe, départements, réalisations, contact et immobilier. L’accueil et le menu ont également été examinés sur mobile. Le HTML et les styles calculés ont été consultés pour relever les proportions.

| Élément de référence | Application ECG PLUS |
| --- | --- |
| En-tête blanc, coordonnées en bandeau, navigation compacte et menus déroulants | Accueil, entreprise, quatre expertises, réalisations, contact ; sélecteur FR/EN conservé |
| Manrope variable, titres marine, accent rouge, fond gris clair | Même langage visuel avec la palette ECG PLUS : vert profond `#0f3d3e`, or `#c9a96e`, neutres papier ; logo et photographies existantes |
| Conteneur Bootstrap de 1320 px à 1440 px ; sections de 108 px ; coins de 4–9 px | Mêmes largeurs, rythme et finitions sur toutes les pages |
| Hero photo encadré de 24 px, hauteur minimale 620 px, titre de 69 px | Carrousel ECG PLUS, commandes, sélection directe, liens vers les expertises |
| Présentation puis annuaire illustré, engagements, ressources et contact | Entreprise, quatre métiers, méthode de travail, réalisations, contact |
| En-têtes intérieurs sur fond clair, texte à gauche et photo à droite | Entreprise, services, catalogue et contact |
| Cartes photo, flèches rondes et agrandissement en fenêtre modale | Réalisations, photos de l’entreprise et fiches projet |
| Bloc contact composé d’une photo et d’un panneau marine | Même composition en vert profond, coordonnées ECG PLUS |
| Menu mobile blanc dépliable, contenus en une colonne | Même comportement, adapté au bilinguisme |

Les cinq sociétés, offres de location, logos, coordonnées et projets propres à GS ne sont pas transposés. Les informations réelles d’ECG PLUS, les six fiches projet, le formulaire Web3Forms, le pré-rendu et les URLs existantes sont conservés.

## Plan d’exécution

- [x] Installer localement Manrope et harmoniser les tokens, boutons, en-têtes et pied de page.
- [x] Recomposer l’accueil selon la référence et implémenter les interactions du carrousel et des photos.
- [x] Harmoniser entreprise, expertises, réalisations, fiches projet, contact, confirmation et 404.
- [x] Vérifier les rendus ordinateur/mobile, le clavier, FR/EN, les filtres, les ancres et le formulaire avec réponses simulées.
- [x] Exécuter lint, build et contrôle du pré-rendu ; consigner les résultats.

## Couleurs ECG PLUS

À la demande de l’utilisateur, la palette historique vert profond et or est conservée sur toute l’interface : boutons, navigation active, bandeaux, pied de page, fonds et dégradés. La disposition et la typographie issues de la référence restent en place.

Les petits textes gris utilisent une nuance légèrement renforcée (`#616e6c`) pour rester lisibles sur les fonds papier. Après rétablissement des couleurs, le build et son contrôle passent ; aucun défaut de contraste détecté par axe sur les six gabarits contrôlés à 390 et 1440 px. Les captures de l’accueil et du contact ont également été revues.

## Validation

Vérifications terminées le 8 septembre 2026 dans Chrome headless, avec le serveur de développement puis le build de production local.

| Vérification | Résultat |
| --- | --- |
| `npm run lint` | Réussi |
| `npm run build` et `npm run check:build` | Réussis ; onze pages publiques préconstruites, métadonnées, sitemap et ressources vérifiés |
| Douze routes à 320, 768 et 1440 px | Un titre H1 par page, aucun débordement horizontal |
| Revue visuelle FR/EN | Captures à 390 et 1440 px ; accueil, entreprise, services, catalogue, contact et fiches projet |
| Navigation et clavier | Sous-menu, Échap, menu mobile, ancres et restitution du focus vérifiés |
| Carrousel | Cinq vues, sélection directe, flèches, balayage tactile, lecture automatique, pause et préférence de mouvement réduit vérifiés |
| Photos et catalogue | Dialogue natif, fermeture par Échap, filtres avec URL et retour depuis une fiche vérifiés |
| Formulaire | Champs requis, email invalide, erreur serveur, limitation, erreur réseau et succès testés avec réponses simulées ; expertise sélectionnée transmise |
| Confirmation | État de succès et focus vérifiés ; accès direct sans état redirigé vers contact |
| Accessibilité automatisée | Aucune violation axe WCAG A/AA détectée après correction du balisage des repères de l’accueil ; douze routes contrôlées sur ordinateur, accueil et contact également à 320 px |
| Build dans le navigateur | Onze pages hydratées sans erreur React ; restauration EN, statut 404 et contact sans JavaScript vérifiés |

Le formulaire n’a envoyé aucun message réel pendant les tests. La livraison au destinataire Web3Forms n’est donc pas validée par ces simulations. L’hébergement Apache et le déploiement restent ceux du projet. Ces vérifications locales ont été terminées avant la demande de publication de l’utilisateur.

Les scripts de vérification et captures de cette session sont dans `/tmp/ecg-benchmark` et `/tmp/ecg-*.mjs`. Les captures longues utilisent une hauteur de viewport explicite pour éviter un artefact de repli des conteneurs rencontré avec l’option `fullPage` de Chrome.
