"use client";

import Image from "next/image";

/**
 * §1 / §8 / §9 — assets are not supplied yet, so every project screenshot and
 * the profile portrait would otherwise 404. An unavailable asset renders an
 * honest, named "pending" frame that tells the owner exactly which file to
 * drop in, instead of a broken image or one shared generic placeholder.
 *
 * Availability is resolved at build time (see `lib/assets.ts`) so the correct
 * state is painted on first load; `onError` is only a safety net.
 */
export default function PendingImage({
  src,
  alt,
  width,
  height,
  available,
  className,
  imageClassName,
  priority = false,
  sizes,
  ratio = "aspect-[16/10]",
  label,
  hint,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  available: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  ratio?: string;
  label: string;
  hint: string;
}) {
  if (!available) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-card text-center ${ratio} ${className ?? ""}`}
      >
        <CornerMarks />
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground/30">
          {label}
        </span>
        <span className="px-6 font-mono text-[0.6rem] leading-relaxed tracking-tight text-foreground/25">
          {hint}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={imageClassName}
    />
  );
}

/** Editorial crop marks — signals "asset slot", not a branded image. */
function CornerMarks() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-4">
      <span className="absolute start-0 top-0 h-3 w-3 border-s border-t border-foreground/15" />
      <span className="absolute end-0 top-0 h-3 w-3 border-e border-t border-foreground/15" />
      <span className="absolute bottom-0 start-0 h-3 w-3 border-b border-s border-foreground/15" />
      <span className="absolute bottom-0 end-0 h-3 w-3 border-b border-e border-foreground/15" />
    </span>
  );
}
