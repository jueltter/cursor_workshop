"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site, ctas, hero } from "@/constants/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-7rem)] border-b border-zinc-200/90 bg-zinc-100 md:min-h-[calc(100svh-4.25rem)]"
    >
      <div className="grid min-h-[inherit] w-full lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
        <div className="order-2 flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:order-1 lg:max-w-none lg:px-12 lg:py-24 xl:pl-24 xl:pr-16">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            {hero.brandLine}
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 font-semibold tracking-tight text-zinc-950"
          >
            <span className="block text-[clamp(2.5rem,6vw,4rem)] leading-[1.05]">
              {site.name}
            </span>
            <span className="mt-4 block max-w-xl text-pretty text-xl font-medium leading-snug text-zinc-700 sm:text-2xl sm:leading-snug">
              {hero.headlineBefore}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {hero.headlineGradient}
              </span>
              {hero.headlineAfter}
            </span>
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-zinc-600"
          >
            {hero.subhead}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={ctas.primary.href}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
            >
              {ctas.primary.label}
            </motion.a>
            <a
              href={ctas.secondary.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300/90 bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:w-auto"
            >
              {ctas.secondary.label}
            </a>
          </motion.div>
        </div>

        <div className="relative order-1 min-h-[38vh] w-full lg:order-2 lg:min-h-[inherit]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-zinc-100/95"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
