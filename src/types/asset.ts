export type AssetSpecification = {
  type: 'product' | 'lifestyle' | 'studio' | 'technology' | 'phone' | 'news';
  aspectRatio: string;
  composition: string;
  desktopCrop?: string;
  mobileCrop?: string;
  background?: string;
};
