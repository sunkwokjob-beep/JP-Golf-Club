import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

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
    <section className={`relative overflow-hidden rounded-lg p-7 ${tone === "green" ? "jp-green-panel text-pearl-white" : "bg-champagne-gold/35 text-jp-green"}`}>
      <div className="relative z-10 max-w-[55%]">
        <h3 className="font-serif text-2xl font-black">{title}</h3>
        <p className={`mt-2 text-sm ${tone === "green" ? "text-pearl-white/75" : "text-jp-green/70"}`}>{subtitle}</p>
        <LinkButton href={href} variant={tone === "green" ? "secondary" : "ghost"} className="mt-5 bg-white/10">
          立即選購 <ArrowRight size={16} />
        </LinkButton>
      </div>
      <Image src={image} alt="" width={280} height={200} className="absolute -right-8 bottom-0 top-3 h-[90%] w-[52%] object-contain" />
    </section>
  );
}
