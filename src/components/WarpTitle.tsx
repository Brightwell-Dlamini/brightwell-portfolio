"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/** Heading that skews with scroll velocity */
export function WarpTitle({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothV = useSpring(velocity, { stiffness: 80, damping: 25 });
  const skew = useTransform(smoothV, [-1800, 0, 1800], [12, 0, -12]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.h2
      ref={ref}
      className={className}
      style={{ skewX: skew, x, willChange: "transform" }}
    >
      {text}
    </motion.h2>
  );
}
