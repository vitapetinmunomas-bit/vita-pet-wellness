import colaPavo from "@/assets/mushroom-cola-pavo.jpg";
import reishi from "@/assets/mushroom-reishi.jpg";
import shiitake from "@/assets/mushroom-shiitake.jpg";
import melena from "@/assets/mushroom-melena-leon.jpg";
import maitake from "@/assets/mushroom-maitake.jpg";
import chaga from "@/assets/mushroom-chaga.jpg";
import { MapPin } from "lucide-react";

const mushrooms = [
  {
    img: colaPavo,
    name: "Cola de Pavo",
    latin: "Trametes versicolor",
    benefits: [
      "Activa células NK del sistema inmune",
      "Rico en polisacáridos PSK y PSP",
      "Apoyo durante tratamientos veterinarios",
    ],
  },
  {
    img: reishi,
    name: "Reishi",
    latin: "Ganoderma lucidum",
    benefits: [
      "Adaptógeno: regula el estrés",
      "Antiinflamatorio natural",
      "Apoyo cardiovascular y hepático",
    ],
  },
  {
    img: shiitake,
    name: "Shiitake",
    latin: "Lentinula edodes",
    benefits: [
      "Lentinano, modulador inmune",
      "Apoyo a la microbiota intestinal",
      "Fuente natural de vitamina D y B",
    ],
  },
  {
    img: melena,
    name: "Melena de León",
    latin: "Hericium erinaceus",
    benefits: [
      "Estimula el factor NGF (nervios)",
      "Apoyo cognitivo y neuroprotector",
      "Salud digestiva y mucosa gástrica",
    ],
  },
  {
    img: maitake,
    name: "Maitake",
    latin: "Grifola frondosa",
    benefits: [
      "Beta-glucanos D-fraction",
      "Equilibrio metabólico y glucémico",
      "Modula la respuesta inmunitaria",
    ],
  },
  {
    img: chaga,
    name: "Chaga",
    latin: "Inonotus obliquus",
    benefits: [
      "Altísima capacidad antioxidante (ORAC)",
      "Apoyo celular ante el envejecimiento",
      "Rico en melanina y ácido betulínico",
    ],
  },
];

export function Mushrooms() {
  return (
    <section id="hongos" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Seis hongos · una fórmula
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            Hongos medicinales nativos de Chile
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recolectados y cultivados en bosques nativos del sur de Chile.
            Cada hongo aporta una propiedad única, juntos forman el corazón
            de VitaPet Inmuno+.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background px-4 py-1.5 text-xs text-forest">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            Origen: bosques nativos de Chile 🇨🇱
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mushrooms.map((m) => (
            <article
              key={m.name}
              className="reveal group rounded-3xl bg-background border border-gold/20 overflow-hidden shadow-soft hover:shadow-gold transition"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} (${m.latin}) en bosque nativo chileno`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest/70 to-transparent" />
                <div className="absolute bottom-4 left-5 text-cream">
                  <h3 className="font-display text-2xl leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-xs italic text-cream/80">{m.latin}</p>
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
