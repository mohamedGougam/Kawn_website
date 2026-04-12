/** Shared Framer Motion easing (cubic bezier) — calm, premium exit. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered reveal — run once, start slightly before fully in view. */
export const motionViewport = {
  once: true,
  margin: "-10% 0px",
} as const;

export const motionViewportRelaxed = {
  once: true,
  margin: "-8% 0px",
} as const;

/** Fade + slight slide up — default section content */
export const fadeSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};

export const fadeSlideUpTight = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

/** Staggered children — lists, cards, chips */
export function staggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0.05,
) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Product imagery — slide in from the side */
export const imageRevealRight = {
  hidden: { opacity: 0, x: 22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOut, delay: 0.1 },
  },
};

export const imageRevealLeft = {
  hidden: { opacity: 0, x: -22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOut, delay: 0.1 },
  },
};

/** Large preview band — soft rise */
export const imageRevealRise = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOut },
  },
};

/** Cards / interactive tiles — subtle hover lift */
export const hoverLiftSpring = {
  type: "spring" as const,
  stiffness: 440,
  damping: 34,
};

export const hoverLiftY = -4;

/** Gentle float for key app visuals (respect prefers-reduced-motion in component) */
export function floatY(px: number): number[] {
  return [0, -px, 0];
}

export const floatLoopTransition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};
