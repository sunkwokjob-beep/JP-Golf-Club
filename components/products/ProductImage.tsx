"use client";

import Image from "next/image";
import { useState } from "react";
import { getProductImageFallback } from "@/lib/product-utils";

export function ProductImage({
  src,
  alt,
  category,
  className = "",
}: {
  src: string;
  alt: string;
  category: string;
  className?: string;
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      className={`object-contain ${className}`}
      onError={() => setImageSrc(getProductImageFallback(category))}
      unoptimized
    />
  );
}
