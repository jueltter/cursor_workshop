"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects, portfolioSection } from "@/constants/content";

export function PortfolioShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
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
            Proof
          </p>
          <h2
            id="portfolio-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            {portfolioSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {portfolioSection.intro}
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-24 lg:gap-28">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
            >
              <div
                className={
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-zinc-200"
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </a>
              </div>
              <div
                className={
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  {project.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-950 sm:text-base">
                  <span className="text-zinc-500">Outcome · </span>
                  {project.outcome}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                >
                  View case notes
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
