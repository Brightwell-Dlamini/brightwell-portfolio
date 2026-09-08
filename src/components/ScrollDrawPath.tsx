"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollDrawPath() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-40">
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[min(100%,800px)]" viewBox="0 0 400 2000" fill="none" preserveAspectRatio="xMidYMin meet">
        <motion.path
          d="M200 0 C120 200, 280 400, 200 600 S80 1000, 200 1200 S320 1600, 200 2000"
          stroke="url(#drawGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="drawGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
