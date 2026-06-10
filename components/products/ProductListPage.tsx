import { CategorySidebar } from "@/components/products/CategorySidebar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import type { Product } from "@/types/product";

export function ProductListPage({
  eyebrow,
  title,
  description,
  products,
}: {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="flex flex-wrap gap-3">
          <Badge tone="green">日本直採</Badge>
          <Badge tone="gold">正品保證</Badge>
          <Badge tone="light">專業檢測</Badge>
        </div>
      </PageHero>
      <section className="jp-section">
        <div className="jp-container grid gap-8 lg:grid-cols-[280px_1fr]">
          <CategorySidebar />
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-light-grey bg-white p-4">
              <p className="text-sm font-semibold text-charcoal/65">共 {products.length} 件商品</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["品牌", "類別", "價格", "狀態"].map((filter) => (
                  <span key={filter} className="rounded-md border border-light-grey px-3 py-2 text-charcoal/65">
                    {filter}
                  </span>
                ))}
              </div>
            </div>
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
