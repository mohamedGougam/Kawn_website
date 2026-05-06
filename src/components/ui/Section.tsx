import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical padding preset */
  padding?: "default" | "tight" | "loose";
};

/** Vertical rhythm: comfortable on mobile, denser on xl+ wide screens */
const paddingClass = {
  default:
    "py-14 sm:py-16 md:py-16 lg:py-16 xl:py-14 2xl:py-12",
  tight:
    "py-11 sm:py-12 md:py-14 lg:py-12 xl:py-11 2xl:py-11",
  loose:
    "py-16 sm:py-[4.5rem] md:py-20 lg:py-20 xl:py-16 2xl:py-16",
} as const;

export function Section({
  id,
  children,
  className = "",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--kawn-header-h)] px-4 sm:px-6 ${paddingClass[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
