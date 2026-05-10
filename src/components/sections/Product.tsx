import doypack from "@/assets/vitapet-doypack.jpg";
import jar from "@/assets/vitapet-jar.jpg";
import { MAILTO_BUY } from "@/lib/links";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Format = "jar" | "doypack";

export function Product() {
  const { t } = useI18n();
  const [format, setFormat] = useState<Format>("doypack");
  const img = format === "jar" ? jar : doypack;
  const altMap: Record<Format, string> = {
    jar: t.product.jar,
    doypack: t.product.doypack,
  };

  return (
    <section id="producto" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal relative">
          <img
            key={format}
            src={img}
            alt={`${t.product.title} — ${altMap[format]}`}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-3xl shadow-soft object-cover aspect-[4/5] animate-in fade-in duration-500"
          />
          <span className="absolute top-5 left-5 rounded-full bg-forest text-cream text-xs px-3 py-1.5 tracking-wider uppercase">
            {t.product.sameSize}
          </span>

          {/* Format switcher */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-background border border-gold/40 p-1.5 shadow-gold"
            role="tablist"
            aria-label="Formato"
          >
            {(["jar", "doypack"] as Format[]).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={format === f}
                onClick={() => setFormat(f)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition ${
                  format === f
                    ? "bg-gradient-leaf text-cream shadow-soft"
                    : "text-forest hover:bg-cream"
                }`}
              >
                {f === "jar" ? t.product.jar : t.product.doypack}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.product.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">{t.product.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg">{t.product.desc}</p>

          {/* Two presentations cards */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {(["jar", "doypack"] as Format[]).map((f) => {
              const active = format === f;
              return (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`text-left rounded-2xl border p-4 transition ${
                    active
                      ? "border-gold bg-background shadow-gold"
                      : "border-gold/20 bg-background/60 hover:border-gold/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-forest">
                      {f === "jar" ? t.product.jar : t.product.doypack}
                    </span>
                    {active && (
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-gradient-leaf text-cream">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {f === "jar" ? t.product.jarDesc : t.product.doypackDesc}
                  </p>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-gold">★ {t.product.samePrice}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {t.product.specs.map(([k, v]) => (
              <div key={k} className="rounded-xl bg-background border border-gold/30 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-display text-lg text-forest">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-5xl text-forest">$22.000</span>
            <span className="text-muted-foreground">CLP</span>
          </div>

          <a
            href={MAILTO_BUY}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-leaf px-7 py-4 font-medium text-cream shadow-gold hover:scale-[1.02] transition"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.product.buy}
          </a>
          <p className="mt-3 text-xs text-muted-foreground max-w-md">{t.product.paymentNote}</p>
        </div>
      </div>
    </section>
  );
}
