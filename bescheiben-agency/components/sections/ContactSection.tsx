"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Estratégia Digital B2B","SEO & Autoridade Orgânica","Conteúdo & Inbound",
  "Account-Based Marketing","Branding & Posicionamento","Analytics & RevOps",
  "Não sei ainda — quero conversar",
];

const empty = { name:"", email:"", company:"", phone:"", service:"", message:"" };

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form,    setForm   ] = useState(empty);

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({...p,[e.target.name]:e.target.value}));

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.name||!form.email||!form.company||!form.message) { toast.error("Preencha os campos obrigatórios."); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/contact",{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setSuccess(true); toast.success("Mensagem enviada!"); }
      else toast.error(data.error||"Erro ao enviar.");
    } catch { toast.error("Erro de conexão."); }
    finally  { setLoading(false); }
  };

  return (
    <section id="contato" className="relative section-padding overflow-hidden" style={{ background:"#0A0A0F" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]"
        style={{ background:"radial-gradient(circle,rgba(107,78,255,0.06) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="tag-badge mb-6">Fale conosco</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Vamos conversar sobre{" "}
              <span className="gradient-text">seu crescimento</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              Tem uma dúvida, quer entender melhor algum serviço ou só quer ver se faz sentido trabalharmos juntos? Manda mensagem — sem pitch, sem pressão.
            </p>

            <div className="space-y-3">
              {[
                { icon:Mail,   label:"Email",       value:"bescheiben@gmail.com", href:"mailto:bescheiben@gmail.com" },
                { icon:MapPin, label:"Localização", value:"São Paulo, Brasil",     href:null },
              ].map(({ icon:Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-3 p-4 rounded-xl glass-card group hover:border-[rgba(107,78,255,0.2)] transition-all duration-200">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background:"rgba(107,78,255,0.1)", border:"1px solid rgba(107,78,255,0.18)" }}>
                      <Icon className="w-4 h-4" style={{ color:"#A58BFF" }} />
                    </div>
                    <div>
                      <p className="text-white/32 text-xs mb-0.5">{label}</p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors">{value}</p>
                    </div>
                  </div>
                );
                return href
                  ? <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer">{inner}</a>
                  : <div key={label}>{inner}</div>;
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {!success ? (
              <div className="p-8 rounded-2xl glass-card">
                <form onSubmit={submit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {name:"name",    type:"text",  label:"Nome *",     ph:"Seu nome"},
                      {name:"email",   type:"email", label:"Email *",    ph:"voce@empresa.com"},
                      {name:"company", type:"text",  label:"Empresa *",  ph:"Nome da empresa"},
                      {name:"phone",   type:"tel",   label:"Telefone",   ph:"+55 11 9 0000-0000"},
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-xs font-medium uppercase tracking-wider text-white/38 mb-1.5">{f.label}</label>
                        <input name={f.name} type={f.type} value={(form as Record<string,string>)[f.name]} onChange={change} placeholder={f.ph} className="input-field" />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/38 mb-1.5">Serviço de interesse</label>
                      <select name="service" value={form.service} onChange={change} className="input-field" style={{ appearance:"none" }}>
                        <option value="" style={{ background:"#100D2A" }}>Selecione (opcional)</option>
                        {serviceOptions.map(s => <option key={s} value={s} style={{ background:"#100D2A" }}>{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/38 mb-1.5">Mensagem *</label>
                      <textarea name="message" value={form.message} onChange={change} rows={4} placeholder="Como posso ajudar?" className="input-field resize-none" required />
                    </div>
                  </div>
                  <button type="submit" disabled={loading}
                    className="mt-5 w-full flex items-center justify-center gap-2 btn-primary disabled:opacity-55 disabled:cursor-not-allowed">
                    {loading
                      ? <><Loader2 className="w-4 h-4 animate-spin"/>Enviando...</>
                      : <>Enviar mensagem <ArrowRight className="w-4 h-4"/></>
                    }
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 rounded-2xl glass-card text-center" style={{ borderColor:"rgba(107,78,255,0.2)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background:"rgba(107,78,255,0.12)", border:"1px solid rgba(107,78,255,0.28)" }}>
                  <CheckCircle className="w-7 h-7" style={{ color:"#A58BFF" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mensagem recebida!</h3>
                <p className="text-white/45 text-sm">Retornamos em até 24 horas úteis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
