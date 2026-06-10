import type { Metadata } from "next";
import { BadgeCheck, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "服務與保障",
  description: "日本直採、正品保證、專業檢測、售後支援。",
};

export default function ServicesPage() {
  const services = [
    { title: "日本直採", copy: "嚴選日本市場及專門店貨源，兼顧新品型號與二手成色。", icon: PackageCheck },
    { title: "正品保證", copy: "核對來源、序號、標籤與配件，減低跨境購買風險。", icon: ShieldCheck },
    { title: "專業檢測", copy: "二手球杆會檢查桿面、桿底、桿身、握把與外觀成色。", icon: BadgeCheck },
    { title: "快速可靠", copy: "面向香港及中國市場預留本地交收、物流及 WhatsApp 跟進。", icon: Truck },
  ];

  return (
    <>
      <PageHero eyebrow="Service" title="服務與保障" description="首階段以清晰服務承諾建立信任，日後可加入保養、退換貨、物流及會員級別政策。" />
      <section className="jp-section">
        <div className="jp-container grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-lg border border-light-grey bg-white p-7 shadow-sm">
                <Icon size={32} className="text-champagne-gold" />
                <h2 className="mt-5 font-serif text-3xl font-bold text-jp-green">{service.title}</h2>
                <p className="mt-4 leading-8 text-charcoal/70">{service.copy}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
