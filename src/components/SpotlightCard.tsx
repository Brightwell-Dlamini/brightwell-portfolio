"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SpotlightCard({ children, className = "", onClick }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const [on, setOn] = useState(false);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(139,92,246,0.22), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
        style={{ background: bg, opacity: on ? 1 : 0 }}
      />
      <div className="relative z-[2]">{children}</div>
    </motion.div>
  );
}
