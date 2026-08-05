const roles = [
  {
    title: "Junior Systems Developer",
    org: "The Luke Commission",
    period: "2024 · 6 months",
    detail:
      "Systems development in a healthcare-oriented environment — internal tools, application delivery and practical software support.",
  },
  {
    title: "Software Developer",
    org: "McVillan International",
    period: "2023",
    detail:
      "Software development company. Built and maintained applications; also supported networking for client and internal systems.",
  },
  {
    title: "Web Developer",
    org: "Sm3 Creative",
    period: "2023",
    detail:
      "Digital marketing agency. Designed and shipped websites and web experiences for client campaigns and brands.",
  },
  {
    title: "Intern",
    org: "RSTP Eswatini",
    period: "2021",
    detail:
      "Royal Science and Technology Park — hands-on technology internship with exposure to real software and systems work.",
  },
  {
    title: "Intern",
    org: "Yeshua Technologies",
    period: "2020 · Sidvwashini",
    detail:
      "Early software company internship. First formal development experience in a local tech firm.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Experience
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where I&apos;ve worked
          </p>
          <p className="mt-4 text-slate-400">
            Agencies, startups and institutions across Eswatini — from first internships to junior
            systems development.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800 sm:left-1/2 sm:-translate-x-px" />
          <ul className="space-y-10">
            {roles.map((role, i) => (
              <li
                key={`${role.org}-${role.period}`}
                className={`relative sm:flex sm:gap-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div className="hidden sm:block sm:w-1/2" />
                <span className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-brand-500 bg-slate-950 sm:left-1/2" />
                <div className="ml-10 sm:ml-0 sm:w-1/2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
                    <p className="text-xs font-medium text-brand-400">{role.period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{role.title}</h3>
                    <p className="text-sm font-medium text-slate-300">{role.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{role.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
