import { ShieldCheck, Leaf, HeartPulse, Dog } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [ShieldCheck, Leaf, HeartPulse, Dog];

export function Pillars() {
  const { t } = useI18n();
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.pillars.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">{t.pillars.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.pillars.sub}</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <article
                key={p.t}
                className="reveal group relative bg-cream rounded-2xl p-7 border border-gold/30 shadow-soft hover:shadow-gold transition-shadow"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-leaf grid place-items-center text-cream mb-5">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl text-forest">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
