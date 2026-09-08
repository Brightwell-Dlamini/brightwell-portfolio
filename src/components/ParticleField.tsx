"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const COUNT = 28;

export function ParticleField() {
  const [ready, setReady] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        drift: 8 + Math.random() * 24,
        delay: Math.random() * 4,
        dur: 6 + Math.random() * 8,
      })),
    []
  );

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setReady(true);
    const move = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  if (!ready) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden hidden md:block"
      style={{ x: sx, y: sy }}
    >
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-violet-400/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(167,139,250,0.5)",
          }}
          animate={{
            y: [0, -p.drift, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
