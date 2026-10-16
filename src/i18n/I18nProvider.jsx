import { useCallback, useEffect, useMemo } from 'react';
import { translations } from './translations';
import { DEFAULT_LANG, I18nContext, SUPPORTED_LANGS } from './I18nContext.jsx';

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);

export const I18nProvider = ({ children, initialLang = DEFAULT_LANG }) => {
  // L’URL fixe la langue, même sans JavaScript. Aucune redirection liée au navigateur.
  const lang = SUPPORTED_LANGS.includes(initialLang) ? initialLang : DEFAULT_LANG;
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations[DEFAULT_LANG];
      const value = getValue(dict, key);
      return value != null ? value : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
