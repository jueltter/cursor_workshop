"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/constants/content";

export function AboutMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="border-b border-zinc-200/90 bg-white py-24 sm:py-28"
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
          className="grid gap-16 md:grid-cols-12 md:items-start md:gap-12 lg:gap-16"
        >
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Orientation
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              {about.title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {about.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="border-l-2 border-indigo-500 pl-6 sm:pl-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-950">
                {about.highlight.title}
              </p>
              <ul className="mt-6 space-y-5 text-zinc-700">
                {about.highlight.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
