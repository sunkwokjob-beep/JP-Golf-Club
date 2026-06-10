import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/routes";
import type { Product } from "@/types/product";

export function FeaturedNewArrivals({ products }: { products: Product[] }) {
  return (
    <section className="jp-section jp-paper">
      <div className="jp-container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="New Arrival"
            title="精選新品球杆"
            description="從日本市場嚴選最新型號與人氣配置，先按品牌、手感與實戰需求整理成一眼可比的選購區。"
          />
          <LinkButton href={routes.newClubs} variant="ghost" className="self-start md:self-auto">
            查看全部 <ArrowRight size={16} />
          </LinkButton>
        </div>

        <div className="grid gap-6 lg:grid-cols-[310px_1fr]">
          <aside className="rounded-lg border border-line-gold/45 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,61,46,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">JP Selection</p>
            <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-jp-green">新品選桿室</h3>
            <p className="mt-4 leading-7 text-charcoal/68">
              將最新到港球杆按性能與手感拆分，適合快速比較一號木、鐵桿套裝與短桿配置。
            </p>
            <div className="mt-6 grid gap-3">
              {["最新型號", "日本直採", "出貨前檢查"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-pearl-white px-4 py-3 text-sm font-semibold text-jp-green">
                  <BadgeCheck size={17} className="text-champagne-gold" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-jp-green px-5 py-4 text-pearl-white">
              <p className="flex items-center gap-2 text-sm font-bold">
                <Sparkles size={17} className="text-champagne-gold" />
                今週推薦
              </p>
              <p className="mt-2 text-sm leading-6 text-pearl-white/75">高容錯一號木與日系鍛造鐵桿最受查詢。</p>
            </div>
          </aside>

          <ProductGrid products={products} className="lg:grid-cols-2 xl:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}
