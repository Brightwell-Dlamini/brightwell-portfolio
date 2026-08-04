import { Mail, Github, MapPin } from "lucide-react";

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
              Let us build something excellent together
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              I am actively seeking the UX/UI Designer, Full-Stack Developer or CMS Specialist
              role at Wiggle Digital Eswatini. The portfolio and source code are ready for review.
              Applications close 7 August 2026 — I would welcome the opportunity to discuss how I
              can contribute.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:admin@wiggledigital.co.sz?subject=Application%20-%20Brightwell%20Dlamini%20-%20Full-Stack%20%2F%20UX%2FUI%20%2F%20CMS"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-500 transition-colors"
              >
                <Mail size={16} />
                Email Application
              </a>
              <a
                href="https://github.com/Brightwell-Dlamini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <Github size={16} />
                View GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-brand-400" />
                Eswatini
              </span>
              <span className="inline-flex items-center gap-2">
                <Github size={15} className="text-brand-400" />
                github.com/Brightwell-Dlamini
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
