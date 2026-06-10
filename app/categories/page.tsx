import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "球杆類別",
  description: "按一號木、球道木、混合桿、鐵桿套裝、挖起桿、推桿瀏覽精選球杆。",
};

export default function CategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Categories" title="球杆類別" description="按你的打法、距離需求與球場情境，快速瀏覽適合的球杆類別。" />
      <section className="jp-section">
        <div className="jp-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              id={category.slug}
              key={category.id}
              href="/new-clubs"
              className="rounded-lg border border-light-grey bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-champagne-gold"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-champagne-gold">{category.labelEn}</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-jp-green">{category.labelZh}</h2>
              <p className="mt-4 leading-7 text-charcoal/70">{category.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-jp-green">
                瀏覽商品 <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
