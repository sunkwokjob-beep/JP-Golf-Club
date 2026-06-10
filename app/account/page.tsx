import type { Metadata } from "next";
import { Heart, Package, UserRound } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "會員中心",
  description: "會員中心 mockup，預留日後登入、訂單與收藏功能。",
};

export default function AccountPage() {
  return (
    <>
      <PageHero eyebrow="Account Mockup" title="會員中心" description="MVP 階段展示會員中心方向；日後可接入登入、訂單、收藏、地址及售後查詢。" />
      <section className="jp-section">
        <div className="jp-container grid gap-5 md:grid-cols-3">
          {[
            { title: "個人資料", copy: "登入狀態、聯絡方式、偏好語言。", icon: UserRound },
            { title: "訂單紀錄", copy: "展示查詢中、已確認、已完成訂單。", icon: Package },
            { title: "收藏清單", copy: "保存心水球杆，方便 WhatsApp 查詢。", icon: Heart },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-light-grey bg-white p-7 shadow-sm">
                <Icon size={30} className="text-champagne-gold" />
                <h2 className="mt-5 font-serif text-2xl font-bold text-jp-green">{item.title}</h2>
                <p className="mt-3 leading-7 text-charcoal/70">{item.copy}</p>
                <span className="mt-6 inline-flex rounded-full border border-champagne-gold/50 px-3 py-1 text-xs font-bold text-champagne-gold">
                  Mockup
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
