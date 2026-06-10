import { products } from "@/data/products";
import type { Product, ProductCondition } from "@/types/product";

export function getProductsByCondition(condition: ProductCondition) {
  return products.filter((product) => product.condition === condition);
}

export function getFeaturedProducts(condition?: ProductCondition) {
  return products.filter((product) => product.featured && (!condition || product.condition === condition));
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((candidate) => candidate.slug !== product.slug && candidate.category === product.category)
    .slice(0, 3);
}
