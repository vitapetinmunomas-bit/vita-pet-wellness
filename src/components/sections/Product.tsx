import doypack from "@/assets/vitapet-doypack.jpg";
import { MAILTO_BUY } from "@/lib/links";
import { ShoppingBag } from "lucide-react";

export function Product() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal relative">
          <img
            src={doypack}
            alt="Doypack VitaPet Inmuno+ 60g de hongos medicinales liofilizados"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-3xl shadow-soft object-cover aspect-[4/5]"
          />
          <span className="absolute top-5 left-5 rounded-full bg-forest text-cream text-xs px-3 py-1.5 tracking-wider uppercase">
            Doypack 60 g
          </span>
        </div>
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            El producto
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            VitaPet Inmuno+
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Polvo liofilizado de seis hongos medicinales nativos de Chile,
            formulado para perros y gatos. Presentación en doypack resellable
            de 60 g, fácil de mezclar con su alimento diario.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {[
              ["Contenido neto", "60 g"],
              ["Presentación", "Doypack resellable"],
              ["Origen", "Chile 🇨🇱 nativo"],
              ["Uso", "Mezclar con la comida"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl bg-background border border-gold/30 p-4"
              >
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {k}
                </dt>
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
            COMPRAR AHORA · $22.000 CLP
          </a>
          <p className="mt-3 text-xs text-muted-foreground max-w-md">
            Próximamente con Webpay y Mercado Libre · Por ahora escríbenos
            directamente y coordinamos tu compra.
          </p>
        </div>
      </div>
    </section>
  );
}
