"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { easeOut, hoverLiftSpring } from "@/lib/motion";
import { KawnLogoMark } from "@/components/ui/KawnLogoMark";
import { pageContainer } from "@/lib/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const linkClass =
  "rounded-lg px-2.5 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50/90 hover:text-zinc-900";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isRTL } = useLanguage();

  const mainNav = [
    { href: "#different", label: t.nav.values },
    { href: "#communities", label: t.nav.communities },
    { href: "#events", label: t.nav.events },
    { href: "#discover", label: t.nav.discover },
    { href: "#download", label: t.nav.download },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-[var(--kawn-header-h)] z-40 bg-zinc-900/25 backdrop-blur-[1px] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-b border-zinc-200/90 bg-white/95 shadow-[0_6px_32px_-8px_rgba(15,23,42,0.1)] backdrop-blur-md"
            : "border-b border-transparent bg-white/78 backdrop-blur-md"
        }`}
      >
        <div
          className={`${pageContainer} flex h-16 items-center justify-between gap-3 px-4 sm:px-6`}
        >
          <Link
            href="#"
            className="flex min-w-0 shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <KawnLogoMark />
            <span className="truncate text-lg font-semibold tracking-tight text-zinc-900">
              Kawn
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {mainNav.map((item) => (
              <motion.span
                key={item.href}
                className="inline-flex"
                whileHover={{ y: -1 }}
                transition={hoverLiftSpring}
              >
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </motion.span>
            ))}
          </nav>

          <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-4">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            <motion.span
              className="inline-flex max-w-[min(100%,11rem)] sm:max-w-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={hoverLiftSpring}
            >
              <Link
                href="#download"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-full border border-orange-500/25 bg-gradient-to-b from-orange-500 to-orange-600 px-3 py-2.5 text-center text-[0.8125rem] font-semibold leading-snug text-white shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_10px_28px_-16px_rgba(234,88,12,0.45)] ring-1 ring-orange-600/25 transition-[background-color,box-shadow,transform,border-color] duration-200 hover:border-orange-400/35 hover:from-orange-500 hover:to-orange-600 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.22)_inset,0_14px_36px_-14px_rgba(234,88,12,0.5)] active:from-orange-600 active:to-orange-700 sm:min-h-0 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span className="sm:hidden">{t.buttons.download}</span>
                <span className="hidden sm:inline">{t.buttons.downloadKawn}</span>
              </Link>
            </motion.span>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/95 text-zinc-800 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-zinc-950/[0.03] transition-[background-color,color,box-shadow] duration-200 hover:border-zinc-300/90 hover:bg-zinc-50/95 hover:text-zinc-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="relative z-50 max-h-[min(70vh,calc(100dvh-var(--kawn-header-h)))] overflow-y-auto overflow-x-hidden border-t border-zinc-100 bg-white/98 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] backdrop-blur-md lg:hidden"
              aria-label="Mobile primary"
            >
              <div className="flex flex-col gap-0.5 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
                <div className="mb-4 px-3 flex justify-between items-center">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Language</span>
                  <LanguageToggle />
                </div>
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: isRTL ? 6 : -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="flex min-h-12 items-center rounded-xl px-3 py-2 text-base font-medium text-zinc-800 transition-colors hover:bg-orange-50 hover:text-zinc-900 active:bg-orange-50/80"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
