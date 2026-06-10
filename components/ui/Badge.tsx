import type { ReactNode } from "react";

export function Badge({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "green" | "light" }) {
  const styles = {
    gold: "border-champagne-gold/60 bg-champagne-gold/15 text-[#7b5b1c]",
    green: "border-success-green/30 bg-success-green/10 text-success-green",
    light: "border-light-grey bg-white/80 text-charcoal",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles[tone]}`}>
      {children}
    </span>
  );
}
