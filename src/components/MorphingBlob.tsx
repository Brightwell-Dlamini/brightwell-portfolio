"use client";

import { motion, useTime, useTransform } from "framer-motion";

/** Continuous morphing SVG blob for ambient background */
export function MorphingBlob({ className = "" }: { className?: string }) {
  const t = useTime();
  const rotate = useTransform(t, (v) => (v / 50) % 360);
  const scale = useTransform(t, (v) => 1 + Math.sin(v / 2000) * 0.08);

  return (
    <motion.svg
      viewBox="0 0 600 600"
      className={`absolute pointer-events-none ${className}`}
      style={{ rotate, scale }}
    >
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
        </linearGradient>
        <filter id="blobBlur">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>
      <motion.path
        fill="url(#blobGrad)"
        filter="url(#blobBlur)"
        animate={{
          d: [
            "M300,80 C420,80 520,180 520,300 C520,420 420,520 300,520 C180,520 80,420 80,300 C80,180 180,80 300,80 Z",
            "M300,100 C400,60 540,160 500,300 C460,440 380,540 280,500 C160,460 60,380 100,260 C140,140 200,140 300,100 Z",
            "M320,90 C450,120 510,220 480,340 C450,460 340,530 220,500 C100,470 70,340 110,220 C150,100 190,60 320,90 Z",
            "M300,80 C420,80 520,180 520,300 C520,420 420,520 300,520 C180,520 80,420 80,300 C80,180 180,80 300,80 Z",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
