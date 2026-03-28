import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Code2,
  Gauge,
  Layers,
  Search,
  Sparkles,
  Timer,
} from "lucide-react";

// UPDATE YOUR INFO HERE — site-wide branding & SEO
export const site = {
  name: "samagua.dev",
  title: "samagua.dev — Portfolio",
  description:
    "Product-minded engineer portfolio: shipped interfaces, pragmatic systems, and case studies recruiters can scan in one pass.",
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
    href: "#portfolio",
  },
  secondary: {
    label: "Email me",
    href: `mailto:${contact.email}`,
  },
} as const;

// UPDATE YOUR INFO HERE — sticky header navigation (anchors)
export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// UPDATE YOUR INFO HERE — hero: brand line, headlines, image
export const hero = {
  brandLine: "Portfolio · Product engineering",
  headlineBefore: "Shipping ",
  headlineGradient: "clarity",
  headlineAfter: ", not noise—for teams that need proof, fast.",
  subhead:
    "I turn goals into small, shippable wins: tight feedback loops, honest tradeoffs, and interfaces that stay maintainable after v1.",
  image: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
    alt: "Workspace with laptop open to an IDE in warm daylight",
  },
} as const;

// UPDATE YOUR INFO HERE — about section
export const about = {
  title: "A recruiter-friendly throughline",
  body: [
    "Hiring is pattern-matching under time pressure. I write and build so your team can answer three questions quickly: what I shipped, how I thought about risk, and how I collaborate when stakes go up.",
    "I bias to clarity—short narratives, concrete constraints, and outcomes you can verify. If we work together, you get someone who treats the roadmap like a contract with users, not a wishlist.",
  ],
  highlight: {
    title: "What that means for you",
    items: [
      "Case-shaped writeups: context, decision, result",
      "Interfaces that scale with real maintenance cost in mind",
      "Direct channels when you need depth beyond the page",
    ],
  },
} as const;

// UPDATE YOUR INFO HERE — portfolio section
export const portfolioSection = {
  title: "Selected work",
  intro:
    "Three snapshots of how I approach scope, craft, and delivery—written so you can map them to your stack and timeline.",
} as const;

export const portfolioProjects: {
  title: string;
  tag: string;
  description: string;
  outcome: string;
  image: { src: string; alt: string };
  href: string;
}[] = [
  {
    title: "Ops console refresh",
    tag: "Web app · React",
    description:
      "Rebuilt a high-traffic internal console around tasks, not menus—cutting mean time-to-action for daily operators.",
    outcome: "40% fewer clicks on top workflows after six weeks",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Analytics charts and laptop on a clean desk",
    },
    href: "https://github.com/jueltter",
  },
  {
    title: "Checkout reliability",
    tag: "API · payments",
    description:
      "Hardened payment edge cases with idempotency, structured logging, and guardrails product could reason about.",
    outcome: "Charge failures isolated and support tickets down materially",
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
      alt: "Customer paying with card at a retail terminal",
    },
    href: "https://github.com/jueltter",
  },
  {
    title: "Onboarding pathways",
    tag: "Design systems",
    description:
      "Introduced a guided first-run that respected partial setup states—fewer dead ends, clearer progress.",
    outcome: "Higher activation without adding new backend surface",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
      alt: "Team collaborating over laptops in an office",
    },
    href: "https://github.com/jueltter",
  },
];

// UPDATE YOUR INFO HERE — process / how it works
export const processSection = {
  title: "How engagements run",
  intro:
    "Predictable rhythm beats heroics. Here’s the shape I bring to collaborations—whether it’s a greenfield slice or untangling production risk.",
} as const;

export const processSteps: {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Align on the bet",
    body: "We define the smallest outcome that proves value, the risks worth taking now, and what we’re explicitly not doing yet.",
    icon: Search,
  },
  {
    step: "02",
    title: "Ship in thin slices",
    body: "Work lands in reviewable chunks: observable behavior, notes for stakeholders, and a path to roll back if needed.",
    icon: Timer,
  },
  {
    step: "03",
    title: "Measure and refine",
    body: "We pair qualitative feedback with the numbers that matter—then tighten the next loop instead of stacking assumptions.",
    icon: Gauge,
  },
  {
    step: "04",
    title: "Hand off cleanly",
    body: "Documentation, runbooks, and walkthroughs so your team owns what we built—no hero dependency.",
    icon: CheckCircle2,
  },
];

// UPDATE YOUR INFO HERE — services / value (flat editorial columns)
export const valueSection = {
  title: "Services packaged for hiring teams",
  intro:
    "Not a laundry list—three bundles of outcomes recruiters and hiring managers actually care about.",
} as const;

export const valueItems: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Product engineering",
    description:
      "End-to-end delivery on meaningful slices—UX details, API shape, and the operational glue between them.",
  },
  {
    icon: Layers,
    title: "Platform & pragmatism",
    description:
      "Tradeoffs made explicit: when to abstract, when to duplicate, and how to keep velocity after launch.",
  },
  {
    icon: Sparkles,
    title: "Story-ready artifacts",
    description:
      "Writeups, demos, and code pointers that help your panel see judgment—not just syntax.",
  },
];

// UPDATE YOUR INFO HERE — testimonials
export const testimonialsSection = {
  title: "What collaborators say",
  intro:
    "Placeholder quotes modeled on real collaboration dynamics—swap with signed testimonials when you have them.",
} as const;

export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [
  {
    quote:
      "Sam brought structure without slowing us down. Every slice shipped with a clear ‘why now’—our stakeholders finally stopped guessing what was in flight.",
    name: "Alex Rivera",
    role: "Product lead, B2B SaaS",
  },
  {
    quote:
      "Rare mix: cares about craft, owns the edge cases, and writes so future-us understands the intent. Handoff felt like an upgrade, not a cliff.",
    name: "Jordan Kim",
    role: "Engineering manager",
  },
];

// UPDATE YOUR INFO HERE — FAQ
export const faqSection = {
  title: "FAQ for recruiters",
  intro: "Straight answers to questions that usually come up in first contact.",
} as const;

export const faqItems: { question: string; answer: string }[] = [
  {
    question: "Are you open to full-time roles?",
    answer:
      "Yes—remote-first or hybrid within practical travel. I’m most interested in teams that value ownership, writing, and iterative delivery.",
  },
  {
    question: "What’s your stack comfort?",
    answer:
      "Strong on modern TypeScript ecosystems, React/Next-style UIs, and pragmatic backend patterns. I document what I’m less deep on instead of bluffing.",
  },
  {
    question: "Can you share references or deeper case studies?",
    answer:
      "Absolutely—email me with the role and constraints. I’ll share references and walk you through two shipped projects in detail.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Typically 2–4 weeks depending on notice and scope. If you’re on a critical timeline, say so upfront and we’ll see what’s realistic.",
  },
];

// UPDATE YOUR INFO HERE — final CTA strip
export const finalCta = {
  title: "Like what you see?",
  subtitle:
    "Open the portfolio section for specifics—or send a short note with the role and I’ll reply with next steps.",
} as const;

// UPDATE YOUR INFO HERE — footer
export const footer = {
  tagline:
    "samagua.dev · building calm, credible software narratives for fast-moving teams.",
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
