"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

interface Particle { x:number; y:number; vx:number; vy:number; r:number; a:number; color:string }

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const pts       = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx)  return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const cols = ["rgba(107,78,255,","rgba(165,139,255,","rgba(196,181,253,"];
    pts.current = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx:(Math.random()-0.5)*0.28,       vy:(Math.random()-0.5)*0.28,
      r: Math.random()*1.4+0.4,          a: Math.random()*0.5+0.1,
      color: cols[Math.floor(Math.random()*cols.length)],
    }));

    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.current.forEach((p,i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0) p.x=canvas.width;  if (p.x>canvas.width)  p.x=0;
        if (p.y<0) p.y=canvas.height; if (p.y>canvas.height) p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`${p.color}${p.a})`; ctx.fill();
        for (let j=i+1; j<pts.current.length; j++) {
          const q=pts.current[j], dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
          if (d<110) { ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
            ctx.strokeStyle=`rgba(107,78,255,${0.07*(1-d/110)})`; ctx.lineWidth=0.5; ctx.stroke(); }
        }
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize",resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity:0.65 }} />
      <div className="absolute inset-0 grid-bg opacity-35" />

      {/* Radial orb */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse 75% 55% at 50% 45%, rgba(107,78,255,0.09) 0%, transparent 70%)" }} />
      <div className="orb -top-40 -right-40 w-96 h-96"
        style={{ background:"radial-gradient(circle, rgba(107,78,255,0.12) 0%, transparent 70%)" }} />
      <div className="orb -bottom-40 -left-40 w-96 h-96"
        style={{ background:"radial-gradient(circle, rgba(74,50,212,0.08) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Pre-tag */}
        <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
          style={{ background:"rgba(107,78,255,0.1)", border:"1px solid rgba(107,78,255,0.22)" }}>
          <Zap className="w-3.5 h-3.5" style={{ color:"#A58BFF" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#C4B5FD" }}>
            Signal Nexus · B2B Digital Agency
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] tracking-tight max-w-5xl mx-auto mb-7">
          Sistemas de{" "}
          <span className="gradient-text">crescimento previsível</span>
          <br className="hidden sm:block" />
          para empresas B2B de{" "}
          <span style={{ color:"#A58BFF" }}>tecnologia.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          Construímos a infraestrutura de marketing que transforma expertise técnica em
          demanda qualificada — com estratégia orientada a dados e execução disciplinada.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#diagnostico" className="btn-primary text-base">
            Começar projeto
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#servicos" className="btn-secondary text-base">
            Ver serviços
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background:"linear-gradient(to bottom, transparent, #0A0A0F)" }} />
    </section>
  );
}
