export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              About
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building digital products that solve real problems
            </p>
          </div>

          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I am a full-stack developer and UX/UI designer based in Eswatini with a strong focus
              on crafting maintainable, user-centred applications. My work spans modern web
              platforms, content management systems and data-driven tools used by real users.
            </p>
            <p>
              Recent projects include a sophisticated trading journal (SiyaTrades) with discipline
              systems, analytics and multi-account support, and a property marketplace (SwaziRent)
              featuring maps, role-based access, verification flows and progressive web app
              capabilities.
            </p>
            <p>
              I care deeply about clean architecture, accessible interfaces and systems that
              content teams can actually manage. I am applying for the roles of{" "}
              <span className="text-slate-200 font-medium">UX/UI Designer</span>,{" "}
              <span className="text-slate-200 font-medium">Full-Stack Developer</span> and{" "}
              <span className="text-slate-200 font-medium">CMS Specialist</span> at Wiggle Digital
              Eswatini because the intersection of thoughtful design, solid engineering and
              practical content tooling is exactly where I deliver the most value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
