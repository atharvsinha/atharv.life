"use client";

import { useState, type SVGProps } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Music,
  Compass,
  Globe,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Inline brand SVGs matching Lucide feather style
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

import { SpotifyIcon, AppleMusicIcon, YoutubeIcon } from "./icons";

type Persona = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  title: string;
  tagline: string;
  accentClass: string;
  glowColor: string;
  stats: { label: string; value: string }[];
};

const personas: Persona[] = [
  {
    id: "developer",
    name: "AI Engineer",
    icon: Terminal,
    title: "Product Engineer (Fullstack, AI & Everything Else)",
    tagline:
      "Specializing in shipping robust products from 0 to 1. Combining SOTA agentic AI & automation systems with high-performance fullstack frameworks—spanning live video platforms, scalable calculation engines, and global B2B integrations.",
    accentClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/60",
    glowColor: "rgba(99, 102, 241, 0.25)",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "UX Optimisation (Ernest)", value: "75%" },
      { label: "B2B SaaS Integrations", value: "10+" },
    ],
  },
  {
    id: "musician",
    name: "Indie Musician",
    icon: Music,
    title: "Indie Musician",
    tagline:
      "I like to write music about things I see, thoughts I have, stories I've lived on my travels, and emotions I'm trying to suppress or express.",
    accentClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/60",
    glowColor: "rgba(16, 185, 129, 0.25)",
    stats: [
      { label: "Independent Single", value: "1" },
      { label: "Streaming Platforms", value: "All Major" },
      { label: "Musical Instruments", value: "Guitar & Vocals" },
    ],
  },
  {
    id: "diver",
    name: "Scuba Diver",
    icon: Compass,
    title: "PADI Advanced Open Water Diver",
    tagline:
      "There's a distinct kind of stillness you find at 30 meters down. Navigating deep currents requires this absolute, quiet focus where everything slows down, but you still feel that sharp, internal rush. It's a completely different world under the surface—one governed by pure presence and peace.",
    accentClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-900/60",
    glowColor: "rgba(6, 182, 212, 0.25)",
    stats: [
      { label: "PADI Certification", value: "Advanced" },
      { label: "Logged Ocean Dives", value: "20+" },
      { label: "Max Logged Depth", value: "30 Meters" },
    ],
  },
  {
    id: "traveler",
    name: "Traveller",
    icon: Globe,
    title: "Traveller",
    tagline:
      "I’m just happiest when I’m moving. Whether it's a road trip across India, backpacking somewhere new, or heading out for a dive, I tend to gravitate toward anything that gets my adrenaline going—skydiving, hiking, surfing, or exploring deep currents. Always looking for the next trip or the next challenge.",
    accentClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/60",
    glowColor: "rgba(245, 158, 11, 0.25)",
    stats: [
      { label: "Extreme Sports", value: "7" },
      { label: "Ocean Depth", value: "30m" },
      { label: "Adventure Terrains", value: "Global" },
    ],
  },
];

export default function Hero({ onContactClick }: { onContactClick: () => void }) {
  const [activePersona, setActivePersona] = useState<Persona>(personas[0]);

  const getPersonaColor = () => {
    switch (activePersona.id) {
      case "developer": return "#6366f1";
      case "musician": return "#10b981";
      case "diver": return "#06b6d4";
      case "traveler": return "#f59e0b";
      default: return "#6366f1";
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-6">
      {/* Background Dots Grid — fades to transparent at the bottom so no hard section boundary */}
      <div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", opacity: 1 }}
      />

      {/* Dynamic Glowing Aura behind the card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[550px] md:h-[750px] rounded-full aura-glow"
        style={{
          background: `radial-gradient(circle, ${activePersona.glowColor} 0%, transparent 70%)`,
        }}
      ></div>

      {/* Main Container wrapping the Left-Aligned Split Dashboard inside a Card */}
      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* The Outer Hero Card System with Vibrant Ambient Accents */}
        <div
          className="w-full glass-panel p-6 sm:p-8 lg:p-12 rounded-[2.5rem] bg-white/60 dark:bg-[#0c0c0e]/40 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden lg:h-[680px]"
          style={{
            boxShadow: `0 30px 70px -20px rgba(0, 0, 0, 0.12), 0 0 100px -10px ${getPersonaColor()}1a`,
            borderColor: `${getPersonaColor()}26`
          }}
        >
          {/* Internal card dynamic glow */}
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-45 dark:opacity-30 transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${activePersona.glowColor} 0%, transparent 70%)`
            }}
          ></div>

          {/* Left Column: Left-Aligned Portfolio Content (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10 w-full order-2 lg:order-1">

            {/* Status / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-6 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" style={{ color: getPersonaColor() }} />
              <span className="font-semibold">{`ai · tech · music · travel · diving`}</span>
            </div>

            {/* Persona Switcher Menu */}
            <div className="flex flex-wrap gap-2 mb-8 w-full">
              {personas.map((persona) => {
                const Icon = persona.icon;
                const isActive = activePersona.id === persona.id;
                return (
                  <button
                    key={persona.id}
                    onClick={() => setActivePersona(persona)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-300 cursor-pointer ${isActive
                      ? `${persona.accentClass} shadow-xs scale-105 border-current font-bold`
                      : "bg-white/30 dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-50"
                      }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {persona.name}
                  </button>
                );
              })}
            </div>

            {/* Main Headline Block */}
            <div className="min-h-[200px] sm:min-h-[180px] lg:h-[220px] flex items-start justify-start w-full mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-start w-full text-left"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
                    Atharv Sinha
                  </h1>
                  <h2
                    className="text-lg sm:text-xl font-mono font-bold mt-2.5 transition-colors duration-500"
                    style={{ color: getPersonaColor() }}
                  >
                    {activePersona.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-normal max-w-xl">
                    {activePersona.tagline}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Metrics Statistics Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full mb-8 border-t border-b border-zinc-200/50 dark:border-zinc-800/30 py-5 mt-2 min-h-[80px] lg:h-[90px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    },
                    exit: { opacity: 0 }
                  }}
                  className="col-span-3 grid grid-cols-3 w-full"
                >
                  {activePersona.stats.map((stat, idx) => (
                    <motion.div
                      key={`${activePersona.id}-${idx}`}
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                        exit: { opacity: 0, y: -5, transition: { duration: 0.2 } }
                      }}
                      className="flex flex-col items-start px-1"
                    >
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-mono font-black tracking-tight leading-none transition-colors duration-500"
                        style={{ color: getPersonaColor() }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-1.5 leading-snug">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs Action Buttons */}
            <div className="w-full mb-8">
              {activePersona.id === "musician" ? (
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-start">
                  <a
                    href="https://open.spotify.com/track/7mltFXfytq3DLrOVo4FgUY?si=ad43f92a039c4aee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <SpotifyIcon className="h-4 w-4" />
                    Listen on Spotify
                  </a>
                  <a
                    href="https://music.apple.com/in/album/slow-september-breeze-single/1842677108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-rose-500/25 bg-rose-500/5 hover:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <AppleMusicIcon className="h-4 w-4" />
                    Listen on Apple Music
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=xwflFXBKjSw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-red-500/25 bg-red-500/5 hover:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                    Watch on YouTube
                  </a>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-start">
                  <button
                    onClick={onContactClick}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black hover:scale-102 hover:shadow-md text-xs font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Start Collaboration
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1dH5pcsXNbY1mQND9UoFsKxVq1cU__AHv/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    Download Resume
                  </a>
                </div>
              )}
            </div>

            {/* Social / Developer Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/atharvsinha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105 shadow-xs cursor-pointer"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/atharvsinha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105 shadow-xs cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="mailto:atharv.sinha27@gmail.com"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105 shadow-xs cursor-pointer"
                aria-label="Email Me"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Stock Portrait Placeholder (5/12 width) */}
          <div className="w-full lg:col-span-5 aspect-[4/5] max-w-[320px] md:max-w-[380px] lg:max-w-none relative group z-10 lg:mt-0 justify-self-center order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Glow backing matching active persona */}
            <div
              className="absolute inset-0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-[1200ms] pointer-events-none"
              style={{
                background: `linear-gradient(to bottom right, ${getPersonaColor()}, #06b6d4)`
              }}
            ></div>

            {/* Styled Picture Border */}
            <div
              className="w-full h-full rounded-[2rem] overflow-hidden border bg-zinc-100 dark:bg-zinc-900 shadow-2xl relative transition-all duration-700"
              style={{
                borderColor: `${getPersonaColor()}33`
              }}
            >
              <Image
                src="/images/hero-portrait.jpg"
                alt="Atharv Sinha - Creator Portrait"
                fill
                className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-104"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 33vw"
                priority
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glass Tag Label */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/60 dark:bg-black/40 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] leading-tight flex items-center justify-between shadow-lg">
                <div className="flex flex-col">
                  <span className="font-bold text-xs">Atharv Sinha</span>
                  <span className="text-[9px] text-zinc-300 uppercase tracking-widest mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Remote Nomad</span>
                </div>
                <span
                  className="h-2 w-2 rounded-full pulse-indicator"
                  style={{ backgroundColor: getPersonaColor() }}
                ></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
