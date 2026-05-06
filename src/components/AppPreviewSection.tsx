"use client";

import { motion } from "framer-motion";
import { MotionSectionImage } from "@/components/ui/MotionSectionImage";
import { Section } from "@/components/ui/Section";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";
import {
  fadeSlideUp,
  imageRevealRise,
  motionViewport,
  staggerContainer,
} from "@/lib/motion";
import { bandWhite, imageFrameHero, pageContainer, sectionEdge } from "@/lib/ui";

export function AppPreviewSection() {
  return (
    <Section id="app-preview" className={`${sectionEdge} ${bandWhite}`}>
      <div className={pageContainer}>
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer(0.12, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
        >
          <motion.h2
            variants={fadeSlideUp}
            className="max-w-3xl px-1 text-3xl font-semibold tracking-[-0.03em] text-zinc-900 sm:px-0 sm:text-[2.125rem] sm:leading-[1.1] md:text-4xl md:leading-[1.08] lg:text-[2.25rem] xl:text-[2.375rem]"
          >
            A polished app,{" "}
            <span className="text-orange-600">built for mobile</span>
          </motion.h2>
          <motion.p
            variants={fadeSlideUp}
            className="mt-4 max-w-2xl px-1 text-base leading-[1.55] text-zinc-600 sm:mt-4 sm:px-0 sm:text-[1.0625rem] md:text-lg md:leading-[1.52] lg:text-[1.125rem]"
          >
            Fast, readable, and thoughtfully designed—Kawn feels as refined as
            the communities inside it, with a calm, modern experience you can
            trust.
          </motion.p>

          <motion.div
            variants={imageRevealRise}
            className="relative mt-8 w-full max-w-[58rem] sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16"
          >
            <div
              className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-b from-orange-50/70 via-transparent to-zinc-50/35 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-8 -bottom-6 h-24 rounded-[100%] bg-zinc-900/[0.06] blur-2xl"
              aria-hidden
            />
            <MotionSectionImage
              src={IMAGE_PATHS.appPreview}
              alt="Kawn mobile app interface — polished, modern social experience"
              sizes={IMAGE_SIZES.appPreview}
              ratio="16/10"
              objectPosition="object-top"
              float
              floatPx={5}
              frameClassName={`relative z-[1] ${imageFrameHero}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
