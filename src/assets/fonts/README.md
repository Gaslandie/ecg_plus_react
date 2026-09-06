# Polices locales ECG PLUS

Montserrat (500, 600, 700) et Roboto (400, 500, 700), sous-ensemble latin
adapté aux textes français et anglais. Les fontes WOFF2 sont partagées entre
les graisses via les déclarations fournies par Google Fonts.

Source CSS : https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap
Date de récupération : 2026-09-06. Licences OFL jointes.

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
