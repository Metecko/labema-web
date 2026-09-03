# AGENTS.md — LABEMA Web

## 1. Project overview

This repository contains the institutional website for **LABEMA — Laboratorio de Biología y Ecología Marina Aplicada**.

The public domain is intended to be:

- `https://labema.cl`

The website must present LABEMA in a professional, academic and visually attractive way, with emphasis on:

- the laboratory and its identity;
- its research and areas of work;
- its members and their profiles;
- projects, publications or relevant scientific activity when content is available;
- institutional/contact information;
- visual material related to marine biology, ecology and the laboratory's work.

The client has provided content about the laboratory and its members, as well as screenshots of a previous LABEMA website. Those references should guide the new website when they are incorporated into the repository, but they must not be treated as an exact pixel-for-pixel specification unless explicitly requested.

Do not invent scientific facts, member biographies, publications, projects, affiliations, contact data or institutional claims. Use only content provided by the client or already present in the repository.

---

## 2. Technology stack

The project currently uses:

- **Next.js 16**
- **React 19**
- **TypeScript**
- **App Router**
- **Tailwind CSS v4**
- **HeroUI v3**
- npm

Relevant dependencies currently include:

```json
{
  "@heroui/react": "^3.2.4",
  "@heroui/styles": "^3.2.4",
  "next": "16.3.4",
  "react": "19.2.8",
  "react-dom": "19.2.8"
}
```

Global styles must include:

```css
@import "tailwindcss";
@import "@heroui/styles";
```

---

## 3. UI framework: HeroUI

**HeroUI is the primary interface/component library for this project.**

When HeroUI already provides an appropriate component, prefer it over building a custom equivalent from scratch.

Typical examples:

- `Button`
- `Card`
- `Navbar`
- `Link`
- `Chip`
- `Avatar`
- `Divider`
- `Accordion`
- `Tabs`
- `Modal`
- `Tooltip`
- form controls when needed

Tailwind CSS should be used for:

- layout;
- spacing;
- responsive behavior;
- typography composition;
- section backgrounds;
- positioning;
- visual refinements around HeroUI components.

Avoid creating a second, competing design system.

Do not introduce another UI library such as MUI, Chakra UI, Ant Design, Bootstrap or shadcn/ui unless explicitly requested.

---

## 4. Visual direction

The site is an **academic/scientific institutional website**, not a SaaS dashboard.

The visual language should feel:

- modern;
- clean;
- credible;
- scientific;
- spacious;
- visually connected to marine biology and ecology;
- suitable for a university/research laboratory.

Prefer a content-first presentation with strong photography and clear hierarchy.

Avoid:

- dashboard-style interfaces;
- excessive gradients;
- excessive glassmorphism;
- generic startup/SaaS aesthetics;
- unnecessary animation;
- decorative UI that competes with scientific content;
- overcrowded cards.

The final color palette and branding should be derived from LABEMA's provided visual references/assets when available. Do not arbitrarily define a permanent brand palette before those references have been reviewed.

---

## 5. Responsive design

Every page and component must work correctly on:

- mobile;
- tablet;
- desktop.

Use mobile-first responsive layouts.

Do not assume desktop-only navigation or fixed widths.

Avoid horizontal scrolling.

Images, cards, grids and typography must adapt naturally to viewport size.

---

## 6. Accessibility

The website should follow standard accessibility practices:

- semantic HTML;
- correct heading hierarchy;
- keyboard-accessible interactive controls;
- descriptive `alt` text for meaningful images;
- sufficient contrast;
- visible focus states;
- labels for form fields;
- avoid using color as the only way to communicate meaning.

Prefer native semantics and HeroUI accessibility behavior rather than reimplementing interaction logic manually.

---

## 7. Next.js architecture

Use the App Router.

Prefer **Server Components by default**.

Only add `"use client"` when the component actually requires:

- browser APIs;
- state;
- effects;
- event handlers;
- interactive HeroUI behavior that requires a client component.

Do not make entire pages client components without a reason.

Recommended structure:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
  sections/
  ui/

content/
  members/
  research/

public/
  images/
  logos/
```

The exact structure may evolve as real content is added.

Keep components focused and reusable. Avoid putting the entire homepage into one large file.

---

## 8. Images and assets

Use `next/image` for site imagery whenever appropriate.

Store local visual assets under `public/`.

Use descriptive filenames.

Examples:

```text
public/
  images/
    labema/
    members/
    research/
```

Do not use placeholder stock photography as if it were actual LABEMA material.

Temporary placeholders are acceptable during development only when clearly identifiable as placeholders.

---

## 9. Content rules

The site's primary language is expected to be **Spanish**, unless the client later requests multilingual support.

All scientific and institutional content must remain faithful to the material supplied by LABEMA.

Never fabricate:

- credentials;
- academic degrees;
- research findings;
- species studied;
- projects;
- publications;
- funding;
- institutional partnerships;
- job titles.

If content is missing, create the layout with a clearly marked placeholder or omit the section until real data is available.

---

## 10. Expected information architecture

The final navigation must be based on the real client content. A reasonable initial structure may include:

- Inicio
- Laboratorio / Nosotros
- Investigación
- Integrantes
- Publicaciones / Proyectos
- Contacto

These are **working categories, not immutable requirements**.

Do not create empty pages merely to satisfy this list.

If the supplied material supports a different information architecture, adapt the site accordingly.

---

## 11. Homepage principles

The homepage should quickly answer:

1. What is LABEMA?
2. What does the laboratory research/do?
3. Who is part of the laboratory?
4. What current or relevant scientific work should the visitor discover?
5. How can someone learn more or contact the laboratory?

A likely homepage composition is:

```text
Header / navigation
Hero
Short LABEMA introduction
Research / areas of work
Featured laboratory activity
Team preview
Selected projects/publications if available
Contact / institutional information
Footer
```

This should be adjusted to the actual supplied content.

---

## 12. SEO

This is a public institutional website and should be search-engine friendly.

Use Next.js Metadata APIs.

Pages should have:

- descriptive titles;
- meta descriptions;
- canonical metadata when appropriate;
- semantic headings;
- meaningful link text;
- Open Graph metadata once branding/assets are available.

The homepage title should identify LABEMA by its full name, not only by the acronym.

---

## 13. Performance

Keep the site lightweight.

Prefer:

- optimized images;
- Server Components;
- static rendering where possible;
- limited client-side JavaScript;
- lazy loading for non-critical visual content;
- native CSS/Tailwind transitions for simple effects.

Avoid adding dependencies for functionality that can be implemented cleanly with the existing stack.

---

## 14. Animation

Animation should be subtle and purposeful.

Acceptable examples:

- gentle hover states;
- small entrance transitions;
- navigation feedback;
- image/card interaction.

Avoid large parallax systems, excessive scroll effects or animation-heavy landing-page behavior unless explicitly requested.

---

## 15. Coding conventions

- Use TypeScript.
- Prefer clear component and variable names.
- Keep components small enough to understand easily.
- Reuse shared layout patterns.
- Avoid premature abstraction.
- Avoid hardcoded repeated content when a small typed data structure is more appropriate.
- Keep scientific content separate from presentation components when practical.
- Do not suppress TypeScript or ESLint errors without a clear reason.
- Do not leave unused dependencies or dead code.

Example component naming:

```text
SiteHeader.tsx
HeroSection.tsx
AboutSection.tsx
ResearchAreaCard.tsx
MembersSection.tsx
MemberCard.tsx
SiteFooter.tsx
```

---

## 16. Before implementing new sections

Before adding or redesigning a major section:

1. Check whether real LABEMA content/assets already exist in the repository.
2. Reuse HeroUI where appropriate.
3. Confirm the section belongs to an institutional/scientific site.
4. Ensure it works responsively.
5. Do not invent missing client information.
6. Keep the design consistent with the rest of the site.

---

## 17. Current project scope

At this stage, treat LABEMA Web primarily as a **public-facing institutional frontend**.

Do not introduce:

- authentication;
- user accounts;
- dashboards;
- databases;
- CMS infrastructure;
- APIs;
- admin panels;

unless a later requirement explicitly needs them.

The initial objective is a polished, maintainable and deployable LABEMA website using Next.js and HeroUI.

---

## 18. Deployment

The intended deployment platform is **Vercel**.

The site should remain compatible with standard Next.js deployment on Vercel.

Avoid deployment-specific hacks or infrastructure unless required later.

The public domain will be `labema.cl` once DNS and Vercel configuration are connected.

---

## 19. Guiding rule

When choosing between a more complex implementation and a simpler one that satisfies the same requirement, prefer the simpler implementation.

The website's value should come from LABEMA's scientific content, people and visual identity—not from unnecessary frontend complexity.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
