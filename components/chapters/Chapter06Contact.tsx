import type { Dictionary } from "@/lib/dictionaries";
import { contact, site } from "@/lib/site";

/** §9 — the conversion goal. All contact data is real, never invented. */
export default function Chapter06Contact({ t }: { t: Dictionary }) {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32"
      aria-label={t.chapters[5].label}
    >
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
        {t.contact.label}
      </p>

      <h2 className="font-display mt-7 text-display leading-[0.95]">
        <span className="block">{t.contact.headingLine1}</span>
        <span className="block text-foreground/28">{t.contact.headingLine2}</span>
      </h2>

      <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground/65">
        {t.contact.body}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
        >
          {t.contact.cta} →
        </a>
      </div>

      <dl className="mt-20 grid gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/40">
            {t.contact.email}
          </dt>
          <dd className="mt-2 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              {contact.email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/40">
            {t.contact.phone}
          </dt>
          <dd className="mt-2 text-sm">
            <a
              href={`tel:${contact.phone}`}
              dir="ltr"
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              {contact.phoneDisplay}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/40">
            {t.contact.linkedin}
          </dt>
          <dd className="mt-2 text-sm">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              /a-zaferani
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/40">
            {t.contact.github}
          </dt>
          <dd className="mt-2 text-sm">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              /arvinzaferani
            </a>
          </dd>
        </div>
      </dl>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-foreground/35">
        <p>
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </p>
      </footer>
    </section>
  );
}
