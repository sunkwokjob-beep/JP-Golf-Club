import Link from "next/link";
import { ChevronRight, Flag, Layers3, Sparkles, Target, Trees, Waves } from "lucide-react";
import { categories } from "@/data/categories";

const iconMap = {
  club: Trees,
  wood: Waves,
  sparkle: Sparkles,
  layers: Layers3,
  target: Target,
  flag: Flag,
};

export function CategorySidebar() {
  return (
    <aside className="rounded-lg border border-light-grey bg-white p-3 shadow-sm">
      <h2 className="px-3 py-3 text-sm font-bold text-jp-green">所有產品</h2>
      <div className="space-y-1">
        {categories.map((category) => {
          const Icon = iconMap[category.iconName as keyof typeof iconMap] ?? Target;
          return (
            <Link
              key={category.id}
              href={`/categories#${category.slug}`}
              className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 transition-colors hover:bg-champagne-gold/10 hover:text-jp-green"
            >
              <span className="flex items-center gap-3">
                <Icon size={18} className="text-champagne-gold" />
                {category.labelZh}
              </span>
              <ChevronRight size={16} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
