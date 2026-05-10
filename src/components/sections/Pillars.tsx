import { ShieldCheck, Leaf, HeartPulse, Dog } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fortalece sus defensas",
    text: "Activa células inmunológicas naturalmente para una respuesta robusta.",
  },
  {
    icon: Leaf,
    title: "100% natural y seguro",
    text: "Sin aditivos ni conservantes artificiales. Solo lo que la naturaleza ofrece.",
  },
  {
    icon: HeartPulse,
    title: "Bienestar integral",
    text: "Energía, vitalidad y soporte para una salud metabólica equilibrada.",
  },
  {
    icon: Dog,
    title: "Más vida juntos",
    text: "Prevenir es el mejor regalo que puedes darle a quien siempre te acompaña.",
  },
];

export function Pillars() {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Por qué VitaPet
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            Cuatro pilares para una vida más larga
          </h2>
          <p className="mt-4 text-muted-foreground">
            Una fórmula pensada para acompañar a perros y gatos en cada etapa,
            con la sabiduría de los hongos y el respaldo de la ciencia.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group relative bg-cream rounded-2xl p-7 border border-gold/30 shadow-soft hover:shadow-gold transition-shadow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-leaf grid place-items-center text-cream mb-5">
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl text-forest">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
              <span
                className="absolute inset-x-7 bottom-5 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
