// Les URL françaises existantes restent inchangées ; l’anglais utilise /en/.
export const languageFromPath = path => /^\/en(?:\/|$)/.test(path) ? 'en' : 'fr';
export const withoutLanguage = path => {
  const base = languageFromPath(path) === 'en' ? path.slice(3) : path;
  return base.replace(/\/+$/, '') || '/';
};
export const languagePath = (path, language) => {
  const base = withoutLanguage(path);
  return language === 'en' ? (base === '/' ? '/en/' : `/en${base}`) : base;
};
