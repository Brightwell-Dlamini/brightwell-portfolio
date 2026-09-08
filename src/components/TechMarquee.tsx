"use client";

import { motion } from "framer-motion";

const items = [
  "Next.js", "TypeScript", "Supabase", "Framer Motion", "Tailwind",
  "PostgreSQL", "PWA", "CMS Architecture", "UX Systems", "Vercel",
  "React Query", "Mapbox",
];

export function TechMarquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/5 py-5 bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10" />
      <motion.div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="text-sm font-medium tracking-wide text-slate-500 uppercase">
            <span className="text-violet-400/70 mr-3">✦</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
