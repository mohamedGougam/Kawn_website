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
  bandWarm,
  bodyLead,
  chipWarm,
  eyebrow,
  heading2,
  sectionEdge,
} from "@/lib/ui";

const themes = [
  "Discovery",
  "People",
  "Posts",
  "Replies",
  "Relevance",
];

export function PeopleSection() {
  return (
    <Section id="discover" className={`${sectionEdge} ${bandWarm}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-[4.25rem]">
          <motion.div
            className="order-1 min-w-0 lg:order-1"
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            <motion.p
              variants={fadeSlideUpTight}
              className={`text-center lg:text-left ${eyebrow}`}
            >
              Discovery &amp; conversation
            </motion.p>
            <motion.h2
              variants={fadeSlideUpTight}
              className={`mt-3 text-center lg:text-left ${heading2}`}
            >
              Find people and ideas{" "}
              <span className="text-orange-700">worth your attention</span>
            </motion.h2>
            <motion.p
              variants={fadeSlideUpTight}
              className={`mx-auto mt-4 max-w-xl text-center sm:mt-5 lg:mx-0 lg:text-left ${bodyLead}`}
            >
              Explore profiles, posts, and threads with a feed built for
              relevance—so discovery feels social, and conversations stay
              meaningful.
            </motion.p>

            <motion.ul
              variants={fadeSlideUpTight}
              className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8 lg:mt-9 lg:justify-start"
              aria-label="Discovery and conversation highlights"
            >
              {themes.map((label) => (
                <li key={label}>
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
