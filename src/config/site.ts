const siteUrl = import.meta.env.VITE_SITE_URL ?? 'http://localhost:5173';

export const siteConfig = {
  name: 'UNIQ Home',
  shortName: 'UNIQ',
  title: 'UNIQ - Thiết bị thông minh cho ngôi nhà hiện đại',
  description:
    'UNIQ phát triển các thiết bị gia dụng thông minh, tinh tế và phù hợp với cuộc sống hiện đại.',
  siteUrl,
  locale: 'vi_VN',
  warrantyActivationUrl:
    import.meta.env.VITE_WARRANTY_ACTIVATION_URL ??
    'https://baohanh.simi.vn/kich-hoat-bao-hanh',
  warrantyLookupUrl:
    import.meta.env.VITE_WARRANTY_LOOKUP_URL ?? 'https://baohanh.simi.vn/bao-hanh',
  socialLinks: {
    facebook: null,
    youtube: null,
    tiktok: null,
  },
} as const;
