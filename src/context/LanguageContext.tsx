import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // Auto-detect browser language or read localStorage
    try {
      const saved = localStorage.getItem('proxima_lang') as Language;
      if (saved === 'en' || saved === 'fr') return saved;
      if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase();
        if (path.startsWith('/fr')) return 'fr';
        if (path.startsWith('/en')) return 'en';
      }
      if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('fr')) {
        return 'fr';
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('proxima_lang', newLang);
      document.documentElement.lang = newLang;
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        if (path.startsWith('/fr') && newLang === 'en') {
          window.history.replaceState({}, '', path.replace(/^\/fr/, '/en'));
        } else if (path.startsWith('/en') && newLang === 'fr') {
          window.history.replaceState({}, '', path.replace(/^\/en/, '/fr'));
        }
      }
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
