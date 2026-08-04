const highlights = [
  {
    title: "Complex product ownership",
    detail:
      "Designed and shipped SiyaTrades end-to-end — from data model and import pipelines to discipline systems, analytics dashboards and optional live trading-desk integration.",
  },
  {
    title: "Local-market systems",
    detail:
      "Built SwaziRent with Eswatini-specific flows: phone OTP, multi-role verification, listing approval pipelines and map-first discovery suited to the local property market.",
  },
  {
    title: "CMS & editorial tooling",
    detail:
      "Architected content models, admin interfaces and permission systems that allow non-technical users to manage complex content without developer intervention.",
  },
  {
    title: "Modern delivery stack",
    detail:
      "Consistent use of Next.js App Router, TypeScript, Supabase, Tailwind and Vercel for rapid iteration, strong type safety and production reliability.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Approach
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I work
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-950/50 p-6"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
