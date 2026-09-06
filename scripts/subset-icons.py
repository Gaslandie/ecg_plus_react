"""Regénérer les icônes locales : python avec fonttools[woff] installé.
Les fichiers Bootstrap Icons originaux et la licence restent dans src/assets/fonts.
"""
from pathlib import Path
import re
import subprocess
import sys

root = Path(__file__).resolve().parent.parent
fonts = root / 'src/assets/fonts'
source = (fonts / 'bootstrap-icons.css').read_text()
icons = set()
for path in (root / 'src').rglob('*'):
    if path.suffix in {'.js', '.jsx'}:
        icons.update(re.findall(r'\bbi-[a-z0-9-]+', path.read_text()))
rules = dict(re.findall(r'\.(bi-[a-z0-9-]+)::before \{ content: "\\([a-f0-9]+)"; \}', source))
missing = icons - rules.keys()
if missing:
    raise SystemExit(f'Icônes Bootstrap inconnues : {sorted(missing)}')
subprocess.run([
    sys.executable, '-m', 'fontTools.subset', str(fonts / 'bootstrap-icons.woff2'),
    '--unicodes=' + ','.join('U+' + rules[icon] for icon in sorted(icons)),
    '--flavor=woff2', '--output-file=' + str(fonts / 'bootstrap-icons-subset.woff2'),
], check=True)
base = source[:source.index('.bi-123::before')]
base = base.replace('  font-display: block;\n', '').replace('./bootstrap-icons.woff2', './bootstrap-icons-subset.woff2')
css = base + '\n'.join(f'.{icon}::before {{ content: "\\{rules[icon]}"; }}' for icon in sorted(icons)) + '\n'
(fonts / 'bootstrap-icons-subset.css').write_text(css)
print(f'{len(icons)} icônes ; police : {(fonts / "bootstrap-icons-subset.woff2").stat().st_size} octets')
