import { Check } from "lucide-react";
import f1 from "@/assets/lifestyle-mujer-perro.png";
import f2 from "@/assets/uso-dosificacion.png";
import f3 from "@/assets/uso-plato.png";
import { useI18n } from "@/lib/i18n";

const imgs = [f1, f2, f3];

export function Benefits() {
  const { t } = useI18n();
  return (
    <section id="ciencia" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.benefits.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">{t.benefits.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.benefits.sub}</p>
        </div>

        <div className="mt-16 space-y-20">
          {t.benefits.blocks.map((b, i) => (
            <div
              key={b.title}
              className={`reveal grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={imgs[i]}
                  alt={b.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft"
                />
                <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-leaf opacity-20 blur-2xl" />
              </div>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl text-forest">{b.title}</h3>
                <ul className="mt-6 space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-gradient-leaf text-cream shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 max-w-3xl mx-auto text-center text-sm text-muted-foreground border-t border-gold/30 pt-8">
          {t.benefits.studies}{" "}
          <span className="text-forest font-medium">Vet. Sci. 2021</span> ·{" "}
          <span className="text-forest font-medium">Foods 2022</span> ·{" "}
          <span className="text-forest font-medium">Int. J. Med. Mushrooms 2017</span>
        </div>
      </div>
    </section>
  );
}
