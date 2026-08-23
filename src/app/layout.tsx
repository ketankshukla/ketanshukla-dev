import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ketanshukla.dev"),
  title:
    "Ketan Shukla — MCP Developer & AI Systems Engineer",
  description:
    "A developer portfolio showcasing end-to-end Model Context Protocol work: servers, agent loops, approval gates, multi-agent crews, and cost-aware sampling hosts.",
  keywords: [
    "Ketan Shukla",
    "MCP",
    "Model Context Protocol",
    "AI engineer",
    "Next.js",
    "React",
    "TypeScript",
    "agent loop",
    "multi-agent",
    "LLM",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ketan Shukla — MCP Developer & AI Systems Engineer",
    description:
      "End-to-end Model Context Protocol projects: servers, agent loops, approval gates, multi-agent crews, and cost-aware sampling hosts.",
    url: "https://ketanshukla.dev",
    siteName: "Ketan Shukla",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketan Shukla — MCP Developer & AI Systems Engineer",
    description:
      "End-to-end Model Context Protocol projects built with Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Ketan Shukla",
                  url: "https://ketanshukla.dev",
                  image:
                    "https://ketanshukla.dev/images/ketan-shukla.jpeg",
                  jobTitle: "MCP Developer & AI Systems Engineer",
                  description:
                    "Developer of end-to-end Model Context Protocol systems, from first-party servers to agent loops, approval gates, multi-agent crews, and cost-aware sampling hosts.",
                  knowsAbout: [
                    "Model Context Protocol",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "AI Agents",
                    "Multi-Agent Orchestration",
                    "LLM Tool Calling",
                  ],
                  sameAs: [
                    "https://github.com/ketankshukla",
                    "https://ketanshukla.com",
                    "https://metronagon.com",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Ketan Shukla",
                  url: "https://ketanshukla.dev",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
