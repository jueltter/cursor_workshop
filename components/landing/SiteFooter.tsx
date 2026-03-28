"use client";

import { BriefcaseBusiness, FolderGit, MessageCircle } from "lucide-react";
import {
  site,
  contact,
  footer,
  navLinks,
  socialLinks,
  ctas,
  getWhatsAppHref,
} from "@/constants/content";

const socialIconMap = {
  GitHub: FolderGit,
  LinkedIn: BriefcaseBusiness,
  X: MessageCircle,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-zinc-200/90 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:justify-between lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-md">
          <p className="text-lg font-semibold tracking-tight text-zinc-950">
            {site.name}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            {footer.tagline}
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:gap-16 lg:mt-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={ctas.secondary.href}
                  className="text-sm font-medium text-zinc-700 underline-offset-4 hover:text-zinc-950 hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-700 underline-offset-4 hover:text-zinc-950 hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-2">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
                    >
                      {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100 bg-zinc-50/80">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
