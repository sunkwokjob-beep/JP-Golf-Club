import { Building2, Mountain, ShieldCheck, Trophy } from "lucide-react";
import { trustBadges } from "@/data/trustBadges";

const iconMap = {
  mountain: Mountain,
  shield: ShieldCheck,
  club: Trophy,
  building: Building2,
};

export function TrustBadges() {
  return (
    <section className="border-y border-line-gold/35 bg-white">
      <div className="jp-container grid gap-0 md:grid-cols-4">
        {trustBadges.map((badge, index) => {
          const Icon = iconMap[badge.iconName as keyof typeof iconMap] ?? ShieldCheck;
          return (
            <div key={badge.title} className={`flex items-center gap-5 py-7 ${index ? "md:border-l md:border-line-gold/35 md:pl-8" : ""}`}>
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-champagne-gold text-champagne-gold">
                <Icon size={28} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-jp-green">{badge.title}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{badge.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
