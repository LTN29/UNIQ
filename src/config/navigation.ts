import type { FooterLinkGroup, NavigationItem } from '@/types/navigation';

export const mainNavigation: NavigationItem[] = [
  { label: 'nav.products', href: '#products' },
  { label: 'nav.solutions', href: '#solutions' },
  { label: 'nav.technology', href: '#technology' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.news', href: '#news' },
  { label: 'nav.support', href: '#support' },
];

export const footerNavigation: FooterLinkGroup[] = [
  {
    title: 'nav.explore',
    links: [
      { label: 'nav.products', href: '#products' },
      { label: 'nav.technology', href: '#technology' },
      { label: 'nav.news', href: '#news' },
    ],
  },
  {
    title: 'nav.uniq',
    links: [
      { label: 'nav.about', href: '#about' },
      { label: 'nav.solutions', href: '#solutions' },
      { label: 'nav.support', href: '#support' },
    ],
  },
];
