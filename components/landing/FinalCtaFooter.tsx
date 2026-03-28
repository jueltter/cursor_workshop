"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, FolderGit, MessageCircle } from "lucide-react";
import {
  site,
  ctas,
  finalCta,
  contact,
  socialLinks,
  getWhatsAppHref,
} from "@/constants/content";

/** Lucide build here omits brand glyphs; these read cleanly as repo / career / updates. */
const socialIconMap = {
  GitHub: FolderGit,
  LinkedIn: BriefcaseBusiness,
  X: MessageCircle,
} as const;

export function FinalCtaFooter() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="bg-zinc-950 text-zinc-50">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-zinc-400 sm:text-lg">
            {finalCta.subtitle}
          </p>
          <motion.a
            href={ctas.primary.href}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-950/40 transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            {ctas.primary.label}
          </motion.a>
        </motion.div>
      </div>
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <a
              href={ctas.secondary.href}
              className="font-medium text-zinc-900 underline-offset-4 hover:underline"
            >
              {contact.email}
            </a>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
          </div>
          <ul className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon =
                socialIconMap[link.label as keyof typeof socialIconMap];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4" aria-hidden />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-10 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
