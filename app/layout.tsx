import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifTc = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "極品高爾夫 | JP Golf Club",
    template: "%s | 極品高爾夫",
  },
  description: "極品高爾夫 JP Golf Club 從日本直採全新及二手高爾夫球杆，服務香港及中國市場。",
  openGraph: {
    title: "極品高爾夫 | JP Golf Club",
    description: "日本直採、正品保證、專業檢測，精選全新及二手高爾夫球杆。",
    locale: "zh_HK",
    siteName: "JP Golf Club",
    type: "website",
  },
  icons: {
    icon: "/brand/icon-app.png",
    apple: "/brand/icon-app.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTc.variable} ${notoSerifTc.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-pearl-white text-charcoal">
        <TopAnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
