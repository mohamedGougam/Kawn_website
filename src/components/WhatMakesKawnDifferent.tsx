"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  fadeSlideUpTight,
  hoverLiftSpring,
  hoverLiftY,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import {
  bandWhite,
  cardSurface,
  cardSurfaceHover,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

const differentiators = [
  {
    title: "Freedom of Speech with Responsibility",
    description:
      "Kawn encourages open conversations and respectful expression without promoting hate, harassment, or toxic behavior.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 10h8M8 14h5M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Safe Spaces for Families",
    description:
      "Children deserve a safer digital world, and parents deserve visibility and peace of mind through safer, age-aware experiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Positive Digital Communities",
    description:
      "Kawn encourages positive interactions, respectful discussions, shared passions, and healthier community engagement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "True Knowledge & Experience Exchange",
    description:
      "Kawn supports real conversations, cultural exchange, learning communities, professional insights, and shared human experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 19.5A2.5 2.5 0 016.5 17H20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8 7h8M8 11h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI That Supports People",
    description:
      "KawnAI is designed to support communities through discovery, guidance, and safer interactions — not manipulate users into endless scrolling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3.25"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
] as const;

export function WhatMakesKawnDifferent() {
  return (
    <Section
      id="different"
      className={`${sectionEdge} ${bandWhite}`}
      padding="tight"
    >
      <div className={pageContainer}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewportRelaxed}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-orange-800/85 sm:text-[0.8125rem]">
            What Makes Kawn Different
          </p>
          <h2 className={`mt-3 ${heading2}`}>
            A Social Network Built Around Human Values
          </h2>
          <p className="mt-3 text-base leading-[1.55] text-zinc-600 sm:mt-4 sm:text-[1.0625rem] sm:leading-[1.56]">
            Kawn is not designed to maximize addiction, outrage, or division.
            It is designed to help people build healthier, safer, and more
            meaningful digital communities.
          </p>
        </motion.div>

        <motion.ul
          className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-10 xl:grid-cols-3 xl:gap-4"
          variants={staggerContainer(0.09, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewportRelaxed}
        >
          {differentiators.map((item) => (
            <motion.li key={item.title} variants={fadeSlideUpTight} className="h-full">
              <motion.div
                whileHover={{ y: hoverLiftY }}
                transition={hoverLiftSpring}
                className={`group flex h-full flex-col p-4 transition-[transform,box-shadow,border-color,background-color] duration-300 sm:p-5 ${cardSurface} ${cardSurfaceHover}`}
              >
                <div
                  className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100/80 text-orange-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-1 ring-orange-200/60"
                  aria-hidden
                >
                  {item.icon}
                </div>
                <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 sm:text-[0.9375rem] sm:leading-[1.5]">
                  {item.description}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
