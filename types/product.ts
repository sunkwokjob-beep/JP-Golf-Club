export type ProductCondition = "new" | "preowned";

export type ProductRank = "S" | "A" | "B" | "C" | null;

export type ProductStatus = "available" | "reserved" | "sold";

export type ProductCurrency = "HKD";

export type ProductSpecs = {
  clubType: string;
  shaft: string;
  flex: string;
  loft: string;
  length: string;
  handedness: string;
  setComposition?: string;
  grip?: string;
  headcover?: string;
  year?: string;
  origin: string;
};

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  condition: ProductCondition;
  rank: ProductRank;
  price: number;
  originalPrice: number | null;
  currency: ProductCurrency;
  stock: number;
  status: ProductStatus;
  images: string[];
  tags: string[];
  specs: ProductSpecs;
  description: string;
  inspectionNotes: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProductSort = "newest" | "price-asc" | "price-desc";

export type ProductFilters = {
  brand?: string;
  category?: string;
  condition?: ProductCondition;
  sort?: ProductSort;
};

export type Category = {
  id: string;
  slug: string;
  labelZh: string;
  labelEn: string;
  iconName: string;
  description: string;
};

export type TrustBadge = {
  title: string;
  subtitle: string;
  iconName: string;
};
