"use client";

import Image from "next/image";
import { useState } from "react";

export function ManagedImage({
  src,
  fallbackSrc,
  alt,
  fill = false,
  width = 1200,
  height = 800,
  sizes,
  className = "",
  priority = false,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        onError={handleError}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={handleError}
      unoptimized
    />
  );
}
