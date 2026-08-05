import { Mail, Phone, Github, MapPin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Contact
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s talk
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Open to full-time roles, contract work and interesting product problems. Reach me
              directly by email or phone — I respond as soon as I can.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:dlaminibrightwell@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50 hover:bg-slate-900 transition-colors"
              >
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span className="truncate">dlaminibrightwell@gmail.com</span>
              </a>
              <a
                href="tel:+26876365539"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50 hover:bg-slate-900 transition-colors"
              >
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>+268 7636 5539</span>
              </a>
              <a
                href="tel:+26879808742"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50 hover:bg-slate-900 transition-colors"
              >
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>+268 7980 8742</span>
              </a>
              <a
                href="https://github.com/Brightwell-Dlamini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50 hover:bg-slate-900 transition-colors"
              >
                <Github size={18} className="text-brand-400 shrink-0" />
                <span>github.com/Brightwell-Dlamini</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
              >
                <Download size={16} />
                View / print CV
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={15} />
                Mankayane, Eswatini
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
