"use client";

import ChapterIndicator, { useActiveChapter } from "@/components/site/ChapterIndicator";
import type { Dictionary } from "@/lib/dictionaries";

/** §19 — chapter counter driven by real scroll position, not internal phases. */
export default function ChapterCounter({ chapters }: { chapters: Dictionary["chapters"] }) {
  const ids = chapters.map((c) => c.id);
  const activeId = useActiveChapter(ids);
  return <ChapterIndicator chapters={chapters} activeId={activeId} />;
}
