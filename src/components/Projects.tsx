"use client";

import { projects, type Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Radio } from "lucide-react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative grid gap-8 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/20 hover:bg-surface-elevated sm:p-10 lg:grid-cols-2 lg:items-center ${
        isEven ? "" : "lg:text-right"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* number badge */}
      <div
        className={`absolute top-6 ${
          isEven ? "left-6" : "right-6 lg:left-auto lg:right-6"
        } flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-sm font-bold text-gold`}
      >
        {project.number}
      </div>

      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl" aria-hidden>
            {project.emoji}
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.tagline}
          </span>
        </div>
        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
          {project.title}
        </h3>
        <p className="mb-6 leading-relaxed text-cream/55">
          {project.description}
        </p>
        <ul
          className={`mb-8 space-y-3 text-sm text-cream/50 ${
            isEven ? "" : "lg:ml-auto"
          }`}
        >
          {project.highlights.map((h) => (
            <li
              key={h}
              className={`flex items-start gap-3 ${
                isEven ? "" : "lg:justify-end"
              }`}
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              <span className="max-w-md">{h}</span>
            </li>
          ))}
        </ul>
        <div
          className={`flex flex-wrap items-center gap-3 ${
            isEven ? "" : "lg:justify-end"
          }`}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-gold-light"
          >
            <ExternalLink className="h-4 w-4" />
            Live app
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            View code
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {project.endpoint && (
          <div className="mb-4 flex items-center gap-2 text-xs text-cream/40">
            <Radio className="h-3.5 w-3.5" />
            <span className="font-mono">{project.endpoint}</span>
          </div>
        )}
        <div className="space-y-2 font-mono text-xs text-cream/60">
          <div className="flex items-center gap-2">
            <span className="text-gold">$</span>
            <span>curl -X POST {project.endpoint || project.liveUrl}</span>
          </div>
          <div className="rounded-lg border border-border bg-black/30 p-3">
            <span className="text-cream/40">POST body</span>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-all text-cream/70">
              {JSON.stringify(
                {
                  jsonrpc: "2.0",
                  id: 1,
                  method: "tools/list",
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-30"
          style={{ background: project.accent }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
            Built in public
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="heading-gradient">Five projects. One protocol.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-cream/55">
            A progressive tour of the Model Context Protocol, from the first
            server to a cost-aware host that refuses to overspend.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
