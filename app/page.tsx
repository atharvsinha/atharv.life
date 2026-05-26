"use client";

import { useState, type SVGProps } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TechStack from "../components/tech-stack";
import Resume from "../components/resume";
import HumanSide from "../components/human-side";
import MusicPlayer from "../components/music-player";
import ContactModal from "../components/contact-modal";
import { Terminal, Heart, Compass, Globe, Mail } from "lucide-react";

// Inline brand SVGs matching Lucide feather style as in hero section
const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-transparent transition-colors duration-300">
      {/* Navigation Layer */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1 w-full relative">
        {/* Section 0: Hero Entry */}
        <Hero onContactClick={() => setIsContactOpen(true)} />

        {/* Section 1: Core Tech Stack & Expertise Matrix */}
        <TechStack />

        {/* Section 2: Interactive Resume & Timeline */}
        <Resume />

        {/* Section 3: The Human Side (Cinematic Gallery) */}
        <HumanSide />

        {/* Section 4: Indie Music Hub */}
        <MusicPlayer />
      </main>

      {/* Footer System */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-900/60 bg-zinc-50/50 dark:bg-zinc-950/20 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Top Row: Call-to-Action and Social Badges */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-zinc-200/50 dark:border-zinc-900/50">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Let's build something epic
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm leading-relaxed">
                Drop a line, inspect the source, or trace the nomadic adventures.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Instagram */}
              <a 
                href="https://instagram.com/where.is.atharv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-rose-500 hover:border-rose-500/40 dark:hover:text-rose-400 transition-all duration-300 shadow-xs"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>@where.is.atharv</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/atharvsinha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-950/40 dark:hover:border-white/40 transition-all duration-300 shadow-xs"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/atharvsinha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-blue-500 hover:border-blue-500/40 dark:hover:text-blue-450 transition-all duration-300 shadow-xs"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:atharv.sinha27@gmail.com" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 hover:border-emerald-600/40 dark:hover:text-emerald-450 transition-all duration-300 shadow-xs"
              >
                <Mail className="h-4 w-4" />
                <span>atharv.sinha27@gmail.com</span>
              </a>

              {/* Contact Trigger Button */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black text-xs font-mono font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Initialize Handshake</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Logo, Persona & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Trademark */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-zinc-950 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-black font-mono font-bold text-sm">
                  AS
                </div>
                <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  atharv.life
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 font-normal max-w-xs leading-relaxed animate-fade-in">
                Powered by Next.js, Framer Motion, and Tailwind CSS.
              </p>
            </div>

            {/* Quick Persona Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 dark:text-zinc-600">
              <span className="flex items-center gap-1.5 text-xs font-mono">
                <Terminal className="h-3.5 w-3.5" /> Dev
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-800"></span>
              <span className="flex items-center gap-1.5 text-xs font-mono">
                <Heart className="h-3.5 w-3.5" /> Music
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-800"></span>
              <span className="flex items-center gap-1.5 text-xs font-mono">
                <Compass className="h-3.5 w-3.5" /> Scuba
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-800"></span>
              <span className="flex items-center gap-1.5 text-xs font-mono">
                <Globe className="h-3.5 w-3.5" /> Adventure
              </span>
            </div>

            {/* Copyrights */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span>© {new Date().getFullYear()} Atharv Sinha.</span>
              <span className="mt-1">All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating / Interactive Contact Dialog */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
