"use client";

import { motion, useReducedMotion } from "framer-motion";
import { floatLoopTransition, floatY } from "@/lib/motion";
import { SectionImage } from "@/components/ui/SectionImage";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof SectionImage> & {
  /** Subtle vertical loop — disabled when user prefers reduced motion. */
  float?: boolean;
  /** Peak offset in px (hero ~6, sections ~4). */
  floatPx?: number;
};

/**
 * Section image with optional gentle float for premium product shots.
 */
export function MotionSectionImage({
  float = false,
  floatPx = 5,
  ...props
}: Props) {
  const reduceMotion = useReducedMotion();
  const shouldFloat = float && !reduceMotion;

  return (
    <motion.div
      className={shouldFloat ? "will-change-transform" : undefined}
      animate={shouldFloat ? { y: floatY(floatPx) } : false}
      transition={floatLoopTransition}
    >
      <SectionImage {...props} />
    </motion.div>
  );
}
