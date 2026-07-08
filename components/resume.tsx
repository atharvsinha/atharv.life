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
    role: "Senior Software Engineer & Technical Pod Lead",
    period: "Oct 2024 – Jan 2026",
    location: "Remote, India",
    asyncFriendly: true,
    impactBadges: ["99% Pod Accuracy", "RLHF & SFT", "RL Gyms"],
    achievements: [
      "<strong>Technical leadership</strong>: Promoted to Pod Lead within weeks of joining, leading a 4-engineer pod across 5 time zones and achieving a project-leading <strong>99% client-rated accuracy score</strong>.",
      "<strong>Systems engineering</strong>: Architected and shipped enterprise workflow systems in Python, engineering structured reasoning pipelines (<strong>Chain-of-Thought + ReAct</strong>) benchmarked against Gemini 2.5 Flash for production reliability.",
      "<strong>Quality standards</strong>: Authored evaluation frameworks and data-quality engineering standards adopted project-wide."
    ],
    skills: ["RLHF & SFT", "CoT / ReAct", "RL Gyms", "Python", "Pandas", "System Design"],
    highlights: [
      { icon: Users, text: "Led 4-engineer pod across 5 time zones asynchronously" },
      { icon: Award, text: "Engineered reasoning pipelines benchmarked against Gemini 2.5 Flash", badge: "CoT / ReAct" },
    ],
    bannerGradient: "from-indigo-600 to-blue-700 dark:from-indigo-950/60 dark:to-blue-950/40",
    caseStudyBackground: "I joined ServiceNow via Turing to lead systems engineering, reinforcement learning (RLHF), supervised fine-tuning (SFT) pipelines, and RL Gym environments. As a Senior Software Engineer and Technical Pod Lead, I was responsible for coordinating a distributed team of engineers, compiling structured reasoning traces, and authoring rigorous quality evaluation standards for complex enterprise applications.",
    caseStudyPhases: [
      {
        title: "Phase 1: Technical Leadership & Pod Management",
        details: [
          "Promoted to Pod Lead shortly after joining the team, directing a 4-engineer pod across 5 time zones.",
          "Coordinated task delegation and reviews asynchronously, maintaining high velocity and collaboration.",
          "Achieved a project-leading <strong>99% client-rated accuracy score</strong> on final deliverables."
        ]
      },
      {
        title: "Phase 2: Reasoning Pipelines & Benchmarking",
        details: [
          "Architected and shipped robust enterprise workflow systems in Python.",
          "Implemented structured reasoning traces using <strong>Chain-of-Thought (CoT) and ReAct</strong> thinking patterns to handle complex multi-step tasks.",
          "Evaluated and benchmarked reasoning pipelines against Gemini 2.5 Flash to ensure production-level latency and accuracy reliability."
        ]
      },
      {
        title: "Phase 3: RLHF & SFT Alignment",
        details: [
          "Supervised alignment pipelines incorporating Reinforcement Learning from Human Feedback (RLHF) and Supervised Fine-Tuning (SFT).",
          "Designed structured dataset specifications and evaluation frameworks to fine-tune and align models on reasoning and instruction-following tasks.",
          "Validated model responses for syntax correctness, runtime viability, and edge-case safety."
        ]
      },
      {
        title: "Phase 4: RL Gym Environments",
        details: [
          "Designed reinforcement learning (RL) Gym environments and simulated sandboxes for model training.",
          "Created custom mock execution environments to test and optimize agent actions, reward metrics, and automated feedback loops."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Led a 4-engineer pod to achieve a project-leading <strong>99% client-rated accuracy score</strong>.",
      "Successfully built enterprise workflow systems and reasoning pipelines (CoT + ReAct) benchmarked against Gemini 2.5 Flash.",
      "Authored evaluation frameworks and data-quality engineering standards adopted project-wide."
    ]
  },
  {
    id: "ernest",
    company: "Ernest (joinernest.com)",
    role: "Software Engineer (Contract)",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    asyncFriendly: true,
    impactBadges: ["75% Friction Reduction", "50% Latency Cut", "PWA Integration"],
    achievements: [
      "<strong>Product delivery</strong>: Revamped the core objectives portal (React, React Query, Go), reducing user workflow friction by <strong>75%</strong> and lifting daily active engagement.",
      "<strong>Performance</strong>: Re-engineered a legacy timeline system into a high-performance, graph-based visualization tool with custom React rendering, cutting data access latency by <strong>50%</strong>.",
      "<strong>Platform work</strong>: Integrated the rebuilt workspace into Ernest's PWA, optimized backend Go API endpoints, and contributed core components to a Storybook-driven design system."
    ],
    skills: ["TypeScript", "React", "React Query", "Golang", "PWA", "Storybook"],
    highlights: [
      { icon: Zap, text: "Optimized Go API endpoints and reduced database query loads" },
      { icon: TrendingUp, text: "75% workflow friction reduced for portal users" }
    ],
    bannerGradient: "from-teal-600 to-emerald-700 dark:from-teal-900/60 dark:to-emerald-900/40",
    caseStudyBackground: "I contracted as a Software Engineer at Ernest (joinernest.com) to resolve high-friction user paths in their OKR (Objectives and Key Results) platform, which is used daily by enterprise team leads. Working in a distributed remote setup, I focused on frontend optimization, backend API latency reduction, and component consistency.",
    caseStudyPhases: [
      {
        title: "Objectives Portal Revamp",
        details: [
          "Rewrote the objectives portal using React, React Query, and Go.",
          "Optimized state rendering and queries, reducing user workflow friction by <strong>75%</strong>.",
          "Helped drive user engagement by providing a faster, cleaner objective tracking experience."
        ]
      },
      {
        title: "Interactive Timeline & Performance Tuning",
        details: [
          "Re-engineered a legacy timeline system into a high-performance, graph-based visualization tool.",
          "Implemented optimized custom React rendering, cutting data access latency by <strong>50%</strong>.",
          "Created a seamless, interactive user experience for viewing project milestones."
        ]
      },
      {
        title: "PWA & Storybook Integration",
        details: [
          "Integrated the rebuilt objectives workspace into Ernest's PWA framework for offline capability.",
          "Optimized backend Go API endpoints to ensure low response times.",
          "Contributed core reusable components to the shared Storybook-driven design system."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Reduced user workflow friction in the objectives portal by <strong>75%</strong>.",
      "Cut project timeline data access latency by <strong>50%</strong>.",
      "Successfully integrated the workspace into the PWA and contributed to the shared Storybook design system."
    ]
  },
  {
    id: "insurecomp",
    company: "InsureComp",
    role: "Senior Software Engineer",
    period: "Aug 2023 – Jun 2024",
    location: "Bangalore, India",
    asyncFriendly: false,
    impactBadges: ["$5,000 Saved", "50+ Dynamic Formulas", "Context API Migration"],
    achievements: [
      "<strong>Architecture</strong>: Architected modular client-side state (React, Context API), eliminating multi-level prop-drilling across <strong>50+ dynamic workspaces</strong>.",
      "<strong>Core systems</strong>: Engineered a decoupled, multi-tenant calculation engine in Node.js computing <strong>50+ dynamic insurance formulas</strong> with state-by-state validation.",
      "<strong>Client leadership</strong>: Technical Lead and primary client liaison for US banking enterprise clients, translating business goals into engineering blueprints while mentoring 3 junior developers.",
      "<strong>Infrastructure</strong>: Spearheaded GitLab→GitHub migration, cutting operational overhead by <strong>$5,000/year</strong>."
    ],
    skills: ["TypeScript", "React", "Node.js", "Context API", "AWS", "Serverless", "Docker", "GitLab", "GitHub"],
    highlights: [
      { icon: Users, text: "Technical Lead and client liaison for US banking enterprise clients" },
      { icon: Layers, text: "Migrated GitLab infra to GitHub, reducing cloud billing by $5,000/yr" }
    ],
    bannerGradient: "from-zinc-700 to-slate-800 dark:from-zinc-800/80 dark:to-slate-900/60",
    caseStudyBackground: "I was brought on as a Senior Software Engineer to overhaul InsureComp's legacy monolithic client-side application, stabilize its multi-state calculation backend, and act as Technical Lead and client liaison for US banking enterprise clients.",
    caseStudyPhases: [
      {
        title: "Core Architectural Overhaul",
        details: [
          "Shifted the entire client-side codebase from class-based React to functional React and the Context API.",
          "Decoupled complex layout elements from underlying state controllers, completely eliminating prop drilling across 50+ dynamic workspaces."
        ]
      },
      {
        title: "Decoupled 50-State Calculation Engine",
        details: [
          "Designed and deployed a multi-tenant interest and premium calculation engine in Node.js.",
          "Handled 50+ different complex insurance formulas specific to each US state, validating calculations dynamically against strict state-by-state regulatory specs.",
          "Mentored 3 junior developers on the complex insurance backend calculations."
        ]
      },
      {
        title: "DevOps & Infrastructure",
        details: [
          "Led the transition of the repository, dev pipeline, and CI/CD infrastructure from GitLab to GitHub.",
          "Optimized CI/CD pipelines, saving the company $5,000/year in operational and SaaS billing overhead."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Saved <strong>$5,000/year</strong> in SaaS billing by migrating the codebase from GitLab to GitHub.",
      "Successfully supported calculations for all 50 states with zero post-deployment revision cycles.",
      "Decoupled monolithic state structures, reducing layout repaints and fixing UI lags."
    ]
  },
  {
    id: "yoti",
    company: "Yoti",
    role: "Full-Stack Software Engineer – Integrations",
    period: "Oct 2022 – May 2023",
    location: "Remote",
    asyncFriendly: true,
    impactBadges: ["Biometric KYC Flows", "eSignatures Integration", "Automated Onboarding"],
    achievements: [
      "<strong>Integrations</strong>: Engineered an automated integration marketplace linking Yoti's eSignature and biometric identity (KYC/age estimation) systems with enterprise B2B SaaS platforms.",
      "<strong>Workflow automation</strong>: Designed an end-to-end employee onboarding workflow integrating Rippling, BambooHR, and Zoho for automated verification and documentation.",
      "<strong>Payments</strong>: Built secure Stripe billing integrations unifying registration, KYC checks, and payment processing; expanded Yoti's B2B ecosystem with reusable workflow templates."
    ],
    skills: ["Node.js", "Stripe", "eSignatures", "Biometrics", "API Integrations", "Workflow Automation"],
    highlights: [
      { icon: Clock, text: "Delivered B2B integrations with zero synchronous overhead" },
      { icon: Layers, text: "Combined eSignature + biometric products with Rippling & Zoho" }
    ],
    bannerGradient: "from-purple-650 to-indigo-750 dark:from-purple-900/60 dark:to-indigo-900/40",
    caseStudyBackground: "I focused on accelerating adoption of Yoti's secure core identity products: its eSignature platform and its biometric face recognition/age estimation engine. The goal was to build automated integrations and workflows connecting Yoti directly with popular enterprise HR and payment ecosystems.",
    caseStudyPhases: [
      {
        title: "B2B SaaS Integration Marketplace",
        details: [
          "Engineered an automated integration marketplace linking Yoti's identity systems with external business platforms.",
          "Released multiple production-grade live integrations connecting biometric identity check and eSignature suites to popular business applications."
        ]
      },
      {
        title: "Automated Employee Onboarding Flow",
        details: [
          "Architected a multi-step onboarding integration that unified Rippling, BambooHR, and Zoho.",
          "When an employee was hired, the workflow automatically triggered: automated welcome emails -> redirected to online KYC biometric face recognition/ID validation -> automatically requested eSignatures -> onboarded the verified user into the respective HR platforms."
        ]
      },
      {
        title: "Stripe Transactional Verification",
        details: [
          "Built secure Stripe billing integrations that unified registration, KYC verification, and transaction processing.",
          "Authored reusable workflow templates that enabled enterprise customers to quickly deploy custom integration paths."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Successfully automated B2B employee verification by integrating with Rippling, BambooHR, and Zoho.",
      "Connected eSignature and KYC verification into a unified checkout flow using Stripe.",
      "Shipped reusable integration templates to speed up client onboarding onto Yoti's platform."
    ]
  },
  {
    id: "bettered",
    company: "Better Ed Co",
    role: "Full-Stack Software Engineer",
    period: "Jan 2021 – Jun 2022",
    location: "Remote",
    asyncFriendly: false,
    impactBadges: ["Agora RTC Live Video", "Low-Latency Streaming", "Product-Market Fit"],
    achievements: [
      "<strong>Product engineering</strong>: Co-engineered a live, real-time extracurricular learning platform (Agora RTC) delivering low-latency video streaming for global users.",
      "<strong>Collaboration</strong>: Partnered with founding stakeholders and early-stage investors on product-market fit research to guide platform direction."
    ],
    skills: ["TypeScript", "React", "Agora RTC", "WebSockets", "Node.js"],
    highlights: [
      { icon: Users, text: "Worked alongside founders validating product-market fits" },
      { icon: Zap, text: "Co-engineered live video learning platform using Agora RTC" }
    ],
    bannerGradient: "from-rose-500 to-amber-600 dark:from-rose-950/40 dark:to-amber-950/20",
    caseStudyBackground: "I joined Better Ed Co as a Full-Stack Software Engineer, working as one of the early hires. I co-engineered their live extracurricular learning platform, focusing on real-time video delivery and collaborating with the founding team to refine product features and market fit.",
    caseStudyPhases: [
      {
        title: "Agora RTC Live Classroom",
        details: [
          "Co-engineered a live, real-time extracurricular learning platform using Agora RTC.",
          "Optimized video streams to ensure low-latency delivery for global users."
        ]
      },
      {
        title: "Product & Market Research",
        details: [
          "Worked closely with founding stakeholders to perform user analytics and product-market fit research.",
          "Translated user feedback and engagement metrics into actionable software feature specifications."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Delivered a low-latency real-time video learning platform.",
      "Successfully refined product features based on direct user metrics and market fit research."
    ]
  },
  {
    id: "sterlite",
    company: "Sterlite Technologies",
    role: "Data Science Intern",
    period: "May 2019 – Jul 2019",
    location: "India",
    asyncFriendly: false,
    impactBadges: ["Data Classification", "Predictive Analysis", "Pandas DataFrames"],
    achievements: [
      "<strong>Data Science</strong>: Ingested, cleaned, and processed datasets using Pandas, Matplotlib, and Seaborn to build data classification, predictive analysis, and visual reports."
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    highlights: [
      { icon: TrendingUp, text: "Optimized internal reporting with predictive scripts" }
    ],
    bannerGradient: "from-sky-600 to-blue-800 dark:from-sky-900/60 dark:to-blue-950/40",
    caseStudyBackground: "During my internship at Sterlite Technologies, I worked with the data team to build data pipelines, classification tools, and visualizations for internal quality reporting.",
    caseStudyPhases: [
      {
        title: "Data Pipelines & Classification",
        details: [
          "Built python-based scripts using Pandas to clean and structure historical data.",
          "Developed data classification and predictive analysis models to optimize quality assessments."
        ]
      },
      {
        title: "Data Visualizations",
        details: [
          "Created visual reporting templates using Matplotlib and Seaborn to display analysis results."
        ]
      }
    ],
    caseStudyOutcomes: [
      "Delivered predictive analysis and visualization scripts that streamlined internal reporting."
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
              5 years of building robust full-stack products, leading technical pods, and deploying async-first structures. Click any card to read the long-form case study.
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
