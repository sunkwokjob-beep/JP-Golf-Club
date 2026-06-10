export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-champagne-gold/40 bg-champagne-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#9a752d]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-serif text-3xl font-bold leading-[1.18] text-jp-green md:text-[2.65rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl leading-8 text-charcoal/68">{description}</p> : null}
    </div>
  );
}
