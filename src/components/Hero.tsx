"use client";

import { ArrowRight, Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities · Eswatini
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Brightwell Dlamini
          </h1>

          <p className="mt-4 text-xl font-medium text-brand-300 sm:text-2xl">
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I design and build production-grade web applications that combine clean architecture,
            thoughtful user experience and maintainable content systems. Currently focused on
            Next.js, TypeScript, Supabase and modern design systems — ready to contribute at
            Wiggle Digital Eswatini.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-colors"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href="https://github.com/Brightwell-Dlamini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:admin@wiggledigital.co.sz"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
