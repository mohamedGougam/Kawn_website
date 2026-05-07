"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  fadeSlideUpTight,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { KawnLogoMark } from "@/components/ui/KawnLogoMark";
import { bandMuted, pageContainer, sectionEdge } from "@/lib/ui";
import { ContactModal } from "@/components/ContactModal";
import { LegalModal } from "@/components/LegalModal";

import { useLanguage } from "@/lib/LanguageContext";

const linkClass =
  "rounded-md text-sm text-zinc-600 transition-colors duration-200 hover:text-orange-800/90 cursor-pointer bg-transparent p-0";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [legalDocKey, setLegalDocKey] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal docKey={legalDocKey} onClose={() => setLegalDocKey(null)} />

      <footer className={`${sectionEdge} ${bandMuted}`}>
        <div className={`${pageContainer} px-4 py-8 sm:px-6 sm:py-10 md:py-11`}>
          <motion.div
            variants={staggerContainer(0.06, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
            className="grid gap-8 text-center sm:text-start md:gap-9 lg:grid-cols-2 lg:items-start lg:gap-x-14 lg:gap-y-0 lg:text-start xl:gap-x-16"
          >
            <motion.div variants={fadeSlideUpTight} className="min-w-0">
              <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                <KawnLogoMark className="h-9 w-9 rounded-xl" />
                <span className="text-base font-semibold tracking-tight text-zinc-900">
                  Kawn
                </span>
              </div>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 sm:mx-0">
                {t.footer.tagline}
              </p>
            </motion.div>

            <motion.nav
              variants={fadeSlideUpTight}
              className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-8 lg:justify-self-end"
              aria-label="Footer"
            >
              <button
                type="button"
                onClick={() => setLegalDocKey("privacy_policy")}
                className={linkClass}
              >
                {t.common.privacyPolicy}
              </button>
              <button
                type="button"
                onClick={() => setLegalDocKey("terms_of_service")}
                className={linkClass}
              >
                {t.common.termsOfService}
              </button>
              <motion.button
                type="button"
                onClick={() => setContactOpen(true)}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 440, damping: 34 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 text-[0.8125rem] font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_22px_-12px_rgba(234,88,12,0.5)] transition-shadow duration-200 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_12px_28px_-10px_rgba(234,88,12,0.6)]"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden>
                  <path d="M2.088 2.476a.75.75 0 01.815-.156l10.5 5.25a.75.75 0 010 1.352l-10.5 5.25a.75.75 0 01-1.04-.832l1.2-4.5a.75.75 0 01.572-.573L7.5 8l-3.865-.768a.75.75 0 01-.572-.573l-1.2-4.5a.75.75 0 01.225-.683z" />
                </svg>
                {t.common.contact}
              </motion.button>
            </motion.nav>

            <motion.div
              variants={fadeSlideUpTight}
              className="border-t border-zinc-200/70 pt-8 lg:col-span-2"
            >
              <p className="text-xs text-zinc-500">
                © {new Date().getFullYear()} Kawn. {t.footer.copyright}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
