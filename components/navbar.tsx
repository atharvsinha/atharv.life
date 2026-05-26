"use client";

import { useState, useEffect, Fragment } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";

export default function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Sync React theme state with DOM class parsed by head script
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { name: "skills", href: "#skills" },
    { name: "experience", href: "#experience" },
    { name: "travels", href: "#travels" },
    { name: "music", href: "#music" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo with Active Indicator */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-zinc-950 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-black font-mono font-bold text-base transition-transform group-hover:scale-105">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              atharv.life
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-indicator"></span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wider uppercase font-semibold">
                Seeking Product Engineer Roles
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3.5">
            {navLinks.map((link, idx) => (
              <Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-mono font-bold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 px-3 py-1.5 rounded-xl hover:bg-white/85 dark:hover:bg-zinc-900/60 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:border hover:border-zinc-200/50 dark:hover:border-zinc-800/50 transition-all duration-300 border border-transparent"
                >
                  {link.name}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="select-none text-zinc-300 dark:text-zinc-700 font-bold text-sm">·</span>
                )}
              </Fragment>
            ))}
          </div>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={onContactClick}
              className="px-4 py-1.5 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 text-sm font-medium transition-all shadow-sm flex items-center gap-1.5"
            >
              <Terminal className="h-3.5 w-3.5" />
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] px-6 py-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors py-2 border-b border-zinc-100 dark:border-zinc-900"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="w-full mt-2 py-2.5 rounded-lg bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-center shadow-sm flex items-center justify-center gap-2"
          >
            <Terminal className="h-4 w-4" />
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
