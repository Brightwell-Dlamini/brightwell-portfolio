import type { Variants, Transition } from "framer-motion";

/** Global spring used for most interactive elements */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
};

export const easeOutExpo: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

/** Page / section entrance — parent */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

/** Fade-up child for staggerContainer */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutExpo,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
};

/** Card hover — scale + slight lift */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: springSnappy,
  },
};

/** Mobile menu */
export const mobileMenu: Variants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export const mobileItem: Variants = {
  closed: { opacity: 0, x: -12 },
  open: { opacity: 1, x: 0 },
};
