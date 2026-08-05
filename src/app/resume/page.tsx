import type { Metadata } from "next";
import { ResumePrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Brightwell Dlamini",
  description: "Curriculum vitae of Brightwell Dlamini, full-stack developer from Eswatini.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="no-print sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          ← Back to portfolio
        </a>
        <ResumePrintButton />
      </div>

      <article className="mx-auto max-w-[210mm] bg-white shadow-lg my-6 sm:my-10 px-8 py-10 sm:px-12 sm:py-12 print:shadow-none print:my-0 print:max-w-none">
        <header className="border-b-2 border-blue-600 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Brightwell Dlamini</h1>
          <p className="mt-1 text-base font-medium text-blue-600">
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Mankayane, Eswatini · +268 7636 5539 / +268 7980 8742 ·{" "}
            <a href="mailto:dlaminibrightwell@gmail.com" className="text-blue-700 underline">
              dlaminibrightwell@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/Brightwell-Dlamini"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Brightwell-Dlamini
            </a>
          </p>
        </header>

        <Section title="Profile">
          <p>
            Full-stack developer and UX/UI designer with 5+ years of coding experience. Studied
            Computer Science and Mathematics at the University of Eswatini. Builds production web
            applications with Next.js, TypeScript and modern CMS patterns — technically sound,
            scalable, and focused on clear user experience.
          </p>
        </Section>

        <Section title="Experience">
          <Job
            title="Junior Systems Developer"
            org="The Luke Commission"
            meta="2024 · 6 months"
            detail="Systems development in a healthcare-oriented environment; internal tools and application delivery."
          />
          <Job
            title="Software Developer"
            org="McVillan International"
            meta="2023"
            detail="Software development company — application development and networking support."
          />
          <Job
            title="Web Developer"
            org="Sm3 Creative"
            meta="2023"
            detail="Digital marketing agency — websites and web experiences for client campaigns."
          />
          <Job
            title="Intern"
            org="RSTP Eswatini"
            meta="2021"
            detail="Royal Science and Technology Park — technology internship."
          />
          <Job
            title="Intern"
            org="Yeshua Technologies"
            meta="2020 · Sidvwashini"
            detail="Software company internship; early hands-on development experience."
          />
        </Section>

        <Section title="Selected projects (recent)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>
              <strong>SiyaTrades</strong> — Trading journal with MT5 import, analytics and discipline
              systems. Next.js, TypeScript, Supabase.
            </li>
            <li>
              <strong>SwaziRent (Ekhaya Listings)</strong> — Property marketplace for Eswatini: roles,
              verification, maps, PWA.
            </li>
            <li>
              <strong>ForgeCMS</strong> — CMS with content models, media library and draft/publish
              workflows.
            </li>
            <li>
              <strong>LocalMarket</strong> — E-commerce storefront and admin for local SMEs.
            </li>
          </ul>
        </Section>

        <Section title="Education">
          <p className="font-semibold text-slate-900">University of Eswatini</p>
          <p className="text-sm text-slate-600">Computer Science and Mathematics</p>
          <p className="mt-1 text-sm text-slate-700">
            Entered CS as the most demanding combination offered; went from never using a computer
            to shipping production software.
          </p>
        </Section>

        <Section title="Technical expertise">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            <li>
              <strong>Frontend & UX:</strong> React, Next.js 15, TypeScript, Tailwind, accessible UI
            </li>
            <li>
              <strong>Full-stack:</strong> App Router, Supabase, PostgreSQL, auth/RBAC, PWA, Vercel
            </li>
            <li>
              <strong>CMS:</strong> Content modelling, admin dashboards, media libraries, editorial
              workflows
            </li>
            <li>
              <strong>Practice:</strong> AI-assisted development for faster iteration; real-world
              problem solving
            </li>
          </ul>
        </Section>

        <Section title="Personal">
          <p className="text-sm text-slate-700">
            Born 1998 · From Mankayane, Eswatini. Journey: challenge → obsession — building bridges
            with code.
          </p>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
        {title}
      </h2>
      <div className="text-sm text-slate-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Job({
  title,
  org,
  meta,
  detail,
}: {
  title: string;
  org: string;
  meta: string;
  detail: string;
}) {
  return (
    <div>
      <p className="font-semibold text-slate-900">
        {title} — {org}
      </p>
      <p className="text-xs text-slate-500">{meta}</p>
      <p className="mt-0.5 text-sm text-slate-700">{detail}</p>
    </div>
  );
}
