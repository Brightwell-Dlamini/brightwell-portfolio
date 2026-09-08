"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { Code2, Database, Layout, Palette, Server, Sparkles, Boxes, Globe } from "lucide-react";
import { KineticText } from "@/components/KineticText";
import { fadeUp, staggerContainer } from "@/lib/animations";

const nodes = [
  { icon: Code2, label: "React" },
  { icon: Layout, label: "Next.js" },
  { icon: Database, label: "Supabase" },
  { icon: Server, label: "Postgres" },
  { icon: Palette, label: "UX/UI" },
  { icon: Boxes, label: "CMS" },
  { icon: Globe, label: "PWA" },
  { icon: Sparkles, label: "Motion" },
];

export function OrbitSkills() {
  const t = useTime();
  const rotate = useTransform(t, (v) => (v / 80) % 360);
  const counter = useTransform(rotate, (r) => -r);

  return (
    <section id="skills" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">Expertise</motion.p>
          <KineticText text="TECHNICAL ORBIT" as="h2" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white" />
          <motion.p variants={fadeUp} className="mt-4 text-slate-400 max-w-lg">
            A living system of tools in constant motion — the stack I ship with every week.
          </motion.p>
        </motion.div>

        <div className="mt-20 relative mx-auto h-[340px] sm:h-[420px] w-full max-w-lg">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)]">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">5+</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">years</p>
            </div>
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
            style={{ rotate }}
          >
            {nodes.map((node, i) => {
              const angle = (i / nodes.length) * 360;
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.label}
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  style={{ rotate: angle }}
                >
                  <motion.div style={{ rotate: counter }} className="flex flex-col items-center gap-1">
                    <div
                      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/15 glass text-violet-300 shadow-lg"
                      data-cursor={node.label}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">{node.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
