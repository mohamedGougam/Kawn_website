"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { easeOut } from "@/lib/motion";
import { cardSurface } from "@/lib/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { legalDocuments, type LegalDocument } from "@/lib/legal";

interface LegalModalProps {
  docKey: string | null;
  onClose: () => void;
}

export function LegalModal({ docKey, onClose }: LegalModalProps) {
  const { t, isRTL } = useLanguage();
  const doc: LegalDocument | undefined = legalDocuments.find(
    (d) => d.key === docKey
  );

  const translatedDoc = doc ? {
    ...doc,
    title: (t.legal as any)[doc.key]?.title || doc.title,
    description: (t.legal as any)[doc.key]?.description || doc.description,
  } : null;

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(url, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {translatedDoc && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            key="modal"
            role="dialog"
            aria-modal
            aria-label={translatedDoc.title}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className={`fixed inset-x-4 top-1/2 z-50 mx-auto max-w-md -translate-y-1/2 overflow-hidden ${cardSurface}`}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50/80 text-lg shadow-sm">
                  {translatedDoc.icon}
                </span>
                <p className="text-sm font-semibold text-zinc-900">{translatedDoc.title}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.common.close}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>

            <div className="px-5 py-5 text-start">
              <p className="text-sm leading-relaxed text-zinc-600">
                {translatedDoc.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/70 bg-zinc-50 px-3 py-1 text-[0.6875rem] font-semibold text-zinc-500">
                <svg viewBox="0 0 12 12" fill="currentColor" className="h-3 w-3 opacity-60" aria-hidden>
                  <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 1.5a.75.75 0 01.75.75V6a.75.75 0 01-.22.53l-1.5 1.5a.75.75 0 01-1.06-1.06L5.25 5.69V3.25A.75.75 0 016 2.5z" />
                </svg>
                {t.common.effectiveDate} {translatedDoc.effectiveDate}
              </span>

              <div className="mt-5 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => handleDownload(translatedDoc.fileUrl, `${translatedDoc.title}.pdf`)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white py-2.5 text-xs font-semibold text-zinc-700 shadow-sm transition-all duration-150 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 10v2.5a1 1 0 001 1h9a1 1 0 001-1V10M8 2v8m0 0L5.5 7.5M8 10l2.5-2.5" />
                  </svg>
                  {t.common.download}
                </button>

                <Link
                  href={translatedDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-orange-500/20 bg-gradient-to-b from-orange-500 to-orange-600 py-2.5 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_4px_12px_-6px_rgba(234,88,12,0.45)] transition-all duration-150 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_6px_16px_-6px_rgba(234,88,12,0.55)]"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1112 0A6 6 0 012 8zm4-1h4M8 5v6" />
                  </svg>
                  {t.common.viewPdf}
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
