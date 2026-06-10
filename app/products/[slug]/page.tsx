import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { getProductBySlug, getRelatedProducts } from "@/lib/product-utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "商品不存在" };
  }

  return {
    title: product.name,
    description: `${product.brand} ${product.name}，${product.condition === "new" ? "全新球杆" : "二手精選"}，由極品高爾夫日本直採。`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: product.brand,
    offers: {
      "@type": "Offer",
      priceCurrency: "HKD",
      price: product.priceHKD,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetail product={product} />
      {related.length ? (
        <section className="jp-section bg-white">
          <div className="jp-container">
            <div className="mb-8">
              <SectionHeading eyebrow="Related" title="同類推薦" description="同一類別的其他精選球杆。" />
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </>
  );
}
