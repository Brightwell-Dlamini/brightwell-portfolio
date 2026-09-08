"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, LayoutDashboard, Rocket } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SplitText } from "@/components/SplitText";

const skillGroups = [
  { title: "Frontend & UX", icon: LayoutDashboard, gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent", items: ["React / Next.js 15", "TypeScript", "Tailwind CSS", "Design systems", "Mobile-first UX", "A11y"] },
  { title: "Full-Stack", icon: Code2, gradient: "from-cyan-500/25 via-blue-500/10 to-transparent", items: ["App Router", "Supabase", "PostgreSQL", "RBAC auth", "PWA", "Vercel"] },
  { title: "CMS & products", icon: Layers, gradient: "from-pink-500/25 via-rose-500/10 to-transparent", items: ["Content models", "Admin UX", "Media libraries", "Draft workflows", "Editorial tools", "E-commerce"] },
  { title: "How I work", icon: Rocket, gradient: "from-amber-500/20 via-orange-500/10 to-transparent", items: ["5+ years shipping", "AI-assisted craft", "Ship → learn", "Local markets", "Clean architecture", "Outcomes first"] },
];

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  return (
    <div ref={ref} className="text-center">
      <motion.span className="block text-4xl sm:text-5xl font-bold gradient-text tabular-nums" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        {inView ? value : 0}+
      </motion.span>
      <span className="mt-1 block text-xs uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Expertise</motion.p>
          <SplitText text="Technical focus" as="h2" mode="words" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white" />
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-3 gap-6 max-w-lg" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
          <Counter value={5} label="Years coding" />
          <Counter value={4} label="Shipped products" />
          <Counter value={12} label="Stack tools" />
        </motion.div>

        <motion.div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} style={{ perspective: 1200 }}>
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.title} variants={fadeUp}>
                <TiltCard className="h-full" maxTilt={10}>
                  <div className="relative h-full rounded-2xl border border-white/10 glass p-6 overflow-hidden min-h-[280px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-60`} />
                    <div className="relative">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-violet-300"><Icon size={20} /></div>
                      <h3 className="text-base font-semibold text-white">{group.title}</h3>
                      <ul className="mt-4 space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
