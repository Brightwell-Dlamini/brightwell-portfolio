"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useTime,
} from "framer-motion";
import { ArrowRight, Download, Github, Mail, Phone } from "lucide-react";
import { SplitText } from "@/components/SplitText";
import { KineticText } from "@/components/KineticText";
import { MagneticButton } from "@/components/MagneticButton";
import { MorphingBlob } from "@/components/MorphingBlob";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.7], [1, 0.88]);
  const blurContent = useTransform(scrollYProgress, [0, 0.6], [0, 12]);
  const filter = useTransform(blurContent, (b) => `blur(${b}px)`);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 16 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 16 });
  const orb1X = useTransform(springX, [-1, 1], [-40, 40]);
  const orb2X = useTransform(springX, [-1, 1], [30, -30]);
  const orb1Y = useTransform(springY, [-1, 1], [-25, 25]);

  const t = useTime();
  const floatY = useTransform(t, (v) => Math.sin(v / 900) * 20);
  const floatY2 = useTransform(t, (v) => Math.cos(v / 1100) * 24);

  const onMouseMove = (e: React.MouseEvent) => {
    mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
    mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-[100vh] flex items-center"
    >
      <MorphingBlob className="w-[700px] h-[700px] -top-40 -left-20 opacity-70" />
      <MorphingBlob className="w-[500px] h-[500px] bottom-0 right-0 opacity-50" />

      <motion.div className="pointer-events-none absolute -top-40 left-[25%] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[100px] will-change-transform" style={{ x: orb1X, y: floatY }} />
      <motion.div className="pointer-events-none absolute top-[35%] right-[-5%] h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[90px] will-change-transform" style={{ x: orb2X, y: floatY2 }} />
      <motion.div className="pointer-events-none absolute bottom-[8%] left-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-500/15 blur-[80px] will-change-transform" style={{ x: orb2X, y: orb1Y }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse at center, black 15%, transparent 65%)" }} />

      <motion.div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full" style={{ y: yContent, opacity: opacityContent, scale: scaleContent, filter }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for work · Eswatini
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <SplitText text="Brightwell" as="h1" mode="chars" className="block text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]" />
          </div>
          <div className="overflow-hidden mt-1">
            <KineticText text="DLAMINI" as="h1" className="block text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight gradient-text leading-[1.02]" scrambleDuration={1100} />
          </div>

          <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl font-medium">
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            5+ years shipping production software — from a first computer at university to systems used by real people. I design and build products that are technically rigorous and genuinely pleasant to use.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-11 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_50px_-8px_rgba(139,92,246,0.6)]">
              View projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/resume" className="inline-flex items-center gap-2 rounded-full border border-white/15 glass px-7 py-3.5 text-sm font-semibold text-slate-100">
              <Download size={16} /> Download CV
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 flex flex-wrap items-center gap-7 text-sm text-slate-400">
            {[
              { href: "https://github.com/Brightwell-Dlamini", icon: Github, label: "GitHub" },
              { href: "mailto:dlaminibrightwell@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+26876365539", icon: Phone, label: "+268 7636 5539" },
            ].map((item) => (
              <MagneticButton key={item.href} href={item.href} strength={0.2} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <item.icon size={17} /> {item.label}
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <motion.div className="h-12 w-[1px] bg-gradient-to-b from-violet-400 via-fuchsia-400 to-transparent origin-top" animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
