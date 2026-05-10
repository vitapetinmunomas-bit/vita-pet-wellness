import colaPavo from "@/assets/mushroom-cola-pavo.jpg";
import reishi from "@/assets/mushroom-reishi.jpg";
import shiitake from "@/assets/mushroom-shiitake.jpg";
import melena from "@/assets/mushroom-melena-leon.jpg";
import maitake from "@/assets/mushroom-maitake.jpg";
import chaga from "@/assets/mushroom-chaga.jpg";
import { MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const imgs = [colaPavo, reishi, shiitake, melena, maitake, chaga];
const latins = [
  "Trametes versicolor",
  "Ganoderma lucidum",
  "Lentinula edodes",
  "Hericium erinaceus",
  "Grifola frondosa",
  "Inonotus obliquus",
];

export function Mushrooms() {
  const { t } = useI18n();
  return (
    <section id="hongos" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.mushrooms.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">{t.mushrooms.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.mushrooms.sub}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background px-4 py-1.5 text-xs text-forest">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {t.mushrooms.origin}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.mushrooms.list.map((m, i) => (
            <article
              key={m.name}
              className="reveal group rounded-3xl bg-background border border-gold/20 overflow-hidden shadow-soft hover:shadow-gold transition"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={imgs[i]}
                  alt={`${m.name} (${latins[i]})`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest/70 to-transparent" />
                <div className="absolute bottom-4 left-5 text-cream">
                  <h3 className="font-display text-2xl leading-tight">{m.name}</h3>
                  <p className="text-xs italic text-cream/80">{latins[i]}</p>
                </div>
              </div>
              <ul className="p-6 space-y-2 text-sm text-foreground">
                {m.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
