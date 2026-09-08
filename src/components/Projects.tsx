"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { KineticText } from "@/components/KineticText";
import { springSoft } from "@/lib/animations";

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
    accent: "#8b5cf6",
    num: "01",
  },
  {
    id: "swazirent",
    title: "SwaziRent",
    tagline: "Property marketplace for Eswatini",
    description: "End-to-end rental platform with role-based access, phone OTP, document workflows, Mapbox search, listing approvals and PWA — built for the local market.",
    stack: ["Next.js", "Supabase", "Mapbox", "React Query"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    highlight: "Local market product",
    accent: "#06b6d4",
    num: "02",
  },
  {
    id: "forgecms",
    title: "ForgeCMS",
    tagline: "Modern CMS for content teams",
    description: "Content modelling, editorial workflows, media library, draft/publish states and a polished admin interface — CMS specialist craft with strong UX.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    highlight: "CMS · Admin UX",
    accent: "#ec4899",
    num: "03",
  },
  {
    id: "localmarket",
    title: "LocalMarket",
    tagline: "E-commerce for local SMEs",
    description: "Storefront and admin for Eswatini SMEs. Catalogue, inventory, orders and a practical CMS layer non-technical operators can run day to day.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    highlight: "E-commerce",
    accent: "#f59e0b",
    num: "04",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects.find((p) => p.id === selected);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((projects.length - 1) / projects.length) * 100}%`]
  );
  const smoothX = useSpring(x, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(projects.length - 1, Math.round(v * (projects.length - 1)));
    setActiveIndex(idx);
  });

  return (
    <section id="projects" ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="absolute top-24 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400 mb-2">Selected work</p>
          <KineticText text="PROJECTS THAT SHIPPED" as="h2" className="text-2xl sm:text-4xl font-bold tracking-tight text-white" />
          <div className="mt-4 h-[2px] w-full max-w-xs bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500" style={{ width: progressWidth }} />
          </div>
          <p className="mt-2 text-xs text-slate-500 tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <motion.div className="flex h-full items-center will-change-transform" style={{ x: smoothX, width: `${projects.length * 100}%` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-screen h-full flex items-center justify-center px-4 sm:px-10 shrink-0">
              <motion.article
                layoutId={`card-${project.id}`}
                onClick={() => setSelected(project.id)}
                className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 glass-strong p-8 sm:p-12 cursor-pointer overflow-hidden"
                style={{ boxShadow: `0 0 80px -20px ${project.accent}55` }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="Open"
              >
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-[80px] opacity-40" style={{ background: project.accent }} />
                <div className="relative flex flex-col sm:flex-row gap-8 items-start">
                  <span className="text-6xl sm:text-8xl font-bold text-white/5 tabular-nums leading-none select-none">{project.num}</span>
                  <div className="flex-1">
                    <motion.span layoutId={`badge-${project.id}`} className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">{project.highlight}</motion.span>
                    <motion.h3 layoutId={`title-${project.id}`} className="mt-4 text-3xl sm:text-5xl font-bold text-white tracking-tight">{project.title}</motion.h3>
                    <p className="mt-2 text-base text-slate-400">{project.tagline}</p>
                    <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-lg">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span key={t} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-violet-300">Open case study <ArrowUpRight size={16} /></div>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </motion.div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 hidden sm:flex">
          {projects.map((p, i) => (
            <motion.div key={p.id} className="w-1.5 rounded-full" animate={{ height: i === activeIndex ? 28 : 8, backgroundColor: i === activeIndex ? p.accent : "rgba(255,255,255,0.2)" }} transition={{ type: "spring", stiffness: 400, damping: 25 }} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setSelected(null)} />
            <motion.div layoutId={`card-${active.id}`} className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/15 glass-strong p-8 sm:p-12 shadow-2xl" transition={springSoft}>
              <motion.button onClick={() => setSelected(null)} className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10" whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }} aria-label="Close"><X size={18} /></motion.button>
              <motion.span layoutId={`badge-${active.id}`} className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">{active.highlight}</motion.span>
              <motion.h3 layoutId={`title-${active.id}`} className="mt-4 text-3xl sm:text-4xl font-bold text-white">{active.title}</motion.h3>
              <p className="mt-1 text-sm text-slate-400">{active.tagline}</p>
              <motion.p className="mt-5 text-sm leading-relaxed text-slate-300" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>{active.description}</motion.p>
              <div className="mt-5 flex flex-wrap gap-2">{active.stack.map((t) => (<span key={t} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-300">{t}</span>))}</div>
              <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6">
                {active.live && (<a href={active.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300" data-cursor="Visit"><ExternalLink size={14} /> Live demo</a>)}
                <a href={active.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400" data-cursor="Code"><Github size={14} /> Source</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
