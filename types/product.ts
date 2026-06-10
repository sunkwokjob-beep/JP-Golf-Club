export type ProductCondition = "new" | "pre-owned";

export type StockStatus = "in-stock" | "limited" | "reserved";

export type ProductSpecs = {
  shaft: string;
  flex: string;
  loft: string;
  length: string;
  handedness: string;
  conditionGrade?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  condition: ProductCondition;
  priceHKD: number;
  originalPriceHKD?: number;
  images: string[];
  badge: string;
  stockStatus: StockStatus;
  specs: ProductSpecs;
  description: string;
  inspectionNotes: string;
  featured: boolean;
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
