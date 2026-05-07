"use client";

import { motion } from "framer-motion";
import { MotionSectionImage } from "@/components/ui/MotionSectionImage";
import { Section } from "@/components/ui/Section";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";
import {
  fadeSlideUpTight,
  imageRevealLeft,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";
import {
  bandMuted,
  bodyLead,
  chipBase,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

export function Events() {
  const { t, isRTL } = useLanguage();

  return (
    <Section id="events" className={`${sectionEdge} ${bandMuted}`}>
      <div className={pageContainer}>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
          <motion.div
            className="order-2 w-full min-w-0 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
            variants={imageRevealLeft}
          >
            <MotionSectionImage
              src={IMAGE_PATHS.events}
              alt="Events and meetups in Kawn — from online to real life"
              sizes={IMAGE_SIZES.split}
              float
              floatPx={4}
            />
          </motion.div>

          <motion.div
            className={`order-1 min-w-0 text-center lg:order-2 ${isRTL ? "lg:text-right" : "lg:text-left"}`}
            variants={staggerContainer(0.08, 0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            <motion.h2 variants={fadeSlideUpTight} className={heading2}>
              {t.events.title}
            </motion.h2>
            <motion.p
              variants={fadeSlideUpTight}
              className={`mx-auto mt-3 max-w-xl sm:mt-4 lg:mx-0 ${bodyLead}`}
            >
              {t.events.description}
            </motion.p>

            <motion.ul
              variants={fadeSlideUpTight}
              className={`mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 lg:mt-7 ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
              aria-label="Event highlights"
            >
              {t.events.highlights.map((label, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={chipBase}
                  >
                    {label}
                  </motion.span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
