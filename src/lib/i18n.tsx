import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      mushrooms: "Fórmula",
      process: "Proceso",
      science: "Ciencia",
      product: "Producto",
      price: "Precio",
      contact: "Contacto",
      buy: "Comprar",
      buyNow: "Comprar ahora",
    },
    hero: {
      eyebrow: "Nutrición funcional de autor",
      titleA: "Inmunidad que los",
      titleB: "acompaña siempre",
      sub: "Cuatro hongos medicinales, astaxantina y colágeno marino en una sola fórmula.",
      formats: "Frasco o doypack · 60 g · polvo puro",
      ctaBuy: "Comprar ahora — $22.000 CLP",
      ctaMore: "Conocer la fórmula",
    },
    pillars: {
      eyebrow: "Por qué Nour VitaPet",
      title: "Cuatro pilares para una vida más larga",
      sub: "Una fórmula sobria y precisa, pensada para acompañar a perros y gatos en cada etapa de su vida.",
      items: [
        { t: "Defensas fortalecidas", d: "Los beta-glucanos activan la respuesta inmune de forma natural y sostenida." },
        { t: "Pureza absoluta", d: "Sin rellenos, sin colorantes, sin conservantes. Solo ingredientes activos." },
        { t: "Vitalidad visible", d: "Piel, pelaje, articulaciones y energía diaria en equilibrio." },
        { t: "Más vida juntos", d: "Prevenir es el mejor regalo para quien siempre te acompaña." },
      ],
    },
    mushrooms: {
      eyebrow: "Seis activos · una fórmula",
      title: "Componentes del suplemento",
      sub: "Cuatro hongos medicinales —Reishi, Shiitake, Melena de León y Cola de Pavo— potenciados con astaxantina y colágeno marino. Cada activo cumple una función precisa dentro de la fórmula.",
      origin: "Formulado y elaborado en Chile 🇨🇱",
      list: [
        { name: "Reishi", benefits: ["Adaptógeno: regula el estrés y el descanso", "Antiinflamatorio natural", "Apoyo cardiovascular y hepático"] },
        { name: "Shiitake", benefits: ["Lentinano, modulador inmunológico", "Apoyo a la microbiota intestinal", "Fuente natural de vitaminas D y B"] },
        { name: "Melena de León", benefits: ["Estimula el factor de crecimiento nervioso", "Apoyo cognitivo y neuroprotector", "Salud digestiva y mucosa gástrica"] },
        { name: "Cola de Pavo", benefits: ["Activa las células NK del sistema inmune", "Rico en polisacáridos PSK y PSP", "Acompañamiento en tratamientos veterinarios"] },
        { name: "Astaxantina", benefits: ["Antioxidante de altísima potencia", "Protege la vista y la piel", "Reduce el daño oxidativo celular"] },
        { name: "Colágeno Marino", benefits: ["Soporte articular y de movilidad", "Pelaje brillante y piel elástica", "Péptidos de alta absorción"] },
      ],
    },
    process: {
      eyebrow: "El proceso",
      titleA: "De la naturaleza al envase,",
      titleB: "con precisión de autor",
      sub: "Cada etapa está diseñada para preservar los compuestos activos: beta-glucanos, triterpenos, carotenoides y péptidos llegan íntegros al plato de tu mascota.",
      steps: [
        { t: "Selección de cepas", d: "Hongos medicinales seleccionados por perfil de compuestos activos, no por volumen." },
        { t: "Cultivo controlado", d: "Sustratos limpios y ciclos monitoreados para una composición estable lote a lote." },
        { t: "Extracción de activos", d: "Métodos suaves que conservan beta-glucanos y triterpenos en su forma bioactiva." },
        { t: "Formulación precisa", d: "Dosis calculadas de astaxantina y colágeno marino para potenciar el conjunto." },
        { t: "Control de calidad", d: "Análisis de pureza y biodisponibilidad antes del envasado, lote por lote." },
        { t: "Envase hermético", d: "60 g sellados en frasco de vidrio ámbar o doypack, protegidos de humedad y luz." },
      ],
      simpleLabel: "Fórmula común",
      simpleTitle: "Activos diluidos",
      simpleText: "Mezclas con rellenos y baja concentración de compuestos activos. Menor absorción y resultados inconsistentes.",
      vitaLabel: "Fórmula Nour VitaPet",
      vitaTitle: "Concentración real",
      vitaText: "Seis activos puros en proporciones definidas, con absorción superior y consistencia lote a lote.",
    },
    benefits: {
      eyebrow: "Beneficios respaldados",
      title: "Ciencia que se siente en casa",
      sub: "Los hongos medicinales, la astaxantina y el colágeno marino cuentan con evidencia creciente en medicina veterinaria. Nour VitaPet reúne esos activos en un solo gesto diario.",
      blocks: [
        { title: "Para los que crecen jugando", items: ["Activa células NK y macrófagos", "Aumenta energía y vitalidad", "Apoyo ante infecciones estacionales"] },
        { title: "Un gesto simple, cada día", items: ["Una medida sobre su comida habitual", "Sin sabor invasivo ni cambios de rutina", "Absorción sostenida día a día"] },
        { title: "Para los que envejecen contigo", items: ["Soporte articular con colágeno marino", "Protección antioxidante con astaxantina", "Bienestar de larga duración"] },
      ],
      studies: "Estudios consultados:",
    },
    product: {
      eyebrow: "El producto",
      title: "VitaPet Inmuno+",
      desc: "Polvo puro de cuatro hongos medicinales con astaxantina y colágeno marino, formulado para perros y gatos. Disponible en dos presentaciones de 60 g, ambas al mismo precio.",
      jar: "Frasco de vidrio",
      jarDesc: "Vidrio ámbar con tapa hermética. Protege del oxígeno y la luz.",
      doypack: "Doypack resellable",
      doypackDesc: "Bolsa premium con cierre zip. Liviana, práctica y de bajo impacto.",
      sameSize: "60 g · Polvo puro",
      samePrice: "Mismo precio en ambas presentaciones",
      specs: [
        ["Contenido neto", "60 g"],
        ["Presentaciones", "Frasco · Doypack"],
        ["Fórmula", "4 hongos + 2 activos"],
        ["Uso", "Mezclar con la comida"],
      ],
      buy: "COMPRAR AHORA · $22.000 CLP",
      paymentNote: "Próximamente con Webpay y Mercado Pago · Por ahora escríbenos directamente y coordinamos tu compra.",
    },
    tech: {
      eyebrow: "Innovación chilena",
      titleA: "Del laboratorio a tu hogar,",
      titleB: "hecho en Chile",
      items: [
        { t: "Análisis de compuestos", d: "Cromatografía y microscopía identifican beta-glucanos, triterpenos y carotenoides." },
        { t: "Formulación de precisión", d: "Proporciones definidas para que cada activo potencie al siguiente." },
        { t: "Biodisponibilidad", d: "Péptidos y polisacáridos listos para ser asimilados por tu mascota." },
        { t: "Resultado en tu hogar", d: "Ciencia, oficio y cariño cotidiano en un solo envase." },
      ],
    },
    pricing: {
      title: "VitaPet Inmuno+ · 60 g",
      sub: "Cuatro hongos medicinales con astaxantina y colágeno marino. Disponible en frasco o doypack al mismo precio.",
      shipping: "Despacho a todo Chile · consultar costo",
      guarantee: "Garantía de calidad",
      cta: "COMPRAR · Escríbenos ahora",
      soon: "Próximamente Webpay y Mercado Pago.",
    },
    contact: {
      eyebrow: "Contacto",
      titleA: "¿Tienes dudas?",
      titleB: "Estamos aquí.",
      sub: "Cuéntanos sobre tu mascota y te ayudaremos a elegir la mejor forma de incorporar VitaPet a su rutina diaria.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Email",
      emailPh: "tu@email.cl",
      message: "Mensaje",
      messagePh: "Cuéntanos de tu mascota…",
      send: "Enviar mensaje",
      sent: "¡Recibido! Te contactamos en 24 hrs",
      reply: "Nos contactaremos en 24 hrs.",
    },
    footer: {
      tagline: "Inmunidad que los acompaña siempre.",
      madeWith: "Hecho con amor · Respaldado por la ciencia · Chile 🇨🇱",
      rights: "Todos los derechos reservados.",
    },
    misc: {
      langLabel: "Idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      mushrooms: "Formula",
      process: "Process",
      science: "Science",
      product: "Product",
      price: "Price",
      contact: "Contact",
      buy: "Buy",
      buyNow: "Buy now",
    },
    hero: {
      eyebrow: "Signature functional nutrition",
      titleA: "Immunity that",
      titleB: "stays by their side",
      sub: "Four medicinal mushrooms, astaxanthin and marine collagen in a single formula.",
      formats: "Glass jar or doypack · 60 g · pure powder",
      ctaBuy: "Buy now — $22,000 CLP",
      ctaMore: "See the formula",
    },
    pillars: {
      eyebrow: "Why Nour VitaPet",
      title: "Four pillars for a longer life",
      sub: "A restrained, precise formula made to support dogs and cats at every stage of life.",
      items: [
        { t: "Stronger defenses", d: "Beta-glucans activate the immune response naturally and steadily." },
        { t: "Absolute purity", d: "No fillers, no colorants, no preservatives. Active ingredients only." },
        { t: "Visible vitality", d: "Skin, coat, joints and daily energy in balance." },
        { t: "More life together", d: "Prevention is the best gift for the one always by your side." },
      ],
    },
    mushrooms: {
      eyebrow: "Six actives · one formula",
      title: "What's inside the supplement",
      sub: "Four medicinal mushrooms — Reishi, Shiitake, Lion's Mane and Turkey Tail — enhanced with astaxanthin and marine collagen. Every active plays a precise role.",
      origin: "Formulated and made in Chile 🇨🇱",
      list: [
        { name: "Reishi", benefits: ["Adaptogen: regulates stress and rest", "Natural anti-inflammatory", "Cardiovascular and liver support"] },
        { name: "Shiitake", benefits: ["Lentinan, immune modulator", "Supports gut microbiota", "Natural source of vitamins D and B"] },
        { name: "Lion's Mane", benefits: ["Stimulates nerve growth factor", "Cognitive and neuroprotective support", "Digestive and gastric mucosa health"] },
        { name: "Turkey Tail", benefits: ["Activates NK immune cells", "Rich in PSK and PSP polysaccharides", "Support during veterinary treatments"] },
        { name: "Astaxanthin", benefits: ["Exceptionally powerful antioxidant", "Protects eyes and skin", "Reduces cellular oxidative damage"] },
        { name: "Marine Collagen", benefits: ["Joint and mobility support", "Shiny coat and elastic skin", "Highly absorbable peptides"] },
      ],
    },
    process: {
      eyebrow: "The process",
      titleA: "From nature to packaging,",
      titleB: "with signature precision",
      sub: "Every stage is designed to preserve the active compounds: beta-glucans, triterpenes, carotenoids and peptides reach your pet's bowl intact.",
      steps: [
        { t: "Strain selection", d: "Mushrooms chosen for their active-compound profile, not for volume." },
        { t: "Controlled cultivation", d: "Clean substrates and monitored cycles for a stable composition batch after batch." },
        { t: "Active extraction", d: "Gentle methods that keep beta-glucans and triterpenes in bioactive form." },
        { t: "Precise formulation", d: "Calculated doses of astaxanthin and marine collagen to elevate the blend." },
        { t: "Quality control", d: "Purity and bioavailability testing before packaging, batch by batch." },
        { t: "Sealed packaging", d: "60 g sealed in amber glass or doypack, protected from moisture and light." },
      ],
      simpleLabel: "Common formula",
      simpleTitle: "Diluted actives",
      simpleText: "Blends with fillers and low concentration of actives. Lower absorption and inconsistent results.",
      vitaLabel: "Nour VitaPet formula",
      vitaTitle: "Real concentration",
      vitaText: "Six pure actives in defined proportions, with superior absorption and batch-to-batch consistency.",
    },
    benefits: {
      eyebrow: "Backed by science",
      title: "Science that feels at home",
      sub: "Medicinal mushrooms, astaxanthin and marine collagen have growing evidence in veterinary medicine. Nour VitaPet brings them together in one daily gesture.",
      blocks: [
        { title: "For those who grow up playing", items: ["Activates NK cells and macrophages", "Boosts energy and vitality", "Support against seasonal infections"] },
        { title: "One simple gesture, every day", items: ["One scoop over their usual food", "No invasive taste, no routine changes", "Steady day-to-day absorption"] },
        { title: "For those who grow old with you", items: ["Joint support with marine collagen", "Antioxidant protection with astaxanthin", "Long-term wellbeing"] },
      ],
      studies: "Studies referenced:",
    },
    product: {
      eyebrow: "The product",
      title: "VitaPet Inmuno+",
      desc: "Pure powder of four medicinal mushrooms with astaxanthin and marine collagen, formulated for dogs and cats. Two 60 g presentations at the same price.",
      jar: "Glass jar",
      jarDesc: "Amber glass with airtight lid. Protects from light and oxygen.",
      doypack: "Resealable doypack",
      doypackDesc: "Premium pouch with zip closure. Light, practical and low-impact.",
      sameSize: "60 g · Pure powder",
      samePrice: "Same price in both presentations",
      specs: [
        ["Net weight", "60 g"],
        ["Presentations", "Jar · Doypack"],
        ["Formula", "4 mushrooms + 2 actives"],
        ["Use", "Mix with food"],
      ],
      buy: "BUY NOW · $22,000 CLP",
      paymentNote: "Webpay and Mercado Pago coming soon · For now, message us and we'll arrange your order.",
    },
    tech: {
      eyebrow: "Chilean innovation",
      titleA: "From the lab to your home,",
      titleB: "made in Chile",
      items: [
        { t: "Compound analysis", d: "Chromatography and microscopy identify beta-glucans, triterpenes and carotenoids." },
        { t: "Precision formulation", d: "Defined ratios so each active elevates the next." },
        { t: "Bioavailability", d: "Peptides and polysaccharides ready to be absorbed by your pet." },
        { t: "Result at home", d: "Science, craft and daily love in a single package." },
      ],
    },
    pricing: {
      title: "VitaPet Inmuno+ · 60 g",
      sub: "Four medicinal mushrooms with astaxanthin and marine collagen. Available in jar or doypack at the same price.",
      shipping: "Shipping across Chile · ask for cost",
      guarantee: "Quality guarantee",
      cta: "BUY · Message us now",
      soon: "Webpay and Mercado Pago coming soon.",
    },
    contact: {
      eyebrow: "Contact",
      titleA: "Got questions?",
      titleB: "We're here.",
      sub: "Tell us about your pet and we'll help you choose the best way to add VitaPet to their daily routine.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      message: "Message",
      messagePh: "Tell us about your pet…",
      send: "Send message",
      sent: "Got it! We'll reply within 24 hrs",
      reply: "We'll get back within 24 hrs.",
    },
    footer: {
      tagline: "Immunity that stays by their side.",
      madeWith: "Made with love · Backed by science · Chile 🇨🇱",
      rights: "All rights reserved.",
    },
    misc: {
      langLabel: "Language",
    },
  },
};

export type Dict = (typeof translations)["es"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "vitapet.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "es" || stored === "en") {
        setLangState(stored);
      } else if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) {
        setLangState("en");
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: translations[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
