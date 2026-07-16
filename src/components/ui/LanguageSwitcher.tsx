import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

import {
  getDomainProfile,
  isLanguageCode,
  languages,
  savePreferredLanguage,
  type LanguageCode,
} from '@/i18n/domainLocale';
import { cn } from '@/lib/cn';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const availableLanguages = getDomainProfile().availableLanguages;
  const visibleLanguages = languages.filter((language) =>
    availableLanguages.includes(language.code),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (visibleLanguages.length <= 1) {
    return null;
  }

  const changeLanguage = (lng: LanguageCode) => {
    i18n.changeLanguage(lng);
    savePreferredLanguage(lng);
    setIsOpen(false);
  };

  const resolvedLanguage = i18n.resolvedLanguage ?? '';
  const activeLanguage = isLanguageCode(resolvedLanguage)
    ? resolvedLanguage
    : i18n.language;
  const currentLang =
    visibleLanguages.find((language) => language.code === activeLanguage) ??
    visibleLanguages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-sm font-medium text-graphite transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
        aria-expanded={isOpen}
      >
        <Globe size={16} />
        <span className="hidden lg:inline-block uppercase">{currentLang.code}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-border bg-pure-white shadow-lg z-50">
          <div className="py-1">
            {visibleLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  'block w-full px-4 py-2 text-left text-sm transition-colors',
                  activeLanguage === lang.code
                    ? 'bg-brand-red/10 text-brand-red font-medium'
                    : 'text-graphite hover:bg-surface hover:text-brand-red',
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
