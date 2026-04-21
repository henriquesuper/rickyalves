'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './en';
import pt from './pt';
import es from './es';

const translations = { en, pt, es };
const STORAGE_KEY = 'daniel-lang';

function detectLanguage() {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;

  const langs = navigator.languages || [navigator.language];
  for (const lang of langs) {
    const code = lang.toLowerCase();
    if (code.startsWith('pt')) return 'pt';
    if (code.startsWith('es')) return 'es';
  }
  return 'en';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLangState(detectLanguage());
    setHydrated(true);
  }, []);

  const setLang = useCallback((newLang) => {
    if (translations[newLang]) {
      setLangState(newLang);
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  }, []);

  const t = translations[lang] || en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, hydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
