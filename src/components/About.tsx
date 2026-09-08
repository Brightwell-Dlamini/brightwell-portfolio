"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, springSnappy } from "@/lib/animations";

const stats = [
  { label: "Experience", value: "5+ years coding" },
  { label: "Education", value: "UNESWA · CS & Maths" },
  { label: "Focus", value: "Full-stack · UX · CMS" },
  { label: "From", value: "Mankayane, Eswatini" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400">About</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">From a challenge to an obsession</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-slate-400">My journey into code began with curiosity and evolved into a passion for creating digital experiences.</motion.p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              "I first encountered computer science as the most difficult combination my university offered. Intrigued by the challenge, I dove in headfirst — having never even used a computer before.",
              "What started as a pursuit of grades quickly became a passion for problem-solving. I realised the keyboard was not just a tool; it was a gateway to building solutions for real-world problems.",
              "Today I am obsessed with levelling up — aiming to be a world-class developer. I thrive on applications that are technically sound and scalable, and that still feel intuitive and engaging. I am not only writing code; I am building bridges.",
              "Based in Mankayane, Eswatini. Studied Computer Science and Mathematics at the University of Eswatini. Comfortable with modern stacks and AI-assisted development when it speeds up delivery without sacrificing quality.",
            ].map((p, i) => (
              <motion.p key={i} variants={fadeUp}>{p}</motion.p>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-xl border border-white/10 glass px-5 py-4"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(167, 139, 250, 0.35)",
                  boxShadow: "0 12px 24px -10px rgba(139, 92, 246, 0.2)",
                }}
                transition={springSnappy}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
