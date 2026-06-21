"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  fadeSlideUpTight,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";
import {
  bandMuted,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

// Icon map for each section (0-indexed)
const ICONS = [
  // Freedom of Expression
  <svg key="speech" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Guardian Child Safety
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // KawnPulse
  <svg key="pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
  // Communities
  <svg key="users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // AI Content Creation
  <svg key="ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  // Content Quality
  <svg key="quality" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  // Everything in Social Media
  <svg key="grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>,
  // Help Shape the Future
  <svg key="future" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>,
];

export function WhyKawn() {
  const { t, isRTL } = useLanguage();
  const s = t.whyKawn as {
    title: string;
    subtitle: string;
    description: string;
    sections: { title: string; description: string }[];
  };

  // Split sections into two columns for desktop
  const left = s.sections.filter((_, i) => i % 2 === 0);
  const right = s.sections.filter((_, i) => i % 2 !== 0);

  return (
    <Section id="why-kawn" className={`${sectionEdge} ${bandMuted}`}>
      <div className={pageContainer}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewportRelaxed}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className={heading2}>{s.title}</h2>
          <p className="mt-2 text-[1.0625rem] font-medium text-orange-600/90">
            {s.subtitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[0.9375rem]">
            {s.description}
          </p>
        </motion.div>

        {/* ── Divider ── */}
        <div className="mx-auto mt-10 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

        {/* ── Two-column masonry grid (single col on mobile) ── */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {/* Left column */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer(0.07, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            {left.map((section, idx) => {
              const globalIdx = idx * 2;
              return (
                <SectionCard
                  key={globalIdx}
                  title={section.title}
                  description={section.description}
                  icon={ICONS[globalIdx]}
                  isRTL={isRTL}
                  isLast={globalIdx === s.sections.length - 1}
                />
              );
            })}
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer(0.07, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewportRelaxed}
          >
            {right.map((section, idx) => {
              const globalIdx = idx * 2 + 1;
              return (
                <SectionCard
                  key={globalIdx}
                  title={section.title}
                  description={section.description}
                  icon={ICONS[globalIdx]}
                  isRTL={isRTL}
                  isLast={globalIdx === s.sections.length - 1}
                />
              );
            })}
          </motion.div>
        </div>

      </div>
    </Section>
  );
}

/* ── Individual section card ── */
function SectionCard({
  title,
  description,
  icon,
  isRTL,
  isLast,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL: boolean;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={fadeSlideUpTight}
      className={`group relative rounded-2xl border border-zinc-200/70 bg-white/95 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_12px_32px_-20px_rgba(15,23,42,0.09)] ring-1 ring-zinc-950/[0.03] backdrop-blur-[2px] transition-[border-color,box-shadow,background-color] duration-300 hover:border-orange-200/65 hover:bg-white hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_20px_48px_-24px_rgba(15,23,42,0.13)] sm:p-6 ${
        isLast ? "border-orange-200/50 bg-gradient-to-br from-orange-50/40 to-white" : ""
      }`}
    >
      {/* Icon + title row */}
      <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-100/80 transition-colors duration-200 group-hover:bg-orange-100/70 group-hover:text-orange-600">
          {icon}
        </div>
        <h3 className="flex-1 text-[0.9375rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-900 sm:text-base">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[0.9375rem] sm:leading-[1.6] ${isRTL ? "text-right" : ""}`}>
        {description}
      </p>

      {/* Accent bar */}
      <div
        className={`absolute bottom-0 ${isRTL ? "right-5" : "left-5"} h-0.5 w-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-500 group-hover:w-12`}
        aria-hidden
      />
    </motion.div>
  );
}
