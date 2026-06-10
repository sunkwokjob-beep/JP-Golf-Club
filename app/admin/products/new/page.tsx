import Link from "next/link";
import { AdminProductForm } from "@/components/admin/AdminProductForm";

export default function AdminNewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/products" className="text-sm font-semibold text-jp-green hover:text-champagne-gold">
          返回商品管理
        </Link>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">New Product</p>
        <h1 className="mt-2 text-3xl font-semibold text-jp-green-dark">新增商品</h1>
        <p className="mt-2 text-sm text-charcoal/60">展示用表單 UI，暫時不會寫入 database 或 mock file。</p>
      </div>

      <AdminProductForm mode="new" />
    </div>
  );
}
