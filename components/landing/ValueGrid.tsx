"use client";

import { motion, useReducedMotion } from "framer-motion";
import { valueItems, valueSection } from "@/constants/content";

export function ValueGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-28"
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            {valueSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {valueSection.intro}
          </p>
        </motion.div>

        <ul className="mt-16 grid gap-0 divide-y divide-zinc-200 border-y border-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
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
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group py-10 md:px-8 md:py-14 lg:px-10"
              >
                <motion.div
                  whileHover={
                    reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }
                  }
                  className="flex flex-col"
                >
                  <div className="flex h-10 w-10 items-center justify-center text-indigo-600 transition group-hover:text-indigo-500">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
