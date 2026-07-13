import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharv Sinha | Senior Full-Stack Software Engineer",
  description: "Resume of Atharv Sinha, Senior Full-Stack Software Engineer with 5+ years across insurtech, digital identity, and enterprise SaaS. TypeScript, React, Next.js, Node.js, Python, AWS.",
  openGraph: {
    title: "Atharv Sinha | Senior Full-Stack Software Engineer",
    description: "Resume of Atharv Sinha, Senior Full-Stack Software Engineer with 5+ years across insurtech, digital identity, and enterprise SaaS. TypeScript, React, Next.js, Node.js, Python, AWS.",
    url: "https://atharv.life/resume",
    siteName: "Atharv Sinha Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv Sinha | Senior Full-Stack Software Engineer",
    description: "Resume of Atharv Sinha, Senior Full-Stack Software Engineer with 5+ years across insurtech, digital identity, and enterprise SaaS.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
