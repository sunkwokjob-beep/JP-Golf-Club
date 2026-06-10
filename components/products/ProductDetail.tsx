import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MessageCircle, ShieldCheck, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { formatHKD } from "@/lib/format";
import { routes, whatsappProductUrl } from "@/lib/routes";
import type { Product } from "@/types/product";

export function ProductDetail({ product }: { product: Product }) {
  const specs = [
    ["品牌", product.brand],
    ["類別", product.category],
    ["桿身", product.specs.shaft],
    ["硬度", product.specs.flex],
    ["角度 / 套裝", product.specs.loft],
    ["長度", product.specs.length],
    ["慣用手", product.specs.handedness],
    ["成色", product.specs.conditionGrade ?? "全新"],
  ];

  return (
    <section className="jp-section jp-paper">
      <div className="jp-container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-line-gold/40 bg-white p-6 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-pearl-white">
            <Image src={product.images[0]} alt={product.name} fill priority className="object-contain p-8" />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone={product.condition === "new" ? "green" : "gold"}>{product.badge}</Badge>
            <Badge tone="light">{product.condition === "new" ? "全新球杆" : "二手精選"}</Badge>
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-champagne-gold">{product.brand}</p>
          <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-jp-green md:text-5xl">{product.name}</h1>
          <div className="mt-5 flex items-end gap-3">
            <p className="text-3xl font-black text-jp-green">{formatHKD(product.priceHKD)}</p>
            {product.originalPriceHKD ? <p className="pb-1 text-charcoal/45 line-through">{formatHKD(product.originalPriceHKD)}</p> : null}
          </div>
          <p className="mt-6 leading-8 text-charcoal/75">{product.description}</p>

          <div className="mt-8 grid grid-cols-2 gap-3 rounded-lg border border-light-grey bg-white p-4">
            {specs.map(([label, value]) => (
              <div key={label} className="border-b border-light-grey/70 pb-3">
                <p className="text-xs font-semibold text-charcoal/45">{label}</p>
                <p className="mt-1 font-semibold text-charcoal">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-champagne-gold/40 bg-champagne-gold/10 p-5">
            <p className="flex items-center gap-2 font-bold text-jp-green">
              <ShieldCheck size={20} /> 專業檢測說明
            </p>
            <p className="mt-3 leading-7 text-charcoal/75">{product.inspectionNotes}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/cart" className="flex-1">
              <ShoppingCart size={18} /> 加入購物車
            </LinkButton>
            <LinkButton href={whatsappProductUrl(product.name)} variant="secondary" className="flex-1" target="_blank">
              <MessageCircle size={18} /> WhatsApp 查詢
            </LinkButton>
          </div>

          <Link href={routes.preOwned} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-jp-green hover:text-champagne-gold">
            <BadgeCheck size={18} /> 查看更多精選球杆
          </Link>
        </div>
      </div>
    </section>
  );
}
