"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GitBranch } from "lucide-react";

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          KetanShukla<span className="text-gold">.</span>dev
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/ketankshukla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold transition-all hover:bg-gold/10"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden rounded-md p-2 text-foreground/80 hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-gold/10 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/ketankshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
