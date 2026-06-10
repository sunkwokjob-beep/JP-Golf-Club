import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminProductForm } from "@/components/admin/AdminProductForm";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function AdminEditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/products" className="text-sm font-semibold text-jp-green hover:text-champagne-gold">
          返回商品管理
        </Link>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">Edit Product</p>
        <h1 className="mt-2 text-3xl font-semibold text-jp-green-dark">編輯商品</h1>
        <p className="mt-2 text-sm text-charcoal/60">{product.name} 的 mock data 已預填至表單。</p>
      </div>

      <AdminProductForm product={product} mode="edit" />
    </div>
  );
}
