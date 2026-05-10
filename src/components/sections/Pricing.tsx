import { MAILTO_BUY } from "@/lib/links";
import { Logo } from "../Logo";
import { Truck, ShieldCheck } from "lucide-react";

export function Pricing() {
  return (
    <section id="precio" className="py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 reveal">
        <div className="relative rounded-3xl bg-cream border-2 border-gold/60 shadow-gold p-10 sm:p-14 text-center overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
            style={{ background: "var(--gradient-leaf)" }}
            aria-hidden
          />
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="font-display text-4xl mt-6 text-forest">
            VitaPet Inmuno+ · Doypack 60 g
          </h2>
          <p className="mt-3 text-muted-foreground">
            Polvo liofilizado de 6 hongos medicinales nativos de Chile.
          </p>

          <div className="mt-8 inline-flex items-baseline gap-2">
            <span className="font-display text-6xl text-forest">$22.000</span>
            <span className="text-muted-foreground">CLP</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Truck className="w-4 h-4 text-gold" />
              Despacho a todo Chile · consultar costo
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              Garantía de calidad
            </span>
          </div>

          <a
            href={MAILTO_BUY}
            className="mt-9 inline-flex items-center justify-center rounded-full bg-gradient-leaf px-8 py-4 font-semibold text-cream shadow-gold hover:scale-[1.02] transition"
          >
            COMPRAR · Escríbenos ahora
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Próximamente Webpay y Mercado Libre.
          </p>
        </div>
      </div>
    </section>
  );
}
