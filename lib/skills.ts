/**
 * Content rule (§1)
 * ----------------
 * The owner's own list, grouped. Nothing added, nothing dropped — only the
 * spelling of the technology names normalised (PostgresSQL → PostgreSQL,
 * "Nest js" → NestJS).
 */

export type Skill = {
  name: string;
  url: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    skills: [
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org" },
      { name: "React", url: "https://react.dev" },
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "Vue.js", url: "https://vuejs.org" },
      { name: "React Query", url: "https://tanstack.com/query/latest" },
      { name: "Redux", url: "https://redux.js.org" },
      { name: "Pinia", url: "https://pinia.vuejs.org" },
      { name: "Zod", url: "https://zod.dev" },
      { name: "Tailwind", url: "https://tailwindcss.com" },
      { name: "Bootstrap", url: "https://getbootstrap.com" },
      { name: "Figma", url: "https://www.figma.com" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    skills: [
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "NestJS", url: "https://nestjs.com" },
      { name: "Axios", url: "https://axios-http.com" },
    ],
  },
  {
    id: "data",
    label: "DATABASE & ORM",
    skills: [
      { name: "MongoDB", url: "https://www.mongodb.com" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "TypeORM", url: "https://typeorm.io" },
      { name: "Prisma", url: "https://www.prisma.io" },
    ],
  },
  {
    id: "tooling",
    label: "TOOLS & BUILD",
    skills: [
      { name: "Git", url: "https://git-scm.com" },
      { name: "NPM", url: "https://www.npmjs.com" },
      { name: "Docker", url: "https://www.docker.com" },
      { name: "Webpack", url: "https://webpack.js.org" },
    ],
  },
];
