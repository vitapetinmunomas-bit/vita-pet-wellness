import { Microscope, Snowflake, Atom, Home } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Microscope, Snowflake, Atom, Home];

export function Tech() {
  const { t } = useI18n();
  return (
    <section className="py-28 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.tech.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">
            {t.tech.titleA}
            <br />
            <span className="italic text-gold">{t.tech.titleB}</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            aria-hidden
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.tech.items.map((m, i) => {
              const Icon = icons[i];
              return (
                <li key={m.t} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-leaf grid place-items-center shadow-gold">
                    <Icon className="w-6 h-6 text-cream" />
                  </div>
                  <h3 className="font-display text-xl mt-5">{m.t}</h3>
                  <p className="mt-2 text-sm text-cream/70 leading-relaxed">{m.d}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
