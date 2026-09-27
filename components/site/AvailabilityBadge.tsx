"use client";

import { useEffect, useRef, useState } from "react";

/**
 * §25 — the availability signal starts in the hero, next to the role and the
 * city. The moment it actually reaches the top of the viewport it hands over to
 * a fixed copy, so "available for work" stays visible all the way down to the
 * contact chapter.
 *
 * The trigger is a live `rect.top <= 0`, not the badge's document offset. The
 * hero is a sticky 380vh track, so the badge's document offset is reached at
 * ~510px of scroll while the badge itself is still parked in the middle of the
 * viewport — comparing scroll position against the offset would pin it long
 * before it gets there. While sticky, `rect.top` is frozen, so the trigger
 * only fires once the hero releases and the row genuinely scrolls up to the
 * top. `visibility: hidden` rather than `display: none` keeps the hero row
 * from collapsing, and leaves `rect.top` intact for the live check.
 */
export default function AvailabilityBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const refEl = useRef<HTMLSpanElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = refEl.current;
    if (!el) return;

    const update = () => setPinned(el.getBoundingClientRect().top <= 0);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <span ref={refEl} className={`${className ?? ""} ${pinned ? "invisible" : ""}`}>
        <Badge label={label} />
      </span>

      {pinned && (
        <span className="fixed top-4 start-6 z-40 animate-hero-fade">
          <Badge label={label} floating />
        </span>
      )}
    </>
  );
}

function Badge({ label, floating = false }: { label: string; floating?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm text-foreground/60 ${
        floating
          ? "rounded-full border border-border bg-background/90 px-4 py-2 backdrop-blur-md"
          : ""
      }`}
    >
      <span className="accent-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {label}
    </span>
  );
}
