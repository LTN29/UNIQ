import { siteConfig } from '@/config/site';
import { IMAGES } from '@/constants/images';

export const trustData = [
  { id: '1', title: 'trust.shipping', icon: 'truck' },
  { id: '2', title: 'trust.warranty', icon: 'shield-check' },
  { id: '3', title: 'trust.support', icon: 'headphones' },
  { id: '4', title: 'trust.payment', icon: 'credit-card' },
];

export const productEcosystemData = [
  {
    id: '1',
    title: 'eco.vacuum.title',
    description: 'eco.vacuum.desc',
    colSpan: 2,
    rowSpan: 2,
    imageSrcs: IMAGES.ecosystem.vacuum,
  },
  {
    id: '2',
    title: 'eco.waterFlosser.title',
    description: 'eco.waterFlosser.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: IMAGES.ecosystem.waterFlosser,
  },
  {
    id: '3',
    title: 'eco.fan.title',
    description: 'eco.fan.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: IMAGES.ecosystem.fan,
  },
  {
    id: '4',
    title: 'eco.steamCleaner.title',
    description: 'eco.steamCleaner.desc',
    colSpan: 2,
    rowSpan: 1,
    imageSrcs: IMAGES.ecosystem.steamCleaner,
  },
  {
    id: '5',
    title: 'eco.lamp.title',
    description: 'eco.lamp.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: IMAGES.ecosystem.lamp,
  },
];

export const featuredFeatures = [
  {
    id: '1',
    title: 'featured.f1.title',
    description: 'featured.f1.desc',
    imageSrc: IMAGES.featuredScroll[0],
  },
  {
    id: '2',
    title: 'featured.f2.title',
    description: 'featured.f2.desc',
    imageSrc: IMAGES.featuredScroll[1],
  },
  {
    id: '3',
    title: 'featured.f3.title',
    description: 'featured.f3.desc',
    imageSrc: IMAGES.featuredScroll[2],
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
    imageSrc: IMAGES.news[0],
  },
  {
    id: '2',
    category: 'newsSection.n2.cat',
    title: 'newsSection.n2.title',
    size: 'small',
    imageSrc: IMAGES.news[1],
  },
  {
    id: '3',
    category: 'newsSection.n3.cat',
    title: 'newsSection.n3.title',
    size: 'small',
    imageSrc: IMAGES.news[2],
  },
];
