"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials, testimonialsSection } from "@/constants/content";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="testimonials-heading"
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
            Social proof
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            {testimonialsSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {testimonialsSection.intro}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative border-l-2 border-indigo-200 pl-8"
            >
              <p className="text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl sm:leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="font-semibold text-zinc-950">{t.name}</span>
                  <span className="mt-1 block text-sm text-zinc-600">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
