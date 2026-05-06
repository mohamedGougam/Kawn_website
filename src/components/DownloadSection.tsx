"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";
import {
  fadeSlideUp,
  motionViewport,
  staggerContainer,
} from "@/lib/motion";
import { bodyLead, heading2, pageContainer } from "@/lib/ui";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-[var(--kawn-header-h)] bg-gradient-to-b from-zinc-50/50 via-white to-white px-4 py-12 sm:px-6 sm:py-16 md:py-16 lg:py-14 xl:py-12"
    >
      <div className={pageContainer}>
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/40 shadow-[0_28px_72px_-32px_rgba(15,23,42,0.18),0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-zinc-950/[0.04] backdrop-blur-[2px] sm:rounded-[1.75rem]">
          <div className="absolute inset-0">
            <Image
              src={IMAGE_PATHS.download}
              alt=""
              fill
              sizes={IMAGE_SIZES.downloadBg}
              quality={90}
              className="object-cover object-center"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/94 via-white/86 to-orange-50/40"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_38%,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.55)_55%,rgba(255,255,255,0.12)_100%)]"
              aria-hidden
            />
          </div>

          <motion.div
            className="relative z-10 flex min-h-[min(17rem,48vh)] flex-col items-center justify-center px-5 py-10 text-center sm:min-h-[20rem] sm:px-8 sm:py-14 md:min-h-[21rem] md:py-16 lg:min-h-[19rem] lg:py-14"
            variants={staggerContainer(0.11, 0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
          >
            <motion.h2
              variants={fadeSlideUp}
              className={`max-w-xl text-center ${heading2}`}
            >
              Download Kawn Today
            </motion.h2>
            <motion.p
              variants={fadeSlideUp}
              className={`mt-3 max-w-lg sm:mt-4 ${bodyLead}`}
            >
              Join a healthier social platform built around communities,
              respect, safety, and meaningful human connection.
            </motion.p>

            <motion.div
              variants={fadeSlideUp}
              className="mt-7 w-full max-w-md sm:mt-8 sm:max-w-none md:mt-9"
            >
              <StoreBadges emphasis />
            </motion.div>

            <motion.p
              variants={fadeSlideUp}
              className="mt-8 max-w-lg text-center text-[0.7rem] leading-snug text-zinc-500 sm:mt-10 sm:text-xs"
            >
              Apple and the Apple logo are trademarks of Apple Inc. Google Play
              and the Google Play logo are trademarks of Google LLC.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
