"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const segments = ["Tecnologia / SaaS","Consultoria & Serviços","Indústria & Manufatura","Saúde & Healthtech","Financeiro & Fintechs","Logística & Supply Chain","Educação Corporativa","Outro"];
const revenues  = ["Até R$ 1M/ano","R$ 1M – R$ 5M/ano","R$ 5M – R$ 20M/ano","R$ 20M – R$ 100M/ano","Acima de R$ 100M/ano"];

const empty = { name:"", email:"", company:"", role:"", phone:"", segment:"", challenge:"", revenue:"" };

export default function DiagnosticoSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form,    setForm   ] = useState(empty);
  const [errors,  setErrors ] = useState<Record<string,string>>({});

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const {name,value} = e.target;
    setForm(p => ({...p,[name]:value}));
    if (errors[name]) setErrors(p => ({...p,[name]:""}));
  };

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())                            e.name      = "Obrigatório";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!form.company.trim())                         e.company   = "Obrigatório";
    if (!form.role.trim())                            e.role      = "Obrigatório";
    if (!form.phone.trim())                           e.phone     = "Obrigatório";
    if (!form.segment)                                e.segment   = "Selecione";
    if (form.challenge.length < 20)                   e.challenge = "Mín. 20 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res  = await fetch("/api/diagnostico", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setSuccess(true); toast.success("Diagnóstico solicitado!"); }
      else toast.error(data.error || "Erro ao enviar.");
    } catch { toast.error("Erro de conexão."); }
    finally   { setLoading(false); }
  };

  const InputLabel = ({ label, error }: { label:string; error?:string }) => (
    <div className="flex justify-between mb-1.5">
      <label className="text-xs font-medium uppercase tracking-wider text-white/40">{label}</label>
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );

  return (
    <section id="diagnostico" className="relative section-padding overflow-hidden" style={{ background:"#06040F" }}>
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="orb left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px]"
        style={{ background:"radial-gradient(ellipse,rgba(107,78,255,0.07) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full"
            style={{ background:"rgba(107,78,255,0.1)", border:"1px solid rgba(107,78,255,0.25)" }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color:"#A58BFF" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#C4B5FD" }}>
              100% gratuito · Sem compromisso
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Diagnóstico digital{" "}
            <span className="gradient-text">gratuito</span>
          </h2>
          <p className="text-white/48 text-lg leading-relaxed max-w-2xl mx-auto">
            Nossa equipe analisa sua presença digital, identifica as principais oportunidades e entrega um plano de ação inicial — sem custo, sem compromisso.
          </p>
        </div>

        {!success ? (
          <div className="p-8 md:p-10 rounded-2xl glass-card"
            style={{ borderColor:"rgba(107,78,255,0.14)" }}>
            <form onSubmit={submit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <InputLabel label="Nome *" error={errors.name} />
                  <input name="name" value={form.name} onChange={change} placeholder="Seu nome completo" className="input-field" />
                </div>
                <div>
                  <InputLabel label="Email corporativo *" error={errors.email} />
                  <input name="email" type="email" value={form.email} onChange={change} placeholder="voce@empresa.com.br" className="input-field" />
                </div>
                <div>
                  <InputLabel label="Empresa *" error={errors.company} />
                  <input name="company" value={form.company} onChange={change} placeholder="Nome da empresa" className="input-field" />
                </div>
                <div>
                  <InputLabel label="Cargo *" error={errors.role} />
                  <input name="role" value={form.role} onChange={change} placeholder="Ex: CEO, Diretor de Marketing" className="input-field" />
                </div>
                <div>
                  <InputLabel label="Telefone / WhatsApp *" error={errors.phone} />
                  <input name="phone" value={form.phone} onChange={change} placeholder="+55 11 9 0000-0000" className="input-field" />
                </div>
                <div>
                  <InputLabel label="Segmento *" error={errors.segment} />
                  <select name="segment" value={form.segment} onChange={change} className="input-field" style={{ appearance:"none" }}>
                    <option value="" style={{ background:"#100D2A" }}>Selecione...</option>
                    {segments.map(s => <option key={s} value={s} style={{ background:"#100D2A" }}>{s}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <InputLabel label="Faturamento anual (opcional)" />
                  <select name="revenue" value={form.revenue} onChange={change} className="input-field" style={{ appearance:"none" }}>
                    <option value="" style={{ background:"#100D2A" }}>Prefiro não informar</option>
                    {revenues.map(r => <option key={r} value={r} style={{ background:"#100D2A" }}>{r}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <InputLabel label="Principal desafio de marketing hoje *" error={errors.challenge} />
                  <textarea name="challenge" value={form.challenge} onChange={change} rows={4}
                    placeholder="Ex: Geramos poucos leads qualificados, nossa taxa de conversão é baixa, não temos presença digital relevante..."
                    className="input-field resize-none" />
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="mt-7 w-full flex items-center justify-center gap-3 text-base font-semibold text-white py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed"
                style={{ background:"linear-gradient(135deg,#6B4EFF,#8B6CFF)", boxShadow:"0 8px 30px rgba(107,78,255,0.3)" }}>
                {loading
                  ? <><Loader2 className="w-5 h-5 animate-spin" />Enviando...</>
                  : <>Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" /></>
                }
              </button>
              <p className="text-center text-white/22 text-xs mt-3">Retorno em até 24h úteis · Sem spam · Sem compromisso</p>
            </form>
          </div>
        ) : (
          <div className="p-12 rounded-2xl glass-card text-center" style={{ borderColor:"rgba(107,78,255,0.2)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background:"rgba(107,78,255,0.12)", border:"1px solid rgba(107,78,255,0.3)" }}>
              <CheckCircle className="w-8 h-8" style={{ color:"#A58BFF" }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico solicitado!</h3>
            <p className="text-white/45 text-base">Nossa equipe entrará em contato em até <span style={{ color:"#A58BFF" }} className="font-semibold">24 horas úteis.</span></p>
          </div>
        )}
      </div>
    </section>
  );
}
