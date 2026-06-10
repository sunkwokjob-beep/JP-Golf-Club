import Link from "next/link";
import { AdminProductTable } from "@/components/admin/AdminProductTable";
import { products } from "@/data/products";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">Products</p>
          <h1 className="mt-2 text-3xl font-semibold text-jp-green-dark">商品管理</h1>
          <p className="mt-2 text-sm text-charcoal/60">集中查看 SKU、庫存、成色、售賣狀態與編輯入口。</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex h-11 items-center justify-center rounded-md bg-jp-green px-5 text-sm font-semibold text-pearl-white transition-colors hover:bg-jp-green-dark"
        >
          新增商品
        </Link>
      </div>

      <AdminProductTable products={products} />
    </div>
  );
}
