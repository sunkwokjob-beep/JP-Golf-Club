import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "關於我們",
  description: "極品高爾夫專注日本採購全新與二手高爾夫球杆。",
};

export default function AboutPage() {
  const steps = ["日本市場尋貨", "核對來源與型號", "專業檢測與清潔", "香港及中國交付", "售後查詢支援"];

  return (
    <>
      <PageHero eyebrow="About" title="關於極品高爾夫" description="我們專注由日本採購全新或二手高爾夫球杆，服務香港及中國大陸市場，為球手提供可信、清楚、專業的選購體驗。" />
      <section className="jp-section bg-white">
        <div className="jp-container">
          <SectionHeading eyebrow="Process" title="從日本到你手上，每一步都清楚" description="MVP 階段先展示服務流程，日後可加入真實案例、評價與門市/倉庫資訊。" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-light-grey bg-pearl-white p-5">
                <span className="text-sm font-black text-champagne-gold">0{index + 1}</span>
                <h2 className="mt-4 font-serif text-xl font-bold text-jp-green">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
