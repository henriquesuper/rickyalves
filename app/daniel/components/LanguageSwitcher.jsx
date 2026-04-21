'use client';

import { useLanguage } from '../i18n/useLanguage';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/5 p-0.5 backdrop-blur-sm border border-white/10">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`
            px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200
            ${lang === code
              ? 'bg-amber-500/90 text-black shadow-sm'
              : 'text-white/50 hover:text-white/80'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
