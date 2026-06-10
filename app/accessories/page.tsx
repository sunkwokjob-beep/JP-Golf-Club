import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "配件",
  description: "高爾夫球袋、桿套、握把、手套及其他配件 mockup。",
};

const accessories = ["Golf Bag 球袋", "Headcover 桿套", "Grip 握把", "Golf Balls 高爾夫球", "Gloves 手套", "Range Finder 測距儀"];

export default function AccessoriesPage() {
  return (
    <>
      <PageHero eyebrow="Accessories" title="配件" description="首階段以分類入口展示配件方向，日後可加入真實庫存、品牌篩選與套裝優惠。" />
      <section className="jp-section">
        <div className="jp-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item) => (
            <div key={item} className="rounded-lg border border-light-grey bg-white p-6 shadow-sm">
              <span className="grid size-12 place-items-center rounded-full border border-champagne-gold text-champagne-gold">
                <ShoppingBag size={22} />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-bold text-jp-green">{item}</h2>
              <p className="mt-3 leading-7 text-charcoal/68">日本市場精選配件分類，MVP 階段預留商品擴充空間。</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
