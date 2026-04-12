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
  bandMuted,
  cardSurface,
  cardSurfaceHover,
  heading2,
  sectionEdge,
} from "@/lib/ui";

const cards = [
  {
    title: "Communities",
    description:
      "Connect through shared interests and group experiences.",
  },
  {
    title: "Events",
    description:
      "Turn online discovery into real-world participation.",
  },
  {
    title: "Discovery",
    description:
      "Find people, topics, and communities that match you.",
  },
  {
    title: "Conversations",
    description: "Enjoy more meaningful social interaction.",
  },
] as const;

export function WhyKawn() {
  return (
    <Section id="why-kawn" className={`${sectionEdge} ${bandMuted}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewportRelaxed}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className={heading2}>Why Kawn</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Everything you just explored—summarized before you download.
          </p>
        </motion.div>

        <motion.ul
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6"
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewportRelaxed}
        >
          {cards.map((card) => (
            <motion.li key={card.title} variants={fadeSlideUpTight} className="h-full">
              <motion.div
                whileHover={{ y: hoverLiftY }}
                transition={hoverLiftSpring}
                className={`group flex h-full flex-col p-5 transition-[transform,box-shadow,border-color,background-color] duration-300 sm:p-6 ${cardSurface} ${cardSurfaceHover}`}
              >
                <div
                  className="mb-4 h-1 w-9 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                  aria-hidden
                />
                <h3 className="text-base font-semibold tracking-[-0.02em] text-zinc-900 sm:text-[1.0625rem]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {card.description}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
