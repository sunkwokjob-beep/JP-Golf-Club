import Link from "next/link";
import { Home, ShoppingBag, BadgeCheck, User, Menu } from "lucide-react";

const mobileItems = [
  { label: "首頁", href: "/", icon: Home },
  { label: "新品", href: "/new-clubs", icon: ShoppingBag },
  { label: "二手", href: "/pre-owned", icon: BadgeCheck },
  { label: "會員", href: "/account", icon: User },
  { label: "更多", href: "/categories", icon: Menu },
];

export function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-line-gold/40 bg-pearl-white/95 shadow-[0_-8px_24px_rgba(15,61,46,0.08)] backdrop-blur md:hidden">
      {mobileItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.href} href={item.href} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-jp-green">
            <Icon size={20} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
