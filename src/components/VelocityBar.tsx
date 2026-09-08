"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

/** Side indicator that stretches with scroll velocity */
export function VelocityBar() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 100, damping: 30 });
  const height = useTransform(smooth, [-2000, 0, 2000], [48, 12, 48]);
  const opacity = useTransform(smooth, [-1500, 0, 1500], [0.9, 0.25, 0.9]);
  const hue = useTransform(smooth, [-2000, 0, 2000], [280, 200, 320]);
  const bg = useTransform(hue, (h) => `hsl(${h} 80% 60%)`);

  return (
    <motion.div
      className="fixed right-3 top-1/2 z-[90] w-1 -translate-y-1/2 rounded-full hidden md:block will-change-transform"
      style={{ height, opacity, backgroundColor: bg }}
    />
  );
}
