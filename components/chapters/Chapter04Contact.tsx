"use client";

export default function Chapter04Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-24"
      aria-label="Contact"
    >
      <p className="mb-10 text-xs uppercase tracking-[0.3em] text-foreground/40">
        04 / 04 — Contact
      </p>

      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
        Have a project in mind?
        <br />
        <span className="text-foreground/30">Let&apos;s build it.</span>
      </h2>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/60">
        Tell me what you&apos;re building. Let&apos;s figure out the next step.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <a
          href="mailto:hello@arvinzaferani.com"
          className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
        >
          START A PROJECT →
        </a>
        <a
          href="mailto:hello@arvinzaferani.com"
          className="border-b border-border pb-1 text-sm text-foreground/70 transition-colors duration-300 hover:border-foreground/50 hover:text-foreground"
        >
          hello@arvinzaferani.com
        </a>
      </div>

      <div className="mt-24 flex flex-col gap-6 border-t border-border pt-8 text-xs uppercase tracking-[0.3em] text-foreground/40 md:flex-row md:items-center md:justify-between">
        <span>Arvin Zaferani</span>
        <span className="inline-flex items-center gap-2 normal-case tracking-normal">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Available for selected projects
        </span>
        <span>Tehran · {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
