"use client";

import { motion } from "framer-motion";
import { Code2, Layers, LayoutDashboard, Rocket } from "lucide-react";
import { staggerContainer, fadeUp, springSnappy } from "@/lib/animations";

const skillGroups = [
  {
    title: "Frontend & UX/UI",
    icon: LayoutDashboard,
    gradient: "from-violet-500/20 to-fuchsia-500/10",
    items: ["React / Next.js 15", "TypeScript", "Tailwind CSS", "Accessible design systems", "Responsive & mobile-first", "User-centred interfaces"],
  },
  {
    title: "Full-Stack",
    icon: Code2,
    gradient: "from-cyan-500/20 to-blue-500/10",
    items: ["App Router & Server Actions", "Supabase (Auth, DB, Storage)", "PostgreSQL", "Auth & role-based access", "PWA patterns", "Vercel deployment"],
  },
  {
    title: "CMS & products",
    icon: Layers,
    gradient: "from-pink-500/20 to-rose-500/10",
    items: ["Content modelling", "Admin dashboards", "Media libraries", "Draft / publish workflows", "Editorial UX", "E-commerce admin tools"],
  },
  {
    title: "How I work",
    icon: Rocket,
    gradient: "from-amber-500/15 to-orange-500/10",
    items: ["5+ years coding", "AI-assisted development", "Ship, learn, iterate", "Local-market products", "Clean architecture", "Problem-solving first"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400">Expertise</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical focus</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">Practical skills shaped by years of production work — agencies, startups and personal products.</motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-white/10 glass p-6 overflow-hidden will-change-transform"
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.25)",
                  borderColor: "rgba(167, 139, 250, 0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={springSnappy}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
