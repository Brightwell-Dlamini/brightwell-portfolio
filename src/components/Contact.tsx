"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";
import { SplitText } from "@/components/SplitText";
import { MagneticButton } from "@/components/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Contact</motion.p>
          <SplitText text="Let us build something" as="h2" mode="words" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white" />
          <motion.p variants={fadeUp} className="mt-4 text-slate-400 max-w-xl">Open to full-time roles, contract work and product collaborations across Southern Africa and remote.</motion.p>
        </motion.div>

        <motion.div className="mt-14 grid gap-5 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          {[
            { icon: Mail, label: "Email", value: "dlaminibrightwell@gmail.com", href: "mailto:dlaminibrightwell@gmail.com" },
            { icon: Phone, label: "Phone", value: "+268 7636 5539", href: "tel:+26876365539" },
            { icon: MapPin, label: "Location", value: "Mankayane, Eswatini", href: "#" },
          ].map((item) => (
            <motion.a key={item.label} href={item.href} variants={fadeUp} className="rounded-2xl border border-white/10 glass p-6 group" whileHover={{ scale: 1.03, y: -6, borderColor: "rgba(167,139,250,0.45)", boxShadow: "0 20px 40px -12px rgba(139,92,246,0.3)" }} whileTap={{ scale: 0.98 }} transition={springSoft} data-cursor="hover">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 border border-violet-500/20 mb-4"><item.icon size={18} /></div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-white group-hover:text-violet-200 transition-colors break-all">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={springSoft}>
          <MagneticButton href="mailto:dlaminibrightwell@gmail.com?subject=Project%20inquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)]">
            <Send size={16} /> Send a message
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
