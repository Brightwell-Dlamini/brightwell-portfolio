"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Download, Github, Mail, Phone } from "lucide-react";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const orb1X = useTransform(springX, [-1, 1], [-18, 18]);
  const orb1Y = useTransform(springY, [-1, 1], [-12, 12]);
  const orb2X = useTransform(springX, [-1, 1], [14, -14]);
  const orb2Y = useTransform(springY, [-1, 1], [10, -10]);

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-[90vh] flex items-center mesh-bg"
    >
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px] will-change-transform"
        style={{ y: yBlob1, x: orb1X }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px] will-change-transform"
        style={{ y: yBlob2, x: orb2X, translateY: orb1Y }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 left-10 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-[90px] will-change-transform"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full"
        style={{ opacity: opacityContent }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 glass px-3.5 py-1.5 text-xs font-medium text-violet-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities · Mankayane, Eswatini
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Brightwell{" "}
            <span className="gradient-text">Dlamini</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl"
          >
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            5+ years writing software — from a first encounter with a computer at university to
            shipping production apps used by real people. I build systems that are technically
            sound, scalable, and genuinely pleasant to use.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 16px 40px -10px rgba(139,92,246,0.55)" }}
              whileTap={{ scale: 0.96 }}
              transition={springSoft}
            >
              View projects
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 glass px-6 py-3.5 text-sm font-semibold text-slate-100"
              whileHover={{ scale: 1.04, borderColor: "rgba(167,139,250,0.5)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-slate-300"
              whileHover={{ color: "#fff", x: 2 }}
              whileTap={{ scale: 0.96 }}
            >
              Contact
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400"
          >
            {[
              { href: "https://github.com/Brightwell-Dlamini", icon: Github, label: "GitHub" },
              { href: "mailto:dlaminibrightwell@gmail.com", icon: Mail, label: "dlaminibrightwell@gmail.com" },
              { href: "tel:+26876365539", icon: Phone, label: "+268 7636 5539" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2"
                whileHover={{ color: "#fff", y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <item.icon size={18} />
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
