"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, { stiffness: 600, damping: 35, mass: 0.25 });
  const sy = useSpring(cy, { stiffness: 600, damping: 35, mass: 0.25 });
  const rx = useSpring(cx, { stiffness: 180, damping: 28, mass: 0.4 });
  const ry = useSpring(cy, { stiffness: 180, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      setVisible(true);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (t) {
        const v = t.getAttribute("data-cursor");
        setLabel(v && v !== "hover" ? v : "View");
      } else if ((e.target as HTMLElement)?.closest("a, button")) {
        setLabel("Click");
      } else {
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cx, cy]);

  if (!visible) return null;

  const active = !!label;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] mix-blend-difference hidden md:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-white flex items-center justify-center overflow-hidden"
          animate={{
            width: active ? 72 : pressed ? 8 : 12,
            height: active ? 72 : pressed ? 8 : 12,
            scale: pressed ? 0.85 : 1,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 28 }}
        >
          <AnimatePresence>
            {active && (
              <motion.span
                key={label}
                className="text-[10px] font-bold uppercase tracking-wider text-black"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[199] hidden md:block rounded-full border border-violet-400/40"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 88 : 40,
          height: active ? 88 : 40,
          opacity: active ? 0.35 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
