"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { charReveal, wordReveal } from "@/lib/animations";

type Mode = "chars" | "words";

interface SplitTextProps {
  text: string;
  className?: string;
  mode?: Mode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export function SplitText({
  text,
  className = "",
  mode = "chars",
  as: Tag = "span",
  delay = 0,
  once = false,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount: 0.4 });

  if (mode === "words") {
    const words = text.split(" ");
    return (
      <Tag ref={ref as never} className={className} style={{ perspective: 600 }}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.28em] align-bottom">
            <motion.span
              className="inline-block"
              custom={i + delay * 10}
              variants={wordReveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const chars = text.split("");
  return (
    <Tag ref={ref as never} className={className} style={{ perspective: 800 }}>
      {chars.map((char, i) => (
        <span key={`${char}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
            custom={i + delay * 20}
            variants={charReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
