import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { ManagedImage } from "@/components/ui/ManagedImage";
import { getAssetFallback } from "@/data/assets";

export function PromoBanner({
  title,
  subtitle,
  href,
  image,
  tone = "green",
}: {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  tone?: "green" | "gold";
}) {
  return (
    <section className={`relative min-h-56 overflow-hidden rounded-lg p-7 ${tone === "green" ? "jp-green-panel text-pearl-white" : "bg-champagne-gold/35 text-jp-green"}`}>
      <div className="absolute inset-y-0 right-0 w-[58%]">
        <ManagedImage
          src={image}
          fallbackSrc={getAssetFallback(image)}
          alt={`${title} 推廣圖片`}
          fill
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover opacity-75"
        />
        <div className={`absolute inset-0 ${tone === "green" ? "bg-gradient-to-r from-jp-green-dark via-jp-green-dark/45 to-transparent" : "bg-gradient-to-r from-champagne-gold/80 via-champagne-gold/40 to-transparent"}`} />
      </div>
      <div className="relative z-10 max-w-[62%]">
        <h3 className="font-serif text-2xl font-black">{title}</h3>
        <p className={`mt-2 text-sm ${tone === "green" ? "text-pearl-white/75" : "text-jp-green/70"}`}>{subtitle}</p>
        <LinkButton href={href} variant={tone === "green" ? "secondary" : "ghost"} className="mt-5 bg-white/10">
          立即選購 <ArrowRight size={16} />
        </LinkButton>
      </div>
    </section>
  );
}
