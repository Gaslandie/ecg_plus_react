import { createContext, useContext } from 'react';

export const SUPPORTED_LANGS = ['fr', 'en'];
export const DEFAULT_LANG = 'fr';

export const I18nContext = createContext({
  lang: DEFAULT_LANG,
  t: (key) => key,
});

export const useI18n = () => useContext(I18nContext);
