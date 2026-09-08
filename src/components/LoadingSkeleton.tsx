"use client";

import { motion } from "framer-motion";

/** Full-page loading skeleton with shimmer */
export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#030712] px-4 pt-28 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="skeleton h-6 w-48" />
        <div className="skeleton h-14 w-full max-w-xl" />
        <div className="skeleton h-14 w-3/4 max-w-lg" />
        <div className="skeleton h-20 w-full max-w-2xl" />
        <div className="flex gap-3 pt-4">
          <div className="skeleton h-12 w-36 rounded-full" />
          <div className="skeleton h-12 w-36 rounded-full" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-16">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="skeleton h-48"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
