# Polices locales ECG PLUS

Manrope variable (200–800), hébergée localement en WOFF2, est la police de
l’interface depuis la refonte GS Corporation du 8 septembre 2026.
Source : police publique du site de référence, convertie sans modification
des glyphes avec FontTools. Licence OFL : `Manrope-OFL.txt`.
Le préchargement dans `index.html` utilise cette même ressource.

Les anciennes fontes Montserrat et Roboto et leurs licences sont conservées
comme ressources historiques ; elles ne sont plus chargées par le site.

Bootstrap Icons 1.11.3 : CSS et fonte WOFF2 du paquet officiel servi par jsDelivr.
Source : https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css
Licence MIT jointe. Le CSS utilise une URL locale et `font-display: swap`.

Ces ressources remplacent les liens externes de l'en-tête. Aucun téléchargement
vers Google Fonts ou jsDelivr n'est nécessaire pour ces polices et icônes de l'application.

## Sous-ensemble Bootstrap Icons

L’application charge `bootstrap-icons-subset.css` et `bootstrap-icons-subset.woff2` :
seuls les glyphes référencés dans les sources JS/JSX sont conservés. Les originaux
ci-dessus restent les sources de régénération ; ils ne sont plus téléchargés par le site.
Le build vérifie que chaque nom d’icône utilisé dispose d’une règle dans ce sous-ensemble.

Après ajout d’une icône, régénérer les deux fichiers (outil de développement facultatif,
non nécessaire au build CI) :

```sh
python3 -m venv /tmp/ecg-fonttools
/tmp/ecg-fonttools/bin/pip install 'fonttools[woff]==4.59.0'
/tmp/ecg-fonttools/bin/python scripts/subset-icons.py
```

Le tracé et la licence MIT des icônes Bootstrap restent inchangés.
