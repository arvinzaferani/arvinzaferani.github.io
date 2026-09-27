/**
 * Dictionary shape for every locale. `fa.ts` must satisfy this exact type,
 * so a missing or misspelled key is a compile error rather than a runtime blank.
 *
 * §1 — only UI chrome is translated here. Project facts stay in lib/projects.ts
 * as placeholders and are never translated or invented.
 */
export type Dictionary = {
  nav: {
    work: string;
    about: string;
    contact: string;
    home: string;
  };
  hero: {
    phases: { lead: string; accent: string }[];
    role: string;
    city: string;
    available: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  capability: {
    label: string;
    heading: string;
    items: { title: string; description: string }[];
    stackLabel: string;
  };
  proof: {
    label: string;
    heading: string;
    viewProject: string;
    viewCaseCursor: [string, string];
    roleLabel: string;
    yearLabel: string;
    storyLabel: string;
    storySteps: { idea: string; problem: string; design: string; build: string; deploy: string };
    screenshotPending: string;
    /** Mobile-only cue that this chapter advances by scrolling. */
    scrollHint: string;
  };
  otherWork: {
    label: string;
    heading: string;
    /** Prefix for the organization/company a piece of work was done for. */
    orgLabel: string;
  };
  process: {
    label: string;
    heading: string;
    /** §11 — the full lifecycle. Descriptions stay placeholders until supplied. */
    stages: { id: string; label: string; description: string }[];
  };
  about: {
    label: string;
    name: string;
    bio: string;
    linksLabel: string;
    portraitPending: string;
  };
  contact: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    cta: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availability: string;
  };
  footer: {
    rights: string;
  };
  common: {
    pending: string;
    placeholderNote: string;
  };
  chapters: { id: string; label: string }[];
};
