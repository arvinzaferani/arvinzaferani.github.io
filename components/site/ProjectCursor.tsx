"use client";

/**
 * §20 — subtle custom cursor for project hover.
 * Desktop pointers only; touch devices keep the native behaviour.
 * Rendered inside the hover target so no global mouse tracking is needed.
 */
export default function ProjectCursor({
  label,
  tone = "light",
}: {
  label: [string, string];
  tone?: "light" | "dark";
}) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex"
    >
      <span
        className={`flex flex-col items-center rounded-full px-5 py-4 text-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-100 ${
          tone === "dark"
            ? "bg-foreground/95 text-background shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            : "bg-background/95 text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        }`}
        style={{ transform: "scale(0.9)" }}
      >
        <span className="text-[0.68rem] uppercase leading-tight tracking-[0.22em]">
          {label[0]}
        </span>
        <span className="text-[0.68rem] uppercase leading-tight tracking-[0.22em] text-accent">
          {label[1]}
        </span>
      </span>
    </span>
  );
}
