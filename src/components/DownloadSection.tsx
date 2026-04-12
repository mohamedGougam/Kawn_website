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
import { bodyLead, heading2 } from "@/lib/ui";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-[var(--kawn-header-h)] bg-gradient-to-b from-zinc-50/50 via-white to-white px-4 py-16 sm:px-6 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
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
            className="relative z-10 flex min-h-[min(20rem,58vh)] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[24rem] sm:px-10 sm:py-16 md:min-h-[26rem] md:py-20"
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
              className={`mt-4 max-w-md sm:mt-5 ${bodyLead}`}
            >
              Get the app and bring communities, events, and conversations with
              you—wherever you go.
            </motion.p>

            <motion.div
              variants={fadeSlideUp}
              className="mt-8 w-full max-w-md sm:mt-10 sm:max-w-none md:mt-12"
            >
              <StoreBadges emphasis />
            </motion.div>

            <motion.p
              variants={fadeSlideUp}
              className="mt-12 max-w-lg text-center text-[0.7rem] leading-relaxed text-zinc-500 sm:text-xs"
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
