"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";
import { cardSurface } from "@/lib/ui";
import { useLanguage } from "@/lib/LanguageContext";

const KAWN_SUPPORT_URL = "/api/support-proxy";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-[border-color,box-shadow] duration-200 focus:border-orange-400/70 focus:bg-white focus:ring-2 focus:ring-orange-400/20";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const { t, isRTL } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<string>("other");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const categories = [
    { value: "bug", emoji: "🐛", label: t.categories.bug },
    { value: "account", emoji: "👤", label: t.categories.account },
    { value: "billing", emoji: "💳", label: t.categories.billing },
    { value: "content", emoji: "📄", label: t.categories.content },
    { value: "other", emoji: "💬", label: t.categories.other },
  ] as const;

  function reset() {
    setName("");
    setEmail("");
    setCategory("other");
    setSubject("");
    setMessage("");
    setStatus("idle");
    setFeedback("");
  }

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch(KAWN_SUPPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ 
          name: name.trim(), 
          email: email.trim(), 
          category, 
          subject: subject.trim(), 
          message: message.trim() 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedback(data.message ?? t.contact.successMessage);
      } else {
        const errors = data.errors as Record<string, string> | undefined;
        setFeedback(errors ? Object.values(errors).join(" ") : "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setFeedback("Connection error. Please check your internet connection.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            key="modal"
            role="dialog"
            aria-modal
            aria-label={t.contact.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className={`fixed inset-x-4 top-[50%] z-50 mx-auto max-w-lg -translate-y-1/2 overflow-hidden ${cardSurface}`}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-sm">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
                    <path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 001 5.5v9A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0017.5 4h-15zm.5 2.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H3zm0 3.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5H3zm0 3.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H3z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.contact.title}</p>
                  <p className="text-xs text-zinc-500">{t.contact.subtitle}</p>
                </div>
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

            <div className="max-h-[calc(100dvh-12rem)] overflow-y-auto px-6 py-5">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-6 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-base font-semibold text-zinc-900">{t.common.messageSent}</p>
                  <p className="max-w-xs text-sm leading-relaxed text-zinc-500">{feedback}</p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-2 rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    {t.common.done}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-start" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cs-name" className="text-xs font-semibold text-zinc-700">{t.contact.nameLabel}</label>
                      <input
                        id="cs-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cs-email" className="text-xs font-semibold text-zinc-700">{t.contact.emailLabel}</label>
                      <input
                        id="cs-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-semibold text-zinc-700">{t.contact.categoryLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setCategory(cat.value)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
                            category === cat.value
                              ? "border-orange-500/30 bg-orange-500 text-white shadow-sm"
                              : "border-zinc-200/80 bg-white text-zinc-600 hover:border-orange-300/60 hover:bg-orange-50"
                          }`}
                        >
                          <span>{cat.emoji}</span>
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cs-subject" className="text-xs font-semibold text-zinc-700">{t.contact.subjectLabel}</label>
                    <input
                      id="cs-subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t.contact.subjectPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cs-message" className="text-xs font-semibold text-zinc-700">{t.contact.messageLabel}</label>
                    <textarea
                      id="cs-message"
                      required
                      minLength={20}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl border border-red-200/70 bg-red-50/80 px-3.5 py-2.5 text-xs text-red-700">
                      {feedback}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-orange-500 hover:to-orange-600 hover:shadow-md disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                        </svg>
                        {t.common.sending}
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} aria-hidden>
                          <path d="M3.105 3.105a.75.75 0 01.815-.156l13.25 6.625a.75.75 0 010 1.352L3.92 17.051a.75.75 0 01-1.04-.832l1.5-5.624a.75.75 0 01.572-.573l4.94-1.048-4.94-1.048a.75.75 0 01-.572-.573l-1.5-5.624a.75.75 0 01.225-.624z" />
                        </svg>
                        {t.contact.sendButton}
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-400">
                    {t.contact.footerNote}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
