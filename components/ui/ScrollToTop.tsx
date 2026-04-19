"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
      style={{ background:"rgba(107,78,255,0.15)", border:"1px solid rgba(107,78,255,0.28)", backdropFilter:"blur(12px)", boxShadow:"0 4px 20px rgba(107,78,255,0.2)" }}>
      <ChevronUp className="w-4 h-4" style={{ color:"#A58BFF" }} />
    </button>
  );
}
