"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WarpTitle } from "@/components/WarpTitle";

const beats = [
  {
    title: "The challenge",
    body: "Computer science was billed as the hardest combination at university. I had never used a computer. I enrolled anyway.",
  },
  {
    title: "The obsession",
    body: "Grades became secondary to problem-solving. The keyboard stopped being a tool and became a gateway to systems people actually use.",
  },
  {
    title: "The craft",
    body: "Five years later I ship full-stack products — trading tools, property marketplaces, CMS platforms — with obsessive attention to UX.",
  },
  {
    title: "The base",
    body: "Mankayane, Eswatini. CS & Mathematics, University of Eswatini. Modern stacks, AI-assisted when it accelerates quality, never when it replaces judgment.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="about" ref={ref} className="relative" style={{ height: `${beats.length * 80}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400 mb-3">About</p>
            <WarpTitle
              text="FROM CHALLENGE TO OBSESSION"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            />
            <p className="mt-4 text-slate-400 text-sm max-w-md">
              Scroll through the chapters — each beat fades in as the story progresses.
            </p>
          </div>

          <div className="relative min-h-[320px]">
            {beats.map((beat, i) => {
              const start = i / beats.length;
              const end = (i + 1) / beats.length;
              return (
                <Beat key={beat.title} progress={scrollYProgress} start={start} end={end} index={i} {...beat} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Beat({
  progress,
  start,
  end,
  title,
  body,
  index,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  title: string;
  body: string;
  index: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.08, end - 0.08, end], [40, 0, 0, -40]);
  const scale = useTransform(progress, [start, start + 0.08, end - 0.08, end], [0.94, 1, 1, 0.96]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-white/10 glass-strong p-8"
      style={{ opacity, y, scale }}
    >
      <span className="text-xs font-bold tabular-nums text-violet-400">0{index + 1}</span>
      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{body}</p>
    </motion.div>
  );
}
