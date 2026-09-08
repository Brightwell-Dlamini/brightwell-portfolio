"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { mobileMenu, mobileItem } from "@/lib/animations";
import { MagneticButton } from "@/components/MagneticButton";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navPad = useTransform(scrollY, [0, 80], [20, 10]);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        paddingTop: navPad,
        paddingBottom: navPad,
        borderBottomColor: scrolled ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0)",
      }}
      animate={{
        backgroundColor: scrolled ? "rgba(3,7,18,0.8)" : "rgba(3,7,18,0)",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <MagneticButton href="#" strength={0.15} className="text-lg font-semibold tracking-tight text-white">
          Brightwell<span className="gradient-text">.</span>
        </MagneticButton>

        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            <MagneticButton key={link.href} href={link.href} strength={0.2} className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white">
              {link.label}
            </MagneticButton>
          ))}
          <MagneticButton href="/resume" className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            <Download size={14} /> CV
          </MagneticButton>
        </nav>

        <motion.button className="md:hidden rounded-full p-2 text-slate-300" onClick={() => setOpen(!open)} whileTap={{ scale: 0.88, rotate: 90 }} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="md:hidden overflow-hidden border-t border-white/10 glass-strong" variants={mobileMenu} initial="closed" animate="open" exit="closed">
            <nav className="flex flex-col gap-1 px-4 py-5">
              {links.map((link, i) => (
                <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200" variants={mobileItem} initial="closed" animate="open" transition={{ delay: i * 0.05 }}>
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
