import { Check } from "lucide-react";
import f1 from "@/assets/family-1.jpg";
import f2 from "@/assets/family-2.jpg";
import f3 from "@/assets/family-3.jpg";

const blocks = [
  {
    img: f1,
    alt: "Familia con golden retriever en un parque",
    title: "Para los que crecen jugando",
    items: [
      "Activa células NK y macrófagos",
      "Aumenta energía y vitalidad",
      "Apoyo ante infecciones estacionales",
    ],
  },
  {
    img: f2,
    alt: "Pareja joven con gato atigrado en un departamento luminoso",
    title: "Para los compañeros de hogar",
    items: [
      "Mejora microbiota intestinal",
      "Reduce inflamación sistémica",
      "Acción antioxidante comprobada",
    ],
  },
  {
    img: f3,
    alt: "Adulto mayor con perro labrador en un jardín",
    title: "Para los que envejecen contigo",
    items: [
      "Soporte articular y metabólico",
      "Modula respuesta inmune en adultos",
      "Bienestar de larga duración",
    ],
  },
];

export function Benefits() {
  return (
    <section id="ciencia" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Beneficios respaldados
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            Ciencia que se siente en casa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Los hongos medicinales son objeto de investigación creciente en
            medicina veterinaria. VitaPet reúne lo mejor de esa evidencia en un
            solo frasco.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`reveal grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={b.img}
                  alt={b.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft"
                />
                <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-leaf opacity-20 blur-2xl" />
              </div>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl text-forest">
                  {b.title}
                </h3>
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
          Estudios consultados:{" "}
          <span className="text-forest font-medium">Vet. Sci. 2021</span> ·{" "}
          <span className="text-forest font-medium">Foods 2022</span> ·{" "}
          <span className="text-forest font-medium">
            Int. J. Med. Mushrooms 2017
          </span>
        </div>
      </div>
    </section>
  );
}
