import type { Dictionary } from "./en";

export const en: Dictionary = {
  nav: {
    work: "WORK",
    about: "ABOUT",
    contact: "CONTACT",
    home: "HOME",
  },
  hero: {
    phases: [
      { lead: "ARVIN", accent: "ZAFERANI" },
      { lead: "I BUILD", accent: "DIGITAL PRODUCTS" },
      { lead: "I BUILD", accent: "WEB PRODUCTS" },
      { lead: "FROM IDEA", accent: "TO PRODUCTION" },
      { lead: "I TAKE", accent: "OWNERSHIP" },
    ],
    role: "Full-stack developer",
    city: "Tehran",
    available: "Available for selected projects",
    ctaPrimary: "START A PROJECT",
    ctaSecondary: "VIEW MY WORK",
    scroll: "SCROLL",
  },
  capability: {
    label: "CAPABILITY",
    heading: "What I do",
    items: [
      {
        title: "MVP & Product Development",
        description:
          "Turn an idea into a working product with a practical technical foundation.",
      },
      {
        title: "Full-stack Web Applications",
        description:
          "Design and build custom web applications, dashboards and business platforms.",
      },
      {
        title: "Existing Product Development",
        description: "Continue, improve or restructure an existing application.",
      },
      {
        title: "Deployment & Maintenance",
        description:
          "Take products from development to production and keep them running.",
      },
    ],
    stackLabel: "I work primarily with",
  },
  proof: {
    label: "PROOF",
    heading: "Selected work",
    viewProject: "VIEW PROJECT",
    viewCaseCursor: ["VIEW", "CASE"],
    roleLabel: "Role",
    yearLabel: "Year",
    storyLabel: "Story",
    storySteps: {
      idea: "IDEA",
      problem: "PROBLEM",
      design: "DESIGN",
      build: "BUILD",
      deploy: "DEPLOY",
    },
    screenshotPending: "Screenshot pending",
  },
  otherWork: {
    label: "OTHER WORK",
    heading: "Other projects",
  },
  process: {
    label: "PROCESS",
    heading: "From idea to production",
    stages: [
      {
        id: "discover",
        label: "DISCOVER",
        description:
          "Understand the product, the users, and what already exists.",
      },
      {
        id: "plan",
        label: "PLAN",
        description:
          "Fix the scope, the data model and the stack before writing code.",
      },
      {
        id: "build",
        label: "BUILD",
        description:
          "Ship the core features end to end — interface, API and database.",
      },
      {
        id: "deploy",
        label: "DEPLOY",
        description:
          "Get it live: containers, environment configuration, domain, database.",
      },
      {
        id: "improve",
        label: "IMPROVE",
        description:
          "Fix what breaks in production, then keep extending the product.",
      },
    ],
  },
  about: {
    label: "ABOUT",
    name: "ARVIN ZAFERANI",
    bio: "Full-stack JavaScript developer working across product development and production maintenance — database design, APIs, interface architecture, and the infrastructure that keeps a product running.",
    linksLabel: "Elsewhere",
    portraitPending: "Portrait pending",
  },
  contact: {
    label: "CONTACT",
    headingLine1: "Have a project in mind?",
    headingLine2: "Let's build it.",
    body: "Tell me what you're building. Let's figure out the next step.",
    cta: "START A PROJECT",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    availability: "Available for selected projects",
  },
  footer: {
    rights: "All rights reserved.",
  },
  common: {
    pending: "Content pending",
    placeholderNote:
      "Placeholder content — replace the bracketed values in lib/projects.ts.",
  },
  chapters: [
    { id: "intro", label: "INTRO" },
    { id: "capability", label: "CAPABILITY" },
    { id: "proof", label: "PROOF" },
    { id: "process", label: "PROCESS" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ],
};
