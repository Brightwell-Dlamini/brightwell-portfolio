const skillGroups = [
  {
    title: "Frontend & UX/UI",
    items: [
      "React 19 / Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Accessible design systems",
      "Responsive & mobile-first",
      "Design systems & component libraries",
      "User research → high-fidelity UI",
    ],
  },
  {
    title: "Full-Stack & Backend",
    items: [
      "Next.js App Router & Server Actions",
      "Supabase (Auth, DB, Storage, RLS)",
      "PostgreSQL",
      "REST & type-safe APIs",
      "Authentication & role-based access",
      "PWA & offline-first patterns",
      "Vercel deployment & edge",
      "Mapbox / geospatial",
    ],
  },
  {
    title: "CMS & Content Systems",
    items: [
      "Custom CMS architecture",
      "Content modelling & schemas",
      "Admin dashboards & workflows",
      "Media libraries & asset pipelines",
      "Role-based content permissions",
      "Headless & hybrid approaches",
      "Editorial UX optimisation",
      "Multi-tenant patterns",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Expertise
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills aligned to the roles
          </p>
          <p className="mt-4 text-slate-400">
            Practical, production-focused capabilities across the three positions I am targeting.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
