"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { staggerContainer, fadeUp, springSoft, springSnappy } from "@/lib/animations";

const projects = [
  {
    id: "siyatrades",
    title: "SiyaTrades",
    tagline: "Professional trading journal & discipline system",
    description:
      "Full-stack Next.js application for discretionary and prop traders. MT5 history import, P&L calendar, playbook analytics, pre-commitment protocols, revenge-trade detection and multi-account support. Local-first with optional Supabase sync.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Recharts", "PWA", "Tailwind"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    highlight: "Full-Stack · Data-heavy UX",
    color: "from-violet-600/30 to-indigo-600/10",
  },
  {
    id: "swazirent",
    title: "SwaziRent (Ekhaya)",
    tagline: "Property marketplace for Eswatini",
    description:
      "End-to-end rental and property platform with role-based access, phone OTP verification, document workflows, Mapbox search, listing approvals and Progressive Web App support — built for the local market.",
    stack: ["Next.js", "TypeScript", "Supabase", "Mapbox", "React Query"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    highlight: "Full-Stack · Local market product",
    color: "from-cyan-600/30 to-blue-600/10",
  },
  {
    id: "forgecms",
    title: "ForgeCMS",
    tagline: "Modern CMS for content teams",
    description:
      "Content management system with clean content modelling, editorial workflows, media library, draft/publish states and a polished admin interface — CMS specialist skills with strong UX.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    highlight: "CMS · Admin UX",
    color: "from-fuchsia-600/30 to-pink-600/10",
  },
  {
    id: "localmarket",
    title: "LocalMarket",
    tagline: "E-commerce for local businesses",
    description:
      "Storefront and admin oriented toward Eswatini SMEs. Product catalogue, inventory, order management and a practical product CMS layer non-technical users can operate.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    highlight: "Full-Stack · E-commerce",
    color: "from-amber-600/25 to-orange-600/10",
  },
];

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = projects.find((p) => p.id === selected);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400">Selected work</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects from the last few years</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">Production-oriented applications covering full-stack systems, local-market products, CMS architecture and e-commerce. Click a card for a closer look.</motion.p>
        </motion.div>

        <LayoutGroup>
          <motion.div
            className="mt-14 grid gap-6 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                layoutId={`card-${project.id}`}
                variants={fadeUp}
                onClick={() => setSelected(project.id)}
                className="group relative flex flex-col rounded-2xl border border-white/10 glass p-6 sm:p-8 cursor-pointer overflow-hidden will-change-transform"
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 24px 48px -16px rgba(139, 92, 246, 0.3)",
                  borderColor: "rgba(167, 139, 250, 0.4)",
                }}
                whileTap={{ scale: 0.985 }}
                transition={springSnappy}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className="relative">
                  <motion.span layoutId={`badge-${project.id}`} className="inline-block w-fit rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-medium text-violet-300 border border-violet-500/20">{project.highlight}</motion.span>
                  <motion.h3 layoutId={`title-${project.id}`} className="mt-3 text-xl font-semibold text-white group-hover:text-violet-200 transition-colors">{project.title}</motion.h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{project.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-slate-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <AnimatePresence>
            {active && (
              <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <motion.div layoutId={`card-${active.id}`} className="relative z-10 w-full max-w-lg rounded-3xl border border-white/15 glass-strong p-7 sm:p-9 shadow-2xl" transition={springSoft}>
                  <button onClick={() => setSelected(null)} className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10" aria-label="Close"><X size={18} /></button>
                  <motion.span layoutId={`badge-${active.id}`} className="inline-block rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-medium text-violet-300 border border-violet-500/20">{active.highlight}</motion.span>
                  <motion.h3 layoutId={`title-${active.id}`} className="mt-3 text-2xl font-bold text-white">{active.title}</motion.h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{active.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{active.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                    {active.live && (
                      <motion.a href={active.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300" whileHover={{ x: 2, color: "#c4b5fd" }} whileTap={{ scale: 0.97 }}>
                        <ExternalLink size={14} /> Live demo
                      </motion.a>
                    )}
                    <motion.a href={active.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400" whileHover={{ x: 2, color: "#fff" }} whileTap={{ scale: 0.97 }}>
                      <Github size={14} /> Source
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}
