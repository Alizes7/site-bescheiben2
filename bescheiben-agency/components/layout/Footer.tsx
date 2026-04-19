import { ExternalLink, Share2, Mail, ArrowRight, MapPin } from "lucide-react";

const services = [
  "Estratégia Digital B2B",
  "Geração de Demanda",
  "SEO & Autoridade",
  "Branding Corporativo",
  "Conteúdo & Inbound",
  "Analytics & RevOps",
];

export default function Footer() {
  return (
    <footer className="relative border-t bg-[#06040F]" style={{ borderColor: "rgba(107,78,255,0.08)" }}>
      {/* CTA band */}
      <div className="border-b py-12" style={{ borderColor: "rgba(107,78,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(107,78,255,0.7)" }}>
              Próximo passo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Vamos construir seu sistema de{" "}
              <span className="gradient-text">crescimento previsível.</span>
            </h2>
          </div>
          <a
            href="#diagnostico"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-white px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#6B4EFF,#8B6CFF)", boxShadow: "0 4px 20px rgba(107,78,255,0.3)" }}
          >
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,#6B4EFF,#8B6CFF)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <line x1="3" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="3" x2="9" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base block leading-none">Bescheiben</span>
                <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(107,78,255,0.85)" }}>Digital Agency</span>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">
              Construímos sistemas de crescimento previsível para empresas B2B de tecnologia. Estratégia orientada a dados, execução disciplinada, resultados mensuráveis.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-white/35 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2.5 mt-5">
              {[
                { href: "https://linkedin.com/company/bescheiben", icon: ExternalLink, label: "LinkedIn" },
                { href: "https://instagram.com/bescheiben",        icon: Share2,       label: "Instagram" },
                { href: "mailto:bescheiben@gmail.com",  icon: Mail,         label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/35 hover:text-[#A58BFF] transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-white/38 hover:text-white/75 text-sm transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Contato</h3>
            <ul className="space-y-3 text-sm text-white/38">
              <li>
                <a href="mailto:bescheiben@gmail.com" className="hover:text-white/75 transition-colors break-all">
                  bescheiben@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(107,78,255,0.08)", border: "1px solid rgba(107,78,255,0.15)" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#C4B5FD" }}>Diagnóstico gratuito</p>
              <p className="text-xs text-white/38 leading-relaxed">Análise da sua presença digital sem custo ou compromisso.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-5" style={{ borderColor: "rgba(107,78,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Bescheiben Digital Agency. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="/privacidade" className="text-xs text-white/25 hover:text-white/55 transition-colors">Privacidade</a>
            <a href="/termos"      className="text-xs text-white/25 hover:text-white/55 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
