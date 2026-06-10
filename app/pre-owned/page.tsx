import type { Metadata } from "next";
import { ProductListPage } from "@/components/products/ProductListPage";
import { getProductsByCondition } from "@/lib/product-utils";

export const metadata: Metadata = {
  title: "二手精選",
  description: "日本直採二手高爾夫球杆，附成色說明與專業檢測筆記。",
};

export default function PreOwnedPage() {
  return (
    <ProductListPage
      eyebrow="Pre-owned Select"
      title="二手精選"
      description="由日本市場嚴選高質二手球杆，標示成色、規格與檢測筆記，讓香港及中國球手以更高性價比升級裝備。"
      products={getProductsByCondition("pre-owned")}
    />
  );
}
