import { ArrowRight } from "lucide-react";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { FeaturedNewArrivals } from "@/components/home/FeaturedNewArrivals";
import { HeroSection } from "@/components/home/HeroSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductGrid } from "@/components/products/ProductGrid";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetById } from "@/data/assets";
import { getFeaturedProducts } from "@/lib/product-utils";
import { routes } from "@/lib/routes";

export default function Home() {
  const newProducts = getFeaturedProducts("new").slice(0, 4);
  const preOwnedProducts = getFeaturedProducts("preowned").slice(0, 4);
  const newClubsBanner = getAssetById("banner-new-clubs");
  const preownedBanner = getAssetById("banner-preowned-selected");

  return (
    <>
      <HeroSection />
      <TrustBadges />

      <FeaturedNewArrivals products={newProducts} />

      <section className="bg-white py-10">
        <div className="jp-container grid gap-5 lg:grid-cols-2">
          <PromoBanner
            title="新品球杆"
            subtitle="最新型號與熱門配置，日本直採到港。"
            href={routes.newClubs}
            image={newClubsBanner?.file ?? "/images/banners/banner-new-clubs-desktop.jpg"}
            tone="green"
          />
          <PromoBanner
            title="二手精選"
            subtitle="成色清楚、檢測完整，適合精明升級。"
            href={routes.preOwned}
            image={preownedBanner?.file ?? "/images/banners/banner-preowned-selected-desktop.jpg"}
            tone="gold"
          />
        </div>
      </section>

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
