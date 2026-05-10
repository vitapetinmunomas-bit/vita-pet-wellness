import { Sprout, Snowflake, Wind, Layers, FlaskConical, Package } from "lucide-react";

const steps = [
  { n: "01", icon: Sprout, title: "Recolección", text: "Hongos medicinales seleccionados en su punto óptimo de madurez (Reishi, Shiitake, Maitake)." },
  { n: "02", icon: Snowflake, title: "Congelación profunda", text: "El hongo se congela a −40 °C para preservar todos sus compuestos bioactivos." },
  { n: "03", icon: Wind, title: "Vacío y sublimación", text: "El agua pasa de sólido a gas sin licuarse, conservando la estructura celular intacta." },
  { n: "04", icon: Layers, title: "Polvo liofilizado", text: "Polvo ultrafino con hasta 10× más concentración de beta-glucanos que el polvo simple." },
  { n: "05", icon: FlaskConical, title: "Control de calidad", text: "Análisis de biodisponibilidad y pureza antes del envasado, lote por lote." },
  { n: "06", icon: Package, title: "Frasco hermético", text: "60 g sellados, protegidos de humedad y luz, listos para tu mascota." },
];

export function Process() {
  return (
    <section id="proceso" className="py-28 bg-forest text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--gold) 0, transparent 35%), radial-gradient(circle at 80% 70%, var(--leaf) 0, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            El proceso
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">
            De la naturaleza al frasco,
            <br />
            <span className="italic text-gold">sin perder nada</span>
          </h2>
          <p className="mt-5 text-cream/75 max-w-2xl">
            La liofilización es el método más respetuoso con los compuestos
            activos. Conserva intactos los beta-glucanos, triterpenos y
            polisacáridos que dan a los hongos su fuerza inmunológica.
          </p>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ n, icon: Icon, title, text }, i) => (
            <li
              key={n}
              className="reveal relative rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur p-6 hover:border-gold/50 transition"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-leaf grid place-items-center">
                  <Icon className="w-5 h-5 text-cream" />
                </div>
                <span className="font-display text-3xl text-gold/80">{n}</span>
              </div>
              <h3 className="font-display text-2xl mt-5">{title}</h3>
              <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ol>

        {/* Comparison */}
        <div className="reveal mt-16 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-7 border border-cream/15 bg-cream/[0.03]">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/60">
              Polvo simple
            </p>
            <h4 className="font-display text-2xl mt-2">Concentración base</h4>
            <div className="mt-5 h-3 rounded-full bg-cream/10 overflow-hidden">
              <div className="h-full w-[18%] bg-cream/40" />
            </div>
            <p className="mt-3 text-sm text-cream/70">
              Beta-glucanos disponibles más diluidos. Menor biodisponibilidad y
              estabilidad limitada frente a humedad y luz.
            </p>
          </div>
          <div className="rounded-2xl p-7 border border-gold/40 bg-gradient-to-br from-gold/[0.08] to-transparent shadow-gold">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Liofilizado VitaPet
            </p>
            <h4 className="font-display text-2xl mt-2">Hasta 10× más potente</h4>
            <div className="mt-5 h-3 rounded-full bg-cream/10 overflow-hidden">
              <div className="h-full w-[96%] bg-gradient-leaf" />
            </div>
            <p className="mt-3 text-sm text-cream/80">
              Estructura celular preservada, mayor concentración de compuestos
              bioactivos y absorción superior en el organismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
