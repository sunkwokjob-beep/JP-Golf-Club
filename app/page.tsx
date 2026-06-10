import { ArrowRight } from "lucide-react";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { FeaturedNewArrivals } from "@/components/home/FeaturedNewArrivals";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductGrid } from "@/components/products/ProductGrid";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/lib/product-utils";
import { routes } from "@/lib/routes";

export default function Home() {
  const newProducts = getFeaturedProducts("new").slice(0, 4);
  const preOwnedProducts = getFeaturedProducts("pre-owned").slice(0, 4);

  return (
    <>
      <HeroSection />
      <TrustBadges />

      <FeaturedNewArrivals products={newProducts} />

      <section className="jp-section bg-white">
        <div className="jp-container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Pre-owned Select"
              title="二手精選"
              description="每件二手商品均附檢測筆記與成色說明，方便你安心比較。"
            />
            <LinkButton href={routes.preOwned} variant="secondary" className="hidden md:inline-flex">
              瀏覽二手精選 <ArrowRight size={16} />
            </LinkButton>
          </div>
          <ProductGrid products={preOwnedProducts} />
        </div>
      </section>

      <BrandStorySection />
    </>
  );
}
