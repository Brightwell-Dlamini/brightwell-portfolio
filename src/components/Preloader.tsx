"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LETTERS = "BRIGHTWELL".split("");

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"load" | "reveal" | "exit" | "gone">("load");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 8;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setPhase("reveal"), 200);
        setTimeout(() => setPhase("exit"), 900);
        setTimeout(() => {
          setPhase("gone");
          onDone();
        }, 1600);
      }
      setPct(Math.min(100, Math.floor(p)));
    }, 70);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#030712] z-30 origin-top"
            animate={phase === "exit" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#030712] z-30 origin-bottom"
            animate={phase === "exit" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-10 text-center">
            {phase === "load" && (
              <>
                <div className="text-6xl sm:text-8xl font-bold tabular-nums gradient-text">
                  {pct}
                  <span className="text-2xl text-slate-600">%</span>
                </div>
                <div className="mt-8 h-[2px] w-56 mx-auto bg-white/10 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500"
                    animate={{ width: `${pct}%` }}
                  />
                </div>
              </>
            )}

            {(phase === "reveal" || phase === "exit") && (
              <div className="flex gap-1 sm:gap-2 justify-center" style={{ perspective: 800 }}>
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl sm:text-5xl font-bold text-white"
                    initial={{ y: 80, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      delay: i * 0.04,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
