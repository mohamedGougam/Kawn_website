import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical padding preset */
  padding?: "default" | "tight" | "loose";
};

const paddingClass = {
  default: "py-20 sm:py-24 md:py-28 lg:py-32",
  tight: "py-16 sm:py-20 md:py-24 lg:py-28",
  loose: "py-24 sm:py-28 md:py-32 lg:py-40",
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
