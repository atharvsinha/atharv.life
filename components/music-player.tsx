"use client";

import { useState, type ComponentType } from "react";
import { Music, ExternalLink } from "lucide-react";
import { SpotifyIcon, AppleMusicIcon, YoutubeIcon } from "./icons";

type AudioTrack = {
  id: string;
  title: string;
  platform: "spotify" | "youtube" | "apple";
  embedUrl: string;
  height: number;
  icon: ComponentType<any>;
  accentClass: string;
  themeColor: string;
  tagline: string;
};

const tracks: AudioTrack[] = [
  {
    id: "spotify",
    title: "Slow September Breeze (Spotify)",
    platform: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/7mltFXfytq3DLrOVo4FgUY?utm_source=generator&theme=0",
    height: 352,
    icon: SpotifyIcon,
    accentClass: "text-emerald-500 hover:text-emerald-600 border-emerald-500/20 bg-emerald-500/5",
    themeColor: "#1db954",
    tagline: "Stream my original indie-folk ambient music on Spotify",
  },
  {
    id: "youtube",
    title: "Indie Session & Visuals (YouTube)",
    platform: "youtube",
    embedUrl: "https://www.youtube.com/embed/xwflFXBKjSw?modestbranding=1&rel=0",
    height: 352,
    icon: YoutubeIcon,
    accentClass: "text-red-500 hover:text-red-600 border-red-500/20 bg-red-500/5",
    themeColor: "#ff0000",
    tagline: "Watch live streams & recordings on YouTube",
  },
  {
    id: "apple",
    title: "Slow September Breeze (Apple Music)",
    platform: "apple",
    embedUrl: "https://embed.music.apple.com/in/album/slow-september-breeze-single/1842677108",
    height: 352,
    icon: AppleMusicIcon,
    accentClass: "text-rose-500 hover:text-rose-600 border-rose-500/20 bg-rose-500/5",
    themeColor: "#fc3c44",
    tagline: "Listen on Apple Music — available on all Apple devices",
  },
];

export default function MusicPlayer() {
  const [activeTrack, setActiveTrack] = useState<AudioTrack>(tracks[0]);

  const directLinks = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/track/7mltFXfytq3DLrOVo4FgUY?si=ad43f92a039c4aee",
      icon: SpotifyIcon,
      color: "hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 border-emerald-500/10",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/in/album/slow-september-breeze-single/1842677108",
      icon: AppleMusicIcon,
      color: "hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400 border-rose-500/10",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=xwflFXBKjSw",
      icon: YoutubeIcon,
      color: "hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 border-red-500/10",
    },
  ];

  return (
    <section id="music" className="py-24 px-6 relative">
      {/* Ambient colorful background auras */}
      <div className="absolute top-1/3 left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/12 dark:bg-emerald-500/8 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-[10%] w-[450px] h-[450px] rounded-full bg-pink-500/10 dark:bg-pink-500/6 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Indie Music
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Music
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I like to write music about things I see, thoughts I have, stories I've lived on my travels, and emotions I'm trying to suppress or express. Explore my debut single, <strong>"Slow September Breeze"</strong>, across major streaming platforms.
            </p>
          </div>

          <div className="inline-flex rounded-xl bg-zinc-100 dark:bg-zinc-900 p-1 border border-zinc-200/50 dark:border-zinc-800/80">
            {tracks.map((track) => {
              const TrackIcon = track.icon;
              const isActive = activeTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => {
                    setActiveTrack(track);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-tight transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs border border-zinc-200/20"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                    }`}
                >
                  <TrackIcon className="h-3.5 w-3.5" />
                  {track.platform.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Player Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Active Player Embed (md:col-span-7) */}
          <div className="md:col-span-7 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-[#0f0f11]/40 backdrop-blur-xs flex flex-col justify-between min-h-[380px] transition-colors duration-600">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Player Output Channel
              </span>
              <span className="text-[10px] font-mono font-semibold text-emerald-500 dark:text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                Active Stream
              </span>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-black/40 border border-zinc-200/20 flex-1 flex items-center justify-center min-h-[280px]">
              <iframe
                src={activeTrack.embedUrl}
                width="100%"
                height={activeTrack.height}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; gyroscope"
                className="rounded-2xl block transition-all"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Platform Links & Artist Details (md:col-span-5) */}
          <div className="md:col-span-5 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-[#0f0f11]/40 backdrop-blur-xs flex flex-col justify-between transition-colors duration-600 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 text-zinc-400">
                <Music className="h-4 w-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Artist Profile
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-3">
                Published Indie Releases
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Writing heartfelt indie-ambient tracks and releasing original singles across major global networks. Listen directly on your preferred streaming service.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                Direct Platform Streaming
              </span>

              <div className="flex flex-col gap-2.5">
                {directLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-mono font-semibold transition-all group cursor-pointer ${link.color}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkIcon className="h-4 w-4" />
                        <span>Listen on {link.name}</span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
