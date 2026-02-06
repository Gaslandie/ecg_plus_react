import React, { createContext, useContext, useMemo, useState } from 'react';
import { translations } from './translations';

const I18nContext = createContext({ lang: 'fr', setLang: () => {}, t: (k) => k });

const getValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
};

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const t = (key) => {
    const dict = translations[lang] || translations.fr;
    const value = getValue(dict, key);
    return value != null ? value : key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
