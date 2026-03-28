"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSection, processSteps } from "@/constants/content";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-zinc-200/90 bg-white py-24 sm:py-28"
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
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            {processSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {processSection.intro}
          </p>
        </motion.div>

        <ol className="relative mt-20 max-w-3xl border-l border-zinc-200 pl-8 sm:pl-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.step}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pb-16 last:pb-0"
              >
                <span
                  className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-[10px] font-bold text-zinc-500 sm:-left-[1.65rem] sm:h-7 sm:w-7 sm:text-xs"
                  aria-hidden
                >
                  {step.step}
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-zinc-600">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
