export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            About
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From a challenge to an obsession
          </p>
          <p className="mt-3 text-slate-400">
            My journey into code began with curiosity and evolved into a passion for creating
            digital experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed">
            <p>
              I first encountered computer science as the “most difficult” combination my
              university offered. Intrigued by the challenge, I dove in headfirst — having never
              even used a computer before.
            </p>
            <p>
              What started as a pursuit of grades quickly became a passion for problem-solving. I
              realised the keyboard wasn&apos;t just a tool; it was a gateway to building solutions
              for real-world problems.
            </p>
            <p>
              Today I&apos;m obsessed with levelling up — aiming to be a world-class developer. I
              thrive on applications that are technically sound and scalable, and that still feel
              intuitive and engaging. I&apos;m not only writing code; I&apos;m building bridges.
            </p>
            <p>
              Based in <span className="text-slate-200">Mankayane, Eswatini</span>. Studied{" "}
              <span className="text-slate-200">Computer Science and Mathematics</span> at the{" "}
              University of Eswatini. Comfortable with modern stacks and AI-assisted development
              when it speeds up delivery without sacrificing quality.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Experience", value: "5+ years coding" },
              { label: "Education", value: "UNESWA · CS & Maths" },
              { label: "Focus", value: "Full-stack · UX · CMS" },
              { label: "From", value: "Mankayane, Eswatini" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-4"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
