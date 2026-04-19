"use client";

import { useState } from "react";
import { Compass, FlaskConical, Rocket, BarChart2, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Compass, phase:"Fase 01", title:"Diagnóstico & Estratégia", duration:"Semanas 1–2", color:"#6B4EFF",
    description:"Auditoria completa da presença digital, entendimento do mercado, concorrentes e ICP. Entregamos um roadmap estratégico com prioridades claras e resultados esperados por fase.",
    actions:["Entrevistas com stakeholders","Auditoria digital completa","Análise de concorrentes","Definição de KPIs e metas"],
  },
  {
    icon: FlaskConical, phase:"Fase 02", title:"Fundação & Posicionamento", duration:"Semanas 3–6", color:"#8B6CFF",
    description:"Construção da base: posicionamento de marca, mensagem principal, identidade digital e estrutura técnica para escalar. Sem fundação sólida, nenhuma estratégia sustenta.",
    actions:["Plataforma de marca","Site otimizado para conversão","Setup de analytics e CRM","Criação de conteúdos âncora"],
  },
  {
    icon: Rocket, phase:"Fase 03", title:"Execução & Geração de Demanda", duration:"Meses 2–4", color:"#A58BFF",
    description:"Ativação de todos os canais definidos na estratégia. Conteúdo publicado, campanhas ativas, SEO em evolução e ABM em movimento. O pipeline começa a se formar.",
    actions:["Produção e publicação de conteúdo","Campanhas de geração de demanda","ABM para contas prioritárias","Otimização do funil de conversão"],
  },
  {
    icon: BarChart2, phase:"Fase 04", title:"Otimização & Escala", duration:"Meses 4–6", color:"#6B4EFF",
    description:"Análise contínua dos dados para entender o que gera mais resultado e intensificar. Reduzimos o CAC, aumentamos a qualidade dos leads e maximizamos o ROI.",
    actions:["Análise de atribuição de leads","Testes A/B em páginas e campanhas","Expansão de canais vencedores","Relatórios executivos mensais"],
  },
  {
    icon: RefreshCw, phase:"Fase 05", title:"Crescimento Contínuo", duration:"A partir do mês 6", color:"#8B6CFF",
    description:"Com a máquina rodando, focamos em expansão: novos mercados, novos conteúdos, novas campanhas. Crescimento previsível com um motor de marketing sempre ativo.",
    actions:["Planejamento trimestral de conteúdo","Expansão para novos canais","Programas de indicação estruturados","Revisão estratégica trimestral"],
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <section id="processo" className="relative section-padding overflow-hidden" style={{ background:"#06040F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="tag-badge mb-5 inline-flex">Metodologia</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Um processo <span className="gradient-text">sem achismos</span>,{" "}
            <br className="hidden md:block" />
            do diagnóstico ao crescimento
          </h2>
          <p className="text-white/48 text-lg leading-relaxed">
            Cada projeto segue uma metodologia estruturada que elimina desperdício de recursos e maximiza resultados em cada fase.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {steps.map((s,i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={active===i
                ? { background:`rgba(107,78,255,0.12)`, border:`1px solid rgba(107,78,255,0.3)`, color:"#A58BFF" }
                : { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.35)" }
              }>
              <span className="text-xs font-bold" style={{ fontFamily:"monospace" }}>
                {String(i+1).padStart(2,"0")}
              </span>
              <span className="hidden sm:block">{s.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-2xl glass-card relative overflow-hidden"
          style={{ borderColor:`${step.color}22` }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background:`radial-gradient(ellipse at 0% 0%,${step.color}08 0%,transparent 60%)` }} />

          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background:`${step.color}12`, border:`1px solid ${step.color}22` }}>
                <Icon className="w-5 h-5" style={{ color:step.color }} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color:`${step.color}80`, fontFamily:"monospace" }}>{step.phase}</p>
                <p className="text-xs text-white/32">{step.duration}</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{step.description}</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 rounded-full" style={{ background:"rgba(255,255,255,0.07)" }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width:`${((active+1)/steps.length)*100}%`, background:`linear-gradient(90deg,${step.color},${step.color}80)` }} />
              </div>
              <span className="text-xs text-white/28" style={{ fontFamily:"monospace" }}>{active+1}/{steps.length}</span>
            </div>
          </div>

          <div className="relative">
            <h4 className="text-white/50 font-medium text-xs mb-4 uppercase tracking-wider">Atividades desta fase</h4>
            <ul className="space-y-2.5">
              {step.actions.map((a,j) => (
                <li key={j} className="flex items-center gap-3 p-3 rounded-xl" style={{ background:"rgba(255,255,255,0.03)" }}>
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{ background:`${step.color}15`, color:step.color, fontFamily:"monospace" }}>{j+1}</div>
                  <span className="text-white/60 text-sm">{a}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-7">
              <button onClick={() => setActive(Math.max(0,active-1))} disabled={active===0}
                className="flex-1 py-3 rounded-xl text-sm font-medium border text-white/38 hover:text-white/65 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
                style={{ borderColor:"rgba(255,255,255,0.08)" }}>← Anterior</button>
              <button onClick={() => setActive(Math.min(steps.length-1,active+1))} disabled={active===steps.length-1}
                className="flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
                style={{ background:`${step.color}15`, border:`1px solid ${step.color}28`, color:step.color }}>Próxima →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
