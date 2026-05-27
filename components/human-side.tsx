"use client";

import { useState, type ComponentType } from "react";
import Image from "next/image";
import { Compass, Music, Map, Wind, Eye, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type BentoItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  quote: string;
  imageUrl: string;
  gridClass: string;
  icon: ComponentType<any>;
};

const skydivingItem = {
  id: "skydiving-square",
  title: "14,000 Feet Freefall",
  category: "Extreme Sports",
  location: "Chiang Mai",
  description: "Stepping out of aircraft doors at altitude. Seeking the ultimate adrenaline rush and the incredible silence of high-altitude freefall.",
  quote: "At 14,000 feet, the world gets quiet, and everything else falls away.",
  imageUrl: "/images/skydiving-square.jpg",
  gridClass: "w-full min-h-[450px] md:min-h-[720px]",
  icon: Wind,
};

const items: BentoItem[] = [
  {
    id: "scuba-portrait",
    title: "Deep Sea Buoyancy",
    category: "Scuba Diving",
    location: "Koh Lanta",
    description: "PADI Certified Advanced Open Water Diver exploring coral reefs and underwater life at 30 meters depth. Finding absolute quietude and peace in weightless current flows.",
    quote: "Beneath the surface, breathing is the only thing that matters.",
    imageUrl: "/images/scuba-portrait.jpg",
    gridClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[480px]",
    icon: Compass,
  },
  {
    id: "scuba-landscape",
    title: "Drift Diving & Current Exploration",
    category: "Ocean Exploration",
    location: "Koh Lanta",
    description: "Navigating deep ocean trenches, drift diving along dynamic ocean currents, and observing diverse marine ecosystems in their natural habitat.",
    quote: "Going where the current takes you is the best way to explore.",
    imageUrl: "/images/scuba-landscape.jpg",
    gridClass: "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[480px]",
    icon: Compass,
  },
  {
    id: "rainbow-waterfall",
    title: "The Mountain Mist",
    category: "Wilderness Trails",
    location: "North Sikkim",
    description: "Hiking through highland mist and tropical waterfall vapor, discovering hidden trails and taking in the raw beauty of high-altitude landscapes.",
    quote: "The hardest climbs always lead to the most breathtaking views.",
    imageUrl: "/images/rainbow-waterfall.jpg",
    gridClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[480px]",
    icon: Wind,
  },
  {
    id: "music-performance",
    title: "Live Ambient Indie Rock",
    category: "Guitar Session",
    location: "Bangalore",
    description: "Composing clean electric melodies, ambient soundscapes, and performing guitar/vocal live sets, sharing stories and connecting with the energy of a live audience.",
    quote: "There is an incredible magic in sharing a live song with a room full of strangers.",
    imageUrl: "/images/music-performance.jpg",
    gridClass: "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[480px]",
    icon: Music,
  },
  {
    id: "cubbon-library",
    title: "Cubbon Park Library",
    category: "Heritage & Quietude",
    location: "Bangalore",
    description: "Reading under red-brick arches and high ceilings in the heart of Bangalore's green lungs, surrounded by history and the rustle of old pages.",
    quote: "In the quiet corners of an old library, time seems to stand completely still.",
    imageUrl: "/images/cubbon-library.jpg",
    gridClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[480px]",
    icon: BookOpen,
  },
  {
    id: "travel",
    title: "Wandering the World",
    category: "Global Wandering",
    location: "Phi Phi",
    description: "Exploring unfamiliar cities, walking scenic coastlines, and hiking mountain trails to experience different cultures and perspectives.",
    quote: "Travel is not about the destination, but the new eyes it gives you.",
    imageUrl: "/images/travel-nomadism.jpg",
    gridClass: "md:col-span-3 md:row-span-1 min-h-[220px] md:min-h-[280px]",
    icon: Map,
  },
];

export default function HumanSide() {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

  return (
    <section id="travels" className="py-24 px-6 bg-zinc-50/30 dark:bg-zinc-950/10 relative transition-colors duration-600">
      {/* Ambient colorful background auras */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/12 dark:bg-cyan-500/8 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 left-[10%] w-[450px] h-[450px] rounded-full bg-amber-500/10 dark:bg-amber-500/6 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Unified Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Travels Text Block (col-span-1) */}
          <div className="flex flex-col pr-0 md:pr-4 py-6 justify-start self-start h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Beyond the Terminal
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Travels
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
              When I close the editor, I look for adventure in the outdoors. Whether diving in the deep ocean, writing acoustic music, or hiking remote trails, I find my balance in exploring the world around me.
            </p>
          </div>

          {/* Skydiving Image Card (col-span-2, row-span-3) */}
          <div className="md:col-span-2 md:row-span-3 h-full">
            <div
              onClick={() => setSelectedItem(skydivingItem)}
              className={`relative group rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-700 flex flex-col justify-end cursor-pointer hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-xl ${skydivingItem.gridClass}`}
            >
              {/* Background Stock Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={skydivingItem.imageUrl}
                  alt={skydivingItem.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108 group-hover:rotate-1"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 66vw, 66vw"
                  priority
                />
                {/* Glassmorphic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-zinc-950/15 dark:from-black/95 dark:via-black/75 dark:to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-between pointer-events-none">
                {/* Top: Icon and Category badge */}
                <div className="flex items-center justify-between w-full self-start">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {skydivingItem.category} • {skydivingItem.location}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Wind className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom: Text Content */}
                <div className="mt-auto transform transition-all duration-500 group-hover:translate-y-0">
                  <span className="text-[10px] font-mono font-semibold text-cyan-400 dark:text-cyan-300 uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {skydivingItem.quote}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                    {skydivingItem.title}
                  </h3>
                </div>
              </div>

              {/* Mobile visual cue indicator for expand */}
              <div className="absolute bottom-4 right-4 z-20 text-white/50 group-hover:text-white transition-colors duration-300 pointer-events-none md:hidden">
                <Eye className="h-4 w-4" />
              </div>
            </div>
          </div>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative group rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-700 flex flex-col justify-end cursor-pointer hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-xl ${item.gridClass}`}
              >
                {/* Background Stock Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108 group-hover:rotate-1"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    priority={item.id === "travel"}
                  />
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-zinc-950/15 dark:from-black/95 dark:via-black/75 dark:to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-between pointer-events-none">
                  {/* Top: Icon and Category badge */}
                  <div className="flex items-center justify-between w-full self-start">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.category} • {item.location}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="mt-auto transform transition-all duration-500 group-hover:translate-y-0">
                    <span className="text-[10px] font-mono font-semibold text-cyan-400 dark:text-cyan-300 uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.quote}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Mobile visual cue indicator for expand */}
                <div className="absolute bottom-4 right-4 z-20 text-white/50 group-hover:text-white transition-colors duration-300 pointer-events-none md:hidden">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
        {/* Dynamic Image Modal System */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md cursor-zoom-out"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 shadow-2xl z-10 flex flex-col md:flex-row min-h-[400px] max-h-[90vh]"
              >
                {/* Left: Interactive Image */}
                <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-full">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10 dark:md:to-zinc-950/20" />
                </div>

                {/* Right: Detailed Content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-zinc-950">
                  <div className="flex flex-col">
                    {/* Category and Close */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/5 px-2.5 py-1 rounded-md border border-cyan-500/20">
                        {selectedItem.category} • {selectedItem.location}
                      </span>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-200 cursor-pointer"
                      >
                        <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>

                    {/* Title & Quote */}
                    <span className="text-xs font-mono font-semibold text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-2">
                      {selectedItem.quote}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-4">
                      {selectedItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
