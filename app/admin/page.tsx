import Link from "next/link";
import { CheckCircle2, Package, PackageCheck, Sparkles, Tags } from "lucide-react";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { products } from "@/data/products";
import { formatHKD } from "@/lib/format";
import { getConditionLabel, getStatusLabel } from "@/lib/product-utils";

export default function AdminDashboardPage() {
  const totalProducts = products.length;
  const newProducts = products.filter((product) => product.condition === "new").length;
  const preownedProducts = products.filter((product) => product.condition === "preowned").length;
  const availableProducts = products.filter((product) => product.status === "available").length;
  const soldProducts = products.filter((product) => product.status === "sold").length;
  const recentProducts = products
    .toSorted((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 5);

  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">Dashboard</p>
          <h1 className="mt-2 text-3xl font-semibold text-jp-green-dark">產品管理總覽</h1>
          <p className="mt-2 text-sm text-charcoal/60">以現有 mock product data 建立的後台展示 MVP。</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex h-11 items-center justify-center rounded-md bg-jp-green px-5 text-sm font-semibold text-pearl-white transition-colors hover:bg-jp-green-dark"
        >
          新增商品
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <AdminStatCard label="商品總數" value={totalProducts} helper="所有 mock 商品" icon={<Package size={20} />} />
        <AdminStatCard label="新品數量" value={newProducts} helper="condition = new" icon={<Sparkles size={20} />} />
        <AdminStatCard label="二手數量" value={preownedProducts} helper="condition = preowned" icon={<Tags size={20} />} />
        <AdminStatCard label="現貨數量" value={availableProducts} helper="status = available" icon={<CheckCircle2 size={20} />} />
        <AdminStatCard label="已售數量" value={soldProducts} helper="status = sold" icon={<PackageCheck size={20} />} />
      </div>

      <section className="rounded-lg border border-champagne-gold/25 bg-white/82 shadow-sm">
        <div className="flex items-center justify-between border-b border-champagne-gold/18 px-5 py-4">
          <div>
            <h2 className="font-semibold text-jp-green-dark">最近商品</h2>
            <p className="mt-1 text-sm text-charcoal/55">按 createdAt 排序的最新 mock records。</p>
          </div>
          <Link href="/admin/products" className="text-sm font-semibold text-jp-green hover:text-champagne-gold">
            查看全部
          </Link>
        </div>
        <div className="divide-y divide-champagne-gold/15">
          {recentProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link href={`/admin/products/${product.id}/edit`} className="font-semibold text-jp-green-dark hover:text-champagne-gold">
                  {product.name}
                </Link>
                <p className="mt-1 text-xs text-charcoal/55">
                  {product.sku} · {getConditionLabel(product.condition)} · {getStatusLabel(product.status)}
                </p>
              </div>
              <div className="text-sm font-semibold text-jp-green-dark">{formatHKD(product.price)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
