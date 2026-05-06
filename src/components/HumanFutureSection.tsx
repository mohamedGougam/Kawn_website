"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  fadeSlideUpTight,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { bandMuted, heading2, pageContainer, sectionEdge } from "@/lib/ui";

const highlights = [
  "Freedom of expression with respect",
  "Safer spaces for children and families",
  "Positive and healthy communities",
  "Real knowledge and experience exchange",
  "AI that supports communities",
] as const;

export function HumanFutureSection() {
  return (
    <Section
      id="human-social"
      className={`${sectionEdge} relative overflow-hidden ${bandMuted}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[min(520px,85vw)] w-[min(520px,90vw)] -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-100/35 via-orange-50/20 to-transparent blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-zinc-100/80 blur-3xl" />
      </div>

      <div className={`${pageContainer} text-center`}>
        <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewportRelaxed}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className={`${heading2} mx-auto leading-[1.12] sm:leading-[1.1]`}
          >
            The Future of Social Media Should Feel Human Again
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.55] text-zinc-600 sm:mt-5 sm:text-[1.0625rem] sm:leading-[1.56]">
            Kawn believes social media should empower people, not divide them.
            That&apos;s why Kawn focuses on freedom of expression with respect,
            safe digital spaces for families and children, positive communities,
            real knowledge exchange, and AI that supports people.
          </p>
        </motion.div>

        <motion.ul
          className="mx-auto mt-8 max-w-xl space-y-2.5 text-left sm:mt-10 sm:space-y-3"
          variants={staggerContainer(0.07, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewportRelaxed}
        >
          {highlights.map((line) => (
            <motion.li
              key={line}
              variants={fadeSlideUpTight}
              className="flex gap-3 rounded-2xl border border-zinc-200/60 bg-white/80 px-4 py-3 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_12px_32px_-28px_rgba(15,23,42,0.12)] ring-1 ring-zinc-950/[0.03] backdrop-blur-[2px] sm:px-4 sm:py-3.5"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]"
                aria-hidden
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium leading-snug text-zinc-800 sm:text-[0.9375rem]">
                {line}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        </div>
      </div>
    </Section>
  );
}
