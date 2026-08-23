"use client";

import { BookOpen, Earth, Rocket, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
              About
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              I build end-to-end systems and ship them in public.
            </h2>
            <div className="space-y-5 text-cream/55 leading-relaxed">
              <p>
                My work sits at the intersection of AI infrastructure and
                production engineering. Every project in this series is a
                deployed, open-source system with live endpoints, regression
                suites, and measured tradeoffs — not slide decks.
              </p>
              <p>
                I also ship products outside the AI space. I founded{" "}
                <a
                  href="https://metronagon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
                >
                  Metronagon Media
                </a>
                , a book-cover and series-branding studio, and I am a published
                author of 22 books across 3 series. That same obsession with
                clarity, finish, and long-term craft shows up in my engineering
                work.
              </p>
              <p>
                If you are hiring for AI platform, agent infrastructure, or
                developer tooling, I can take a system from idea to deployed
                endpoint — and document the path from prototype to production.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Rocket,
                title: "Ship fast",
                desc: "Next.js + Vercel from day one. Live URLs, not slide decks.",
              },
              {
                icon: Shield,
                title: "Build safe",
                desc: "Approval gates, cost ceilings, evals, and replay as first-class features.",
              },
              {
                icon: BookOpen,
                title: "Document the work",
                desc: "READMEs with diagrams, numbers, and honest tradeoffs that survive handoff.",
              },
              {
                icon: Earth,
                title: "Think end-to-end",
                desc: "Server, host, gate, crew, wallet — the whole protocol stack.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-gold/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mb-2 font-semibold text-cream">{title}</h3>
                <p className="text-sm leading-relaxed text-cream/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
