"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Download, Sun, Moon, Loader2, FileText } from "lucide-react";

export default function ResumePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sync React theme state with DOM class parsed by head script
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    // Fallback: automatically dismiss loading spinner after 800ms 
    // in case the browser's native PDF plugin swallows standard iframe onLoad events.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  const pdfUrl = encodeURI("/Atharv Sinha — Resume 2026.pdf");

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#030306] transition-colors duration-500 relative">
      {/* Background Decorative Grids and glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0"></div>
      
      {/* Premium Glassmorphic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md py-3 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-all cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            Portfolio
          </Link>

          {/* Document Title / Status Badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-semibold bg-zinc-100 dark:bg-zinc-900/60 px-3 py-1.5 rounded-full border border-zinc-200/40 dark:border-zinc-800/40">
            <FileText className="h-3.5 w-3.5 text-brand-text dark:text-brand-text" />
            <span>Atharv_Sinha_Resume.pdf</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Download Button */}
            <a
              href={pdfUrl}
              download="Atharv Sinha — Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Download PDF"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Download</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area: PDF Viewer Container */}
      <main className="h-[calc(100vh-61px)] mt-[61px] flex flex-col relative z-10 w-full overflow-hidden">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-[#030306] z-20 transition-opacity duration-300">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-text dark:text-brand-text" />
              <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 animate-pulse">
                Initializing Document Viewer...
              </span>
            </div>
          </div>
        )}

        {/* PDF Iframe Wrapper */}
        <div className="w-full h-full max-w-6xl mx-auto p-0 md:p-4 flex flex-col">
          <div className="w-full flex-1 bg-white dark:bg-zinc-900 md:rounded-2xl md:border md:border-zinc-200/50 md:dark:border-zinc-800/80 md:shadow-xl overflow-hidden relative">
            <iframe
              src={`${pdfUrl}#toolbar=1`}
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              title="Atharv Sinha Resume"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
