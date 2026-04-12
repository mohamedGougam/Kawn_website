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
import { bandMuted, bodyLead, chipBase, heading2, sectionEdge } from "@/lib/ui";

const highlights = [
  "Create and join events",
  "Discover activities nearby",
  "Build real connections",
];

export function Events() {
  return (
    <Section id="events" className={`${sectionEdge} ${bandMuted}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-[4.25rem]">
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
            className="order-1 min-w-0 text-center lg:order-2 lg:text-left"
            variants={staggerContainer(0.08, 0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            <motion.h2 variants={fadeSlideUpTight} className={heading2}>
              Bring Communities Into Real Life
            </motion.h2>
            <motion.p
              variants={fadeSlideUpTight}
              className={`mx-auto mt-4 max-w-xl sm:mt-5 lg:mx-0 ${bodyLead}`}
            >
              Take what you find online into the real world—create and join
              events, meetups, and experiences with the communities you already
              care about.
            </motion.p>

            <motion.ul
              variants={fadeSlideUpTight}
              className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8 lg:mt-9 lg:justify-start"
              aria-label="Event highlights"
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
        </div>
      </div>
    </Section>
  );
}
