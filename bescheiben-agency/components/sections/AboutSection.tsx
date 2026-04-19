"use client";

import { Award, Heart, Lightbulb, TrendingUp } from "lucide-react";

const pillars = [
  { icon:TrendingUp, color:"#6B4EFF", title:"Resultado acima de tudo",       desc:"Métricas de vaidade não nos interessam. Focamos em pipeline, receita e crescimento real." },
  { icon:Lightbulb,  color:"#8B6CFF", title:"Estratégia antes de execução",   desc:"Toda ação é precedida de uma razão clara. Não executamos por executar." },
  { icon:Award,      color:"#A58BFF", title:"Especialização B2B",              desc:"Entendemos ciclos longos, múltiplos decisores e mercados tecnicamente complexos." },
  { icon:Heart,      color:"#6B4EFF", title:"Parceria de verdade",             desc:"Trabalhamos como extensão do seu time, com transparência total e comunicação constante." },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden" style={{ background:"#0A0A0F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb right-0 bottom-0 w-[450px] h-[450px]"
        style={{ background:"radial-gradient(circle,rgba(74,50,212,0.06) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <div className="tag-badge mb-6">Quem somos</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Nascemos para resolver o problema mais{" "}
              <span style={{ color:"#A58BFF" }}>caro do B2B</span>
            </h2>
            <div className="space-y-4 text-white/48 text-base leading-relaxed">
              <p>
                A Bescheiben nasceu de uma frustração real: empresas B2B incríveis, com soluções que transformam negócios, perdendo para concorrentes mediocres apenas por não saber se comunicar no digital.
              </p>
              <p>
                Fundada em São Paulo por especialistas com histórico em grandes agências e dentro de empresas B2B, construímos uma metodologia própria que entende a complexidade do ciclo de vendas longo, dos múltiplos stakeholders e das decisões baseadas em confiança.
              </p>
              <p>
                <strong className="text-white/75">Não vendemos pacotes. Construímos sistemas.</strong>{" "}
                Cada cliente recebe atenção dedicada, time sênior e transparência total sobre o que está sendo feito e por quê.
              </p>
            </div>
          </div>

          {/* Right: brand statement */}
          <div className="p-8 rounded-2xl relative overflow-hidden"
            style={{ background:"rgba(107,78,255,0.07)", border:"1px solid rgba(107,78,255,0.16)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background:"radial-gradient(ellipse at 50% 0%,rgba(107,78,255,0.12) 0%,transparent 60%)" }} />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background:"linear-gradient(135deg,#6B4EFF,#8B6CFF)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <line x1="3" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="3" x2="9" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <p className="text-white/65 text-xs font-medium tracking-widest uppercase mb-3" style={{ color:"rgba(165,139,255,0.7)" }}>
                Brand Statement
              </p>
              <blockquote className="text-white text-xl font-semibold leading-snug mb-4">
                "Construímos sistemas de crescimento previsível para empresas B2B de tecnologia."
              </blockquote>
              <p className="text-white/40 text-sm leading-relaxed">
                Referências visuais: Stripe · Vercel · Linear · OpenAI.<br />
                Estética: minimalista, futurista, tecnológico, premium.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div>
          <h3 className="text-white font-bold text-xl mb-8 text-center">Nossos pilares</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p,i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-5 rounded-2xl glass-card text-center card-lift"
                  onMouseEnter={e => (e.currentTarget.style.borderColor=`${p.color}28`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor="rgba(255,255,255,0.07)")}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background:`${p.color}12`, border:`1px solid ${p.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color:p.color }} />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
                  <p className="text-white/38 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
