"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0005,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
      style={{ scaleX, opacity }}
    >
      <div className="h-full w-full bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
    </motion.div>
  );
}
