"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  Award,
  Zap,
  TrendingUp,
  Clock,
  Layers,
} from "lucide-react";

type Highlight = {
  icon: ComponentType<any>;
  text: string;
  badge?: string;
};

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  asyncFriendly: boolean;
  achievements: string[];
  skills: string[];
  impactBadges: string[];
  highlights?: Highlight[];
};

const experiences: Experience[] = [
  {
    id: "turing",
    company: "ServiceNow (via Turing)",
    role: "Senior Software Engineer – AI Tools & Automation",
    period: "Oct 2024 – Jan 2026",
    location: "Goa, India (Remote)",
    asyncFriendly: true,
    impactBadges: ["Automated Code Audits", "LLM Evaluation Agents", "Hybrid RL Gyms"],
    achievements: [
      "Managed remote async engineering collaborations across <strong>4 time zones</strong> including the US, UK, India, and APAC.",
      "Engineered automated <strong>LLM-powered evaluation pipelines and agentic audit schemas</strong> using frontier models to programmatically lint, validate, and grade Jupyter notebook code execution, accelerating task auditing by 10x.",
      "Promoted to Pod Lead within weeks; established rigorous validation checks and automated review protocols to steer the engineering team to a project-high <strong>99% client-rated accuracy</strong>.",
      "Architected and deployed <strong>hybrid RL Gym structures</strong> for agentic AI, building mock enterprise sandboxes (generic CSM, ITSM, HRMS) and writing API integration harnesses for Google Calendar, PayPal, and Microsoft Teams.",
      "Constructed complex evaluation suites to test and benchmark cognitive model reasoning (CoT, ReAct), identifying critical edge-cases that ultimately trained models to outperform Gemini 2.5 Flash on key benchmarks.",
      "Designed automated data pipelines using Python, Pandas, and Vercel AI SDK to compile and synthesize 3-5 turn structured datasets cleanly from raw agent logs."
    ],
    skills: ["Agentic AI", "RLHF", "SFT", "CoT / ReAct", "LangGraph", "RL Gyms", "Python", "Vercel AI SDK"],
    highlights: [
      { icon: Users, text: "Managed 3-6 engineers across 4 timezones asynchronously" },
      { icon: Award, text: "Trained ServiceNow LLM to beat Gemini 2.5 Flash on CR benchmark", badge: "CR & CIF" },
    ]
  },
  {
    id: "ernest",
    company: "Ernest (joinernest.com)",
    role: "Software Engineer (Contract)",
    period: "Jun 2024 – Aug 2024",
    location: "Remote (Global Team)",
    asyncFriendly: true,
    impactBadges: ["75% Steps Saved", "50% Clicks Removed", "Graph Visualization"],
    achievements: [
      "Facilitated remote async collaboration across multiple global time zones.",
      "Revamped the core objectives portal using React, React Query, and Go, reducing the steps required to access objectives by <strong>75%</strong> and driving meaningful improvements in daily active workflows.",
      "Re-engineered a legacy project timeline tool into a fully interactive, highly performant graph-based visualization layout via custom React rendering algorithms, eliminating redundant UI paths and cutting access steps by <strong>50%</strong>.",
      "Integrated the redesigned objectives portal cleanly into Ernest's <strong>Progressive Web App (PWA)</strong> infrastructure.",
      "Optimized Go API endpoints powering the objectives portal to <strong>reduce latency</strong> and improve platform reliability.",
      "Implemented components within Ernest's <strong>Storybook-driven internal design system</strong>, collaborating asynchronously with engineering, design and QA teams across US, LATAM, Europe, Africa, and APAC zones."
    ],
    skills: ["TypeScript", "React", "React Query", "Golang", "PWA", "Storybook"],
    highlights: [
      { icon: Zap, text: "Optimized Go API endpoints and reduced database query loads" },
      { icon: TrendingUp, text: "75% steps saved for end users accessing objectives" }
    ]
  },
  {
    id: "insurecomp",
    company: "InsureComp",
    role: "Senior Software Engineer",
    period: "Aug 2023 – Jun 2024",
    location: "Bengaluru (Full Time)",
    asyncFriendly: false,
    impactBadges: ["$5,000 Saved", "50-State Calculation Engine", "Context API Migration"],
    achievements: [
      "Managed collaboration with US-based clients and cross-functional teams.",
      "Architected modern client-side application state using Functional React and Context API, decoupling layout structures from underlying business logic to completely <strong>eliminate deep prop-drilling patterns</strong> across a highly dynamic backend with complex calculations across 50 US states.",
      "Engineered a decoupled, multi-tenant background calculation engine in Node.js to compute <strong>50+ complex insurance formulas dynamically</strong>, ensuring strict state-by-spec validation compliance before flattening data into <strong>editable PDFs<strong>.",
      "Migrated the entire engineering codebase from GitLab to GitHub, <strong>saving the company $5,000 USD annually</strong>.",
      "Mentored <strong>3–4 junior engineers</strong> on a complex insurance backend handling multi-state interest calculations.",
      "Served as the core technical liaison in client business calls to convert high-level demands into precise engineering specs and code, <strong> minimizing post-deployment revisions and aligning deliverables exactly with client expectations<strong>."
    ],
    skills: ["TypeScript", "React", "Node.js", "Context API", "AWS Lambda", "Serverless", "Docker"],
    highlights: [
      { icon: Zap, text: "Architected decoupled multi-tenant dynamic interest calculation engine" },
      { icon: Layers, text: "Migrated GitLab infra to GitHub, reducing cloud billing by $5,000/yr" }
    ]
  },
  {
    id: "yoti",
    company: "Yoti",
    role: "Fullstack Software Engineer - Integrations",
    period: "Oct 2022 – May 2023",
    location: "Remote (Global Team)",
    asyncFriendly: true,
    impactBadges: ["10+ Live iPaaS Workflows", "Stripe Checkout Integrated", "Biometric KYC Flows"],
    achievements: [
      "Operated within remote async cross-functional teams.",
      "Built a dedicated marketplace of complex B2B SaaS integrations, successfully publishing <strong>10+ production workflows</strong> combining eSignature and biometric identity verification checks.",
      "Designed an end-to-end automated employee onboarding workflow integrating Rippling, BambooHR, and Zoho that combined email automation, online KYC identification, and eSignatures into a <strong>unified B2B SaaS flow</strong>.",
      "Engineered Stripe-integrated billing workflows enabling users to complete signup, eSignature, identity verification, and billing activation in a <strong>single uninterrupted experience</strong>.",
      "Built reusable workflow templates across storage, email, SMS, and identity-triggered automation, successfully expanding Yoti's integration B2B partner ecosystem."
    ],
    skills: ["Prismatic iPaaS", "Biometric ID Check", "eSignatures", "Stripe", "Node.js", "HR Integration"],
    highlights: [
      { icon: Clock, text: "Delivered B2B integrations with zero synchronous overhead" },
      { icon: Layers, text: "Combined eSignature + biometric products with Rippling & Zoho" }
    ]
  },
  {
    id: "bettered",
    company: "Better Ed Co",
    role: "Fullstack Software Engineer",
    period: "Jan 2021 – Jun 2022",
    location: "Remote (First Hires)",
    asyncFriendly: false,
    impactBadges: ["Agora RTC Learning", "Interactive Tuners", "Student Video pipelines"],
    achievements: [
      "Joined as one of the first software engineers working closely with early-stage investors.",
      "Built Pixical.com, a live video classroom extracurricular learning platform utilizing <strong>Agora RTC with real-time interactive widgets</strong> (Guitar Tuner, Chord Charts) tailored for US-based students.",
      "Engineered automated, secure <strong>serverless video processing pipelines</strong> built for handling student recordings.",
      "Conducted granular product-market fit research in close collaboration with investors to inform platform direction and feature prioritization."
    ],
    skills: ["TypeScript", "React", "Agora RTC", "AWS S3", "Serverless Video Pipelines"],
    highlights: [
      { icon: Users, text: "Worked alongside investors validating product-market fits" },
      { icon: Zap, text: "Engineered serverless video processing pipelines for recordings" }
    ]
  },
  {
    id: "sterlite",
    company: "Sterlite Technologies",
    role: "Data Science Intern",
    period: "May 2019 – Jul 2019",
    location: "India (On-site)",
    asyncFriendly: false,
    impactBadges: ["Data Classification", "Predictive Analytics", "Seaborn Visuals"],
    achievements: [
      "Performed data classification, analysis, prediction, and <strong>predictive visualization workflows</strong> utilizing Pandas, Matplotlib, and Seaborn."
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Science"],
    highlights: [
      { icon: TrendingUp, text: "Visualized data pipelines and predictive classification loops" }
    ]
  }
];

export default function Resume() {
  const [expandedId, setExpandedId] = useState<string | null>("turing");

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Ambient colorful background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-500/10 dark:bg-rose-500/6 blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Professional Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Experience
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              5 years of building robust full-stack products, leading agentic AI systems, and deploying async-first structures.
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-8 ml-4 space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isFirst = idx === 0;
            const isLast = idx === experiences.length - 1;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Line Segment */}
                <div
                  className={`absolute -left-[24px] md:-left-[32px] w-px bg-zinc-200 dark:bg-zinc-800 ${isFirst ? "top-[30px] bottom-0" : isLast ? "top-0 h-[30px]" : "top-0 bottom-0"
                    }`}
                />

                {/* Timeline Node dot */}
                <div
                  className={`absolute -left-[32px] md:-left-[40px] top-[22px] h-4 w-4 rounded-full border-2 bg-white dark:bg-[#09090b] transition-all duration-300 ${isExpanded
                    ? "border-blue-500 dark:border-blue-400 scale-120 ring-4 ring-blue-500/10 dark:ring-blue-400/10"
                    : "border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-400 dark:group-hover:border-zinc-600"
                    }`}
                ></div>

                {/* Timeline Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 bg-white/40 dark:bg-[#0f0f11]/30 backdrop-blur-xs ${isExpanded
                    ? "border-zinc-300 dark:border-zinc-700 shadow-md"
                    : "border-zinc-200/60 dark:border-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-800"
                    }`}
                >
                  {/* Header */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="flex flex-col md:flex-row md:items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                          {exp.company}
                        </h3>
                        {exp.asyncFriendly && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                            Async-First
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end text-xs text-zinc-500 dark:text-zinc-400 font-mono gap-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Timeline Badges Row */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.impactBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-medium font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 mt-6 space-y-6">
                          {/* Experience Highlights widgets */}
                          {exp.highlights && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {exp.highlights.map((high, hIdx) => {
                                const HighIcon = high.icon;
                                return (
                                  <div
                                    key={hIdx}
                                    className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200/50 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-900/20"
                                  >
                                    <div className="h-7 w-7 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-700/80 text-blue-500 dark:text-blue-400">
                                      <HighIcon className="h-3.5 w-3.5" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                                        {high.text}
                                      </span>
                                      {high.badge && (
                                        <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wide mt-0.5">
                                          {high.badge}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Core achievements list (with HTML metrics bold markup) */}
                          <ul className="space-y-3.5">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
                                <span
                                  className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal"
                                  dangerouslySetInnerHTML={{ __html: ach }}
                                />
                              </li>
                            ))}
                          </ul>

                          {/* Skills utilized tag list */}
                          <div className="flex flex-wrap items-center gap-2 pt-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-650">
                              Stack:
                            </span>
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs text-zinc-700 dark:text-zinc-300 font-medium px-2 py-0.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-slate-700 dark:text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full flex items-center justify-center text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mt-4 pt-4 border-t border-zinc-100/50 dark:border-zinc-900/50 transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <span className="flex items-center gap-1">
                        Collapse Details
                        <ChevronUp className="h-3 w-3" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        Expand Achievements & Technologies
                        <ChevronDown className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Education Timeline Entry */}
          <div className="relative group pt-4">
            <div className="absolute -left-[31px] md:-left-[39px] top-5 h-4 w-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#09090b]"></div>
            <div className="p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-900/60 bg-white/40 dark:bg-[#0f0f11]/30 backdrop-blur-xs">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                    Manipal University Jaipur
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                      B.Tech
                    </span>
                  </h3>
                  <p className="text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300">
                    B.Tech in Information Technology
                  </p>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  2017 – 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
