"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ctas, finalCta } from "@/constants/content";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 sm:py-24 lg:px-8"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2
          id="final-cta-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
          {finalCta.subtitle}
        </p>
        <motion.a
          href={ctas.primary.href}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/30 transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        >
          {ctas.primary.label}
        </motion.a>
        <p className="mt-6">
          <a
            href={ctas.secondary.href}
            className="text-sm font-semibold text-indigo-200 underline-offset-4 hover:text-white hover:underline"
          >
            {ctas.secondary.label}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
