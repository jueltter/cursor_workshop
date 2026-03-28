"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/constants/content";

export function AboutMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="border-b border-zinc-200/80 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16 lg:gap-20"
        >
          <div>
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {about.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {about.highlight.title}
            </p>
            <ul className="mt-4 space-y-3 text-zinc-700">
              {about.highlight.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                    aria-hidden
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
