import Link from "next/link";
import { Edit3, Eye } from "lucide-react";
import { ProductImage } from "@/components/products/ProductImage";
import { formatHKD } from "@/lib/format";
import { getCategoryLabel, getConditionLabel, getStatusLabel } from "@/lib/product-utils";
import type { Product } from "@/types/product";

function statusClasses(status: Product["status"]) {
  return {
    available: "border-success-green/25 bg-success-green/8 text-success-green",
    reserved: "border-champagne-gold/35 bg-champagne-gold/12 text-[#8a6a24]",
    sold: "border-charcoal/15 bg-charcoal/6 text-charcoal/55",
  }[status];
}

export function AdminProductTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-champagne-gold/25 bg-white/85 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1080px] w-full text-left text-sm">
          <thead className="border-b border-champagne-gold/20 bg-jp-green-dark text-pearl-white">
            <tr>
              <th className="px-4 py-3 font-semibold">商品圖片</th>
              <th className="px-4 py-3 font-semibold">SKU</th>
              <th className="px-4 py-3 font-semibold">商品名稱</th>
              <th className="px-4 py-3 font-semibold">品牌</th>
              <th className="px-4 py-3 font-semibold">分類</th>
              <th className="px-4 py-3 font-semibold">新品/二手</th>
              <th className="px-4 py-3 font-semibold">成色</th>
              <th className="px-4 py-3 font-semibold">價格</th>
              <th className="px-4 py-3 font-semibold">庫存</th>
              <th className="px-4 py-3 font-semibold">售賣狀態</th>
              <th className="px-4 py-3 font-semibold">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-champagne-gold/15">
            {products.map((product) => (
              <tr key={product.id} className="bg-white/65 transition-colors hover:bg-[#fbf7ec]">
                <td className="px-4 py-3">
                  <div className="relative h-14 w-16 rounded-md border border-light-grey bg-pearl-white">
                    <ProductImage
                      src={product.images[0] ?? ""}
                      alt={product.name}
                      category={product.category}
                      className="p-1"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-charcoal/68">{product.sku}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-jp-green-dark">{product.name}</div>
                  <div className="mt-1 text-xs text-charcoal/50">{product.model}</div>
                </td>
                <td className="px-4 py-3 text-charcoal/72">{product.brand}</td>
                <td className="px-4 py-3 text-charcoal/72">{getCategoryLabel(product.category)}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full border border-champagne-gold/25 bg-pearl-white px-2.5 py-1 text-xs font-semibold text-jp-green">
                    {getConditionLabel(product.condition)}
                  </span>
                </td>
                <td className="px-4 py-3 text-charcoal/72">{product.rank ?? "-"}</td>
                <td className="px-4 py-3 font-semibold text-jp-green-dark">{formatHKD(product.price)}</td>
                <td className="px-4 py-3 text-charcoal/72">{product.stock}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses(product.status)}`}>
                    {getStatusLabel(product.status)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-champagne-gold/25 text-jp-green transition-colors hover:bg-champagne-gold/12"
                      aria-label={`查看 ${product.name}`}
                    >
                      <Eye size={16} />
                    </Link>
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-jp-green text-pearl-white transition-colors hover:bg-jp-green-dark"
                      aria-label={`編輯 ${product.name}`}
                    >
                      <Edit3 size={16} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
