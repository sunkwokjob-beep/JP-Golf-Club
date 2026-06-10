import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatHKD } from "@/lib/format";
import { routes } from "@/lib/routes";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const statusLabel = {
    "in-stock": "現貨",
    limited: "少量",
    reserved: "已預留",
  }[product.stockStatus];

  return (
    <article className="group flex h-full overflow-hidden rounded-lg border border-light-grey/90 bg-white shadow-[0_10px_24px_rgba(15,61,46,0.06)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-champagne-gold/70 hover:shadow-[0_18px_38px_rgba(15,61,46,0.12)]">
      <Link href={routes.product(product.slug)} className="flex h-full w-full flex-col">
        <div className="relative aspect-[1.18] overflow-hidden bg-[linear-gradient(180deg,#fffefa_0%,#f3efe5_100%)]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-5 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] gap-2">
            <Badge tone={product.condition === "new" ? "green" : "gold"}>{product.badge}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-start justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-champagne-gold">
            <span className="max-w-[70%] break-words leading-5">{product.brand}</span>
            <span className="rounded-full bg-jp-green/6 px-2.5 py-1 text-[11px] tracking-normal text-jp-green">
              {statusLabel}
            </span>
          </div>
          <h3 className="min-h-[3.4rem] text-lg font-bold leading-7 text-charcoal">{product.name}</h3>
          <div className="mt-auto flex items-end justify-between gap-4 pt-5">
            <div>
              <p className="text-lg font-black leading-6 text-jp-green">{formatHKD(product.priceHKD)}</p>
              {product.originalPriceHKD ? (
                <p className="text-xs text-charcoal/45 line-through">{formatHKD(product.originalPriceHKD)}</p>
              ) : null}
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-jp-green text-pearl-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:bg-champagne-gold group-hover:text-jp-green-dark">
              <ShoppingCart size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
