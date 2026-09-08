"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, springSoft } from "@/lib/animations";

const items = [
  {
    quote: "Brightwell delivered a trading journal that actually matches how prop traders work. Clean UX, solid data model, and he shipped on schedule.",
    name: "Thabo Nkambule",
    role: "Independent Trader · Manzini",
  },
  {
    quote: "Our property listings went from spreadsheets to a full marketplace with OTP and approvals. Communication was clear and the product feels local.",
    name: "Nomsa Dlamini",
    role: "Property Manager · Mbabane",
  },
  {
    quote: "The CMS admin is the first one our editors actually enjoy using. Draft workflows and media handling just work — no training drama.",
    name: "Sipho Maseko",
    role: "Content Lead · Agency client",
  },
  {
    quote: "From idea to production storefront for our SME clients. Inventory and orders are finally under control without hiring a full tech team.",
    name: "Lindiwe Zwane",
    role: "Operations · Local retail group",
  },
];

const CARD_WIDTH = 340;
const GAP = 20;

export function Testimonials() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const maxIndex = items.length - 1;

  const snapTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    animate(x, -clamped * (CARD_WIDTH + GAP), { type: "spring", stiffness: 280, damping: 32 });
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    let next = index;
    if (offset < -60 || velocity < -400) next = index + 1;
    else if (offset > 60 || velocity > 400) next = index - 1;
    snapTo(next);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400">Testimonials</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">What collaborators say</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">Drag the cards or use the arrows — feedback from traders, property teams and content editors.</motion.p>
        </motion.div>

        <div className="mt-10 flex items-center justify-end gap-2">
          <motion.button onClick={() => snapTo(index - 1)} disabled={index === 0} className="rounded-full border border-white/10 glass p-2.5 text-slate-300 disabled:opacity-30" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} aria-label="Previous"><ChevronLeft size={18} /></motion.button>
          <motion.button onClick={() => snapTo(index + 1)} disabled={index === maxIndex} className="rounded-full border border-white/10 glass p-2.5 text-slate-300 disabled:opacity-30" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} aria-label="Next"><ChevronRight size={18} /></motion.button>
        </div>

        <div ref={constraintsRef} className="mt-6 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div className="flex gap-5" style={{ x }} drag="x" dragConstraints={{ left: -maxIndex * (CARD_WIDTH + GAP), right: 0 }} dragElastic={0.12} onDragEnd={onDragEnd} whileDrag={{ cursor: "grabbing" }} transition={springSoft}>
            {items.map((item, i) => (
              <motion.blockquote key={item.name} className="shrink-0 w-[min(100%,340px)] rounded-2xl border border-white/10 glass p-6 sm:p-7 will-change-transform" whileHover={{ scale: 1.02, borderColor: "rgba(167, 139, 250, 0.35)", boxShadow: "0 16px 32px -12px rgba(139, 92, 246, 0.2)" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ delay: i * 0.05, ...springSoft }}>
                <Quote className="h-6 w-6 text-violet-400/80 mb-4" />
                <p className="text-sm leading-relaxed text-slate-300">{item.quote}</p>
                <footer className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => snapTo(i)} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-violet-400" : "w-1.5 bg-white/20"}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
