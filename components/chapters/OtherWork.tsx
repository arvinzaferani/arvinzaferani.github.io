import { PendingValue } from "@/components/site/PendingValue";
import type { Dictionary } from "@/lib/dictionaries";
import { otherProjects } from "@/lib/projects";

/** §4 — compact, text-oriented, deliberately lower visual priority. */
export default function OtherWork({ t }: { t: Dictionary }) {
  return (
    <section
      aria-label={t.otherWork.label}
      className="mx-auto w-full max-w-6xl px-6 pb-28"
    >
      <div className="border-t border-border pt-10">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
          {t.otherWork.label}
        </p>

        <ul className="mt-8 divide-y divide-border">
          {otherProjects.map((item) => (
            <li
              key={item.slug}
              className="flex flex-col gap-1 py-5 transition-colors duration-300 hover:bg-foreground/[0.02] sm:flex-row sm:items-baseline sm:gap-8 sm:px-2"
            >
              <span className="text-sm text-foreground/75 sm:w-56 sm:shrink-0">
                {item.name}
              </span>
              <span className="text-sm text-foreground/45">
                <PendingValue
                  value={item.description}
                  fallback={t.common.pending}
                />
              </span>
              {item.year && (
                <span className="shrink-0 text-xs text-foreground/35 sm:ml-auto sm:pl-8">
                  <PendingValue
                    value={item.year}
                    fallback={t.common.pending}
                    className="text-xs"
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
