"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400">Contact</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let us build something</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">Open to full-time roles, contract work and interesting product collaborations across Southern Africa and remote.</motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            { icon: Mail, label: "Email", value: "dlaminibrightwell@gmail.com", href: "mailto:dlaminibrightwell@gmail.com" },
            { icon: Phone, label: "Phone", value: "+268 7636 5539", href: "tel:+26876365539" },
            { icon: MapPin, label: "Location", value: "Mankayane, Eswatini", href: "#" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 glass p-6 group"
              whileHover={{
                scale: 1.03,
                y: -4,
                borderColor: "rgba(167, 139, 250, 0.4)",
                boxShadow: "0 16px 32px -12px rgba(139, 92, 246, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 border border-violet-500/20 mb-4">
                <item.icon size={18} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-white group-hover:text-violet-200 transition-colors break-all">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={springSoft}
        >
          <motion.a
            href="mailto:dlaminibrightwell@gmail.com?subject=Project%20inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/25"
            whileHover={{ scale: 1.05, boxShadow: "0 16px 40px -10px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            <Send size={16} />
            Send a message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
