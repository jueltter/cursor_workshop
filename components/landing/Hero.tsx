"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ctas, hero } from "@/constants/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-zinc-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,70,229,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
          >
            {hero.headlineBefore}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {hero.headlineGradient}
            </span>
            {hero.headlineAfter}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 sm:text-xl"
          >
            {hero.subhead}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.a
              href={ctas.primary.href}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-indigo-600/25 transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
            >
              {ctas.primary.label}
            </motion.a>
            <a
              href={ctas.secondary.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-base font-semibold text-zinc-800 backdrop-blur-sm transition hover:border-zinc-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:w-auto"
            >
              {ctas.secondary.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
