"use client";

import { AlertTriangle, TrendingDown, Users, Search } from "lucide-react";

const challenges = [
  {
    icon: Search,
    title: "Invisibilidade digital",
    description: "Sua empresa tem anos de expertise, mas quando o cliente pesquisa, encontra o concorrente. O Google não conhece o seu valor.",
  },
  {
    icon: Users,
    title: "Dependência de indicações",
    description: "O pipeline depende 100% de indicações e relacionamento. Funciona — até parar. Escalabilidade zero e previsibilidade nenhuma.",
  },
  {
    icon: TrendingDown,
    title: "Conteúdo sem estratégia",
    description: "Há investimento em posts e artigos, mas sem arquitetura de demanda. Engajamento vazio, funil estagnado.",
  },
  {
    icon: AlertTriangle,
    title: "Posicionamento genérico",
    description: "A comunicação não diferencia. Em mercados B2B técnicos, ser genérico significa competir apenas por preço.",
  },
];

export default function ChallengeSection() {
  return (
    <section className="relative section-padding overflow-hidden" style={{ background:"#0A0A0F" }}>
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="orb left-0 top-1/2 -translate-y-1/2 w-80 h-80"
        style={{ background:"radial-gradient(circle,rgba(74,50,212,0.07) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="tag-badge mb-5">O diagnóstico</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Empresas B2B excepcionais,{" "}
            <span style={{ color:"#A58BFF" }}>invisíveis</span>{" "}
            para os clientes certos
          </h2>
          <p className="text-white/48 text-lg leading-relaxed">
            Você constrói soluções complexas, entrega valor real, tem conhecimento profundo do mercado — mas sua presença digital não reflete isso. Reconhece algum desses cenários?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group relative p-6 rounded-2xl glass-card card-lift"
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(107,78,255,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background:"radial-gradient(ellipse at 20% 50%,rgba(107,78,255,0.05) 0%,transparent 70%)" }} />
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background:"rgba(107,78,255,0.1)", border:"1px solid rgba(107,78,255,0.18)" }}>
                    <Icon className="w-5 h-5" style={{ color:"#A58BFF" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-white/43 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl relative overflow-hidden"
          style={{ background:"linear-gradient(135deg,rgba(107,78,255,0.08),rgba(107,78,255,0.04))", border:"1px solid rgba(107,78,255,0.16)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:"radial-gradient(ellipse at 50% 0%,rgba(107,78,255,0.1) 0%,transparent 60%)" }} />
          <p className="relative text-lg md:text-xl text-white/75 leading-relaxed font-light">
            O problema não é a qualidade do que você entrega.
            <br />
            <strong className="text-white font-semibold">
              É que os clientes certos ainda não sabem que você existe.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
