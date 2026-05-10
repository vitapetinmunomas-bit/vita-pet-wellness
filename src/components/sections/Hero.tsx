import heroImg from "@/assets/hero-vitapet.jpg";
import { MAILTO_BUY } from "@/lib/links";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Golden retriever y gato atigrado en un bosque chileno al amanecer rodeados de hongos medicinales"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream pt-24 pb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-forest/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold">
          <Sparkles className="w-3.5 h-3.5" /> Hongos medicinales · liofilizados
        </span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-6 leading-[1.05]">
          Inmunidad que los
          <br />
          <span className="text-gold italic">acompaña siempre</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-cream/85 max-w-2xl mx-auto">
          Suplemento de 6 hongos medicinales nativos de Chile ·{" "}
          <span className="text-cream">Doypack 60 g · polvo liofilizado</span>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={MAILTO_BUY}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-leaf px-7 py-3.5 font-medium text-cream shadow-gold hover:scale-[1.02] transition"
          >
            Comprar ahora — $22.000 CLP
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#beneficios"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 font-medium text-cream hover:bg-cream/10 transition"
          >
            Conocer más
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--background))",
        }}
        aria-hidden
      />
    </section>
  );
}
