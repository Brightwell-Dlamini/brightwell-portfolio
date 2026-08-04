import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brightwell Dlamini | Full-Stack Developer · UX/UI Designer · CMS Specialist",
  description:
    "Professional portfolio of Brightwell Dlamini — Full-Stack Developer, UX/UI Designer and CMS Specialist based in Eswatini. Building modern digital products with Next.js, TypeScript and thoughtful design.",
  keywords: [
    "Full-Stack Developer",
    "UX/UI Designer",
    "CMS Specialist",
    "Eswatini",
    "Next.js",
    "TypeScript",
    
  ],
  authors: [{ name: "Brightwell Dlamini" }],
  openGraph: {
    title: "Brightwell Dlamini | Full-Stack · UX/UI · CMS",
    description:
      "Portfolio showcasing production-ready full-stack applications, thoughtful UX and CMS expertise.",
    type: "website",
    locale: "en_SZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
