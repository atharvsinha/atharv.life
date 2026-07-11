import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharv Sinha | Senior Full-Stack Software Engineer",
  description: "Resume of Atharv Sinha, Senior Full-Stack Software Engineer with 5+ years across insurtech, digital identity, and enterprise SaaS. TypeScript, React, Next.js, Node.js, Python, AWS.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
