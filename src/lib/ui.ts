/**
 * Shared visual tokens — radius, shadows, surfaces (Kawn marketing).
 */

/** Main content width — centered, ~1240px cap for large desktops */
export const pageContainer = "mx-auto w-full max-w-[1240px]";

/** Hairline between bands */
export const sectionEdge = "border-t border-zinc-200/40";

/** Muted band that eases in from a white section above */
export const bandMuted =
  "bg-gradient-to-b from-white via-zinc-50/65 to-zinc-50/95";

/** White band with a whisper of warmth at the top (after muted / hero) */
export const bandWhite = "bg-gradient-to-b from-zinc-50/25 to-white";

/** People / accent strip */
export const bandWarm =
  "bg-gradient-to-b from-orange-50/[0.38] via-white to-zinc-50/35";

/** Product screenshots */
export const imageFrame =
  "shadow-[0_22px_56px_-28px_rgba(15,23,42,0.2),0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-zinc-200/80";

/** Hero / large preview — slightly deeper */
export const imageFrameHero =
  "shadow-[0_28px_64px_-28px_rgba(15,23,42,0.22),0_1px_0_0_rgba(15,23,42,0.05)] ring-1 ring-zinc-200/70";

/** Feature cards */
export const cardSurface =
  "rounded-2xl border border-zinc-200/70 bg-white/95 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_14px_38px_-24px_rgba(15,23,42,0.1)] ring-1 ring-zinc-950/[0.03] backdrop-blur-[2px]";

export const cardSurfaceHover =
  "hover:border-orange-200/65 hover:bg-white hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_22px_50px_-26px_rgba(15,23,42,0.14)] hover:ring-orange-950/[0.045]";

/** Pill chips */
export const chipBase =
  "inline-flex cursor-default items-center rounded-full border border-zinc-200/75 bg-white/90 px-3.5 py-1.5 text-sm font-medium text-zinc-700 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,background-color,transform] duration-200 hover:border-zinc-300/90 hover:bg-zinc-50/90 hover:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.1)]";

export const chipWarm =
  "inline-flex cursor-default items-center rounded-full border border-orange-200/75 bg-white/95 px-3.5 py-1.5 text-sm font-medium text-zinc-700 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ring-1 ring-orange-950/[0.04] transition-[border-color,box-shadow,background-color,transform] duration-200 hover:border-orange-300/75 hover:bg-orange-50/45 hover:shadow-[0_8px_22px_-12px_rgba(234,88,12,0.14)]";

export const eyebrow =
  "text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-orange-800/85 sm:text-[0.8125rem] sm:tracking-[0.14em]";

export const heading2 =
  "text-2xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-3xl lg:text-[2.0625rem] lg:leading-[1.14]";

export const bodyLead =
  "text-base leading-[1.55] text-zinc-600 sm:text-[1.0625rem] sm:leading-[1.58]";
