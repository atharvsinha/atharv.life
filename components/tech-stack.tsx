"use client";

import { useState, type ComponentType } from "react";
import { BrainCircuit, Cpu, Layers, GitBranch } from "lucide-react";

type Skill = {
  name: string;
  context: string;
};

type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<any>;
  glowColor: string;
  skills: Skill[];
};

const docUrls: Record<string, string> = {
  // AI
  "Agentic AI": "https://www.ibm.com/think/topics/ai-agents",
  "RAG": "https://aws.amazon.com/what-is/retrieval-augmented-generation/",
  "LangGraph": "https://langchain-ai.github.io/langgraph/",
  "MCP": "https://modelcontextprotocol.io/",
  "Vercel AI SDK": "https://sdk.vercel.ai/docs",
  "RLHF & SFT": "https://huggingface.co/blog/rlhf",
  "CoT / ReAct": "https://arxiv.org/abs/2210.03629",
  "LLM Fine-tuning": "https://huggingface.co/docs/transformers/training",
  "Multi-Agent Systems": "https://en.wikipedia.org/wiki/Multi-agent_system",

  // Full-Stack
  "Next.js (App Router)": "https://nextjs.org/docs",
  "React / TS": "https://react.dev/",
  "Python / FastAPI": "https://fastapi.tiangolo.com/",
  "Golang": "https://go.dev/doc/",
  "PostgreSQL / NoSQL": "https://www.postgresql.org/docs/",
  "WebSockets & Streaming": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  "Agora RTC": "https://docs.agora.io/en/",

  // Cloud
  "AWS Lambda & Serverless": "https://aws.amazon.com/lambda/",
  "Docker": "https://docs.docker.com/",
  "GitHub Actions": "https://docs.github.com/en/actions",
  "RabbitMQ & SQS": "https://www.rabbitmq.com/documentation.html",
  "Amazon DynamoDB / S3": "https://aws.amazon.com/dynamodb/",
  "Infrastructure as Code": "https://learn.hashicorp.com/terraform",

  // Tooling & Collaboration
  "Cursor / Antigravity": "https://www.cursor.com/",
  "Storybook": "https://storybook.js.org/docs",
  "Async Distributed Collab": "https://about.gitlab.com/company/culture/all-remote/guide/",
  "React Query": "https://tanstack.com/query/latest",
  "Git & Version Control": "https://git-scm.com/doc",
  "Technical Translation": "https://en.wikipedia.org/wiki/Technical_translation"
};



const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & Intelligent Reasoning",
    description: "Architecting agentic setups, SFT data generation, model evaluations, and cognitive reasoning layers.",
    icon: BrainCircuit,
    glowColor: "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] hover:border-indigo-500 dark:hover:border-indigo-400",
    skills: [
      { name: "Agentic AI", context: "Designed hybrid RL Gym systems for ServiceNow agentic infra." },
      { name: "RAG", context: "Optimized precise search queries with context compression." },
      { name: "LangGraph", context: "Crafted complex multi-agent flows with cycle and state control." },
      { name: "MCP", context: "Built local context integrations and custom tool connections." },
      { name: "Vercel AI SDK", context: "Implemented streaming responses and structured JSON completions." },
      { name: "RLHF & SFT", context: "Authored gold standard responses and directed 3-6 AI trainers at ServiceNow." },
      { name: "CoT / ReAct", context: "Specialized ServiceNow cognitive LLM training to surpass Gemini 2.5 Flash." },
      { name: "LLM Fine-tuning", context: "Tuned SFT datasets yielding SOTA-breaking multi-turn reasoning conversations." },
      { name: "Multi-Agent Systems", context: "Orchestrated collaborative pods for complex task solving." },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack & Backend Systems",
    description: "Crafting extremely responsive frontend interfaces and high-concurrency robust APIs.",
    icon: Cpu,
    glowColor: "hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)] hover:border-teal-500 dark:hover:border-teal-400",
    skills: [
      { name: "Next.js (App Router)", context: "Optimized complex static/dynamic renders and route handlers." },
      { name: "React / TS", context: "Migrated class structures to hooks/context, eliminating deep prop drilling." },
      { name: "Python / FastAPI", context: "Built performant microservices for automated form calculations." },
      { name: "Golang", context: "Optimized backend objective data layers for Ernest portal." },
      { name: "PostgreSQL / NoSQL", context: "Designed state-aware document schemas and transaction models." },
      { name: "WebSockets & Streaming", context: "Engineered real-time channels for live data synchronization." },
      { name: "Tailwind CSS", context: "Established bespoke designs with utility rules and modern styles." },
      { name: "Agora RTC", context: "Built live video widgets (Guitar Tuner, Chord Charts) on Pixical." },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Distributed Infra",
    description: "Scaling serverless layers, message queues, and automated deployment pipelines.",
    icon: Layers,
    glowColor: "hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] hover:border-cyan-500 dark:hover:border-cyan-400",
    skills: [
      { name: "AWS Lambda & Serverless", context: "Built automated pricing tools and forms generation backends." },
      { name: "Docker", context: "Containerized environments for clean cloud provisioning and scaling." },
      { name: "GitHub Actions", context: "Authored rigid CI/CD checkflows, verifying testing coverage." },
      { name: "RabbitMQ & SQS", context: "Engineered robust event message systems for async processing." },
      { name: "Amazon DynamoDB / S3", context: "Maintained massive form repositories and state maps." },
      { name: "Infrastructure as Code", context: "Configured Serverless frameworks for modular cloud deployments." },
    ],
  },
  {
    id: "workflows",
    title: "Tooling & Collaboration Matrix",
    description: "Driving product velocity using elite tools and async-first communication strategies.",
    icon: GitBranch,
    glowColor: "hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] hover:border-amber-500 dark:hover:border-amber-400",
    skills: [
      { name: "Cursor / Antigravity", context: "Leveraged agentic coding loops to amplify building speed by 3x." },
      { name: "Storybook", context: "Constructed component visual sandboxes for design consistency." },
      { name: "Async Distributed Collab", context: "Delivered products asynchronously across 3–5 timezones." },
      { name: "React Query", context: "Optimized complex server-state caching and form invalidation." },
      { name: "Git & Version Control", context: "Managed migrations from GitLab, saving $5,000 annually." },
      { name: "Technical Translation", context: "Translated banking requisites into actionable engineering specs." },
    ],
  },
];export default function TechStack() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-950/20 relative transition-colors duration-600">
      {/* Ambient colorful background auras */}
      <div className="absolute top-1/4 left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/12 dark:bg-indigo-500/8 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] rounded-full bg-teal-500/10 dark:bg-teal-500/6 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Core Competence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Skills
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              An engineering stack calibrated for high uncertainty, complex cognitive reasoning, and robust distributed performance.
            </p>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-[#0f0f11]/40 backdrop-blur-xs transition-all duration-500 ${category.glowColor}`}
              >
                {/* Accent Line top-right */}
                <div className="absolute top-4 right-4 text-zinc-300 dark:text-zinc-700 opacity-60 transition-transform group-hover:scale-110 group-hover:text-zinc-400">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    const docUrl = docUrls[skill.name];
                    const isClickable = docUrl && skill.name !== "Async Distributed Collab" && skill.name !== "Technical Translation";

                    const badgeClass = isHovered
                      ? "bg-white/80 dark:bg-zinc-900/80 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold"
                      : "bg-white/45 dark:bg-zinc-900/35 border-zinc-200/80 dark:border-zinc-800/80 text-zinc-650 dark:text-zinc-300";

                    if (isClickable) {
                      return (
                        <a
                          key={skill.name}
                          href={docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-350 flex items-center select-none cursor-pointer ${badgeClass}`}
                        >
                          <span>{skill.name}</span>
                          <span className={`h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 ml-1.5 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)] ${
                            isHovered ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-50 pointer-events-none"
                          }`}></span>
                        </a>
                      );
                    }

                    return (
                      <span
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-350 flex items-center select-none cursor-default ${badgeClass}`}
                      >
                        <span>{skill.name}</span>
                        <span className={`h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 ml-1.5 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)] ${
                          isHovered ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-50 pointer-events-none"
                        }`}></span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
