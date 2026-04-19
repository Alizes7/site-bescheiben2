"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Serviços",    href: "#servicos" },
  { label: "Metodologia", href: "#processo" },
  { label: "Sobre",       href: "#sobre" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contato",     href: "#contato" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [scrollPct,    setScrollPct]    = useState(0);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-75"
        style={{
          width:      `${scrollPct}%`,
          background: "linear-gradient(90deg, #6B4EFF, #A58BFF)",
        }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? { padding: "10px 0", background: "rgba(10,10,15,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(107,78,255,0.1)" }
            : { padding: "18px 0", background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow behind icon */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(107,78,255,0.35)", filter: "blur(8px)" }}
              />
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6B4EFF, #8B6CFF)" }}
              >
                {/* Signal Nexus mini mark */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <line x1="3" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="3" x2="9" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-base tracking-tight leading-none block">
                Bescheiben
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase leading-none" style={{ color: "rgba(107,78,255,0.85)" }}>
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200 relative group link-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#diagnostico"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:  "linear-gradient(135deg, #6B4EFF, #8B6CFF)",
                boxShadow:   "0 4px 20px rgba(107,78,255,0.3)",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(107,78,255,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(107,78,255,0.3)")}
            >
              Falar com a equipe
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 mx-4 rounded-2xl overflow-hidden glass border border-white/[0.07]">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/65 hover:text-white hover:bg-white/[0.04] px-4 py-3 rounded-xl text-sm font-medium transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded-xl"
                style={{ background: "linear-gradient(135deg, #6B4EFF, #8B6CFF)" }}
              >
                Falar com a equipe
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
