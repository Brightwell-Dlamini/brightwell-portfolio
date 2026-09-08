"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { mobileMenu, mobileItem, springSnappy } from "@/lib/animations";

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

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={false}
      animate={{
        height: scrolled ? 64 : 80,
        backgroundColor: scrolled ? "rgba(3, 7, 18, 0.85)" : "rgba(3, 7, 18, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(148, 163, 184, 0.12)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ borderBottomWidth: 1, willChange: "height, background-color" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          className="text-lg font-semibold tracking-tight text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Brightwell<span className="gradient-text">.</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={springSnappy}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/resume"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
            whileHover={{ scale: 1.04, boxShadow: "0 10px 30px -8px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            <Download size={14} />
            CV
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-white/10 glass-strong"
            variants={mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                  variants={mobileItem}
                  custom={i}
                  initial="closed"
                  animate="open"
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/resume"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-3 text-center text-sm font-semibold text-white"
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
