"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados com marketing digital B2B?",
    answer: "Depende do canal. Em estratégias de conteúdo e SEO, resultados orgânicos consistentes aparecem entre 3 e 6 meses. Campanhas de geração de demanda podem gerar leads já nas primeiras semanas. Nossa abordagem combina ações de curto prazo com construção de ativos de longo prazo.",
  },
  {
    question: "Vocês atendem empresas de todos os tamanhos?",
    answer: "Trabalhamos principalmente com empresas B2B que já têm produto ou serviço validado e time comercial ativo. Não exigimos um tamanho mínimo, mas nossos resultados são mais expressivos em empresas com capacidade de absorver o crescimento de pipeline que geramos.",
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer: "Você preenche o formulário com informações sobre sua empresa e principal desafio. Em até 24 horas, um estrategista sênior entra em contato para agendar uma sessão de análise. Nessa sessão, examinamos sua presença digital atual, identificamos oportunidades e apresentamos um plano de ação inicial — sem custo e sem compromisso de contratação.",
  },
  {
    question: "Vocês trabalham com contrato de longo prazo?",
    answer: "Oferecemos projetos pontuais e contratos de retainer mensal. Nos contratos mensais, recomendamos um mínimo de 6 meses — não por cláusula rígida, mas porque marketing B2B de qualidade leva tempo para maturar. Após esse período, você pode revisar a parceria a qualquer momento.",
  },
  {
    question: "Qual a diferença entre vocês e uma agência generalista?",
    answer: "Agências generalistas criam conteúdo. Nós construímos sistemas de geração de demanda. A diferença está no foco: entendemos ciclos de vendas longos, múltiplos decisores, propostas de valor complexas e mercados técnicos. Nossa equipe tem experiência trabalhando dentro de empresas B2B — não só prestando serviços para elas.",
  },
  {
    question: "Como é feito o acompanhamento e a comunicação?",
    answer: "Cada cliente tem um estrategista responsável e acesso a dashboards em tempo real. Realizamos reuniões quinzenais de revisão de resultados e alinhamento estratégico, além de comunicação via canal dedicado. Você sempre sabe o que está sendo feito, por que e qual o resultado esperado.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number|null>(null);

  return (
    <section id="faq" className="relative section-padding overflow-hidden" style={{ background:"#0A0A0F" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org","@type":"FAQPage",
            mainEntity: faqs.map(f => ({
              "@type":"Question", name:f.question,
              acceptedAnswer:{ "@type":"Answer", text:f.answer },
            })),
          }),
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px]"
        style={{ background:"radial-gradient(ellipse,rgba(107,78,255,0.05) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="tag-badge mb-5 inline-flex">Perguntas frequentes</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Dúvidas comuns antes de{" "}
            <span className="gradient-text">começar</span>
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq,i) => {
            const isOpen = open===i;
            return (
              <div key={i} className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen?"rgba(107,78,255,0.07)":"rgba(255,255,255,0.03)",
                  border:`1px solid ${isOpen?"rgba(107,78,255,0.22)":"rgba(255,255,255,0.06)"}`,
                }}>
                <button onClick={() => setOpen(isOpen?null:i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left" aria-expanded={isOpen}>
                  <span className="text-white/78 font-medium text-sm leading-relaxed">{faq.question}</span>
                  {isOpen
                    ? <Minus className="w-4 h-4 shrink-0 mt-0.5" style={{ color:"#A58BFF" }} />
                    : <Plus  className="w-4 h-4 shrink-0 mt-0.5 text-white/28" />
                  }
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="h-px mb-4" style={{ background:"rgba(107,78,255,0.12)" }} />
                    <p className="text-white/48 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/28 text-sm mt-8">
          Ainda tem dúvidas?{" "}
          <a href="#contato" className="transition-colors" style={{ color:"#A58BFF" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#C4B5FD")}
            onMouseLeave={e=>(e.currentTarget.style.color="#A58BFF")}>
            Manda uma mensagem →
          </a>
        </p>
      </div>
    </section>
  );
}
