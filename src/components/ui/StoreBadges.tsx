"use client";

import { motion } from "framer-motion";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

const badgeBase =
  "inline-flex min-h-[3rem] w-full items-center justify-center gap-3 rounded-xl border bg-white/95 px-4 py-3.5 text-left shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_10px_28px_-22px_rgba(15,23,42,0.12)] ring-1 ring-zinc-950/[0.04] transition-[border-color,box-shadow,transform,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:min-h-0 sm:w-auto sm:justify-start sm:rounded-2xl sm:px-5";

const badgeTone = {
  default:
    "border-zinc-200/80 hover:border-orange-200/90 hover:bg-white hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_16px_40px_-22px_rgba(15,23,42,0.14)]",
  emphasis:
    "border-zinc-200/75 shadow-[0_1px_0_0_rgba(15,23,42,0.05),0_18px_44px_-26px_rgba(15,23,42,0.16)] ring-zinc-950/[0.05] hover:border-orange-300/80 hover:bg-white hover:shadow-[0_1px_0_0_rgba(15,23,42,0.05),0_24px_52px_-28px_rgba(15,23,42,0.18)]",
} as const;

type StoreBadgesProps = {
  /** Left-align row on larger screens (e.g. hero beside copy). */
  alignStart?: boolean;
  /** Stronger borders/shadows for final CTA. */
  emphasis?: boolean;
};

export function StoreBadges({
  alignStart = false,
  emphasis = false,
}: StoreBadgesProps) {
  const tone = emphasis ? badgeTone.emphasis : badgeTone.default;
  return (
    <div
      className={`flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center ${alignStart ? "sm:justify-start" : "sm:justify-center"}`}
    >
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 480, damping: 28 }}
      >
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${badgeBase} ${tone}`}
          aria-label="Download on the App Store"
        >
          <AppleIcon className="h-9 w-9 shrink-0 text-zinc-900" />
          <span className="leading-tight">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Download on
            </span>
            <span className="block text-lg font-semibold text-zinc-900">
              App Store
            </span>
          </span>
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 480, damping: 28 }}
      >
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${badgeBase} ${tone}`}
          aria-label="Get it on Google Play"
        >
          <PlayIcon className="h-9 w-9 shrink-0 text-[#0F9D58]" />
          <span className="leading-tight">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Get it on
            </span>
            <span className="block text-lg font-semibold text-zinc-900">
              Google Play
            </span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
