"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, ctas, navLinks } from "@/constants/content";

export function HeaderNav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/80 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="shrink-0 text-base font-semibold tracking-tight text-zinc-950 sm:text-lg"
        >
          {site.name}
        </a>
        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center gap-1 md:flex md:flex-1 md:justify-center lg:gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={ctas.secondary.href}
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:inline-flex"
          >
            {ctas.secondary.label}
          </a>
          <a
            href={ctas.primary.href}
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {ctas.primary.label}
          </a>
        </div>
      </div>
      <div className="-mt-px border-t border-zinc-100 bg-white/90 px-4 pb-3 md:hidden">
        <div className="flex gap-1 overflow-x-auto pb-1 pt-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
