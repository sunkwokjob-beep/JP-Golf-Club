import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PageHero } from "@/components/ui/PageHero";
import { filterProducts, getProductBrands } from "@/lib/product-utils";
import type { ProductCondition, ProductFilters, ProductSort } from "@/types/product";

export const metadata: Metadata = {
  title: "所有商品",
  description: "瀏覽極品高爾夫日本直採全新及二手高爾夫球杆。",
};

function readParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function cleanCondition(value?: string): ProductCondition | undefined {
  return value === "new" || value === "preowned" ? value : undefined;
}

function cleanSort(value?: string): ProductSort {
  return value === "price-asc" || value === "price-desc" || value === "newest" ? value : "newest";
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters: ProductFilters = {
    brand: readParam(params.brand),
    category: readParam(params.category),
    condition: cleanCondition(readParam(params.condition)),
    sort: cleanSort(readParam(params.sort)),
  };
  const filteredProducts = filterProducts(filters);
  const brands = getProductBrands();

  return (
    <>
      <PageHero
        eyebrow="Product Database"
        title="所有商品"
        description="以同一份 mock product database 驅動商品列表、商品詳情與首頁推薦，方便日後接 CMS、Shopify 或自家資料庫。"
      />

      <section className="jp-section">
        <div className="jp-container">
          <form className="mb-8 grid gap-3 rounded-lg border border-light-grey bg-white p-4 shadow-sm md:grid-cols-5" action="/products">
            <label className="grid gap-2 text-sm font-semibold text-jp-green">
              品牌
              <select name="brand" defaultValue={filters.brand ?? ""} className="rounded-md border border-light-grey bg-pearl-white px-3 py-2 text-charcoal">
                <option value="">全部品牌</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-jp-green">
              類別
              <select name="category" defaultValue={filters.category ?? ""} className="rounded-md border border-light-grey bg-pearl-white px-3 py-2 text-charcoal">
                <option value="">全部類別</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.labelZh}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-jp-green">
              狀態
              <select name="condition" defaultValue={filters.condition ?? ""} className="rounded-md border border-light-grey bg-pearl-white px-3 py-2 text-charcoal">
                <option value="">全新 / 二手</option>
                <option value="new">全新</option>
                <option value="preowned">二手</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-jp-green">
              排序
              <select name="sort" defaultValue={filters.sort ?? "newest"} className="rounded-md border border-light-grey bg-pearl-white px-3 py-2 text-charcoal">
                <option value="newest">最新上架</option>
                <option value="price-asc">價格由低至高</option>
                <option value="price-desc">價格由高至低</option>
              </select>
            </label>

            <div className="flex items-end">
              <button className="min-h-11 w-full rounded-md bg-jp-green px-4 py-2 text-sm font-bold text-pearl-white transition-colors hover:bg-jp-green-dark">
                套用篩選
              </button>
            </div>
          </form>

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-charcoal/65">共 {filteredProducts.length} 件商品</p>
            <Link href="/products" className="text-sm font-bold text-jp-green hover:text-champagne-gold">
              清除篩選
            </Link>
          </div>

          {filteredProducts.length ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="rounded-lg border border-light-grey bg-white p-10 text-center">
              <h2 className="font-serif text-2xl font-bold text-jp-green">未有符合條件的商品</h2>
              <p className="mt-3 text-charcoal/65">請嘗試放寬品牌、類別或狀態篩選。</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
