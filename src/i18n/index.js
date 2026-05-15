import { createContext, useContext, useState } from 'react';
import es from './es';
import ca from './ca';
import en from './en';
import fr from './fr';
import it from './it';

const translations = { es, ca, en, fr, it };

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}