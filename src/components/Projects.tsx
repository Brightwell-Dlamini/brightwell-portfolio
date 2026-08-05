import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SiyaTrades",
    tagline: "Professional trading journal & discipline system",
    description:
      "Full-stack Next.js application for discretionary and prop traders. MT5 history import, P&L calendar, playbook analytics, pre-commitment protocols, revenge-trade detection and multi-account support. Local-first with optional Supabase sync.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Recharts", "PWA", "Tailwind"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    highlight: "Full-Stack · Data-heavy UX",
  },
  {
    title: "SwaziRent (Ekhaya)",
    tagline: "Property marketplace for Eswatini",
    description:
      "End-to-end rental and property platform with role-based access, phone OTP verification, document workflows, Mapbox search, listing approvals and Progressive Web App support — built for the local market.",
    stack: ["Next.js", "TypeScript", "Supabase", "Mapbox", "React Query"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    highlight: "Full-Stack · Local market product",
  },
  {
    title: "ForgeCMS",
    tagline: "Modern CMS for content teams",
    description:
      "Content management system with clean content modelling, editorial workflows, media library, draft/publish states and a polished admin interface — CMS specialist skills with strong UX.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    highlight: "CMS · Admin UX",
  },
  {
    title: "LocalMarket",
    tagline: "E-commerce for local businesses",
    description:
      "Storefront and admin oriented toward Eswatini SMEs. Product catalogue, inventory, order management and a practical product CMS layer non-technical users can operate.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    highlight: "Full-Stack · E-commerce",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Selected work
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects from the last few years
          </p>
          <p className="mt-4 text-slate-400">
            Production-oriented applications covering full-stack systems, local-market products, CMS
            architecture and e-commerce.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 transition-all hover:border-slate-700 hover:bg-slate-900/50"
            >
              <span className="inline-block w-fit rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                {project.highlight}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-400">{project.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
                >
                  <Github size={14} />
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
