import type { ReactNode } from "react";

export function AdminStatCard({
  label,
  value,
  helper,
  icon,
}: {
  label: string;
  value: number | string;
  helper: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-champagne-gold/25 bg-white/78 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne-gold">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-jp-green-dark">{value}</p>
        </div>
        <div className="rounded-md border border-champagne-gold/25 bg-jp-green/6 p-2 text-jp-green">{icon}</div>
      </div>
      <p className="mt-4 text-sm text-charcoal/58">{helper}</p>
    </div>
  );
}
