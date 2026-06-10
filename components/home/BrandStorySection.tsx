import Image from "next/image";
import { BadgeCheck, MapPinned, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStorySection() {
  const items = [
    { title: "日本直採", copy: "我們親自追蹤日本各大高爾夫市場與專門店，嚴選新款與優質二手球杆。", icon: MapPinned },
    { title: "正品保證", copy: "所有商品均會檢查來源、序號、外觀與配件，讓你放心購買、安心使用。", icon: ShieldCheck },
    { title: "專業檢測", copy: "二手商品會標示成色與檢測筆記，降低跨境購買的不確定性。", icon: BadgeCheck },
  ];

  return (
    <section className="jp-section bg-white">
      <div className="jp-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-lg border border-line-gold/40 bg-pearl-white p-8">
          <Image src="/brand/fuji-texture-placeholder.svg" alt="日本山景" width={900} height={420} className="w-full opacity-80" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pearl-white to-transparent p-8">
            <p className="font-serif text-3xl font-black text-jp-green">日本甄選・品質如一</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Brand Story"
            title="為香港與中國球手，嚴選真正值得入手的日系球杆"
            description="極品高爾夫不是單純代購，而是以專業眼光篩選、檢測與整理每一支球杆，讓全新與二手選擇都可以有清楚標準。"
          />
          <div className="mt-8 grid gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-lg border border-light-grey bg-pearl-white p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-champagne-gold text-champagne-gold">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-jp-green">{item.title}</h3>
                    <p className="mt-2 leading-7 text-charcoal/70">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
