import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getDomainProfile, isLanguageCode, type LanguageCode } from '@/i18n/domainLocale';

const seoContent: Record<
  LanguageCode,
  {
    htmlLang: string;
    ogLocale: string;
    title: string;
    description: string;
  }
> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'UNIQ Home - Smart appliances for modern living',
    description:
      'UNIQ develops refined smart home appliances for modern living spaces, combining practical performance with elegant design.',
  },
  ja: {
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    title: 'UNIQ Home - 現代の暮らしのためのスマート家電',
    description:
      'UNIQは、実用的な性能と洗練されたデザインを兼ね備えたスマート家電を開発しています。',
  },
  vi: {
    htmlLang: 'vi',
    ogLocale: 'vi_VN',
    title: 'UNIQ - Thiết bị thông minh cho ngôi nhà hiện đại',
    description:
      'UNIQ phát triển các thiết bị gia dụng thông minh, tinh tế và phù hợp với cuộc sống hiện đại.',
  },
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function SeoManager() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const profile = getDomainProfile();
    const resolvedLanguage = i18n.resolvedLanguage ?? '';
    const activeLanguage = isLanguageCode(resolvedLanguage)
      ? resolvedLanguage
      : profile.defaultLanguage;
    const content = seoContent[activeLanguage];
    const canonicalUrl = `${profile.siteUrl}/`;

    document.documentElement.lang = content.htmlLang;
    document.title = content.title;

    upsertCanonical(canonicalUrl);
    upsertMeta('name', 'description', content.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', content.ogLocale);
    upsertMeta('property', 'og:site_name', 'UNIQ Home');
    upsertMeta('property', 'og:title', content.title);
    upsertMeta('property', 'og:description', content.description);
    upsertMeta('property', 'og:url', canonicalUrl);
  }, [i18n.resolvedLanguage]);

  return null;
}
