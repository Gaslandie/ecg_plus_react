import { createContext, useContext } from 'react';

export const SUPPORTED_LANGS = ['fr', 'en'];
export const DEFAULT_LANG = 'fr';
export const LANG_STORAGE_KEY = 'ecg-lang';

export const I18nContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
});

export const useI18n = () => useContext(I18nContext);
