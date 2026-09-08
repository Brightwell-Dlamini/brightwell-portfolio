"use client";

import type { ReactNode } from "react";

/**
 * Passthrough provider — portfolio is dark-only.
 * Kept for compatibility if something re-imports ThemeProvider later.
 */
export function ThemeProvider({
  children,
}: {
  children: ReactNode;
  [key: string]: unknown;
}) {
  return <>{children}</>;
}
