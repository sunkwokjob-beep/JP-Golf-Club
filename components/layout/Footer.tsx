import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { primaryNavigation, utilityNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="jp-green-panel pb-20 text-pearl-white md:pb-0">
      <div className="jp-container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-horizontal.png" alt="JP Golf Club" width={210} height={76} className="h-auto w-[210px] rounded bg-pearl-white" />
          <p className="mt-5 max-w-md leading-8 text-pearl-white/75">
            極品高爾夫專注日本直採全新及二手高爾夫球杆，以專業檢測與可靠服務，連接香港及中國球手。
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.5em] text-champagne-gold">From Japan · For Serious Golfers</p>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold text-champagne-gold">網站導覽</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {[...primaryNavigation, ...utilityNavigation].map((item) => (
              <Link key={item.href} href={item.href} className="text-pearl-white/75 transition-colors hover:text-champagne-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold text-champagne-gold">聯絡我們</h3>
          <div className="mt-5 space-y-4 text-sm text-pearl-white/75">
            <p className="flex items-center gap-3"><MapPin size={18} className="text-champagne-gold" />服務香港・中國市場</p>
            <p className="flex items-center gap-3"><Phone size={18} className="text-champagne-gold" />+852 1234 5678</p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-champagne-gold" />info@jpgolfclub.com</p>
            <p className="flex items-center gap-3"><Clock size={18} className="text-champagne-gold" />星期一至日 10:00 - 19:00</p>
          </div>
          <div className="mt-6 flex gap-3">
            {[AtSign, Send, MessageCircle].map((Icon, index) => (
              <span key={index} className="grid size-10 place-items-center rounded-full border border-champagne-gold/60 text-champagne-gold">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-champagne-gold/25 py-4 text-center text-xs text-pearl-white/55">
        © 2026 JP Golf Club 極品高爾夫　｜　條款及細則　｜　私隱政策　｜　退換貨政策
      </div>
    </footer>
  );
}
