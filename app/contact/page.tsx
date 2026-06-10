import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { whatsappProductUrl } from "@/lib/routes";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "WhatsApp、電話、email 聯絡極品高爾夫。",
};

export default function ContactPage() {
  const contacts = [
    { label: "WhatsApp", value: "+852 1234 5678", icon: MessageCircle },
    { label: "電話", value: "+852 1234 5678", icon: Phone },
    { label: "Email", value: "info@jpgolfclub.com", icon: Mail },
    { label: "服務地區", value: "香港・中國大陸", icon: MapPin },
    { label: "營業時間", value: "星期一至日 10:00 - 19:00", icon: Clock },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="聯絡我們" description="想查詢庫存、二手成色、交收或寄送安排，可以先用 WhatsApp 聯絡我們。" />
      <section className="jp-section bg-white">
        <div className="jp-container grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <div key={contact.label} className="flex items-center gap-4 rounded-lg border border-light-grey bg-pearl-white p-5">
                  <span className="grid size-12 place-items-center rounded-full border border-champagne-gold text-champagne-gold">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/45">{contact.label}</p>
                    <p className="font-bold text-jp-green">{contact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-lg border border-line-gold/40 bg-champagne-gold/15 p-8">
            <h2 className="font-serif text-3xl font-bold text-jp-green">查詢前可準備</h2>
            <ul className="mt-5 space-y-3 leading-8 text-charcoal/72">
              <li>想查詢的商品名稱或截圖</li>
              <li>慣用手、桿身硬度、預算範圍</li>
              <li>香港交收或中國寄送需求</li>
            </ul>
            <LinkButton href={whatsappProductUrl()} target="_blank" className="mt-8">
              <MessageCircle size={18} /> WhatsApp 即時查詢
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
