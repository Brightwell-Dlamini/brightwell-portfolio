"use client";

import { useState, useCallback } from "react";
import { MotionConfig, LazyMotion, domAnimation, AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OrbitSkills } from "@/components/OrbitSkills";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { TechMarquee } from "@/components/TechMarquee";
import { VelocityBar } from "@/components/VelocityBar";
import { ParticleField } from "@/components/ParticleField";
import { ScrollDrawPath } from "@/components/ScrollDrawPath";

export default function Home() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 280, damping: 28 }}>
        <CustomCursor />
        <ScrollProgress />
        <VelocityBar />
        <ParticleField />
        <Preloader onDone={onDone} />

        <AnimatePresence mode="wait">
          {ready && (
            <motion.main
              key="main"
              className="min-h-screen relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScrollDrawPath />
              <Navbar />
              <Hero />
              <TechMarquee />
              <About />
              <OrbitSkills />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </motion.main>
          )}
        </AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  );
}
