"use client";

import { useState, useEffect, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  X,
  BookOpen,
  Users,
  Award,
  Zap,
  TrendingUp,
  Clock,
  Layers,
  ArrowRight,
  Target,
  FileText
} from "lucide-react";

type Highlight = {
  icon: ComponentType<any>;
  text: string;
  badge?: string;
};

type CaseStudyPhase = {
  title: string;
  details: string[];
};

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  asyncFriendly: boolean;
  achievements: string[]; // Shorter snap-bullet highlights shown directly on the card
  skills: string[];
  impactBadges: string[];
  highlights?: Highlight[];
  bannerGradient: string; // Dynamic branded color themes per company
  caseStudyBackground: string;
  caseStudyPhases: CaseStudyPhase[];
  caseStudyOutcomes: string[];
};

const experiences: Experience[] = [
  {
    id: "turing",
    company: "ServiceNow (via Turing)",
    role: "Senior Software Engineer – AI Tools & Automation",
    period: "Oct 2024 – Jan 2026",
    location: "Goa, India (Remote)",
    asyncFriendly: true,
    impactBadges: ["99% Pod Accuracy", "10x Audit Acceleration", "Hybrid RL Gyms"],
    achievements: [
      "Engineered automated <strong>LLM-powered evaluation pipelines and agentic audit schemas</strong> using frontier models to programmatically lint and validate notebook code execution, accelerating audits by 10x.",
      "Shifted team focus to complex reasoning datasets incorporating **Chain-of-Thought (CoT) and ReAct** thinking traces, steering the distributed team to a project-high <strong>99% client-rated accuracy</strong>.",
      "Architected and deployed **hybrid RL Gym structures** for agentic AI, building mock enterprise sandboxes (generic CSM, ITSM, HRMS) and writing integration harnesses for Google Calendar, PayPal, and Microsoft Teams."
    ],
    skills: ["Agentic AI", "RLHF", "SFT", "CoT / ReAct", "RL Gyms", "Python", "Pandas"],
    highlights: [
      { icon: Users, text: "Managed 4 trainers across 4 timezones asynchronously" },
      { icon: Award, text: "Trained ServiceNow LLM to beat Gemini 2.5 Pro on CR benchmark", badge: "CoT & ReAct" },
    ],
    bannerGradient: "from-indigo-600 to-blue-700 dark:from-indigo-950/60 dark:to-blue-950/40",
    caseStudyBackground: "I joined ServiceNow via Turing to lead AI alignment, instruction fine-tuning, and reinforcement learning pipelines for frontier LLMs. The central mission was to transition model capabilities from basic text outputs into state-of-the-art cognitive reasoning, multi-turn instruction-following, and fully autonomous action-execution agents.",
    caseStudyPhases: [
      {
        title: "Phase 1: Microsoft RLHF Code Alignment (Oct – Dec 2024)",
        details: [
          "Executed high-fidelity <strong>Reinforcement Learning from Human Feedback (RLHF)</strong> alignment protocols for Microsoft coding projects.",
          "Evaluated 4-5 high-complexity programming tasks daily, containing a system prompt, 4 candidate model outputs, and a comprehensive, human-authored ideal response.",
          "Audited and executed every single code snippet locally to verify <strong>syntax correctness, runtime viability, edge-case safety</strong>, and modern API/library compliance (deprecating outdated practices)."
        ]
      },
      {
        title: "Phase 2: ServiceNow Cognitive SFT Alignment (Dec 2024 – Mar 2025)",
        details: [
          "Directed Supervised Fine-Tuning (SFT) data compilation for complex instruction-following inside ServiceNow's cognitive domain.",
          "Designed 3-5 turn conversational datasets with custom system instructions, engineered specifically to <strong>break SOTA models</strong> by introducing contradictory rules and extreme constraints.",
          "Authored 3-4 highly complex, model-breaking datasets daily; quickly became the highest-velocity contributor and was promoted to <strong>Pod Lead</strong>."
        ]
      },
      {
        title: "Phase 3: Pod Leadership & Reasoning Frameworks (Mar – Sep 2025)",
        details: [
          "Mentored and reviewed the work of 4 advanced trainers distributed across 4 different timezones asynchronously.",
          "Acted as a core research resource: analyzed incoming ML research papers (such as CoT, ReAct) and compiled them into pragmatic, highly technical dataset guidelines.",
          "Shifted the team to complex reasoning coding datasets incorporating <strong>Chain-of-Thought (CoT) and ReAct</strong> thinking traces, reviewing 4 prompts per trainer daily.",
          "Maintained an outstanding, team-high <strong>99% client-verified accuracy rating</strong> based on direct feedback across all pods."
        ]
      },
      {
        title: "Phase 4: Agentic AI & Hybrid RL Gyms (Sep 2025 – Jan 2026)",
        details: [
          "Directed the architecture of an innovative <strong>Reinforcement Learning (RL) Gym</strong> designed to train autonomous AI agents.",
          "Built mock enterprise environments mimicking ServiceNow Customer Service Management (CSM), IT Service Management (ITSM), Human Resource Management Systems (HRMS), and external services (Google Calendars, PayPal, Microsoft Teams).",
          "Led a cross-timezone pod across multiple RL Gym environments, forming one of the first groups globally to build and validate <strong>hybrid RL Gym environments</strong> where autonomous agents navigate multi-system loops, complete actions, and self-correct based on rewards."
        ]
      }
    ],
    caseStudyOutcomes: [
      "The datasets and reasoning models compiled by our pods enabled ServiceNow's cognitive model to officially **outperform Google's Gemini 2.5 Pro** in the cognitive reasoning domain.",
      "Successfully deployed hybrid RL Gyms connecting CSM, ITSM, and HRMS to Google Calendars, PayPal, and Microsoft Teams.",
      "Maintained a **99% client-verified accuracy rating** across my entire distributed pod."
    ]
  },
  {
    id: "ernest",
    company: "Ernest (joinernest.com)",
    role: "Software Engineer (Contract)",
    period: "Jun 2024 – Aug 2024",
    location: "Remote (Global Team)",
    asyncFriendly: true,
    impactBadges: ["200% Access Speedup", "75% Steps Saved", "50% Clicks Removed"],
    achievements: [
      "Revamped the core objectives portal using React, React Query, and Go, reducing the steps required to access objectives by <strong>75%</strong> and driving meaningful improvements in daily active workflows.",
      "Re-engineered a legacy project timeline tool into a fully interactive, highly performant graph-based visualization layout, eliminating redundant UI paths and cutting access steps by <strong>50%</strong>.",
      "Optimized Go API endpoints powering the objectives portal, significantly reducing latency and improving platform reliability."
    ],
    skills: ["TypeScript", "React", "React Query", "Golang", "PWA", "Storybook"],
    highlights: [
      { icon: Zap, text: "Optimized Go API endpoints and reduced database query loads" },
      { icon: TrendingUp, text: "75% steps saved for end users accessing objectives" }
    ],
    bannerGradient: "from-teal-600 to-emerald-700 dark:from-teal-900/60 dark:to-emerald-900/40",
    caseStudyBackground: "I contracted as a Software Engineer at Ernest (joinernest.com) to resolve high-friction user paths in their OKR (Objectives and Key Results) platform, which is used daily by enterprise team leads. The legacy experience required too many steps to inspect, edit, and understand project progress, leading to drop-offs. Working within a global team, I coordinated asynchronously across multiple timezones (US, LATAM, Europe, Africa, APAC).",
    caseStudyPhases: [
      {
        title: "Objectives Portal Revamp",
        details: [
          "Rewrote the objectives portal from scratch using a modern React, React Query, and Go stack.",
          "Optimized rendering by caching server responses, reducing client-side network roundtrips.",
          "Optimised access to the objectives portal by <strong>200%</strong>, cutting down the user steps required to view or modify an objective by <strong>75%</strong>."
        ]
      },
      {
        title: "Interactive Graph-Based Timeline",
        details: [
          "Designed and implemented a custom interactive project timeline graph.",
          "Used React rendering algorithms and clean Canvas/SVG transitions to visualize objective relationships as a clean, interactive graph.",
          "Enabled users to click on any node directly in the graph to jump to the respective project, eliminating <strong>50% of the previous navigation clicks</strong> and providing an extremely fluid user experience."
        ]
      },
      {
        title: "PWA & Design System Integration",
        details: [
          "Successfully integrated the revamped objectives portal into Ernest's Progressive Web App (PWA) framework.",
          "Developed and documented components within Ernest's Storybook-driven custom design system.",
          "Optimised Go API endpoints powering the objectives portal, significantly reducing latency and improving platform reliability."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Portal access latency and click-depth were reduced by **75%** for end users.",
      "Revamped a legacy static timeline tool into a dynamic, interactive graph tool that cut access clicks by **50%**.",
      "Seamlessly integrated all systems into a highly responsive PWA with full offline capabilities."
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
      "Decoupled complex layout elements from monolithic class states by migrating the client-side codebase to Functional React and the Context API, completely eliminating prop drilling.",
      "Designed and deployed a multi-tenant interest and premium calculation engine in Node.js, handling 50 different complex insurance formulas specific to each US state dynamically.",
      "Engineered an automated PDF generator that produces customizable, editable PDF ACORD forms that automatically render and populate based on state rules, employee count, and work codes."
    ],
    skills: ["TypeScript", "React", "Node.js", "Context API", "AWS Lambda", "Serverless", "Docker"],
    highlights: [
      { icon: Zap, text: "Architected decoupled multi-tenant dynamic interest calculation engine" },
      { icon: Layers, text: "Migrated GitLab infra to GitHub, reducing cloud billing by $5,000/yr" }
    ],
    bannerGradient: "from-zinc-700 to-slate-800 dark:from-zinc-800/80 dark:to-slate-900/60",
    caseStudyBackground: "I was brought on as a Senior Software Engineer to overhaul InsureComp's legacy monolithic client-side application and stabilize its multi-state calculation backend. The legacy codebase was written in legacy class-based React, resulting in severe prop-drilling patterns and layout instability.",
    caseStudyPhases: [
      {
        title: "Core Architectural Overhaul",
        details: [
          "Shifted the entire client-side codebase from class-based React to functional React and the Context API.",
          "Decoupled complex layout elements from underlying state controllers, completely eliminating prop drilling."
        ]
      },
      {
        title: "Decoupled 50-State Calculation Engine",
        details: [
          "Designed and deployed a multi-tenant interest and premium calculation engine in Node.js.",
          "Handled <strong>50 different complex insurance interest formulas</strong> specific to each US state, validating calculations dynamically against strict state-by-state regulatory specs.",
          "Mentored 3-4 junior developers on the complex insurance backend calculations."
        ]
      },
      {
        title: "Custom Editable PDF ACORD Forms",
        details: [
          "Engineered a custom, automated PDF generator that produces customizable, editable PDF ACORD forms.",
          "The engine automatically renders, populates, and adjusts forms in real time based on state rules, employee count, and work codes."
        ]
      },
      {
        title: "Codebase Migration & Team Mentoring",
        details: [
          "Led the transition of their repository, dev pipeline, and CI/CD infrastructure from GitLab to GitHub, saving the company $5,000 USD annually in SaaS billing.",
          "Served as the core technical liaison in client business calls to convert high-level demands from US banking clients into precise engineering specs and code."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Saved **$5,000 USD annually** in SaaS billing by migrating the codebase from GitLab to GitHub.",
      "Successfully supported calculations for all 50 states with zero post-deployment revision cycles.",
      "Decoupled monolithic state structures, reducing layout repaints and fixing UI lags."
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
      "Designed and implemented a dedicated, high-performance marketplace of complex B2B integration workflows, successfully publishing 10+ production-grade live integrations on a Prismatic iPaaS environment.",
      "Architected a multi-step onboarding integration that unified Rippling, BambooHR, and Zoho, combining email automation, online KYC biometric face recognition/ID validation, and eSignatures into a unified flow.",
      "Engineered Stripe-integrated billing and onboarding workflows, enabling users to complete signup, biometric KYC verification, sign electronic contracts, and trigger Stripe checkout in a single uninterrupted flow."
    ],
    skills: ["Prismatic iPaaS", "Biometric ID Check", "eSignatures", "Stripe", "Node.js", "HR Integration"],
    highlights: [
      { icon: Clock, text: "Delivered B2B integrations with zero synchronous overhead" },
      { icon: Layers, text: "Combined eSignature + biometric products with Rippling & Zoho" }
    ],
    bannerGradient: "from-purple-650 to-indigo-750 dark:from-purple-900/60 dark:to-indigo-900/40",
    caseStudyBackground: "I focused on accelerating adoption of Yoti's secure core identity products: its eSignature platform and its SOTA biometric face recognition/age estimation engine. The goal was to build frictionless, automated workflows connecting Yoti directly with popular enterprise ecosystems.",
    caseStudyPhases: [
      {
        title: "B2B SaaS iPaaS Marketplace",
        details: [
          "Designed and implemented a dedicated, high-performance marketplace of complex B2B integration workflows.",
          "Released <strong>10+ production-grade live integrations</strong> on a Prismatic iPaaS environment, connecting Yoti's biometric identity check and eSignature suites to popular business platforms."
        ]
      },
      {
        title: "Automated Employee Onboarding Flow",
        details: [
          "Architected a multi-step onboarding integration that unified <strong>Rippling, BambooHR, and Zoho</strong>.",
          "When an employee was hired, the workflow automatically triggered: automated welcome emails -> redirected to online KYC biometric face recognition/ID validation -> automatically requested eSignatures -> onboarded the verified user into the respective HR platforms."
        ]
      },
      {
        title: "Stripe Transactional Verification",
        details: [
          "Designed Stripe-integrated billing and onboarding workflows.",
          "Enabled users to execute new subscriptions, complete online biometric KYC verification, sign electronic contracts, and trigger Stripe checkout in a <strong>single, uninterrupted transaction flow</strong>."
        ]
      },
      {
        title: "Generic Workflows",
        details: [
          "Created customizable template modules for storage, email, SMS, and identity-triggered automations."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Successfully deployed **10+ B2B SaaS integrations** across identity, storage, and HR tools.",
      "Automated complex compliance-regulated flows, eliminating manual verification checks."
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
      "Designed and developed the live video classroom architecture utilizing Agora RTC, creating custom real-time canvas-based widgets (Interactive Guitar Tuner, Chord Charts, Chess boards) that updated in lockstep.",
      "Architected and deployed secure, serverless video processing pipelines on AWS that automatically recorded, compressed, and transcoded child video files securely for parent review.",
      "Conducted granular product-market fit research in close collaboration with investors and founders to inform platform direction and curriculum optimization."
    ],
    skills: ["TypeScript", "React", "Agora RTC", "AWS S3", "Serverless Video Pipelines"],
    highlights: [
      { icon: Users, text: "Worked alongside investors validating product-market fits" },
      { icon: Zap, text: "Engineered serverless video processing pipelines for recordings" }
    ],
    bannerGradient: "from-rose-500 to-amber-600 dark:from-rose-950/40 dark:to-amber-950/20",
    caseStudyBackground: "I joined as one of the first software engineering hires to help define product-market fit (PMF) and build Pixical.com, an interactive extracurricular e-learning platform (teaching guitar, chess, dance, and cooking) for kids in the US. I worked closely with early-stage investors and founders to translate user analytics into core features.",
    caseStudyPhases: [
      {
        title: "Agora RTC Live Classroom & Interactive Widgets",
        details: [
          "Designed and developed the live video classroom architecture utilizing Agora RTC.",
          "Created custom real-time canvas-based widgets (e.g. Interactive Guitar Tuner, real-time chord charts, and chess boards) that updated in lockstep with the teacher's feed, making lessons highly engaging for children."
        ]
      },
      {
        title: "Serverless Video Processing",
        details: [
          "Architected and deployed serverless video processing pipelines on AWS.",
          "Once a lesson concluded, the system automatically recorded, compressed, and transcoded child video files for review, storing them securely in S3 with custom encryption layers."
        ]
      },
      {
        title: "PMF & Investor Collaboration",
        details: [
          "Worked directly alongside early-stage investors and founders, analyzing usage metrics to optimize curriculum flows and successfully establish product-market fit."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Launched Pixical.com successfully, providing engaging video extracurricular lessons to children across the US.",
      "Handled thousands of hours of live stream video classroom calls with sub-100ms latency.",
      "Automated video review rendering pipelines, reducing server costs by over 40%."
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
      "Performed data classification, prediction, and predictive visualization workflows utilizing Pandas, Matplotlib, and Seaborn to identify variables affecting durable optical fiber performance durability curves."
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Science"],
    highlights: [
      { icon: TrendingUp, text: "Visualized data pipelines and predictive classification loops" }
    ],
    bannerGradient: "from-sky-600 to-blue-800 dark:from-sky-900/60 dark:to-blue-950/40",
    caseStudyBackground: "I joined Sterlite Technologies as a Data Science Intern during a 2-month summer internship, focusing on analyzing, classifying, and predicting quality metrics for fiber-optic manufacturing pipelines.",
    caseStudyPhases: [
      {
        title: "Pandas Data Pipelines",
        details: [
          "Ingested, cleaned, and processed large manufacturing and fiber quality datasets."
        ]
      },
      {
        title: "Seaborn & Matplotlib Visualizations",
        details: [
          "Programmed defect-mapping tools and correlation heatmaps to visualize variables impacting glass durability and signal attenuation."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Enabled the manufacturing QA team to identify key physical variables affecting fiber durability, speeding up quality diagnostics."
    ]
  }
];

export default function Resume({ onContactClick }: { onContactClick: () => void }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Experience | null>(null);

  // Sync scroll lock when modal is active
  useEffect(() => {
    if (activeCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCaseStudy]);

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
              5 years of building robust full-stack products, leading agentic AI systems, and deploying async-first structures. Click any card to read the long-form case study.
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-8 ml-4 space-y-12">
          {experiences.map((exp, idx) => {
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
                  className="absolute -left-[32px] md:-left-[40px] top-[22px] h-4 w-4 rounded-full border-2 bg-white dark:bg-[#09090b] transition-all duration-300 border-zinc-300 dark:border-zinc-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:scale-120 group-hover:ring-4 group-hover:ring-blue-500/10 dark:group-hover:ring-blue-400/10"
                ></div>

                {/* Timeline Card */}
                <div
                  onClick={() => setActiveCaseStudy(exp)}
                  className="p-6 rounded-2xl border transition-all duration-300 bg-white/40 dark:bg-[#0f0f11]/30 backdrop-blur-xs border-zinc-200/60 dark:border-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md hover:scale-[1.01] cursor-pointer flex flex-col justify-between"
                >
                  {/* Card Main Info */}
                  <div>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
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

                    {/* Core achievements list (Summary view directly on card) */}
                    <ul className="space-y-3 mt-6">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 flex-shrink-0"></span>
                          <span
                            className="text-xs text-zinc-600 dark:text-zinc-450 leading-relaxed font-normal"
                            dangerouslySetInnerHTML={{ __html: ach }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Cue: Read Case Study Link */}
                  <div className="w-full flex items-center justify-between mt-6 pt-4 border-t border-zinc-100/50 dark:border-zinc-900/50">
                    {/* Skills utilized tag list */}
                    <div className="hidden sm:flex flex-wrap items-center gap-1.5">
                      {exp.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono px-1.5 py-0.5 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 3 && (
                        <span className="text-[10px] text-zinc-400 font-mono">+{exp.skills.length - 3} more</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors ml-auto">
                      Read Case Study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
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

      {/* High-Fidelity AnimatePresence Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#0a0a0c] border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] animate-in fade-in duration-200"
            >
              {/* Branded Banner Header */}
              <div className={`relative h-32 bg-gradient-to-r ${activeCaseStudy.bannerGradient} flex items-end p-6 shrink-0`}>
                <div className="absolute inset-0 bg-black/15 z-0" />
                <div className="relative z-10 flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 text-white font-mono font-bold text-lg shadow-sm">
                    {activeCaseStudy.company.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg md:text-xl leading-tight">
                      {activeCaseStudy.company}
                    </h4>
                    <p className="text-white/80 text-xs md:text-sm font-mono mt-0.5 font-medium">
                      {activeCaseStudy.role}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/25 hover:bg-black/45 text-white/95 transition-colors border border-white/10 backdrop-blur-xs cursor-pointer z-20"
                  aria-label="Close Case Study"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable Case Study Body Container */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 scrollbar-thin">
                
                {/* Meta details & Stats badges block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border border-zinc-150 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20">
                  <div className="flex flex-col gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <strong>Period:</strong> {activeCaseStudy.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <strong>Location:</strong> {activeCaseStudy.location}
                    </span>
                  </div>

                  {/* Metric highlights */}
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.impactBadges.map((badge, bIdx) => (
                      <div
                        key={bIdx}
                        className="px-3 py-1.5 rounded-xl border border-blue-500/15 dark:border-blue-400/10 bg-blue-500/5 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 shadow-2xs"
                      >
                        <Zap className="h-3 w-3 shrink-0" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Background */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-zinc-500" />
                    Background & Context
                  </h5>
                  <p className="text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-normal">
                    {activeCaseStudy.caseStudyBackground}
                  </p>
                </div>

                {/* Case Study Phases */}
                <div className="space-y-4">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-zinc-500" />
                    Engineering Phases & Technical Actions
                  </h5>
                  <div className="space-y-4">
                    {activeCaseStudy.caseStudyPhases.map((phase, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/15"
                      >
                        <h6 className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-105 uppercase tracking-wide mb-2.5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                          {phase.title}
                        </h6>
                        <ul className="space-y-2.5">
                          {phase.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-1.5 flex-shrink-0"></span>
                              <span dangerouslySetInnerHTML={{ __html: detail }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Outcomes */}
                <div className="space-y-3.5">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <Target className="h-4 w-4 text-zinc-500" />
                    Key Outcomes & System Impact
                  </h5>
                  <ul className="space-y-3">
                    {activeCaseStudy.caseStudyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-3 text-xs text-zinc-650 dark:text-zinc-350 leading-relaxed">
                        <span className="h-4.5 w-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/5 dark:text-emerald-400 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: outcome }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack utilised row */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Stack:
                  </span>
                  {activeCaseStudy.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-zinc-700 dark:text-zinc-300 font-medium px-2 py-0.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Integrated CTA Button to trigger Contact Flow */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setActiveCaseStudy(null);
                      // Slight delay to allow AnimatePresence case study modal exit before opening contact
                      setTimeout(() => {
                        onContactClick();
                      }, 250);
                    }}
                    className="w-full py-3 rounded-xl bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black font-semibold hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <FileText className="h-4 w-4" />
                    Discuss this project with Atharv
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
