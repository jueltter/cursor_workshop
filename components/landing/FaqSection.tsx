"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { faqItems, faqSection } from "@/constants/content";

export function FaqSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            {faqSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {faqSection.intro}
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200"
        >
          {faqItems.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-zinc-950 transition marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 text-base leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
