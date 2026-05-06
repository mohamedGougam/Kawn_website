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
import {
  bandWhite,
  bodyLead,
  chipBase,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

const highlights = [
  "Interest-based groups",
  "Community-first spaces",
  "Shared passions",
  "A calmer place to belong",
];

export function Communities() {
  return (
    <Section id="communities" className={`${sectionEdge} ${bandWhite}`}>
      <div className={pageContainer}>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
          <motion.div
            className="order-2 min-w-0 text-center lg:order-1 lg:text-left"
            variants={staggerContainer(0.08, 0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            <motion.h2 variants={fadeSlideUpTight} className={heading2}>
              Find Your Communities
            </motion.h2>
            <motion.p
              variants={fadeSlideUpTight}
              className={`mx-auto mt-3 max-w-xl sm:mt-4 lg:mx-0 ${bodyLead}`}
            >
              Communities are the heart of Kawn—thoughtful spaces to gather
              around shared interests, follow what you care about, and meet
              people who get it.
            </motion.p>

            <motion.ul
              variants={fadeSlideUpTight}
              className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 lg:mt-7 lg:justify-start"
              aria-label="Community highlights"
            >
              {highlights.map((label) => (
                <li key={label}>
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

          <motion.div
            className="order-1 w-full min-w-0 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
            variants={imageRevealRight}
          >
            <MotionSectionImage
              src={IMAGE_PATHS.communities}
              alt="Find and join communities in Kawn"
              sizes={IMAGE_SIZES.split}
              float
              floatPx={4}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
