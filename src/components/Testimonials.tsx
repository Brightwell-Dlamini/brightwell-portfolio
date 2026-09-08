"use client";

import { useState } from "react";
import { motion, useMotionValue, animate, PanInfo, useTransform } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";
import { SplitText } from "@/components/SplitText";

const items = [
  { quote: "Brightwell delivered a trading journal that actually matches how prop traders work. Clean UX, solid data model, shipped on schedule.", name: "Thabo Nkambule", role: "Independent Trader · Manzini" },
  { quote: "Our property listings went from spreadsheets to a full marketplace with OTP and approvals. The product feels local.", name: "Nomsa Dlamini", role: "Property Manager · Mbabane" },
  { quote: "The CMS admin is the first one our editors actually enjoy. Draft workflows and media handling just work.", name: "Sipho Maseko", role: "Content Lead · Agency client" },
  { quote: "From idea to production storefront for our SME clients. Inventory and orders under control without a full tech team.", name: "Lindiwe Zwane", role: "Operations · Local retail group" },
];

const CARD_W = 360;
const GAP = 24;

export function Testimonials() {
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const maxIndex = items.length - 1;
  const rotate = useTransform(x, [-200, 0, 200], [2, 0, -2]);

  const snapTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    animate(x, -clamped * (CARD_W + GAP), { type: "spring", stiffness: 260, damping: 30, mass: 0.7 });
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    let next = index;
    if (info.offset.x < -50 || info.velocity.x < -500) next = index + 1;
    else if (info.offset.x > 50 || info.velocity.x > 500) next = index - 1;
    snapTo(next);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Testimonials</motion.p>
          <SplitText text="What collaborators say" as="h2" mode="words" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white" />
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">Drag the strip — spring physics with velocity-aware snap.</motion.p>
        </motion.div>

        <div className="mt-10 flex justify-end gap-2">
          <motion.button onClick={() => snapTo(index - 1)} disabled={index === 0} className="rounded-full border border-white/10 glass p-2.5 text-slate-300 disabled:opacity-25" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Previous"><ChevronLeft size={18} /></motion.button>
          <motion.button onClick={() => snapTo(index + 1)} disabled={index === maxIndex} className="rounded-full border border-white/10 glass p-2.5 text-slate-300 disabled:opacity-25" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Next"><ChevronRight size={18} /></motion.button>
        </div>

        <div className="mt-6 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div className="flex gap-6" style={{ x, rotate }} drag="x" dragConstraints={{ left: -maxIndex * (CARD_W + GAP), right: 0 }} dragElastic={0.15} onDragEnd={onDragEnd} whileDrag={{ cursor: "grabbing", scale: 0.98 }}>
            {items.map((item, i) => (
              <motion.blockquote key={item.name} className="shrink-0 w-[min(90vw,360px)] rounded-3xl border border-white/10 glass p-7 sm:p-8 will-change-transform" whileHover={{ y: -6, borderColor: "rgba(167,139,250,0.4)", boxShadow: "0 24px 48px -16px rgba(139,92,246,0.25)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: i * 0.06, ...springSoft }} data-cursor="hover">
                <Quote className="h-7 w-7 text-violet-400/70 mb-5" />
                <p className="text-[15px] leading-relaxed text-slate-300">{item.quote}</p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <motion.button key={i} onClick={() => snapTo(i)} className="h-1.5 rounded-full bg-white/20" animate={{ width: i === index ? 28 : 6, backgroundColor: i === index ? "rgb(167,139,250)" : "rgba(255,255,255,0.2)" }} transition={{ type: "spring", stiffness: 400, damping: 25 }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
