export const site = {
  name: "Arvin Zaferani",
  shortName: "AZ",
  /**
   * §1 — the production domain was not supplied, so this is a clearly marked
   * placeholder rather than an invented fact. Set NEXT_PUBLIC_SITE_URL (or edit
   * this value) before deploying: it drives canonical URLs, Open Graph and
   * sitemap.xml (§21).
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en",
  title: "Arvin Zaferani — Full-Stack Developer",
  description:
    "Independent full-stack developer taking web products from idea to production.",
} as const;

/** Real contact information (§2, §14). */
export const contact = {
  email: "arzaferani@gmail.com",
  phone: "+989196094479",
  phoneDisplay: "+98 919 609 4479",
  linkedin: "https://www.linkedin.com/in/a-zaferani",
  github: "https://github.com/arvinzaferani",
} as const;

// Location and availability copy live in the dictionaries so /fa can render
// them in Persian; they are intentionally not duplicated here.
