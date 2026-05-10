import { Sprout, Snowflake, Wind, Layers, FlaskConical, Package } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Sprout, Snowflake, Wind, Layers, FlaskConical, Package];

export function Process() {
  const { t } = useI18n();
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
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.process.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">
            {t.process.titleA}
            <br />
            <span className="italic text-gold">{t.process.titleB}</span>
          </h2>
          <p className="mt-5 text-cream/75 max-w-2xl">{t.process.sub}</p>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            const n = String(i + 1).padStart(2, "0");
            return (
              <li
                key={s.t}
                className="reveal relative rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur p-6 hover:border-gold/50 transition"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-gradient-leaf grid place-items-center">
                    <Icon className="w-5 h-5 text-cream" />
                  </div>
                  <span className="font-display text-3xl text-gold/80">{n}</span>
                </div>
                <h3 className="font-display text-2xl mt-5">{s.t}</h3>
                <p className="mt-2 text-sm text-cream/75 leading-relaxed">{s.d}</p>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-16 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-7 border border-cream/15 bg-cream/[0.03]">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/60">{t.process.simpleLabel}</p>
            <h4 className="font-display text-2xl mt-2">{t.process.simpleTitle}</h4>
            <div className="mt-5 h-3 rounded-full bg-cream/10 overflow-hidden">
              <div className="h-full w-[18%] bg-cream/40" />
            </div>
            <p className="mt-3 text-sm text-cream/70">{t.process.simpleText}</p>
          </div>
          <div className="rounded-2xl p-7 border border-gold/40 bg-gradient-to-br from-gold/[0.08] to-transparent shadow-gold">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.process.vitaLabel}</p>
            <h4 className="font-display text-2xl mt-2">{t.process.vitaTitle}</h4>
            <div className="mt-5 h-3 rounded-full bg-cream/10 overflow-hidden">
              <div className="h-full w-[96%] bg-gradient-leaf" />
            </div>
            <p className="mt-3 text-sm text-cream/80">{t.process.vitaText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
