import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Gem, MapPinned } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "品牌",
  description: "極品高爾夫 JP Golf Club 品牌定位與視覺系統。",
};

export default function BrandPage() {
  return (
    <>
      <PageHero eyebrow="Brand" title="JP 來自「極品」拼音" description="深綠色、香檳金與珍珠白構成品牌主調，結合 JP monogram、日本山景與高爾夫球紋理，呈現高級、可信、日系與專業的電商形象。" />
      <section className="jp-section bg-white">
        <div className="jp-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-line-gold/40 bg-pearl-white p-8">
            <Image src="/brand/logo-vertical.png" alt="極品高爾夫 logo" width={440} height={520} className="mx-auto w-full max-w-sm" />
            <div className="jp-gold-rule my-8" />
            <Image src="/brand/icon-color.png" alt="JP Golf Club icon" width={240} height={240} className="mx-auto w-36 opacity-90" />
          </div>
          <div className="grid gap-5">
            {[
              { title: "高級可信", copy: "以克制色彩、清晰資訊層級與精緻分隔線建立購買信心。", icon: Gem },
              { title: "日本甄選", copy: "突出日本直採來源，將品質、成色與檢測流程透明化。", icon: MapPinned },
              { title: "專業服務", copy: "以香港及中國市場球手需要為核心，保留 WhatsApp 查詢與日後會員服務。", icon: BadgeCheck },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-light-grey bg-pearl-white p-6">
                  <Icon className="text-champagne-gold" size={28} />
                  <h2 className="mt-4 font-serif text-2xl font-bold text-jp-green">{item.title}</h2>
                  <p className="mt-3 leading-8 text-charcoal/70">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
