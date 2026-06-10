import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { routes, whatsappProductUrl } from "@/lib/routes";

export function HeroSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-pearl-white">
      <Image
        src="/brand/hero-jp-golf-desktop.png"
        alt="極品高爾夫日本直採高爾夫球杆主視覺"
        fill
        sizes="100vw"
        className="hidden object-cover md:block"
        priority
      />
      <Image
        src="/brand/hero-jp-golf-mobile.png"
        alt="極品高爾夫日本直採高爾夫球杆手機主視覺"
        fill
        sizes="100vw"
        className="object-cover md:hidden"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pearl-white via-pearl-white/80 to-pearl-white/10 md:via-pearl-white/55" />

      <div className="jp-container relative grid min-h-[620px] items-center py-16 md:py-20">
        <div className="z-10 max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-champagne-gold">Japan Sourcing · Premium Golf</p>
          <h1 className="font-serif text-5xl font-black leading-tight text-jp-green md:text-6xl">
            日本直採
            <br />
            全新及二手高爾夫球杆
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-charcoal/75">
            服務香港・中國市場｜正品保證・專業選桿。為認真球手嚴選日本市場高質球杆，從新品到二手精選都有清楚檢測。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={routes.newClubs}>
              選購新品球杆 <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href={routes.preOwned} variant="secondary">
              瀏覽二手精選 <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href={whatsappProductUrl()} variant="ghost" target="_blank">
              <MessageCircle size={18} /> 查詢庫存
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
