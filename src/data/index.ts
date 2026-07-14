import { siteConfig } from '@/config/site';

export const trustData = [
  { id: '1', title: 'trust.shipping', icon: 'truck' },
  { id: '2', title: 'trust.warranty', icon: 'shield-check' },
  { id: '3', title: 'trust.support', icon: 'headphones' },
  { id: '4', title: 'trust.payment', icon: 'credit-card' },
];

const generateImageSequence = (folder: string, main: string, hoverCount: number) => {
  const images = [`/images/supabase-ready/${folder}/${main}`];
  for (let i = 1; i <= hoverCount; i++) {
    images.push(`https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/supabase-ready/${folder}/hover-${i}.webp`);
  }
  return images;
};

export const productEcosystemData = [
  {
    id: '1',
    title: 'eco.vacuum.title',
    description: 'eco.vacuum.desc',
    colSpan: 2,
    rowSpan: 2,
    imageSrcs: generateImageSequence('vacuum', 'main.webp', 2),
  },
  {
    id: '2',
    title: 'eco.waterFlosser.title',
    description: 'eco.waterFlosser.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: generateImageSequence('water-flosser', 'main.webp', 7),
  },
  {
    id: '3',
    title: 'eco.fan.title',
    description: 'eco.fan.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: generateImageSequence('fan', 'main.webp', 11),
  },
  {
    id: '4',
    title: 'eco.steamCleaner.title',
    description: 'eco.steamCleaner.desc',
    colSpan: 2,
    rowSpan: 1,
    imageSrcs: generateImageSequence('steam-cleaner', 'main.webp', 4),
  },
  {
    id: '5',
    title: 'eco.lamp.title',
    description: 'eco.lamp.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: generateImageSequence('lamp', 'main.webp', 3),
  },
];

export const featuredFeatures = [
  {
    id: '1',
    title: 'featured.f1.title',
    description: 'featured.f1.desc',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/products/scoll1.webp',
  },
  {
    id: '2',
    title: 'featured.f2.title',
    description: 'featured.f2.desc',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/products/scoll2.webp',
  },
  {
    id: '3',
    title: 'featured.f3.title',
    description: 'featured.f3.desc',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/products/scoll3.webp',
  },
];

export const technologyData = [
  { id: '1', title: 'techSection.t1' },
  { id: '2', title: 'techSection.t2' },
  { id: '3', title: 'techSection.t3' },
  { id: '4', title: 'techSection.t4' },
];

export const supportData = [
  {
    id: '1',
    title: 'supportSection.s1.title',
    description: 'supportSection.s1.desc',
    link: siteConfig.warrantyActivationUrl,
  },
  {
    id: '2',
    title: 'supportSection.s2.title',
    description: 'supportSection.s2.desc',
    link: siteConfig.warrantyLookupUrl,
  },
  {
    id: '3',
    title: 'supportSection.s3.title',
    description: 'supportSection.s3.desc',
    link: siteConfig.warrantyLookupUrl,
  },
];

export const newsData = [
  {
    id: '1',
    category: 'newsSection.n1.cat',
    title: 'newsSection.n1.title',
    size: 'large',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/news-1.webp',
  },
  {
    id: '2',
    category: 'newsSection.n2.cat',
    title: 'newsSection.n2.title',
    size: 'small',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/products/macro-2.webp',
  },
  { 
    id: '3', 
    category: 'newsSection.n3.cat', 
    title: 'newsSection.n3.title', 
    size: 'small',
    imageSrc: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/news-3.webp',
  },
];
