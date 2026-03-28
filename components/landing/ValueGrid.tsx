"use client";

import { motion, useReducedMotion } from "framer-motion";
import { valueItems, valueSection } from "@/constants/content";

export function ValueGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-zinc-200/80 bg-zinc-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <h2
            id="work-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
          >
            {valueSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {valueSection.intro}
          </p>
        </motion.div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {valueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="group flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-md sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition group-hover:bg-indigo-100/80">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 grow text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
