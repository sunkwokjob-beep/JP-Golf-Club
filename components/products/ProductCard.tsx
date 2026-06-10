import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProductImage } from "@/components/products/ProductImage";
import { formatHKD } from "@/lib/format";
import { getConditionLabel, getStatusLabel } from "@/lib/product-utils";
import { routes } from "@/lib/routes";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const badgeLabel = product.condition === "new" ? "新品到港" : product.rank ? `${product.rank} 級成色` : "二手精選";

  return (
    <article className="group flex h-full overflow-hidden rounded-lg border border-light-grey/90 bg-white shadow-[0_10px_24px_rgba(15,61,46,0.06)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-champagne-gold/70 hover:shadow-[0_18px_38px_rgba(15,61,46,0.12)]">
      <Link href={routes.product(product.slug)} className="flex h-full w-full flex-col">
        <div className="relative aspect-[1.18] overflow-hidden bg-[linear-gradient(180deg,#fffefa_0%,#f3efe5_100%)]">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            category={product.category}
            className="p-5 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] gap-2">
            <Badge tone={product.condition === "new" ? "green" : "gold"}>{badgeLabel}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-start justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-champagne-gold">
            <span className="max-w-[70%] break-words leading-5">{product.brand}</span>
            <span className="rounded-full bg-jp-green/6 px-2.5 py-1 text-[11px] tracking-normal text-jp-green">
              {getStatusLabel(product.status)}
            </span>
          </div>
          <p className="mb-2 text-xs font-semibold text-charcoal/50">{getConditionLabel(product.condition)}・{product.model}</p>
          <h3 className="min-h-[3.4rem] text-lg font-bold leading-7 text-charcoal">{product.name}</h3>
          <div className="mt-auto flex items-end justify-between gap-4 pt-5">
            <div>
              <p className="text-lg font-black leading-6 text-jp-green">{formatHKD(product.price)}</p>
              {product.originalPrice ? (
                <p className="text-xs text-charcoal/45 line-through">{formatHKD(product.originalPrice)}</p>
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
