import ProfilePortrait from "@/components/site/ProfilePortrait";
import { PendingValue } from "@/components/site/PendingValue";
import type { Dictionary } from "@/lib/dictionaries";
import { contact } from "@/lib/site";

/** §10 — real name, real links, and an honest about statement. */
export default function Chapter05About({ t }: { t: Dictionary }) {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-32"
      aria-label={t.chapters[4].label}
    >
      <div className="flex flex-col-reverse gap-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
            {t.about.label}
          </p>

          <h2 className="font-display mt-6 text-chapter leading-[1.05]">
            {t.about.name}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
            <PendingValue value={t.about.bio} fallback={t.common.pending} />
          </p>

          <div className="mt-10">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
              {t.about.linksLabel}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
              </li>
              <li>
                <ExternalLink href={contact.github}>GitHub</ExternalLink>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-foreground/60 underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-foreground hover:decoration-accent"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* §9 — the portrait belongs here, not in the hero. */}
        <ProfilePortrait t={t} />
      </div>
    </section>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-sm text-foreground/60 underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-foreground hover:decoration-accent"
    >
      {children}
    </a>
  );
}
