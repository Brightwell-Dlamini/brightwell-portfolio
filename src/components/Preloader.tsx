"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"load" | "exit" | "gone">("load");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setPhase("exit"), 280);
        setTimeout(() => {
          setPhase("gone");
          onDone();
        }, 1100);
      }
      setPct(Math.min(100, Math.floor(p)));
    }, 90);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#030712] z-20 origin-top"
            animate={phase === "exit" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#030712] z-20 origin-bottom"
            animate={phase === "exit" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />

          <motion.div
            className="relative z-10 text-center"
            animate={phase === "exit" ? { opacity: 0, y: -30, filter: "blur(8px)" } : {}}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              className="text-xs uppercase tracking-[0.35em] text-violet-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Brightwell Dlamini
            </motion.p>
            <div className="text-6xl sm:text-7xl font-bold tabular-nums gradient-text">
              {pct}
              <span className="text-2xl text-slate-500">%</span>
            </div>
            <div className="mt-8 h-[2px] w-48 mx-auto bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500"
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
