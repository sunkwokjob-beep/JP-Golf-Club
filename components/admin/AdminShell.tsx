import Image from "next/image";
import Link from "next/link";
import { Boxes, Gauge, ImageIcon, PackageSearch, Settings, ShoppingBag, UsersRound } from "lucide-react";
import type { ReactNode } from "react";

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "商品管理", href: "/admin/products", icon: PackageSearch },
  { label: "訂單管理", href: "/admin/orders", icon: ShoppingBag, placeholder: true },
  { label: "會員管理", href: "/admin/members", icon: UsersRound, placeholder: true },
  { label: "圖片素材", href: "/admin/assets", icon: ImageIcon, placeholder: true },
  { label: "設定", href: "/admin/settings", icon: Settings, placeholder: true },
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f1e8] text-charcoal">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-champagne-gold/25 bg-jp-green-dark text-pearl-white lg:flex lg:flex-col">
        <div className="border-b border-champagne-gold/25 p-6">
          <Link href="/admin" className="block rounded-md bg-pearl-white p-3">
            <Image src="/brand/logo-horizontal.png" alt="極品高爾夫 JP Golf Club" width={220} height={80} className="h-auto w-full" />
          </Link>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-champagne-gold">Admin Console</p>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-pearl-white/78 transition-colors hover:bg-white/8 hover:text-champagne-gold"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {item.label}
                </span>
                {item.placeholder ? <span className="text-[10px] uppercase tracking-[0.15em] text-pearl-white/35">Soon</span> : null}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-champagne-gold/25 p-5 text-xs leading-6 text-pearl-white/55">
          展示用 Admin MVP：暫時不接 database、登入、付款或真實訂單流程。
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-champagne-gold/25 bg-[#fdfbf5]/92 backdrop-blur">
          <div className="flex min-h-20 flex-col justify-center gap-1 px-5 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">
              <Boxes size={15} />
              JP Golf Club Admin
            </div>
            <p className="text-sm text-charcoal/60">商品資料、庫存狀態與後台管理 UI MVP</p>
          </div>
        </header>
        <div className="px-5 py-6 lg:px-8 lg:py-8">{children}</div>
      </div>
    </div>
  );
}
