# LABEMA Web — Project Context

## Project

**LABEMA Web** is the new institutional website for the **Laboratorio de Biología y Ecología Marina Aplicada (LABEMA)**.

The website is being rebuilt as a modern Next.js application and is intended to be published at:

**labema.cl**

The client previously had a LABEMA website that they considered visually attractive. Screenshots of that previous site and new textual/material content are being supplied as design and content references.

The goal is not necessarily to clone the previous website exactly. The new implementation should preserve or reinterpret the qualities that made it attractive while improving maintainability, responsiveness and modern web standards.

---

## Main objective

Create a professional public website that communicates:

- what LABEMA is;
- the laboratory's scientific identity;
- its areas of research and activity;
- the people who form the laboratory;
- relevant projects, publications or scientific outputs when supplied;
- institutional and contact information.

The website should be useful for audiences such as:

- researchers;
- students;
- collaborators;
- academic institutions;
- organizations interested in LABEMA's work;
- members of the general public looking for information about the laboratory.

---

## Product type

This is a:

> scientific / academic / institutional website

It is **not**:

- an ecommerce website;
- a web application dashboard;
- a social network;
- a client portal;
- a SaaS product.

This distinction should guide layout, navigation and visual decisions.

---

## Current technical foundation

```text
Framework: Next.js 16
Router: App Router
Language: TypeScript
UI: HeroUI v3
CSS: Tailwind CSS v4
React: React 19
Package manager: npm
Deployment target: Vercel
```

HeroUI is the standard component system for the project.

Tailwind is used for composition, layout, responsiveness and design refinements.

---

## Current dependency baseline

```json
{
  "@heroui/react": "^3.2.4",
  "@heroui/styles": "^3.2.4",
  "next": "16.3.4",
  "react": "19.2.8",
  "react-dom": "19.2.8"
}
```

Global CSS requires:

```css
@import "tailwindcss";
@import "@heroui/styles";
```

---

## Content status

The client has indicated that material exists for:

- LABEMA general content;
- profiles/reviews of laboratory members;
- screenshots of the previous website;
- domain information.

Content will be incorporated progressively.

Until the real content is available inside the codebase:

- do not invent scientific information;
- do not invent team biographies;
- do not invent publications or projects;
- do not invent university/institutional affiliations;
- do not fill missing content with plausible-sounding academic text.

Layouts can be prepared with explicit placeholders when needed.

---

## Design intent

The experience should be visually appealing but still credible for an academic laboratory.

Desired characteristics:

- strong visual hierarchy;
- generous spacing;
- readable typography;
- high-quality scientific/marine imagery;
- modern navigation;
- restrained use of cards;
- responsive layouts;
- polished but not corporate/SaaS-like.

The previous site's screenshots should be reviewed before finalizing major branding decisions.

---

## HeroUI usage

HeroUI should be the default choice for interactive and reusable interface primitives.

Examples include:

```tsx
import {
  Button,
  Card,
  Chip,
  Link,
  Navbar,
  Avatar,
  Divider,
} from "@heroui/react";
```

Use Tailwind around those primitives rather than recreating the component library.

Custom components are encouraged for LABEMA-specific compositions such as:

```text
ResearchAreaCard
MemberCard
PublicationItem
ProjectCard
HeroSection
AboutLabemaSection
```

Those components may internally use HeroUI primitives.

---

## Suggested initial content model

These interfaces are examples for organizing real client content; they are not mandatory API contracts.

```ts
export interface LabMember {
  name: string;
  role?: string;
  bio?: string;
  image?: string;
  email?: string;
  links?: {
    label: string;
    href: string;
  }[];
}

export interface ResearchArea {
  title: string;
  description: string;
  image?: string;
}

export interface Publication {
  title: string;
  authors?: string;
  year?: number;
  journal?: string;
  href?: string;
}

export interface Project {
  title: string;
  description?: string;
  image?: string;
  href?: string;
}
```

Use only fields supported by real client data.

---

## Suggested initial component map

```text
components/
├── layout/
│   ├── SiteHeader.tsx
│   └── SiteFooter.tsx
│
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ResearchSection.tsx
│   ├── MembersSection.tsx
│   └── ContactSection.tsx
│
└── ui/
    ├── MemberCard.tsx
    └── ResearchAreaCard.tsx
```

Keep this flexible. Architecture should follow actual content instead of forcing the content into a predetermined structure.

---

## Home page working structure

An initial home page can follow this narrative:

### 1. Header

LABEMA identity and primary navigation.

### 2. Hero

A strong introduction to LABEMA supported by an authentic laboratory/marine visual when available.

### 3. About LABEMA

Short institutional explanation.

### 4. Research

Overview of research areas or lines of work.

### 5. Laboratory activity

Projects, fieldwork, publications or other relevant scientific work based on supplied content.

### 6. Team

Preview of laboratory members with links to more detailed information if justified.

### 7. Contact / institutional information

Clear contact information and relevant institutional links.

### 8. Footer

LABEMA identity, navigation and institutional/contact details.

---

## Domain

The client has already registered:

```text
labema.cl
```

DNS/deployment configuration will be handled when the Vercel project is ready.

Do not hardcode infrastructure assumptions into frontend components.

---

## Development priorities

In order:

1. Establish the visual/layout foundation.
2. Integrate the real LABEMA content.
3. Match the spirit of the supplied previous-site references.
4. Build responsive reusable sections.
5. Add proper metadata/SEO.
6. Optimize imagery and performance.
7. Connect the Vercel deployment and `labema.cl`.

---

## Definition of a good result

A successful implementation should feel like a credible website for a real scientific laboratory.

A visitor should immediately understand:

- the laboratory's name and purpose;
- what kind of research/work it performs;
- who is involved;
- where to explore its work;
- how to contact or learn more about LABEMA.

The interface should support that content rather than overpower it.
