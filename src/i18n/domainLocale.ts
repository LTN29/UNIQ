export const languages = [
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'vi', label: 'Tiếng Việt' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

type DomainProfile = {
  hostname: string;
  siteUrl: string;
  defaultLanguage: LanguageCode;
  availableLanguages: LanguageCode[];
  market: 'vietnam' | 'international';
};

const LANGUAGE_STORAGE_KEY = 'uniq.preferredLanguage';

const domainProfiles: Record<string, DomainProfile> = {
  'uniqvietnam.com': {
    hostname: 'uniqvietnam.com',
    siteUrl: 'https://uniqvietnam.com',
    defaultLanguage: 'vi',
    availableLanguages: ['vi'],
    market: 'vietnam',
  },
  'uniq-home.com': {
    hostname: 'uniq-home.com',
    siteUrl: 'https://uniq-home.com',
    defaultLanguage: 'en',
    availableLanguages: ['en', 'ja', 'vi'],
    market: 'international',
  },
};

const fallbackProfile: DomainProfile = {
  hostname: 'localhost',
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://uniq-home.com',
  defaultLanguage: 'en',
  availableLanguages: ['en', 'ja', 'vi'],
  market: 'international',
};

function normalizeHostname(hostname: string) {
  return hostname.toLowerCase().replace(/^www\./, '');
}

export function getCurrentHostname() {
  if (typeof window === 'undefined') {
    return fallbackProfile.hostname;
  }

  return normalizeHostname(window.location.hostname);
}

export function getDomainProfile(hostname = getCurrentHostname()) {
  return domainProfiles[normalizeHostname(hostname)] ?? fallbackProfile;
}

export function isLanguageCode(value: string): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

export function getInitialLanguage() {
  const profile = getDomainProfile();

  if (profile.market === 'vietnam') {
    return profile.defaultLanguage;
  }

  if (typeof window === 'undefined') {
    return profile.defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && isLanguageCode(storedLanguage)) {
    return profile.availableLanguages.includes(storedLanguage)
      ? storedLanguage
      : profile.defaultLanguage;
  }

  return profile.defaultLanguage;
}

export function savePreferredLanguage(language: LanguageCode) {
  if (typeof window === 'undefined') {
    return;
  }

  const profile = getDomainProfile();

  if (profile.market === 'international') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
}
