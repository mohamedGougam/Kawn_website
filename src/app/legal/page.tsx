"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { legalDocuments, type LegalDocument } from "@/lib/legal";
import {
  easeOut,
  fadeSlideUp,
  fadeSlideUpTight,
  motionViewport,
  motionViewportRelaxed,
  staggerContainer,
} from "@/lib/motion";
import {
  bandMuted,
  bodyLead,
  cardSurface,
  cardSurfaceHover,
  eyebrow,
  heading2,
  pageContainer,
  sectionEdge,
} from "@/lib/ui";

function DocumentCard({ doc, index }: { doc: LegalDocument; index: number }) {
  return (
    <motion.div
      id={doc.key}
      variants={fadeSlideUpTight}
      className={`group flex scroll-mt-24 flex-col gap-4 p-5 sm:p-6 ${cardSurface} ${cardSurfaceHover} transition-all duration-200`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50/80 text-xl shadow-sm">
          {doc.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-[0.9375rem] font-semibold tracking-tight text-zinc-900 sm:text-base">
            {doc.title}
          </h2>
          <p className="mt-1 text-[0.8125rem] leading-relaxed text-zinc-500 sm:text-sm">
            {doc.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/70 bg-zinc-50/80 px-3 py-1 text-[0.6875rem] font-semibold text-zinc-500">
          <svg viewBox="0 0 12 12" fill="currentColor" className="h-3 w-3 opacity-60" aria-hidden>
            <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 1.5a.75.75 0 01.75.75V6a.75.75 0 01-.22.53l-1.5 1.5a.75.75 0 01-1.06-1.06L5.25 5.69V3.25A.75.75 0 016 2.5z" />
          </svg>
          Effective {doc.effectiveDate}
        </span>

        <div className="flex items-center gap-2">
          <Link
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 shadow-sm transition-all duration-150 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 10v2.5a1 1 0 001 1h9a1 1 0 001-1V10M8 2v8m0 0L5.5 7.5M8 10l2.5-2.5" />
            </svg>
            Download
          </Link>
          <Link
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/20 bg-gradient-to-b from-orange-500 to-orange-600 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_4px_12px_-6px_rgba(234,88,12,0.45)] transition-all duration-150 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_6px_16px_-6px_rgba(234,88,12,0.55)]"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1112 0A6 6 0 012 8zm5.25-2.75v3.5M8 9.5l1.5-1.5M8 9.5L6.5 8" />
            </svg>
            View PDF
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden bg-white">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/[0.38] via-white to-zinc-50/25 px-4 pb-14 pt-[calc(var(--kawn-header-h)+2.5rem)] sm:px-6 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="absolute -right-24 top-0 h-[min(360px,60vw)] w-[min(360px,60vw)] rounded-full bg-gradient-to-br from-orange-100/50 to-transparent blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-zinc-100/70 blur-3xl" />
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="visible"
            className={`${pageContainer} text-center`}
          >
            <motion.p
              variants={fadeSlideUp}
              className={eyebrow}
            >
              Transparency & Trust
            </motion.p>
            <motion.h1
              variants={fadeSlideUp}
              className="mt-3 text-[1.875rem] font-semibold leading-[1.14] tracking-[-0.03em] text-zinc-900 sm:text-4xl md:text-[2.25rem]"
            >
              Legal &{" "}
              <span className="text-orange-600">Policies</span>
            </motion.h1>
            <motion.p
              variants={fadeSlideUp}
              className={`mx-auto mt-4 max-w-lg ${bodyLead}`}
            >
              Everything you need to know about how Kawn handles your data,
              your rights, and the rules that keep our community safe.
            </motion.p>
            <motion.p
              variants={fadeSlideUp}
              className="mt-3 text-xs text-zinc-400"
            >
              {legalDocuments.length} active documents · All effective Apr 11, 2026
            </motion.p>
          </motion.div>
        </section>

        {/* ── Document cards ── */}
        <section className={`${sectionEdge} px-4 py-12 sm:px-6 sm:py-16`}>
          <motion.div
            variants={staggerContainer(0.07, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            className={`${pageContainer} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}
          >
            {legalDocuments.map((doc, i) => (
              <DocumentCard key={doc.key} doc={doc} index={i} />
            ))}
          </motion.div>
        </section>

        {/* ── Footer note ── */}
        <section className={`${sectionEdge} ${bandMuted} px-4 py-10 sm:px-6`}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewportRelaxed}
            transition={{ duration: 0.45, ease: easeOut }}
            className={`${pageContainer} flex flex-col items-center gap-3 text-center`}
          >
            <p className="text-sm leading-relaxed text-zinc-500">
              Questions about our policies?{" "}
              <Link href="/#contact" className="font-medium text-orange-600 underline-offset-2 hover:underline">
                Contact our support team
              </Link>
              {" "}— we respond within 24 hours.
            </p>
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Kawn · All documents are version 1.0
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
