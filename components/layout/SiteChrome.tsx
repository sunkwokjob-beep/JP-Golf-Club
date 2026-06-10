"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <TopAnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
