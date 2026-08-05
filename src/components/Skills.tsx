const skillGroups = [
  {
    title: "Frontend & UX/UI",
    items: [
      "React / Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Accessible design systems",
      "Responsive & mobile-first",
      "User-centred interfaces",
    ],
  },
  {
    title: "Full-Stack",
    items: [
      "App Router & Server Actions",
      "Supabase (Auth, DB, Storage)",
      "PostgreSQL",
      "Auth & role-based access",
      "PWA patterns",
      "Vercel deployment",
    ],
  },
  {
    title: "CMS & products",
    items: [
      "Content modelling",
      "Admin dashboards",
      "Media libraries",
      "Draft / publish workflows",
      "Editorial UX",
      "E-commerce admin tools",
    ],
  },
  {
    title: "How I work",
    items: [
      "5+ years coding",
      "AI-assisted development",
      "Ship, learn, iterate",
      "Local-market products",
      "Clean architecture",
      "Problem-solving first",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Expertise
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical focus
          </p>
          <p className="mt-4 text-slate-400">
            Practical skills shaped by the last three years of production work — agencies, startups
            and personal products.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
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
