export type ProductStatus = 'active' | 'coming-soon' | 'discontinued';

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  href: `#${string}`;
  image: string | null;
  status: ProductStatus;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  image: string | null;
  status: ProductStatus;
};
