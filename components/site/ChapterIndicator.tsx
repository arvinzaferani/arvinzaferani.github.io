"use client";

import { useEffect, useState } from "react";

/**
 * §19 — a semantically clear chapter indicator that tracks the real chapter,
 * instead of mixing chapter numbers with internal typography phases.
 */
export default function ChapterIndicator({
  chapters,
  activeId,
}: {
  chapters: { id: string; label: string }[];
  activeId: string;
}) {
  const index = Math.max(
    0,
    chapters.findIndex((c) => c.id === activeId)
  );
  const current = chapters[index];

  if (!current) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 start-6 z-30 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/45 md:flex"
      aria-hidden
    >
      <span className="tabular-nums">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(chapters.length).padStart(2, "0")}
      </span>
      <span className="h-px w-6 bg-border" />
      <span className="text-foreground/70">{current.label}</span>
    </div>
  );
}

/** Tracks which chapter is currently in view and drives the indicator. */
export function useActiveChapter(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
