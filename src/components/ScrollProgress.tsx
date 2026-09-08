"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/** Top-of-page scroll progress bar driven by useScroll + useTransform */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 will-change-transform"
      style={{ scaleX, opacity }}
    />
  );
}
