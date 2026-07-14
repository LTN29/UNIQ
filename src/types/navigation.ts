export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type FooterLinkGroup = {
  title: string;
  links: NavigationItem[];
};
