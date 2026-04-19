import { ArrowRight, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="cases" className="relative section-padding overflow-hidden" style={{ background:"#06040F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        style={{ background:"radial-gradient(circle,rgba(107,78,255,0.04) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="tag-badge mb-6 inline-flex">Cases & Depoimentos</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Resultados que{" "}
          <span className="gradient-text">falam por si</span>
        </h2>
        <p className="text-white/45 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Estamos documentando os resultados dos nossos clientes para compartilhar em breve. Se quiser saber mais sobre nossa metodologia e cases, fale diretamente com a nossa equipe.
        </p>

        {/* CTA card */}
        <div className="inline-flex flex-col items-center p-10 rounded-2xl relative overflow-hidden mx-auto"
          style={{ background:"rgba(107,78,255,0.07)", border:"1px solid rgba(107,78,255,0.18)", maxWidth:480 }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:"radial-gradient(ellipse at 50% 0%,rgba(107,78,255,0.1) 0%,transparent 60%)" }} />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
              style={{ background:"rgba(107,78,255,0.15)", border:"1px solid rgba(107,78,255,0.3)" }}>
              <MessageSquare className="w-5 h-5" style={{ color:"#A58BFF" }} />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Converse com a equipe</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Conte sobre o seu contexto e entenda como trabalhamos. Sem pitch, sem pressão.
            </p>
            <a href="#diagnostico" className="btn-primary">
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
