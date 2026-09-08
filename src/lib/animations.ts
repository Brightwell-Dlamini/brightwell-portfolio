import type { Variants, Transition } from "framer-motion";

export const springSoft: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.8,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
  mass: 0.6,
};

export const springBounce: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 18,
  mass: 0.5,
};

export const easeOutExpo: Transition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1],
};

export const easeOutQuart: Transition = {
  duration: 0.65,
  ease: [0.25, 1, 0.5, 1],
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: easeOutExpo,
  },
  exit: { opacity: 0, y: -20, filter: "blur(4px)" },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const charReveal: Variants = {
  hidden: { y: "110%", rotateX: 40, opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.028,
    },
  }),
};

export const wordReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.06,
    },
  }),
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
};

export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const mobileItem: Variants = {
  closed: { opacity: 0, x: -24, filter: "blur(4px)" },
  open: { opacity: 1, x: 0, filter: "blur(0px)" },
};
