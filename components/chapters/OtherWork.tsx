import { PendingValue } from "@/components/site/PendingValue";
import type { Dictionary } from "@/lib/dictionaries";
import { isPlaceholder, otherProjects } from "@/lib/projects";

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
          {otherProjects.map((item) => {
            const href =
              item.url && !isPlaceholder(item.url) ? item.url : undefined;

            return (
              <li
                key={item.slug}
                className="transition-colors duration-300 hover:bg-foreground/[0.02]"
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-col gap-1.5 py-5 sm:px-2"
                  >
                    <Row item={item} t={t} linked />
                  </a>
                ) : (
                  <div className="flex flex-col gap-1.5 py-5 sm:px-2">
                    <Row item={item} t={t} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Row({
  item,
  t,
  linked = false,
}: {
  item: (typeof otherProjects)[number];
  t: Dictionary;
  linked?: boolean;
}) {
  const stack = item.stack ?? [];

  return (
    <>
      <div className="flex items-baseline justify-between gap-6">
        <span
          className={`text-sm ${
            linked
              ? "text-foreground/75 transition-colors duration-300 group-hover:text-foreground"
              : "text-foreground/75"
          }`}
        >
          {item.name}
          {linked && (
            <span
              aria-hidden="true"
              className="ms-1.5 inline-block text-foreground/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-accent"
            >
              ↗
            </span>
          )}
        </span>
        {item.year && (
          <span className="shrink-0 text-xs text-foreground/35">
            <PendingValue
              value={item.year}
              fallback={t.common.pending}
              className="text-xs"
            />
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-foreground/45">
        <PendingValue value={item.description} fallback={t.common.pending} />
      </p>

      {(item.org || stack.length > 0) && (
        <div className="mt-1 flex flex-col items-start gap-x-3 gap-y-1.5">
          {stack.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {stack.map((tech) => (
                <li
                  key={tech.name}
                  className="text-[0.68rem] text-foreground/35"
                >
                  {tech.name}
                </li>
              ))}
            </ul>
          )}
          {item.org && (
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/40">
              {item.org}
            </span>
          )}
        </div>
      )}
    </>
  );
}
