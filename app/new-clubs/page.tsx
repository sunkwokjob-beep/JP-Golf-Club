import type { Metadata } from "next";
import { ProductListPage } from "@/components/products/ProductListPage";
import { getProductsByCondition } from "@/lib/product-utils";

export const metadata: Metadata = {
  title: "新品球杆",
  description: "日本直採全新高爾夫球杆，嚴選最新型號與人氣配置。",
};

export default function NewClubsPage() {
  return (
    <ProductListPage
      eyebrow="New Clubs"
      title="新品球杆"
      description="精選日本市場全新球杆，涵蓋一號木、鐵桿套裝、挖起桿與推桿。每件商品均會於出貨前檢查包裝、序號與配件狀態。"
      products={getProductsByCondition("new")}
    />
  );
}
