"use client";

import Image from "next/image";
import { ArrowDown, Code2, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-8 flex justify-center animate-fadeInUp">
          <Image
            src="/images/ketan-shukla.jpeg"
            alt="Ketan Shukla"
            width={160}
            height={160}
            priority
            className="h-32 w-32 rounded-full object-cover border-2 border-gold/30 shadow-gold sm:h-40 sm:w-40"
          />
        </div>

        <p className="mb-4 animate-fadeInUp text-xs font-semibold uppercase tracking-[0.3em] text-gold/70 sm:text-sm">
          MCP Developer & AI Systems Engineer
        </p>

        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          <span className="heading-gradient">Ketan Shukla</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl animate-fadeInUp text-base leading-relaxed text-cream/55 sm:text-lg">
          I build the full stack around the Model Context Protocol: servers that
          expose tools, hosts that run the loop, gates that ask first, crews
          that delegate, and ledgers that refuse the bill.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeInUp">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View the work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 animate-fadeInUp">
          {[
            { icon: Code2, label: "MCP projects", value: "5" },
            { icon: Layers, label: "deployed endpoints", value: "5" },
            { icon: Cpu, label: "open-source repos", value: "5" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 sm:p-6 hover-lift"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <div className="text-2xl font-bold text-cream sm:text-3xl">
                {value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-cream/40 sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
