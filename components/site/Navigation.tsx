"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

/** §13 — minimal sticky navigation. */
export default function Navigation({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#proof", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const switchLocale = (next: Locale) => {
    const rest = pathname.replace(/^\/(en|fa)/, "") || "";
    return `/${next}${rest}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4"
      >
        <a
          href="#intro"
          className="font-display text-base tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name.toUpperCase()}
        </a>

        <div className="flex items-center gap-6 md:gap-9">
          <ul className="flex items-center gap-5 text-xs uppercase tracking-[0.18em] md:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 text-foreground/60 transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 rtl:after:origin-right"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {locales.length > 1 && (
            <div
              className="flex items-center gap-1 text-xs tracking-[0.15em]"
              role="group"
              aria-label="Language"
            >
              {locales.map((code) => {
                const isActive = code === locale;
                return (
                  <Link
                    key={code}
                    href={switchLocale(code)}
                    hrefLang={code}
                    aria-current={isActive ? "true" : undefined}
                    className={`px-2 py-1 transition-colors duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/35 hover:text-foreground/70"
                    }`}
                  >
                    {localeLabels[code]}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
