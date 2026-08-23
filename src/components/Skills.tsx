"use client";

import { skills } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
            Stack
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="heading-gradient">Tools I use to build</span>
          </h2>
          <p className="mx-auto max-w-2xl text-cream/55">
            A modern, type-safe stack chosen for production AI systems: fast
            iteration, clear contracts, and honest observability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-gold/20"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-cream/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
