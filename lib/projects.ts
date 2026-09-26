/**
 * Content rule (§1)
 * ----------------
 * Every value below comes from the owner's CV. Nothing has been invented: where
 * the CV has no fact for a field (project URL, screenshots, the PROBLEM step),
 * the field is either left out or kept as a clearly identifiable placeholder.
 *
 * Replace the bracketed values in this file only — the UI needs no changes.
 */

export type StackItem = {
  name: string;
  url?: string;
};

export type ProjectStory = {
  idea: string;
  problem: string;
  design: string;
  build: string;
  deploy: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  role?: string;
  year?: string;
  url?: string;
  /** §7 — dedicated icon per project, e.g. /projects/kidad/icon.svg */
  icon?: string;
  /** §8 — dedicated screenshot per project, e.g. /projects/kidad/preview.webp */
  image?: string;
  stack: StackItem[];
  /** §12 — reserved for future dedicated case-study pages. */
  story?: ProjectStory;
};

/** §3 — primary selected projects. Kamva/KamvaChart is intentionally removed (§5). */
export const projects: Project[] = [
  {
    slug: "kidad",
    name: "Kidad",
    description:
      "An expense sharing and settlement platform for friends and groups, built around real-world payment splitting workflows.",
    role: "Personal project — full-stack, end to end",
    year: "2026",
    url: "https://kidad.ir",
    icon: "/projects/kidad/icon.png",
    image: "/projects/kidad/preview.png",
    stack: [
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "NestJS", url: "https://nestjs.com" },
      { name: "TypeScript", url: "https://www.typescriptlang.org" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "TypeORM", url: "https://typeorm.io" },
      { name: "JWT", url: "https://jwt.io" },
      { name: "Docker", url: "https://www.docker.com" },
    ],
    story: {
      idea: "A simpler way for groups of friends to split shared costs and settle the result.",
      problem: "[PROJECT_PROBLEM]",
      design:
        "Database entities and API contracts designed around dynamic expense relationships and accurate debt calculation between users.",
      build:
        "Authentication, user and group management, expense tracking, balance calculation and settlement logic.",
      deploy:
        "Containerized with Docker and shipped with a production-ready deployment configuration.",
    },
  },
  {
    slug: "tokiliran",
    name: "Tokiliran",
    description:
      "An integrated platform for legal services, covering product development, frontend architecture, backend integration and production infrastructure.",
    role: "Freelance — end-to-end technical ownership",
    year: "2026 – present",
    url: "https://tokiliran.com",
    icon: "/projects/tokiliran/icon.svg",
    image: "/projects/tokiliran/preview.png",
    stack: [
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "NestJS", url: "https://nestjs.com" },
      { name: "TypeScript", url: "https://www.typescriptlang.org" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "Docker", url: "https://www.docker.com" },
      { name: "Nginx", url: "https://nginx.org" },
    ],
    story: {
      idea: "Bring legal services into one integrated web product.",
      problem: "[PROJECT_PROBLEM]",
      design:
        "A multi-service architecture orchestrated with Docker and Docker Compose, fronted by Nginx Proxy Manager.",
      build:
        "Product development, frontend architecture and backend integration with Next.js, TypeScript, NestJS and PostgreSQL.",
      deploy:
        "Production deployment and maintenance: container orchestration, environment configuration, domain routing and database setup.",
    },
  },
  {
    slug: "fitcoach",
    name: "FitCoach",
    description:
      "A Persian, right-to-left web platform for the whole training cycle: coaches build multi-week programs, assign them to athletes and tailor every set, while athletes follow, log and track their progress.",
    role: "Full-stack developer",
    year: "[FITCOACH_YEAR]",
    url: "https://github.com/arvinzaferani/fitcoach",
    icon: "/projects/fitcoach/icon.svg",
    image: "/projects/fitcoach/preview.png",
    stack: [
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "NestJS", url: "https://nestjs.com" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "Prisma", url: "https://www.prisma.io" },
      { name: "Passport", url: "https://www.passportjs.org" },
      { name: "JWT", url: "https://jwt.io" },
      { name: "MinIO", url: "https://min.io" },
    ],
    story: {
      idea:
        "One platform for the full training-program cycle — from designing the program to following and measuring it.",
      problem:
        "Coaches need to build multi-week programs and customise exercises, sets and weight per athlete, while athletes need one place to follow the plan, record their sets and track weight, fat and muscle.",
      design:
        "npm workspaces monorepo for frontend and backend; an 18-model relational Prisma schema on PostgreSQL with 1:N and many-to-many relations and soft delete; admin, coach and athlete roles separated by role-based access control.",
      build:
        "JWT access and refresh tokens with Passport and bcrypt behind a global NestJS guard; a typed frontend API layer with proactive token refresh; hand-rolled AWS SigV4 signing for MinIO presigned URLs; a Persian design system with RTL layout, Vazirmatn, light and dark themes, and Jalali dates in the interface and charts.",
      deploy: "[PROJECT_DEPLOY]",
    },
  },
];

/** §4 — lower visual priority, compact text-oriented list. */
export type OtherProject = {
  slug: string;
  name: string;
  description: string;
  year?: string;
  url?: string;
};

export const otherProjects: OtherProject[] = [
  {
    slug: "asbabchi-admin",
    name: "Asbabchi Admin Panel",
    description:
      "Urban freight management, Web Negah — refactored, maintained and extended the core admin panel features for reliability and scalability.",
    year: "2025",
  },
  {
    slug: "tond-hungary",
    name: "Tond Hungary",
    description:
      "On-demand services platform — customer, expert and admin panels in Next.js, plus NestJS work on expert requests, payments, wallet and order filtering.",
    year: "2025",
  },
  {
    slug: "marquize",
    name: "Marquize",
    description:
      "Dynamic form rendering engine for an industry accounting platform, Web Negah — a schema-driven approach that generates the UI from backend templates instead of hand-coding it.",
    year: "2025",
  },
  {
    slug: "adak",
    name: "Adak",
    description:
      "Logistics platform admin panel, Safora Financial Group — Vue, TypeScript, Axios and Pinia, with complex dynamic forms and custom validation.",
    year: "2024",
  },
  {
    slug: "zanjireh-tamin",
    name: "Zanjireh Tamin",
    description:
      "Supply chain management platform, Safora Financial Group — features, landing pages and authentication in Vue.js, TypeScript and Pinia.",
    year: "2024",
  },
  {
    slug: "teachsha",
    name: "Teachsha",
    description:
      "Online quiz platform, Hash Studio — responsive Vue.js interfaces with Axios handling API requests and data flow between front end and back end.",
    year: "2024",
  },
  {
    slug: "blog-platform",
    name: "Blog Platform",
    description:
      "Personal project — React, TypeScript, Redux Toolkit, Node.js, Express and MongoDB, with a RESTful API for posts and user profiles.",
    year: "2024",
  },
];

/**
 * Detects an unfilled placeholder so the UI can render an honest
 * "content pending" state instead of showing a fake value.
 */
export function isPlaceholder(value?: string): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return (
    trimmed.startsWith("[") ||
    trimmed.endsWith("]") ||
    /^\[[A-Z0-9_]+\]$/.test(trimmed)
  );
}
