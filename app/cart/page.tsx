import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { products } from "@/data/products";
import { formatHKD } from "@/lib/format";
import { whatsappProductUrl } from "@/lib/routes";

export const metadata: Metadata = {
  title: "購物車",
  description: "購物車 mockup，預留日後付款與 WhatsApp 落單流程。",
};

export default function CartPage() {
  const cartItems = products.slice(0, 2);
  const total = cartItems.reduce((sum, item) => sum + item.priceHKD, 0);

  return (
    <section className="jp-section jp-paper">
      <div className="jp-container">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-champagne-gold">Cart Mockup</p>
        <h1 className="mt-4 font-serif text-5xl font-black text-jp-green">購物車</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid gap-4 rounded-lg border border-light-grey bg-white p-4 shadow-sm sm:grid-cols-[140px_1fr_auto]">
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-pearl-white">
                  <Image src={item.images[0]} alt={item.name} fill className="object-contain p-3" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne-gold">{item.brand}</p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-jp-green">{item.name}</h2>
                  <p className="mt-2 text-sm text-charcoal/60">數量 1 ・ {item.condition === "new" ? "全新" : "二手精選"}</p>
                </div>
                <p className="font-bold text-jp-green">{formatHKD(item.priceHKD)}</p>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-lg border border-line-gold/50 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-jp-green">訂單摘要</h2>
            <div className="my-5 space-y-3 border-y border-light-grey py-5 text-sm">
              <div className="flex justify-between"><span>商品小計</span><span>{formatHKD(total)}</span></div>
              <div className="flex justify-between"><span>運送</span><span>查詢後確認</span></div>
              <div className="flex justify-between"><span>付款</span><span>Mockup</span></div>
            </div>
            <div className="flex justify-between text-xl font-black text-jp-green">
              <span>合計</span>
              <span>{formatHKD(total)}</span>
            </div>
            <LinkButton href={whatsappProductUrl("購物車商品")} target="_blank" className="mt-6 w-full">
              <MessageCircle size={18} /> WhatsApp 確認訂單
            </LinkButton>
          </aside>
        </div>
      </div>
    </section>
  );
}
