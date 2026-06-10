import type { ButtonHTMLAttributes, ReactNode } from "react";

export function IconButton({
  label,
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: ReactNode }) {
  return (
    <button
      aria-label={label}
      title={label}
      className={`inline-flex size-10 items-center justify-center rounded-md border border-transparent text-jp-green transition-colors hover:border-champagne-gold/50 hover:bg-champagne-gold/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
