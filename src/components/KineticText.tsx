"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

interface KineticTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  scrambleDuration?: number;
}

export function KineticText({
  text,
  className = "",
  as: Tag = "span",
  scrambleDuration = 900,
}: KineticTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) {
      setDisplay(text);
      return;
    }
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / scrambleDuration);
      const reveal = Math.floor(t * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") out += " ";
        else if (i < reveal) out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, text, scrambleDuration]);

  return (
    <Tag ref={ref as never} className={className}>
      {display}
    </Tag>
  );
}
