"use client";

import { useEffect, useRef, useState } from "react";
import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import type { Dictionary } from "@/lib/dictionaries";

/**
 * §17 — scroll transforms the typography. The hero is one continuous statement
 * rather than unrelated headlines.
 */
export default function Chapter01Intro({ t }: { t: Dictionary }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const phases = t.hero.phases;

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) return;

      const p = Math.min(Math.max(-rect.top / travel, 0), 1);
      setProgress(p);
      setIndex(Math.min(phases.length - 1, Math.floor(p * phases.length)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [phases.length]);

  const current = phases[index];
  const chromeFade = Math.max(0, Math.min(1, (progress - 0.78) / 0.22));

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative h-[380vh]"
      aria-label={t.chapters[0].label}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Decorative flow field. Sits under the typography and picks up the
            page background, so the serif headline stays the hero (§15/§25). */}
        <FluidFlowGrid className="opacity-10" />



        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <h1 className="font-display text-display leading-[0.92]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span key={`${index}-lead`} className="block animate-hero-rise">
                {current.lead}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span
                key={`${index}-accent`}
                className="block animate-hero-rise-delayed text-gray-400"
              >
                {current.accent}
              </span>
            </span>
          </h1>

          <div
            className="transition-opacity duration-500"
            style={{ opacity: 1 - chromeFade }}
          >
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/60">
              <span>{t.hero.role}</span>
              <span className="text-foreground/25">·</span>
              <span>{t.hero.city}</span>
              <span className="text-foreground/25">·</span>
              <span className="inline-flex items-center gap-2">
                <span className="accent-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {t.hero.available}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary} →
              </a>
              <a
                href="#proof"
                className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors duration-300 hover:border-foreground/40"
              >
                {t.hero.ctaSecondary} →
              </a>
            </div>
          </div>
        </div>

        {/* §19 — internal phase progress is separate from the chapter counter. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-8 transition-opacity duration-500"
          style={{ opacity: 1 - chromeFade }}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/40">
            <span className="tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(phases.length).padStart(2, "0")}
            </span>
            <span className="relative h-px flex-1 bg-border">
              <span
                className="absolute inset-y-0 start-0 bg-accent"
                style={{ width: `${progress * 100}%` }}
              />
            </span>
            <span className="hidden sm:inline">{t.hero.scroll} ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
