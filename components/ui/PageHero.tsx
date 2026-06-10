import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="jp-paper border-b border-line-gold/35 py-14 md:py-20">
      <div className="jp-container">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-champagne-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight text-jp-green md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-charcoal/72">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
