"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";
import { fadeUp, springSnappy } from "@/lib/animations";

const socials = [
  { href: "https://github.com/Brightwell-Dlamini", icon: Github, label: "GitHub" },
  { href: "mailto:dlaminibrightwell@gmail.com", icon: Mail, label: "Email" },
  { href: "tel:+26876365539", icon: Phone, label: "Phone" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp}>
            <p className="text-lg font-semibold text-white">
              Brightwell<span className="gradient-text">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">Full-Stack · UX/UI · CMS · Mankayane, Eswatini</p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 glass text-slate-400"
                whileHover={{
                  scale: 1.15,
                  color: "#fff",
                  borderColor: "rgba(167, 139, 250, 0.5)",
                  boxShadow: "0 0 24px -4px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={springSnappy}
                data-cursor="hover"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-xs text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          © {year} Brightwell Dlamini. Built with Next.js & Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
}
