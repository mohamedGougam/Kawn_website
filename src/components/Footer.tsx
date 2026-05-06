"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeSlideUpTight,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { KawnLogoMark } from "@/components/ui/KawnLogoMark";
import { bandMuted, pageContainer, sectionEdge } from "@/lib/ui";

export function Footer() {
  return (
    <footer className={`${sectionEdge} ${bandMuted}`}>
      <div className={`${pageContainer} px-4 py-8 sm:px-6 sm:py-10 md:py-11`}>
        <motion.div
          variants={staggerContainer(0.06, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={motionViewportRelaxed}
          className="grid gap-8 text-center sm:text-left md:gap-9 lg:grid-cols-2 lg:items-start lg:gap-x-14 lg:gap-y-0 lg:text-left xl:gap-x-16"
        >
          <motion.div variants={fadeSlideUpTight} className="min-w-0">
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <KawnLogoMark className="h-9 w-9 rounded-xl" />
              <span className="text-base font-semibold tracking-tight text-zinc-900">
                Kawn
              </span>
            </div>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 sm:mx-0">
              Kawn — community-first social built for respect, safety, and
              meaningful connection
            </p>
          </motion.div>

          <motion.nav
            variants={fadeSlideUpTight}
            className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-8 lg:justify-self-end"
            aria-label="Footer"
          >
            <Link
              href="#"
              className="rounded-md text-sm text-zinc-600 transition-colors duration-200 hover:text-orange-800/90"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="rounded-md text-sm text-zinc-600 transition-colors duration-200 hover:text-orange-800/90"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="rounded-md text-sm text-zinc-600 transition-colors duration-200 hover:text-orange-800/90"
            >
              Contact
            </Link>
          </motion.nav>

          <motion.div
            variants={fadeSlideUpTight}
            className="border-t border-zinc-200/70 pt-8 lg:col-span-2"
          >
            <p className="text-xs text-zinc-500">
              © 2026 Kawn. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
