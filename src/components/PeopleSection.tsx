"use client";

import { motion } from "framer-motion";
import { MotionSectionImage } from "@/components/ui/MotionSectionImage";
import { Section } from "@/components/ui/Section";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";
import {
  fadeSlideUpTight,
  imageRevealRight,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";
import {
  bandWarm,
  bodyLead,
  chipWarm,
  eyebrow,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

export function PeopleSection() {
  const { t, isRTL } = useLanguage();

  return (
    <Section id="discover" className={`${sectionEdge} ${bandWarm}`}>
      <div className={pageContainer}>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
          <motion.div
            className="order-1 min-w-0 lg:order-1"
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            <motion.p
              variants={fadeSlideUpTight}
              className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"} ${eyebrow}`}
            >
              {t.people.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeSlideUpTight}
              className={`mt-2.5 text-center ${isRTL ? "lg:text-right" : "lg:text-left"} ${heading2}`}
            >
              {t.people.title}{" "}
              <span className="text-orange-700">{t.people.titleAccent}</span>
            </motion.h2>
            <motion.p
              variants={fadeSlideUpTight}
              className={`mx-auto mt-3 max-w-xl text-center sm:mt-4 lg:mx-0 ${isRTL ? "lg:text-right" : "lg:text-left"} ${bodyLead}`}
            >
              {t.people.description}
            </motion.p>

            <motion.ul
              variants={fadeSlideUpTight}
              className={`mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 lg:mt-7 ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
              aria-label="Discovery and conversation highlights"
            >
              {t.people.themes.map((label, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={chipWarm}
                  >
                    {label}
                  </motion.span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="order-2 w-full min-w-0 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
            variants={imageRevealRight}
          >
            <MotionSectionImage
              src={IMAGE_PATHS.people}
              alt="Discovery and conversations in the Kawn social app"
              sizes={IMAGE_SIZES.people}
              float
              floatPx={4}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
