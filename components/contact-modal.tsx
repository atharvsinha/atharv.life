"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

type SubjectPreset = {
  id: string;
  label: string;
  emoji: string;
};

const presets: SubjectPreset[] = [
  { id: "ai", label: "Product & Agentic AI Projects", emoji: "🧠" },
  { id: "music", label: "Indie Music Licensing / Jamming", emoji: "🎸" },
  { id: "scuba", label: "Scuba Diving & Adventure Chat", emoji: "🤿" },
  { id: "hello", label: "Just Saying Hello!", emoji: "⚡" },
];

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activePreset, setActivePreset] = useState<SubjectPreset>(presets[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`[atharv.life] ${activePreset.emoji} ${activePreset.label} - ${name}`);
    const body = encodeURIComponent(`Hello Atharv,\n\n${message}\n\nBest regards,\n${name}\n(${email})`);
    const mailtoLink = `mailto:atharv.sinha27@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white dark:bg-[#0a0a0c] border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Form Column */}
            <div className="p-6 md:p-8 flex flex-col w-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-550">
                    Contact Atharv
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Send a packet directly to my email endpoint.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg border border-zinc-100 dark:border-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-250 cursor-pointer"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Adventurer"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 text-sm focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550 block mb-1">
                      Email Endpoint
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 text-sm focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700"
                    />
                  </div>
                </div>

                {/* Presets */}
                <div>
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550 block mb-1.5">
                    Select Subject Node
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {presets.map((preset) => {
                      const isActive = activePreset.id === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setActivePreset(preset)}
                          className={`flex items-center gap-1.5 p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                            isActive
                              ? "bg-zinc-950 border-zinc-950 text-white dark:bg-zinc-50 dark:border-zinc-50 dark:text-black font-semibold"
                              : "bg-white/40 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          <span>{preset.emoji}</span>
                          <span className="truncate">{preset.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550 block mb-1">
                    Message Payload
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline collaboration specs..."
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 text-sm focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black font-semibold hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Transmit Packet
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
