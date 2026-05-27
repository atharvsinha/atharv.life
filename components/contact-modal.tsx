"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Calendar, Mail, ChevronLeft, ArrowRight } from "lucide-react";

type SubjectPreset = {
  id: string;
  label: string;
  emoji: string;
};

const presets: SubjectPreset[] = [
  { id: "employment", label: "Employment Opportunities", emoji: "💼" },
  { id: "contract", label: "Contract & Freelance Projects", emoji: "🛠️" },
  { id: "get-to-know", label: "Get to Know & Networking", emoji: "🤝" },
  { id: "hello", label: "Just Saying Hello!", emoji: "⚡" },
];

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<"select" | "email" | "cal15" | "cal30">("select");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activePreset, setActivePreset] = useState<SubjectPreset>(presets[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep("select");
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
            className={`relative w-full bg-white dark:bg-[#0a0a0c] border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 transition-all duration-300 ${
              step === "cal15" || step === "cal30" ? "max-w-2xl" : "max-w-lg"
            }`}
          >
            {step === "select" && (
              <div className="p-6 md:p-8 flex flex-col w-full">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
                      Connect with Atharv
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Select how you would like to reach out.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg border border-zinc-100 dark:border-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-250 cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Cal.com Option Card */}
                  <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          Book a Video Call
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                          Schedule a quick video call directly on my calendar. Instant confirmation via Cal.com.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <button
                            onClick={() => setStep("cal15")}
                            className="py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                          >
                            <span>15 Min Call</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => setStep("cal30")}
                            className="py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                          >
                            <span>30 Min Call</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Option Card */}
                  <div 
                    onClick={() => setStep("email")}
                    className="group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 hover:border-zinc-400 dark:hover:border-zinc-650 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                            Send a Direct Email
                          </h4>
                          <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                          Drop a direct message for job opportunities, contracts, networking, or say hello.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(step === "cal15" || step === "cal30") && (
              <div className="p-6 md:p-8 flex flex-col w-full animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setStep("select")}
                    className="flex items-center gap-1 text-xs font-mono font-bold text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 border border-zinc-100 dark:border-zinc-900 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg border border-zinc-100 dark:border-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-250 cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 min-h-[480px]">
                  <iframe
                    src={`https://cal.com/atharv-sinha-0vlga7/${step === "cal15" ? "15min" : "30min"}?embed=true`}
                    width="100%"
                    height="480"
                    className="rounded-2xl block"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}

            {step === "email" && (
              <div className="p-6 md:p-8 flex flex-col w-full animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setStep("select")}
                    className="flex items-center gap-1 text-xs font-mono font-bold text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 border border-zinc-100 dark:border-zinc-900 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </button>
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
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1">
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
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1">
                        Your Email
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
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1.5">
                      Select Subject
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
                                : "bg-white/40 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
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
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline collaboration details..."
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 text-sm focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black font-semibold hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Start Collaboration
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
