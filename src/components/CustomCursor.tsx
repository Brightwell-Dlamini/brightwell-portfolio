"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, { stiffness: 500, damping: 35, mass: 0.3 });
  const sy = useSpring(cy, { stiffness: 500, damping: 35, mass: 0.3 });
  const rx = useSpring(cx, { stiffness: 150, damping: 25, mass: 0.5 });
  const ry = useSpring(cy, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cx, cy]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] mix-blend-difference hidden md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 48 : 10,
            height: hovering ? 48 : 10,
            opacity: hovering ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[199] hidden md:block border border-violet-400/50 rounded-full"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
        }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.4 : 0.6 }}
      />
    </>
  );
}
