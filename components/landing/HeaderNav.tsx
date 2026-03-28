"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, ctas } from "@/constants/content";

export function HeaderNav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/75 backdrop-blur-md backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          {site.name}
        </a>
        <a
          href={ctas.primary.href}
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {ctas.primary.label}
        </a>
      </div>
    </motion.header>
  );
}
