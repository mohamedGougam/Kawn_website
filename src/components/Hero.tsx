"use client";

import { motion } from "framer-motion";
import { MotionSectionImage } from "@/components/ui/MotionSectionImage";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { imageFrameHero } from "@/lib/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * i,
      duration: 0.52,
      ease: easeOut,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/[0.42] via-white to-zinc-50/25 px-4 pb-24 pt-[calc(var(--kawn-header-h)+1.25rem)] sm:px-6 sm:pb-32 sm:pt-[calc(var(--kawn-header-h)+1.75rem)] md:pb-36 md:pt-[calc(var(--kawn-header-h)+2.25rem)] lg:pb-40 lg:pt-[calc(var(--kawn-header-h)+2.75rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-0 h-[min(420px,70vw)] w-[min(420px,70vw)] rounded-full bg-gradient-to-br from-orange-100/50 to-transparent blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-zinc-100/70 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-50/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 md:gap-12 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
        <div className="order-2 flex min-w-0 flex-col text-center lg:order-1 lg:text-left">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5 text-sm font-semibold leading-snug tracking-wide text-orange-800/90"
          >
            Social media app
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[1.875rem] font-semibold leading-[1.18] tracking-[-0.03em] text-zinc-900 sm:text-4xl md:text-[2.35rem] lg:text-[2.65rem] lg:leading-[1.1]"
          >
            Built around{" "}
            <span className="text-orange-600">communities</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg md:text-[1.125rem] lg:mx-0"
          >
            Kawn is social media designed for real life—communities first, then
            events, discovery, and conversations that feel relevant and human.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex w-full max-w-md flex-col items-center gap-3 sm:mt-10 sm:max-w-lg lg:max-w-none lg:items-start"
          >
            <StoreBadges alignStart />
            <p className="text-center text-xs text-zinc-500 lg:text-left">
              Available on iPhone and Android
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.1, ease: easeOut }}
          className="relative order-1 w-full min-w-0 max-w-[min(100%,420px)] justify-self-center sm:max-w-[min(100%,480px)] lg:order-2 lg:max-w-none lg:justify-self-end"
        >
          <MotionSectionImage
            src={IMAGE_PATHS.hero}
            alt="Kawn social app on a phone — communities, events, and conversations"
            sizes={IMAGE_SIZES.hero}
            priority
            float
            floatPx={6}
            frameClassName={imageFrameHero}
          />
        </motion.div>
      </div>
    </section>
  );
}
