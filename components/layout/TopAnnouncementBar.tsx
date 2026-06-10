import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { utilityNavigation } from "@/data/navigation";

export function TopAnnouncementBar() {
  return (
    <div className="bg-jp-green-dark text-pearl-white">
      <div className="jp-container flex min-h-8 items-center justify-between gap-4 text-xs">
        <p className="truncate font-medium tracking-[0.18em] text-pearl-white/90">
          🇯🇵 日本直採・正品保證・專業選桿　｜　服務香港・中國市場
        </p>
        <div className="hidden items-center gap-5 md:flex">
          {utilityNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-pearl-white/80 transition-colors hover:text-champagne-gold">
              {item.label}
            </Link>
          ))}
          <button className="inline-flex items-center gap-1 text-pearl-white/80">
            繁體中文 <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
