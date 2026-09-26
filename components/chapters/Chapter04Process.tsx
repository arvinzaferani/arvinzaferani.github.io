"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { isPlaceholder } from "@/lib/projects";

/** §11 — the full lifecycle: DISCOVER → PLAN → BUILD → DEPLOY → IMPROVE. */
export default function Chapter04Process({ t }: { t: Dictionary }) {
  const stages = t.process.stages;
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setIndex(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [stages.length]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative"
      style={{ height: `${stages.length * 80}vh` }}
      aria-label={t.chapters[3].label}
    >
      <div className="sticky top-0 mx-auto flex h-screen w-full max-w-6xl flex-col justify-center overflow-hidden px-6">
        <header className="mb-12">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
            {t.process.label}
          </p>
          <h2 className="font-display mt-5 text-chapter leading-[1.05]">
            {t.process.heading}
          </h2>
        </header>

        <ol className="flex flex-col gap-0">
          {stages.map((item, i) => {
            const isActive = i === index;
            const isDone = i < index;

            return (
              <li
                key={item.id}
                className="flex items-baseline gap-5 border-t border-border py-5 md:gap-10"
              >
                <span
                  className={`text-xs tabular-nums transition-colors duration-500 ${
                    isActive ? "text-accent" : isDone ? "text-foreground/50" : "text-foreground/25"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`font-display text-lg transition-all duration-500 md:text-3xl ${
                    isActive
                      ? "text-foreground"
                      : isDone
                        ? "text-foreground/35"
                        : "text-foreground/20"
                  }`}
                >
                  {item.label}
                </span>

                <span className="ms-auto hidden max-w-sm text-end text-xs leading-relaxed text-foreground/50 sm:block">
                  {isPlaceholder(item.description) ? t.common.pending : item.description}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
