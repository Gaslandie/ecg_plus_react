import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { translations } from './translations';
import { DEFAULT_LANG, I18nContext, LANG_STORAGE_KEY, SUPPORTED_LANGS } from './I18nContext.jsx';

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);

const normalizeLang = (value) => {
  if (typeof value !== 'string') return null;
  const short = value.toLowerCase().slice(0, 2);
  return SUPPORTED_LANGS.includes(short) ? short : null;
};

// Langue initiale : préférence enregistrée > langue du navigateur > FR.
const getInitialLang = () => {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = normalizeLang(window.localStorage.getItem(LANG_STORAGE_KEY));
    if (stored) return stored;
  } catch {
    /* localStorage indisponible (navigation privée, etc.) */
  }
  const fromNavigator = (window.navigator.languages || [window.navigator.language])
    .map(normalizeLang)
    .find(Boolean);
  return fromNavigator || DEFAULT_LANG;
};

const subscribeLanguage = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener('languagechange', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('languagechange', callback);
  };
};
const getServerLang = () => DEFAULT_LANG;

export const I18nProvider = ({ children }) => {
  // Le premier rendu hydraté correspond au HTML français, puis reprend la préférence locale.
  const preferredLang = useSyncExternalStore(subscribeLanguage, getInitialLang, getServerLang);
  const [selectedLang, setLangState] = useState(null);
  const lang = selectedLang || preferredLang;

  const setLang = useCallback((next) => {
    const normalized = normalizeLang(next) || DEFAULT_LANG;
    setLangState(normalized);
  }, []);

  // Persistance + synchronisation de <html lang> (lecteurs d'écran, césure, traduction auto).
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      if (selectedLang) window.localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
    } catch {
      /* ignore */
    }
  }, [lang, selectedLang]);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations[DEFAULT_LANG];
      const value = getValue(dict, key);
      return value != null ? value : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
