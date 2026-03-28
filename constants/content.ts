import type { LucideIcon } from "lucide-react";
import { Code2, Layers, Sparkles } from "lucide-react";

// UPDATE YOUR INFO HERE — site-wide branding & SEO
export const site = {
  name: "samagua.dev",
  title: "samagua.dev — Portfolio",
  description:
    "Personal portfolio of a product-minded developer. Case studies, shipped work, and how I collaborate with teams from idea to production.",
} as const;

// UPDATE YOUR INFO HERE — contact email (also used for Contact CTA)
export const contact = {
  email: "example@gmail.com",
  /** E.164 digits only (no +) for wa.me */
  whatsappDigits: "1234567890",
} as const;

// UPDATE YOUR INFO HERE — primary / secondary calls to action
export const ctas = {
  primary: {
    label: "View My Work",
    href: "#work",
  },
  secondary: {
    label: "Contact",
    href: `mailto:${contact.email}`,
  },
} as const;

// UPDATE YOUR INFO HERE — hero copy
export const hero = {
  headlineBefore: "I build ",
  headlineGradient: "reliable software",
  headlineAfter: " recruiters can vet in minutes.",
  subhead:
    "I’m a developer who cares about clarity, ownership, and outcomes. Below you’ll find how I work, what I optimize for, and a snapshot of the value I bring to product teams.",
} as const;

// UPDATE YOUR INFO HERE — about section
export const about = {
  title: "About",
  body: [
    "I’m a portfolio-first engineer focused on shipping maintainable interfaces and pragmatic backends. I enjoy turning fuzzy requirements into concrete milestones and communicating tradeoffs so stakeholders stay aligned.",
    "For hiring teams, my goal is simple: make it easy to see how I think, how I ship, and how I collaborate—without digging through a dozen tabs.",
  ],
  highlight: {
    title: "What you’ll find here",
    items: [
      "Clear write-ups of projects and constraints",
      "Evidence of iteration, testing, and performance awareness",
      "A direct line to reach me if a role is a mutual fit",
    ],
  },
} as const;

// UPDATE YOUR INFO HERE — value grid section title & intro
export const valueSection = {
  title: "How I create value",
  intro:
    "A quick scan of how I partner with teams—written for recruiters who need signal, not buzzwords.",
} as const;

// UPDATE YOUR INFO HERE — service / value cards (icons assigned in ValueGrid)
export const valueItems: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "End-to-end delivery",
    description:
      "From API contracts to UI polish, I aim for coherent systems—fewer handoffs, fewer surprises in production.",
  },
  {
    icon: Layers,
    title: "Product-aware engineering",
    description:
      "I prioritize scope, risk, and user impact so roadmaps stay honest and releases stay predictable.",
  },
  {
    icon: Sparkles,
    title: "Recruiter-friendly storytelling",
    description:
      "Each project is framed for fast scanning: problem, approach, result—so you can map my work to your stack.",
  },
];

// UPDATE YOUR INFO HERE — final CTA strip
export const finalCta = {
  title: "Ready to see the details?",
  subtitle:
    "Jump to the work section for project snapshots, or email me if you’d like a CV and references.",
} as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jueltter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jueltter",
  },
  {
    label: "X",
    href: "https://x.com/jueltter",
  },
] as const;

export function getWhatsAppHref() {
  return `https://wa.me/${contact.whatsappDigits}`;
}
