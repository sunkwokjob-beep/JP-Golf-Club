import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-gold/30 bg-pearl-white/95 backdrop-blur">
      <div className="jp-container flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image src="/brand/logo-horizontal.png" alt="極品高爾夫 JP Golf Club" width={220} height={80} priority className="h-auto w-[190px] md:w-[220px]" />
        </Link>

        <nav className="hidden flex-1 justify-center gap-8 text-sm font-semibold text-jp-green lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-7 transition-colors after:absolute after:bottom-5 after:left-0 after:h-px after:w-0 after:bg-champagne-gold after:transition-all hover:text-champagne-gold hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <IconButton label="搜尋">
            <Search size={22} />
          </IconButton>
          <Link href="/account" aria-label="會員中心" title="會員中心">
            <span className="inline-flex size-10 items-center justify-center rounded-md text-jp-green transition-colors hover:bg-champagne-gold/10">
              <User size={22} />
            </span>
          </Link>
          <Link href="/cart" aria-label="購物車" title="購物車" className="relative">
            <span className="inline-flex size-10 items-center justify-center rounded-md text-jp-green transition-colors hover:bg-champagne-gold/10">
              <ShoppingCart size={23} />
            </span>
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-champagne-gold text-[10px] font-bold text-jp-green-dark">
              2
            </span>
          </Link>
        </div>
      </div>
      <MobileNavigation />
    </header>
  );
}
