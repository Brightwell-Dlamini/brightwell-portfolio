"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";
import { SplitText } from "@/components/SplitText";

const projects = [
  {
    id: "siyatrades",
    title: "SiyaTrades",
    tagline: "Trading journal & discipline system",
    description: "Full-stack Next.js app for discretionary and prop traders. MT5 history import, P&L calendar, playbook analytics, pre-commitment protocols, revenge-trade detection and multi-account support.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Recharts", "PWA"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    highlight: "Full-Stack · Data UX",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    id: "swazirent",
    title: "SwaziRent",
    tagline: "Property marketplace for Eswatini",
    description: "End-to-end rental platform with role-based access, phone OTP, document workflows, Mapbox search, listing approvals and PWA support — built for the local market.",
    stack: ["Next.js", "Supabase", "Mapbox", "React Query"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    highlight: "Local market product",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    id: "forgecms",
    title: "ForgeCMS",
    tagline: "Modern CMS for content teams",
    description: "Content modelling, editorial workflows, media library, draft/publish states and a polished admin — CMS specialist craft with strong UX.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    highlight: "CMS · Admin UX",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "localmarket",
    title: "LocalMarket",
    tagline: "E-commerce for local SMEs",
    description: "Storefront and admin for Eswatini SMEs. Catalogue, inventory, orders and a practical CMS layer non-technical users can run.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    highlight: "E-commerce",
    accent: "from-amber-500 to-orange-500",
  },
];

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = projects.find((p) => p.id === selected);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-35%"]);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/15 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.35 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Selected work</motion.p>
          <SplitText text="Projects that shipped" as="h2" mode="words" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white" />
          <motion.p variants={fadeUp} className="mt-4 text-slate-400 max-w-xl">Production systems across trading tools, property, CMS and e-commerce. Click any card — shared layout morphs into detail.</motion.p>
        </motion.div>
      </div>

      <div ref={trackRef} className="mt-14 relative">
        <motion.div style={{ x }} className="flex gap-6 px-4 sm:px-6 lg:px-8 w-max will-change-transform">
          {projects.map((project, i) => (
            <TiltCard key={project.id} className="w-[min(85vw,380px)] shrink-0" onClick={() => setSelected(project.id)}>
              <motion.article
                layoutId={`card-${project.id}`}
                className="relative h-full rounded-3xl border border-white/10 glass-strong p-7 sm:p-8 cursor-pointer overflow-hidden min-h-[320px] flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.08, ...springSoft }}
                data-cursor="hover"
              >
                <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`} />
                <motion.span layoutId={`badge-${project.id}`} className="inline-flex w-fit rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">{project.highlight}</motion.span>
                <motion.h3 layoutId={`title-${project.id}`} className="mt-4 text-2xl font-bold text-white">{project.title}</motion.h3>
                <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 line-clamp-3 flex-1">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs font-medium text-violet-300">Open case <ArrowUpRight size={14} /></div>
              </motion.article>
            </TiltCard>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div layoutId={`card-${active.id}`} className="relative z-10 w-full max-w-lg rounded-3xl border border-white/15 glass-strong p-8 sm:p-10 shadow-2xl" transition={springSoft}>
              <motion.button onClick={() => setSelected(null)} className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10" whileHover={{ rotate: 90, scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Close"><X size={18} /></motion.button>
              <motion.span layoutId={`badge-${active.id}`} className="inline-flex rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">{active.highlight}</motion.span>
              <motion.h3 layoutId={`title-${active.id}`} className="mt-4 text-3xl font-bold text-white">{active.title}</motion.h3>
              <p className="mt-1 text-sm text-slate-400">{active.tagline}</p>
              <motion.p className="mt-5 text-sm leading-relaxed text-slate-300" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>{active.description}</motion.p>
              <motion.div className="mt-5 flex flex-wrap gap-1.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {active.stack.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-slate-300">{t}</span>
                ))}
              </motion.div>
              <motion.div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                {active.live && (
                  <a href={active.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200" data-cursor="hover"><ExternalLink size={14} /> Live demo</a>
                )}
                <a href={active.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white" data-cursor="hover"><Github size={14} /> Source</a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
