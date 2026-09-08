"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, springSnappy, clipReveal } from "@/lib/animations";
import { SplitText } from "@/components/SplitText";

const stats = [
  { label: "Experience", value: "5+ years coding" },
  { label: "Education", value: "UNESWA · CS & Maths" },
  { label: "Focus", value: "Full-stack · UX · CMS" },
  { label: "From", value: "Mankayane, Eswatini" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">About</motion.p>
          <SplitText text="From a challenge to an obsession" as="h2" mode="words" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl" />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.div className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            {[
              "I first encountered computer science as the most difficult combination my university offered. Intrigued by the challenge, I dove in headfirst — having never even used a computer before.",
              "What started as a pursuit of grades quickly became a passion for problem-solving. The keyboard was not just a tool; it was a gateway to building solutions for real-world problems.",
              "Today I am obsessed with levelling up — aiming to be a world-class developer. I thrive on applications that are technically sound and scalable, and still feel intuitive and engaging.",
              "Based in Mankayane, Eswatini. Studied Computer Science and Mathematics at the University of Eswatini. Comfortable with modern stacks and AI-assisted development when it speeds delivery without sacrificing quality.",
            ].map((p, i) => (
              <motion.p key={i} variants={clipReveal}>{p}</motion.p>
            ))}
          </motion.div>

          <motion.div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            {stats.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="rounded-2xl border border-white/10 glass px-5 py-4" whileHover={{ scale: 1.03, borderColor: "rgba(167,139,250,0.4)", boxShadow: "0 16px 32px -12px rgba(139,92,246,0.25)" }} transition={springSnappy} data-cursor="hover">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
