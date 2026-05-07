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
import { useLanguage } from "@/lib/LanguageContext";
import {
  bandMuted,
  cardSurface,
  cardSurfaceHover,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

export function WhyKawn() {
  const { t, isRTL } = useLanguage();

  const cards = [
    t.whyKawn.cards.communities,
    t.whyKawn.cards.events,
    t.whyKawn.cards.discovery,
    t.whyKawn.cards.conversations,
  ];

  return (
    <Section id="why-kawn" className={`${sectionEdge} ${bandMuted}`}>
      <div className={pageContainer}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewportRelaxed}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className={heading2}>{t.whyKawn.title}</h2>
          <p className="mt-2.5 text-sm leading-snug text-zinc-600 sm:text-base sm:leading-normal">
            {t.whyKawn.description}
          </p>
        </motion.div>

        <motion.ul
          className="mt-8 grid gap-3.5 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-4 xl:gap-[1.125rem]"
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewportRelaxed}
        >
          {cards.map((card, index) => (
            <motion.li key={index} variants={fadeSlideUpTight} className="h-full">
              <motion.div
                whileHover={{ y: hoverLiftY }}
                transition={hoverLiftSpring}
                className={`group flex h-full flex-col p-4 transition-[transform,box-shadow,border-color,background-color] duration-300 sm:p-5 text-start ${cardSurface} ${cardSurfaceHover}`}
              >
                <div
                  className={`mb-3 h-1 w-9 rounded-full bg-gradient-to-r ${isRTL ? "from-orange-400 to-orange-500" : "from-orange-500 to-orange-400"}`}
                  aria-hidden
                />
                <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-900 sm:text-base">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 sm:leading-[1.5]">
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
