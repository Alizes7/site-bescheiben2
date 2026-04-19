"use client";

import { useState } from "react";
import { Search, FileText, Globe, BarChart3, Layers, Megaphone, X, ArrowRight, CheckCircle2 } from "lucide-react";

const BRAND = "#6B4EFF";
const services = [
  {
    icon: Globe, color:"#6B4EFF", tag:"Fundação",
    title:"Estratégia Digital B2B",
    shortDesc:"Diagnóstico completo e roadmap customizado para o seu mercado.",
    fullDesc:"Antes de executar, entendemos. Mapeamos seu ICP, auditamos a presença atual, analisamos concorrentes e construímos um roadmap estratégico com prioridades claras e métricas de sucesso definidas.",
    deliverables:["Diagnóstico de presença digital","Mapa de ICP e Buyer Personas","Análise competitiva aprofundada","Roadmap estratégico 90/180 dias","KPIs e metas por fase"],
  },
  {
    icon: Search, color:"#8B6CFF", tag:"Visibilidade",
    title:"SEO & Autoridade Orgânica",
    shortDesc:"Apareça no topo quando seu cliente ideal pesquisa soluções.",
    fullDesc:"SEO técnico, de conteúdo e de autoridade integrados. Construímos uma máquina orgânica que gera tráfego qualificado de forma crescente — sem depender exclusivamente de anúncios pagos.",
    deliverables:["Auditoria técnica de SEO","Pesquisa e clusterização de keywords","Otimização on-page e off-page","Link building editorial","Relatórios mensais de performance"],
  },
  {
    icon: FileText, color:"#A58BFF", tag:"Conteúdo",
    title:"Conteúdo & Inbound",
    shortDesc:"Conteúdo que educa, posiciona e gera demanda de verdade.",
    fullDesc:"Produzimos conteúdo estratégico em todas as etapas do funil: artigos de autoridade, cases de sucesso, whitepapers, newsletters e landing pages que convertem.",
    deliverables:["Estratégia editorial completa","Artigos de autoridade otimizados","Cases e materiais ricos","Email marketing e nurturing","Landing pages de conversão"],
  },
  {
    icon: Megaphone, color:"#6B4EFF", tag:"Geração de Demanda",
    title:"Account-Based Marketing",
    shortDesc:"Marketing cirúrgico direcionado às contas que você quer fechar.",
    fullDesc:"ABM para empresas B2B que perseguem contas específicas de alto valor. Identificamos, engajamos e convertemos decisores nas empresas certas — com personalização em escala.",
    deliverables:["Seleção e qualificação de contas-alvo","Conteúdo personalizado por conta","Campanhas multi-canal sincronizadas","Score de engajamento por conta","Inteligência de intenção de compra"],
  },
  {
    icon: Layers, color:"#8B6CFF", tag:"Identidade",
    title:"Branding & Posicionamento",
    shortDesc:"Construa uma marca que cobra o que vale e inspira confiança.",
    fullDesc:"Do reposicionamento estratégico à identidade visual completa. Criamos marcas B2B que comunicam expertise, geram confiança e justificam ticket premium.",
    deliverables:["Plataforma de marca e posicionamento","Identidade visual corporativa","Mensagem e tom de voz","Templates e brand guidelines","Apresentação institucional"],
  },
  {
    icon: BarChart3, color:"#A58BFF", tag:"Inteligência",
    title:"Analytics & RevOps",
    shortDesc:"Dados que guiam decisões — não relatórios que coletam poeira.",
    fullDesc:"Implementação de tracking completo, dashboards executivos e análise contínua. Você sabe exatamente o que está funcionando, o ROI real de cada canal e onde investir mais.",
    deliverables:["Setup completo de GA4 e Tag Manager","Dashboard executivo personalizado","Atribuição multi-touch de leads","Relatórios mensais com insights","Reuniões de revisão estratégica"],
  },
];

export default function ServicesSection() {
  const [modal, setModal] = useState<number|null>(null);

  return (
    <section id="servicos" className="relative section-padding overflow-hidden" style={{ background:"#0A0A0F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        style={{ background:"radial-gradient(circle,rgba(107,78,255,0.04) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="tag-badge mb-5 inline-flex">Serviços</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            O que entregamos para{" "}
            <span className="gradient-text">escalar seu negócio</span>
          </h2>
          <p className="text-white/48 text-lg leading-relaxed">
            Serviços integrados desenhados para empresas B2B que buscam crescimento previsível e posicionamento de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group relative p-6 rounded-2xl glass-card card-lift cursor-pointer overflow-hidden"
                onMouseEnter={e => { e.currentTarget.style.borderColor=`${s.color}28`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; }}
                onClick={() => setModal(i)}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background:`radial-gradient(ellipse at 0% 0%,${s.color}07 0%,transparent 60%)` }} />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:`${s.color}85` }}>{s.tag}</span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:`${s.color}12`, border:`1px solid ${s.color}20` }}>
                    <Icon style={{ color:s.color, width:17, height:17 }} />
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{s.title}</h3>
                <p className="text-white/43 text-sm leading-relaxed mb-5">{s.shortDesc}</p>

                <button className="flex items-center gap-2 text-sm font-medium group/btn" style={{ color:s.color }}>
                  Ver detalhes
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/35 text-sm mb-4">Não sabe por onde começar?</p>
          <a href="#diagnostico" className="btn-primary">
            Solicitar diagnóstico gratuito
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background:"rgba(6,4,15,0.88)", backdropFilter:"blur(16px)" }}
          onClick={() => setModal(null)}>
          <div className="relative w-full max-w-lg rounded-2xl p-8 glass-card overflow-y-auto"
            style={{ border:`1px solid ${services[modal].color}22`, maxHeight:"90vh" }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg glass flex items-center justify-center text-white/45 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>

            {(() => { const s=services[modal]; const Icon=s.icon; return (
              <>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:`${s.color}15`, border:`1px solid ${s.color}25` }}>
                  <Icon className="w-5 h-5" style={{ color:s.color }} />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color:`${s.color}80` }}>{s.tag}</span>
                <h3 className="text-white font-bold text-2xl mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{s.fullDesc}</p>
                <h4 className="text-white/70 font-semibold text-sm mb-3">O que está incluso:</h4>
                <ul className="space-y-2.5 mb-7">
                  {s.deliverables.map((d,j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color:s.color }} />
                      <span className="text-white/60 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
                <a href="#diagnostico" onClick={() => setModal(null)} className="btn-primary w-full justify-center">
                  Falar sobre este serviço <ArrowRight className="w-4 h-4" />
                </a>
              </>
            ); })()}
          </div>
        </div>
      )}
    </section>
  );
}
