# Arvin Zaferani — Personal Website V2

Update the existing personal website according to this brief.

The primary goal remains:

> Generate full-stack software project opportunities.

The website should position Arvin as an independent **full-stack developer who can take software projects from idea to production**.

---

# 1. IMPORTANT — CONTENT RULE

Do NOT invent project descriptions, results, client names, statistics, responsibilities, testimonials, or any other factual information.

All project content must use clearly identifiable placeholders so the owner can replace them manually.

For example:

```text
[PROJECT_DESCRIPTION]
[PROJECT_ROLE]
[PROJECT_RESULT]
[PROJECT_YEAR]
```

Do not write fictional descriptions such as:

> "A platform for tracking and managing..."

unless that exact content is provided.

The implementation should separate project data from UI so content can easily be edited later.

---

# 2. Contact Information

Use the following real contact information:

Email:

```text
arzaferani@gmail.com
```

Phone:

```text
+989196094479
```

LinkedIn:

```text
https://www.linkedin.com/in/a-zaferani
```

GitHub:

```text
https://github.com/arvinzaferani
```

Do not use placeholder emails such as `hello@arvinzaferani.com`.

---

# 3. Project Structure

Update the selected projects.

## Primary projects

The main selected-work section should include:

### 01 — Kidad

```text
Name: Kidad
Description: [KIDAD_DESCRIPTION]
Role: [KIDAD_ROLE]
Year: [KIDAD_YEAR]
URL: [KIDAD_URL]
Icon: [KIDAD_ICON]
```

Stack should be represented as linked technology items:

```text
Next.js
React
TypeScript
NestJS
PostgreSQL
Docker
```

Do not write long technical descriptions.

---

### 02 — Tokiliran

```text
Name: Tokiliran
Description: [TOKILIRAN_DESCRIPTION]
Role: [TOKILIRAN_ROLE]
Year: [TOKILIRAN_YEAR]
URL: [TOKILIRAN_URL]
Icon: [TOKILIRAN_ICON]
```

Use the actual stack provided later.

---

### 03 — FitCoach

Add FitCoach as a primary selected project.

```text
Name: FitCoach
Description: [FITCOACH_DESCRIPTION]
Role: [FITCOACH_ROLE]
Year: [FITCOACH_YEAR]
URL: [FITCOACH_URL]
Icon: [FITCOACH_ICON]
```

Stack:

```text
[FITCOACH_STACK]
```

---

### 04 — Marquize

Add Marquize as another selected project.

```text
Name: Marquize
Description: [MARQUIZE_DESCRIPTION]
Role: [MARQUIZE_ROLE]
Year: [MARQUIZE_YEAR]
URL: [MARQUIZE_URL]
Icon: [MARQUIZE_ICON]
```

Use the actual stack from the existing resume/project information.

---

# 4. Other Projects

The following projects should remain available but should have lower visual priority:

* Asbabchi Admin Panel
* Tond Hungary
* Other Projects

Do NOT make every project visually equal.

Use a compact "Other Work" section after the main selected projects.

Example:

```text
OTHER WORK

Asbabchi Admin Panel
[SHORT_DESCRIPTION]

Tond Hungary
[SHORT_DESCRIPTION]

[OTHER_PROJECTS]
```

This section can be more compact and text-oriented.

---

# 5. Remove Kamva

Remove Kamva / KamvaChart from the main portfolio.

Do not display it in Selected Work or Other Work unless explicitly added again later.

---

# 6. Project UI

Keep project descriptions concise.

The project card / section should primarily contain:

```text
PROJECT NAME

[PROJECT_DESCRIPTION]

[PROJECT_ICON]

[STACK_LINKS]

VIEW PROJECT →
```

Do not turn the main page into a long case study.

The visual screenshot should remain the primary visual element.

---

# 7. Project Icons

Every project should have a dedicated location for its icon/logo.

Example data model:

```ts
{
  name: "Kidad",
  icon: "/projects/kidad/icon.svg",
  image: "/projects/kidad/preview.webp",
  ...
}
```

Do not reuse the same placeholder SVG for every project.

If a real project image/icon is not available yet, keep a clearly named placeholder path:

```text
[PROJECT_ICON]
[PROJECT_IMAGE]
```

Do not fabricate project branding.

---

# 8. Project Screenshots

The current generic `project-placeholder.svg` approach should NOT be treated as final content.

Each project must support its own real screenshot:

```text
/projects/kidad/preview.webp
/projects/tokiliran/preview.webp
/projects/fitcoach/preview.webp
/projects/marquize/preview.webp
```

The owner will replace these assets with real screenshots.

Only the first visible project image should use `priority`.

Do not set `priority` on every project image.

---

# 9. Profile Photo

Add a profile portrait to the About chapter.

Do NOT put the portrait prominently inside the Hero.

The portrait should appear as part of the About / personal section.

Use a placeholder:

```text
/public/profile/profile.webp
```

The owner will provide the final image.

The visual treatment should match the site's editorial/minimal style.

Possible treatment:

* monochrome or low-saturation
* subtle grain
* clean crop
* no generic corporate headshot styling

Do not artificially generate or fabricate a portrait.

---

# 10. About Chapter

The existing website is missing the About chapter.

Add it.

Structure:

```text
04 / ABOUT

[PROFILE_IMAGE]

ARVIN ZAFERANI

[SHORT_BIO]

[ABOUT_LINKS]
```

Use:

```text
[SHORT_BIO]
```

as placeholder.

Do not invent biography details.

The About section should communicate the person behind the work while remaining concise.

---

# 11. Process Section

Add the full project lifecycle:

```text
DISCOVER
↓
PLAN
↓
BUILD
↓
DEPLOY
↓
IMPROVE
```

This is an important part of the positioning.

Use concise placeholder copy:

```text
[DISCOVER_DESCRIPTION]
[PLAN_DESCRIPTION]
[BUILD_DESCRIPTION]
[DEPLOY_DESCRIPTION]
[IMPROVE_DESCRIPTION]
```

This section should be visually integrated into the scroll-driven experience.

---

# 12. Project Storytelling

The project experience should support:

```text
IDEA
↓
PROBLEM
↓
DESIGN
↓
BUILD
↓
DEPLOY
```

However, do NOT fill these sections with invented information.

Use project-specific placeholders:

```text
[PROJECT_IDEA]
[PROJECT_PROBLEM]
[PROJECT_DESIGN]
[PROJECT_BUILD]
[PROJECT_DEPLOY]
```

These can later become dedicated case-study pages.

---

# 13. Navigation

Add a minimal sticky navigation.

Structure:

```text
ARVIN ZAFERANI

WORK
ABOUT
CONTACT
```

Navigation should scroll smoothly to the relevant chapters.

Keep it minimal.

---

# 14. Contact

Use the real contact information.

Primary CTA:

```text
START A PROJECT →
```

Email:

```text
arzaferani@gmail.com
```

Phone:

```text
+989196094479
```

LinkedIn:

```text
https://www.linkedin.com/in/a-zaferani
```

GitHub:

```text
https://github.com/arvinzaferani
```

The email and social links should be actual clickable links.

Do not use fake contact addresses.

---

# 15. Typography

The major headlines MUST use a strong serif font.

The current implementation incorrectly uses sans-serif everywhere.

Implement:

```text
Headlines → Serif
Body/UI → Sans-serif
```

The serif should be visually prominent in:

* Hero
* major chapter headings
* important statements

Do not use serif for every element.

---

# 16. Visual Direction

Maintain:

**Minimal + Editorial + Premium + Technical**

Suggested palette:

```text
Background: warm off-white
Text: near-black
Muted text: gray
Accent: subtle saffron
```

The saffron accent should be subtle.

Do not turn the website into a yellow-themed website.

---

# 17. Scroll-driven Interaction

Keep the existing scroll-driven concept.

The site should feel like a continuous narrative.

Desired flow:

```text
INTRO
↓
CAPABILITY
↓
PROOF
↓
PROCESS
↓
ABOUT
↓
CONTACT
```

Use scroll to:

* transform typography
* reveal content
* transition projects
* scale screenshots
* move between project states
* reveal process stages

Animations must support storytelling.

Do not add random decorative animation.

---

# 18. Chapter Rhythm

Fix the current inconsistent chapter heights.

The current implementation has overly compressed sections such as CAPABILITY.

Each chapter should have enough vertical space to feel intentional.

The exact height should be determined by the content and interaction.

Do not force every chapter to use the same viewport multiplier.

---

# 19. Chapter Counter

The current counter says:

```text
01 / 05
```

while the plan uses four chapters.

Do not mix chapter numbers with internal typography phases.

Use a clear chapter indicator such as:

```text
01 / 05
```

only if there are actually five top-level chapters.

Otherwise use:

```text
01 / 05 — INTRO
```

or remove the counter.

It must be semantically clear.

---

# 20. Cursor Interaction

For desktop project hover, implement a subtle custom cursor interaction.

Example:

```text
VIEW
CASE
```

The cursor should appear when hovering over a project.

Keep it subtle and performant.

Disable or simplify it on touch devices.

---

# 21. Technical Fixes

Apply the following fixes:

### Horizontal overflow

Use:

```css
overflow-x: clip;
```

where appropriate.

Avoid introducing horizontal scrollbars through sticky/transform animations.

---

### Image priority

Only the first immediately visible project image should use:

```tsx
priority
```

Do not use `priority` on all project images.

---

### SEO

Add:

```text
robots.txt
sitemap.xml
canonical URL
Open Graph metadata
Twitter/X metadata
OG image
```

Use the real production domain once configured.

---

### Favicon

Replace the default Next.js favicon.

Create a custom minimal favicon consistent with the personal brand.

Do not use the default Next.js logo.

---

# 22. Internationalization

The website must support:

```text
/en
/fa
```

The Persian version must use RTL correctly.

Do not simply translate strings while keeping the English layout.

RTL should affect:

* typography
* alignment
* navigation
* spacing where appropriate
* directional icons/arrows
* project layouts
* scroll storytelling where direction matters

The current `/fa` 404 must be fixed.

English remains the default language.

---

# 23. Data Architecture

Project content should be separated from presentation.

Create a centralized project data structure.

Example:

```ts
type Project = {
  slug: string;
  name: string;
  description: string;
  role?: string;
  year?: string;
  url?: string;
  icon?: string;
  image?: string;
  stack: {
    name: string;
    url?: string;
  }[];
  caseStudy?: {
    idea?: string;
    problem?: string;
    design?: string;
    build?: string;
    deploy?: string;
  };
};
```

Populate it with placeholders where content has not yet been supplied.

This makes future content editing easy.

---

# 24. Important Content Rule — Again

Never invent:

* project descriptions
* project results
* client names
* project statistics
* user counts
* revenue
* responsibilities
* testimonials
* dates
* project URLs
* technology stacks

If information is unknown, use a placeholder.

The owner will provide the final content.

---

# 25. Final UX Goal

The user should understand within the first few seconds:

```text
ARVIN ZAFERANI
        ↓
FULL-STACK DEVELOPER
        ↓
BUILDS WEB PRODUCTS
        ↓
FROM IDEA TO PRODUCTION
        ↓
AVAILABLE FOR PROJECTS
```

The website should feel like:

> **A capable independent full-stack developer who can be trusted with the technical execution of a project.**

Not:

> A developer showing a list of technologies.

---

# 26. Do Not Overbuild V2

Do not add:

* blog
* CMS
* authentication
* dashboard
* unnecessary backend
* complicated project management
* excessive animations
* 3D scenes
* unnecessary dependencies

The goal is a polished, fast, content-driven personal website.

Prioritize:

1. Credibility
2. Project proof
3. Clear positioning
4. Scroll experience
5. Contact conversion
6. Performance
7. SEO
