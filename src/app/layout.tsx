import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brightwell Dlamini | Full-Stack Developer · UX/UI · CMS",
  description:
    "Brightwell Dlamini — full-stack developer, UX/UI designer and CMS specialist from Mankayane, Eswatini. 5+ years building production web apps with Next.js, TypeScript and thoughtful design.",
  keywords: [
    "Full-Stack Developer",
    "UX/UI Designer",
    "CMS Specialist",
    "Eswatini",
    "Next.js",
    "TypeScript",
    "Brightwell Dlamini",
  ],
  authors: [{ name: "Brightwell Dlamini" }],
  openGraph: {
    title: "Brightwell Dlamini | Full-Stack · UX/UI · CMS",
    description:
      "Portfolio of a full-stack developer from Eswatini — production apps, CMS systems and clean UX.",
    type: "website",
    locale: "en_SZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
