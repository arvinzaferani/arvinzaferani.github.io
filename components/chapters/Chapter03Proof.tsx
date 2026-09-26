"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PendingImage from "@/components/site/PendingImage";
import { PendingValue } from "@/components/site/PendingValue";
import ProjectCursor from "@/components/site/ProjectCursor";
import type { Dictionary } from "@/lib/dictionaries";
import { isPlaceholder, projects, type Project } from "@/lib/projects";

/** §7 / §8 — asset availability is resolved on the server at build time. */
export type ProjectAssets = Record<string, { icon: boolean; image: boolean }>;

export default function Chapter03Proof({
  t,
  assets,
}: {
  t: Dictionary;
  assets: ProjectAssets;
}) {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setIndex(Math.min(projects.length - 1, Math.floor(progress * projects.length)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const project = projects[index];

  return (
    <section
      id="proof"
      ref={sectionRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
      aria-label={t.chapters[2].label}
    >
      <div className="sticky top-0 mx-auto flex h-screen w-full max-w-6xl flex-col justify-center overflow-hidden px-6 py-24">
        <header className="mb-7 flex items-baseline justify-between gap-6">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
            {t.proof.label}
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/35">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3">
              {/* §7 — dedicated per-project icon. `object-contain` so a
                  non-square source is letterboxed instead of distorted. */}
              {project.icon && assets[project.slug]?.icon && (
                <Image
                  src={project.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-9 w-9 shrink-0 object-contain opacity-90"
                />
              )}
              <h2
                key={project.slug}
                className="font-display animate-hero-rise text-3xl leading-tight md:text-5xl"
              >
                {project.name}
              </h2>
            </div>

            {!isPlaceholder(project.description) && (
              <p
                key={`${project.slug}-desc`}
                className="mt-5 max-w-md text-base leading-relaxed text-foreground/70"
              >
                {project.description}
              </p>
            )}

            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs">
              {!isPlaceholder(project.role) && (
                <div>
                  <dt className="uppercase tracking-[0.2em] text-foreground/35">
                    {t.proof.roleLabel}
                  </dt>
                  <dd className="mt-1 text-foreground/60">{project.role}</dd>
                </div>
              )}
              <div>
                <dt className="uppercase tracking-[0.2em] text-foreground/35">
                  {t.proof.yearLabel}
                </dt>
                <dd className="mt-1">
                  <PendingValue
                    value={project.year}
                    fallback={t.common.pending}
                    className="text-foreground/60"
                  />
                </dd>
              </div>
            </dl>

            {/* §3 — stack as linked technology items. */}
            {project.stack.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {project.stack.map((tech) => (
                  <li key={tech.name}>
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs text-foreground/55 underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-foreground hover:decoration-accent"
                    >
                      {tech.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {project.url && !isPlaceholder(project.url) && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-block text-xs uppercase tracking-[0.2em] text-foreground underline decoration-border underline-offset-8 transition-colors duration-300 hover:decoration-accent"
              >
                {t.proof.viewProject} →
              </a>
            )}
          </div>

          {/* §8 — only the first immediately visible image is priority. */}
          <div className="group relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card">
              {project.image ? (
                <PendingImage
                  key={project.image}
                  src={project.image}
                  alt={`${project.name} — ${t.proof.heading}`}
                  width={1600}
                  height={1000}
                  available={Boolean(assets[project.slug]?.image)}
                  className="block animate-hero-fade"
                  imageClassName="h-auto w-full"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  label={t.proof.screenshotPending}
                  hint={project.image}
                />
              ) : (
                <div className="flex aspect-[16/10] w-full items-center justify-center text-xs uppercase tracking-[0.25em] text-foreground/30">
                  {t.common.pending}
                </div>
              )}
            </div>
            <ProjectCursor label={t.proof.viewCaseCursor} />
          </div>
        </div>

        {/* §12 — the journey behind each project, kept to one compact rail.
            These steps can graduate into dedicated case-study pages later. */}
        <ProjectStory project={project} t={t} />

        <div className="mt-8 flex items-center gap-3">
          {projects.map((item, i) => (
            <span
              key={item.slug}
              className={`h-px flex-1 transition-colors duration-500 ${
                i <= index ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** §12 — IDEA → PROBLEM → DESIGN → BUILD → DEPLOY, per project. */
function ProjectStory({ project, t }: { project: Project; t: Dictionary }) {
  if (!project.story) return null;

  const steps = [
    { key: "idea", label: t.proof.storySteps.idea, value: project.story.idea },
    { key: "problem", label: t.proof.storySteps.problem, value: project.story.problem },
    { key: "design", label: t.proof.storySteps.design, value: project.story.design },
    { key: "build", label: t.proof.storySteps.build, value: project.story.build },
    { key: "deploy", label: t.proof.storySteps.deploy, value: project.story.deploy },
  ].filter((step) => !isPlaceholder(step.value));

  if (steps.length === 0) return null;

  return (
    <ol
      key={project.slug}
      aria-label={t.proof.storyLabel}
      className="mt-8 grid animate-hero-fade grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {steps.map((step) => (
        <li key={step.key} className="border-t border-border pt-2.5">
          <p className="text-[0.55rem] uppercase tracking-[0.2em] text-foreground/35">
            {step.label}
          </p>
          <p className="mt-1.5 line-clamp-2 text-[0.68rem] leading-relaxed text-foreground/55">
            {step.value}
          </p>
        </li>
      ))}
    </ol>
  );
}
