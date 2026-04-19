"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagnóstico%20gratuito."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
      style={{ background:"linear-gradient(135deg,#25D366,#1DA851)", boxShadow:"0 4px 20px rgba(37,211,102,0.3)" }}>
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}
