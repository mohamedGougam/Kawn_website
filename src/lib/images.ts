/**
 * Central image paths — filenames must match assets in /public/images.
 */
export const IMAGE_PATHS = {
  logo: "/images/Logo.jpeg",
  hero: "/images/Hero.png",
  communities: "/images/Communities.png",
  events: "/images/Events.png",
  appPreview: "/images/AppPreview.png",
  people: "/images/People.png",
  download: "/images/Download.png",
} as const;

/** Responsive `sizes` hints for next/image (layout-aware). */
export const IMAGE_SIZES = {
  /** Navbar / footer mark */
  logo: "36px",
  /** Hero main visual (roughly half width on large screens). */
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, min(560px, 50vw)",
  /** Two-column sections (~half container). */
  split: "(max-width: 640px) 100vw, (max-width: 1024px) 94vw, min(520px, 50vw)",
  /** Wide app preview band. */
  appPreview:
    "(max-width: 640px) 100vw, (max-width: 1024px) 96vw, min(896px, 90vw)",
  /** People / social section image. */
  people: "(max-width: 640px) 100vw, (max-width: 1024px) 94vw, min(480px, 42vw)",
  /** Download CTA full-bleed background within max width. */
  downloadBg: "(max-width: 640px) 100vw, (max-width: 1280px) 96vw, min(1152px, 100vw)",
} as const;
