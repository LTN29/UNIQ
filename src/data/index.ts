import { siteConfig } from '@/config/site';

export const trustData = [
  { id: '1', title: 'trust.shipping', icon: 'truck' },
  { id: '2', title: 'trust.warranty', icon: 'shield-check' },
  { id: '3', title: 'trust.support', icon: 'headphones' },
  { id: '4', title: 'trust.payment', icon: 'credit-card' },
];

const SUPABASE_BASE = 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/UNIQ_OPTIMIZED';

export const productEcosystemData = [
  {
    id: '1',
    title: 'eco.vacuum.title',
    description: 'eco.vacuum.desc',
    colSpan: 2,
    rowSpan: 2,
    imageSrcs: [
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/straight-view.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/a9-pro-fixed-battery.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/brush-1.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/brush-2.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/dust-bin.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/free-a9---ngang.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/mite-brush.webp`,
      `${SUPABASE_BASE}/may-hut-bui-a9-pro/pic-1.webp`
    ],
  },
  {
    id: '2',
    title: 'eco.waterFlosser.title',
    description: 'eco.waterFlosser.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: [
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4425.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4426.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4427.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4428.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4429.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4430.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4431.webp`,
      `${SUPABASE_BASE}/tam-nuoc-f4/y826-.4432.webp`
    ],
  },
  {
    id: '3',
    title: 'eco.fan.title',
    description: 'eco.fan.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: [
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/9.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/17.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/18.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/19.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/20.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/46.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/47.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/48.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/49.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/50.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/51.webp`,
      `${SUPABASE_BASE}/quat-flow-c6-pro-png/52.webp`
    ],
  },
  {
    id: '4',
    title: 'eco.steamCleaner.title',
    description: 'eco.steamCleaner.desc',
    colSpan: 2,
    rowSpan: 1,
    imageSrcs: [
      `${SUPABASE_BASE}/may-lam-sach-hoi-nuoc-x5/vortex-x5.webp`,
      `${SUPABASE_BASE}/may-lam-sach-hoi-nuoc-x5/artboard-2.1.webp`,
      `${SUPABASE_BASE}/may-lam-sach-hoi-nuoc-x5/artboard-4.webp`,
      `${SUPABASE_BASE}/may-lam-sach-hoi-nuoc-x5/artboard-5.webp`,
      `${SUPABASE_BASE}/may-lam-sach-hoi-nuoc-x5/artboard-6.webp`
    ],
  },
  {
    id: '5',
    title: 'eco.lamp.title',
    description: 'eco.lamp.desc',
    colSpan: 1,
    rowSpan: 1,
    imageSrcs: [
      `${SUPABASE_BASE}/den-e7/artboard-1.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-2.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-3.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-4.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-6.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-8.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-12.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-13-2.webp`,
      `${SUPABASE_BASE}/den-e7/artboard-15.webp`,
      `${SUPABASE_BASE}/den-e7/.14.webp`,
      `${SUPABASE_BASE}/den-e7/.23.webp`,
      `${SUPABASE_BASE}/den-e7/.32.webp`,
      `${SUPABASE_BASE}/den-e7/.36.webp`,
      `${SUPABASE_BASE}/den-e7/.4.webp`,
      `${SUPABASE_BASE}/den-e7/.41.webp`,
      `${SUPABASE_BASE}/den-e7/.5.webp`
    ],
  },
];

export const featuredFeatures = [
  {
    id: '1',
    title: 'featured.f1.title',
    description: 'featured.f1.desc',
    imageSrc: `${SUPABASE_BASE}/scoll1.webp`,
  },
  {
    id: '2',
    title: 'featured.f2.title',
    description: 'featured.f2.desc',
    imageSrc: `${SUPABASE_BASE}/scoll2.webp`,
  },
  {
    id: '3',
    title: 'featured.f3.title',
    description: 'featured.f3.desc',
    imageSrc: `${SUPABASE_BASE}/scoll3.webp`,
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
    imageSrc: `${SUPABASE_BASE}/news1.webp`,
  },
  {
    id: '2',
    category: 'newsSection.n2.cat',
    title: 'newsSection.n2.title',
    size: 'small',
    imageSrc: `${SUPABASE_BASE}/new3.webp`,
  },
  { 
    id: '3', 
    category: 'newsSection.n3.cat', 
    title: 'newsSection.n3.title', 
    size: 'small',
    imageSrc: `${SUPABASE_BASE}/new3.webp`,
  },
];
