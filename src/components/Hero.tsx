import { ArrowRight, Download, Github, Mail, Phone } from "lucide-react";

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
            Open to opportunities · Mankayane, Eswatini
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Brightwell Dlamini
          </h1>

          <p className="mt-4 text-xl font-medium text-brand-300 sm:text-2xl">
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            5+ years writing software — from a first encounter with a computer at university to
            shipping production apps used by real people. I build systems that are technically
            sound, scalable, and genuinely pleasant to use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-colors"
            >
              View projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a
              href="https://github.com/Brightwell-Dlamini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="mailto:dlaminibrightwell@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={18} />
              dlaminibrightwell@gmail.com
            </a>
            <a
              href="tel:+26876365539"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={18} />
              +268 7636 5539
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
