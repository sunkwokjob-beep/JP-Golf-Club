import { categories } from "@/data/categories";
import { getAssetFallback } from "@/data/assets";
import { products } from "@/data/products";
import type { Product, ProductCondition, ProductFilters, ProductSort } from "@/types/product";

export function getProductsByCondition(condition: ProductCondition) {
  return products.filter((product) => product.condition === condition);
}

export function getFeaturedProducts(condition?: ProductCondition) {
  return products.filter((product) => product.isFeatured && (!condition || product.condition === condition));
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((candidate) => candidate.slug !== product.slug && candidate.category === product.category)
    .slice(0, 3);
}

export function getProductBrands() {
  return Array.from(new Set(products.map((product) => product.brand))).sort();
}

export function getCategoryLabel(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug)?.labelZh ?? categorySlug;
}

export function filterProducts(filters: ProductFilters) {
  const sort: ProductSort = filters.sort ?? "newest";
  const filtered = products.filter((product) => {
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.category && product.category !== filters.category) return false;
    if (filters.condition && product.condition !== filters.condition) return false;
    return true;
  });

  return filtered.toSorted((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
}

export function getProductImageFallback(category: string, src?: string) {
  if (src) {
    const configuredFallback = getAssetFallback(src);
    if (configuredFallback) return configuredFallback;
  }

  if (category === "drivers") return "/products/placeholder-driver.svg";
  if (category === "fairway-woods") return "/products/placeholder-wood.svg";
  if (category === "iron-sets") return "/products/placeholder-iron.svg";
  if (category === "putters") return "/products/placeholder-putter.svg";
  if (category === "wedges") return "/products/placeholder-wedge.svg";
  return "/products/placeholder-driver-silver.svg";
}

export function getConditionLabel(condition: ProductCondition) {
  return condition === "new" ? "全新" : "二手";
}

export function getStatusLabel(status: Product["status"]) {
  return {
    available: "現貨",
    reserved: "已預留",
    sold: "已售出",
  }[status];
}
