export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Brightwell Dlamini. Built with Next.js & Tailwind.
        </p>
        <p className="text-xs text-slate-600">
          Portfolio prepared for Wiggle Digital Eswatini · Applications close 7 Aug 2026
        </p>
      </div>
    </footer>
  );
}
