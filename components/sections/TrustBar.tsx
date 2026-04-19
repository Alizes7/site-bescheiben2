"use client";

const segments = [
  "Tecnologia & SaaS","Consultoria Empresarial","Indústria & Manufatura",
  "Saúde & Healthtech","Logística & Supply Chain","Fintechs","Educação Corporativa","Engenharia",
];

export default function TrustBar() {
  return (
    <section className="relative py-10 overflow-hidden bg-[#06040F]"
      style={{ borderTop:"1px solid rgba(107,78,255,0.07)", borderBottom:"1px solid rgba(107,78,255,0.07)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"linear-gradient(90deg,#06040F 0%,transparent 12%,transparent 88%,#06040F 100%)", zIndex:2 }} />

      <div className="max-w-7xl mx-auto px-6 mb-5">
        <p className="text-center text-white/22 text-xs font-medium tracking-widest uppercase">
          Segmentos B2B atendidos
        </p>
      </div>

      <div className="relative overflow-hidden" style={{ zIndex:1 }}>
        <div className="marquee-track flex gap-5 whitespace-nowrap" style={{ width:"max-content" }}>
          {[...segments,...segments,...segments].map((seg,i) => (
            <div key={i} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full shrink-0"
              style={{ background:"rgba(107,78,255,0.06)", border:"1px solid rgba(107,78,255,0.12)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#6B4EFF", opacity:0.6 }} />
              <span className="text-sm font-medium" style={{ color:"rgba(165,139,255,0.55)" }}>{seg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
