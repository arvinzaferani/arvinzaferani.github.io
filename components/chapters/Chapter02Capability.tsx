"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

const stack = [
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "React", url: "https://react.dev" },
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "NestJS", url: "https://nestjs.com" },
  { name: "PostgreSQL", url: "https://www.postgresql.org" },
  { name: "Docker", url: "https://www.docker.com" },
];

/**
 * §18 — CAPABILITY was previously compressed to ~1.3vh. It now holds an
 * intentional amount of vertical space.
 */
export default function Chapter02Capability({ t }: { t: Dictionary }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="capability"
      className="relative mx-auto flex min-h-[130vh] w-full max-w-6xl flex-col justify-center px-6 py-32"
      aria-label={t.chapters[1].label}
    >
      <header className="max-w-2xl">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
          {t.capability.label}
        </p>
        <h2 className="font-display mt-6 text-chapter leading-[1.05]">
          {t.capability.heading}
        </h2>
      </header>

      <div className="mt-16 flex flex-col">
        {t.capability.items.map((item, index) => {
          const isActive = index === active;

          return (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-expanded={isActive}
              className="group border-t border-border py-7 text-start transition-colors duration-500 last:border-b hover:border-foreground/30"
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span
                  className={`text-xs tabular-nums transition-colors duration-500 ${
                    isActive ? "text-accent" : "text-foreground/30"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`flex-1 font-display text-xl transition-all duration-500 md:text-3xl ${
                    isActive
                      ? "translate-x-1.5 text-foreground rtl:-translate-x-1.5"
                      : "text-foreground/35"
                  }`}
                >
                  {item.title}
                </h3>

                <span
                  aria-hidden
                  className={`text-sm transition-all duration-500 ${
                    isActive
                      ? "text-foreground/60 opacity-100"
                      : "opacity-0"
                  }`}
                >
                  →
                </span>
              </div>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="max-w-2xl overflow-hidden text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* §14 of AGENT.md — technology supports the positioning, never leads it. */}
      <div className="mt-20 border-t border-border pt-8">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
          {t.capability.stackLabel}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {stack.map((tech) => (
            <li key={tech.name}>
              <a
                href={tech.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-foreground/60 underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-foreground hover:decoration-accent"
              >
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
