"use client";

import { useState, useEffect } from "react";
import { ArrowUp, GitBranch, Earth, Mail } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer id="contact" className="relative border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              KetanShukla<span className="text-gold">.</span>dev
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-cream/50">
              End-to-end Model Context Protocol systems — servers, hosts, gates,
              crews, and ledgers. Built to be understood, deployed, and trusted.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/ketankshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
              >
                <GitBranch className="h-4 w-4" />
                github.com/ketankshukla
              </a>
              <a
                href="https://ketanshukla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
              >
                <Earth className="h-4 w-4" />
                ketanshukla.com
              </a>
              <a
                href="mailto:resume@ketanshukla.com"
                className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                resume@ketanshukla.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Availability
            </h4>
            <p className="text-sm leading-relaxed text-cream/50">
              Open to full-time, contract, and advisory roles in AI
              infrastructure, agent platforms, and developer tooling. Based in
              San Diego, working worldwide.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/5 pt-8 sm:flex-row">
          <p className="text-sm text-cream/30">
            &copy; {new Date().getFullYear()} Ketan Shukla. All rights reserved.
          </p>
          <p className="text-sm text-cream/30">
            Built with Next.js 16, React 19, and Tailwind CSS v4.
          </p>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full glass shadow-gold transition-all hover:bg-gold/10 animate-fadeInScale"
        >
          <ArrowUp className="h-5 w-5 text-gold" />
        </button>
      )}
    </footer>
  );
}
