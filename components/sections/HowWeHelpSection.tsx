"use client";

import { Target, BarChart3, Megaphone, Shield, Zap, Globe } from "lucide-react";

const pillars = [
  { icon:Target,    color:"#6B4EFF", title:"Posicionamento estratégico",  description:"Definimos seu lugar único no mercado. Proposta de valor que diferencia e justifica o ticket premium." },
  { icon:Globe,     color:"#8B6CFF", title:"Presença de autoridade",       description:"Site, SEO e conteúdo construídos para ser encontrado por quem decide comprar. Visibilidade onde importa." },
  { icon:Megaphone, color:"#A58BFF", title:"Geração de demanda",           description:"Estratégias de Inbound e ABM que atraem prospects com perfil ideal — qualidade sobre volume." },
  { icon:BarChart3, color:"#6B4EFF", title:"Pipeline previsível",          description:"Um funil com fluxo constante de oportunidades. Fim da dependência de indicações e sazonalidade." },
  { icon:Zap,       color:"#8B6CFF", title:"Conteúdo que educa e converte",description:"Artigos, cases e materiais que educam o mercado, constroem confiança e reduzem o ciclo de vendas." },
  { icon:Shield,    color:"#A58BFF", title:"Decisões orientadas a dados",  description:"Dashboards claros, atribuição real e otimização contínua. Você sabe exatamente o que está funcionando." },
];

export default function HowWeHelpSection() {
  return (
    <section className="relative section-padding overflow-hidden" style={{ background:"#06040F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb right-0 top-0 w-[500px] h-[500px]"
        style={{ background:"radial-gradient(circle,rgba(107,78,255,0.06) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="tag-badge mb-5 inline-flex">A solução</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Como transformamos{" "}
            <span className="gradient-text">expertise em crescimento</span>
          </h2>
          <p className="text-white/48 text-lg leading-relaxed">
            Uma abordagem integrada que leva sua empresa de invisível a referência de mercado — com estratégia, consistência e inteligência de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group relative p-6 rounded-2xl glass-card card-lift overflow-hidden cursor-default"
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${item.color}28`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div className="absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background:`radial-gradient(circle at 100% 0%,${item.color}0C 0%,transparent 70%)` }} />
                <div className="text-6xl font-bold absolute top-3 right-4 leading-none select-none"
                  style={{ fontFamily:"'Space Grotesk',sans-serif", color:`${item.color}07` }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:`${item.color}12`, border:`1px solid ${item.color}22` }}>
                  <Icon className="w-5 h-5" style={{ color:item.color }} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-white/43 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
