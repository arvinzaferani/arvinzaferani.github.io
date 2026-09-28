"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const refEl = useRef<HTMLSpanElement>(null);
  const [pinned, setPinned] = useState(false);
  const phases = t.hero.phases;

  useEffect(() => {
    const el = refEl.current;
    if (!el) return;


    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;

      if (travel <= 0) return;

      const p = Math.min(Math.max(-rect.top / travel, 0), 1);
      setProgress(p);

      setIndex(Math.min(phases.length - 1, Math.floor(p * phases.length)))
      const update = () => setPinned(el.getBoundingClientRect().top - 20 <= 0 && -rect.top + window.innerHeight >= rect.height);
      update();
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

          <div          >
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/60">
            <div className="flex flex-col">

              <div className="transition-opacity duration-500"
                style={{ opacity: 1 - chromeFade }}>{t.hero.role}</div>
              {/* <div className="text-foreground/25 transition-opacity duration-500"
                style={{ opacity: 1 - chromeFade }}>·</div> */}
                <div className="transition-opacity duration-500" style={{ opacity: 1 - chromeFade }}>{t.hero.city}</div>
                {/* <div className="text-foreground/25 transition-opacity duration-500" style={{ opacity: 1 - chromeFade }}>·</div> */}
              </div>
              
            </div>

            <div className="mt-10 flex flex-wrap gap-3 transition-opacity duration-500" style={{ opacity: 1 - chromeFade }}>
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
            <span ref={refEl} className={`md:animate-hero-fade md:animate-hero-rise ${pinned ? "invisible" : undefined}`}>
                <Badge label={t.hero.available} />
              </span>

              {typeof document !== "undefined" &&
                createPortal(
                  pinned ? (
                    <span className="fixed top-4 md:animate-hero-fade md:animate-hero-rise start-6 z-50 transition-opacity duration-500">
                      <Badge label={t.hero.available} floating />
                    </span>
                  ) : null,
                  document.body,
                )}
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

/**
 * The badge is an anchor, not a decoration: clicking it — pinned or in the hero —
 * takes the reader to the last chapter. It stays the flex item it was as a span,
 * so the hero's `mt-8` offset and the pill's box are untouched.
 */
function Badge({ label, floating }: { label: string; floating?: boolean }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center gap-2 text-sm text-foreground/60 rounded-full  bg-background px-4 py-2 border border-border transition-colors duration-300 hover:border-foreground/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${floating ? '' : 'mt-8'}`}
    >
      <span className="accent-dot inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
      {label}
    </a>
  );
}