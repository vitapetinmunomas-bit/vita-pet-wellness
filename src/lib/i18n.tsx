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
      mushrooms: "Hongos",
      process: "Proceso",
      science: "Ciencia",
      product: "Producto",
      price: "Precio",
      contact: "Contacto",
      buy: "Comprar",
      buyNow: "Comprar ahora",
    },
    hero: {
      eyebrow: "Hongos medicinales · liofilizados",
      titleA: "Inmunidad que los",
      titleB: "acompaña siempre",
      sub: "Suplemento de 6 hongos medicinales nativos de Chile",
      formats: "Frasco o doypack · 60 g · polvo liofilizado",
      ctaBuy: "Comprar ahora — $22.000 CLP",
      ctaMore: "Conocer más",
    },
    pillars: {
      eyebrow: "Por qué VitaPet",
      title: "Cuatro pilares para una vida más larga",
      sub: "Una fórmula pensada para acompañar a perros y gatos en cada etapa, con la sabiduría de los hongos y el respaldo de la ciencia.",
      items: [
        { t: "Fortalece sus defensas", d: "Activa células inmunológicas naturalmente para una respuesta robusta." },
        { t: "100% natural y seguro", d: "Sin aditivos ni conservantes artificiales. Solo lo que la naturaleza ofrece." },
        { t: "Bienestar integral", d: "Energía, vitalidad y soporte para una salud metabólica equilibrada." },
        { t: "Más vida juntos", d: "Prevenir es el mejor regalo que puedes darle a quien siempre te acompaña." },
      ],
    },
    mushrooms: {
      eyebrow: "Seis hongos · una fórmula",
      title: "Hongos medicinales nativos de Chile",
      sub: "Recolectados y cultivados en bosques nativos del sur de Chile. Cada hongo aporta una propiedad única; juntos forman el corazón de VitaPet Inmuno+.",
      origin: "Origen: bosques nativos de Chile 🇨🇱",
      list: [
        { name: "Cola de Pavo", benefits: ["Activa células NK del sistema inmune", "Rico en polisacáridos PSK y PSP", "Apoyo durante tratamientos veterinarios"] },
        { name: "Reishi", benefits: ["Adaptógeno: regula el estrés", "Antiinflamatorio natural", "Apoyo cardiovascular y hepático"] },
        { name: "Shiitake", benefits: ["Lentinano, modulador inmune", "Apoyo a la microbiota intestinal", "Fuente natural de vitamina D y B"] },
        { name: "Melena de León", benefits: ["Estimula el factor NGF (nervios)", "Apoyo cognitivo y neuroprotector", "Salud digestiva y mucosa gástrica"] },
        { name: "Maitake", benefits: ["Beta-glucanos D-fraction", "Equilibrio metabólico y glucémico", "Modula la respuesta inmunitaria"] },
        { name: "Chaga", benefits: ["Altísima capacidad antioxidante (ORAC)", "Apoyo celular ante el envejecimiento", "Rico en melanina y ácido betulínico"] },
      ],
    },
    process: {
      eyebrow: "El proceso",
      titleA: "De la naturaleza al envase,",
      titleB: "sin perder nada",
      sub: "La liofilización es el método más respetuoso con los compuestos activos. Conserva intactos los beta-glucanos, triterpenos y polisacáridos que dan a los hongos su fuerza inmunológica.",
      steps: [
        { t: "Recolección", d: "Hongos medicinales seleccionados en su punto óptimo de madurez." },
        { t: "Congelación profunda", d: "El hongo se congela a −40 °C para preservar todos sus compuestos bioactivos." },
        { t: "Vacío y sublimación", d: "El agua pasa de sólido a gas sin licuarse, conservando la estructura celular intacta." },
        { t: "Polvo liofilizado", d: "Polvo ultrafino con hasta 10× más concentración de beta-glucanos que el polvo simple." },
        { t: "Control de calidad", d: "Análisis de biodisponibilidad y pureza antes del envasado, lote por lote." },
        { t: "Envase hermético", d: "60 g sellados en frasco o doypack, protegidos de humedad y luz." },
      ],
      simpleLabel: "Polvo simple",
      simpleTitle: "Concentración base",
      simpleText: "Beta-glucanos disponibles más diluidos. Menor biodisponibilidad y estabilidad limitada frente a humedad y luz.",
      vitaLabel: "Liofilizado VitaPet",
      vitaTitle: "Hasta 10× más potente",
      vitaText: "Estructura celular preservada, mayor concentración de compuestos bioactivos y absorción superior en el organismo.",
    },
    benefits: {
      eyebrow: "Beneficios respaldados",
      title: "Ciencia que se siente en casa",
      sub: "Los hongos medicinales son objeto de investigación creciente en medicina veterinaria. VitaPet reúne lo mejor de esa evidencia en un solo producto.",
      blocks: [
        { title: "Para los que crecen jugando", items: ["Activa células NK y macrófagos", "Aumenta energía y vitalidad", "Apoyo ante infecciones estacionales"] },
        { title: "Para los compañeros de hogar", items: ["Mejora microbiota intestinal", "Reduce inflamación sistémica", "Acción antioxidante comprobada"] },
        { title: "Para los que envejecen contigo", items: ["Soporte articular y metabólico", "Modula respuesta inmune en adultos", "Bienestar de larga duración"] },
      ],
      studies: "Estudios consultados:",
    },
    product: {
      eyebrow: "El producto",
      title: "VitaPet Inmuno+",
      desc: "Polvo liofilizado de seis hongos medicinales nativos de Chile, formulado para perros y gatos. Disponible en dos presentaciones de 60 g, ambas al mismo precio: elige la que prefieras.",
      jar: "Frasco de vidrio",
      jarDesc: "Vidrio ámbar con tapa hermética. Ideal para casa, protege del oxígeno y la luz.",
      doypack: "Doypack resellable",
      doypackDesc: "Bolsa kraft con cierre zip. Liviana, práctica y de bajo impacto.",
      sameSize: "60 g · Polvo liofilizado",
      samePrice: "Mismo precio en ambas presentaciones",
      specs: [
        ["Contenido neto", "60 g"],
        ["Presentaciones", "Frasco · Doypack"],
        ["Origen", "Chile 🇨🇱 nativo"],
        ["Uso", "Mezclar con la comida"],
      ],
      buy: "COMPRAR AHORA · $22.000 CLP",
      paymentNote: "Próximamente con Webpay y Mercado Pago · Por ahora escríbenos directamente y coordinamos tu compra.",
    },
    tech: {
      eyebrow: "Tecnología & innovación",
      titleA: "De la naturaleza a la ciencia,",
      titleB: "de la ciencia a tu mascota",
      items: [
        { t: "Análisis de compuestos", d: "Microscopía y cromatografía identifican beta-glucanos y triterpenos activos." },
        { t: "Liofilización de precisión", d: "Cámaras criogénicas que estabilizan cada compuesto sin alterarlo." },
        { t: "Biodisponibilidad certificada", d: "Moléculas de beta-glucano listas para ser asimiladas por tu mascota." },
        { t: "Resultado en tu hogar", d: "Bosque, laboratorio y cariño cotidiano en un solo envase." },
      ],
    },
    pricing: {
      title: "VitaPet Inmuno+ · 60 g",
      sub: "Polvo liofilizado de 6 hongos medicinales nativos de Chile. Disponible en frasco o doypack al mismo precio.",
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
      mushrooms: "Mushrooms",
      process: "Process",
      science: "Science",
      product: "Product",
      price: "Price",
      contact: "Contact",
      buy: "Buy",
      buyNow: "Buy now",
    },
    hero: {
      eyebrow: "Medicinal mushrooms · freeze-dried",
      titleA: "Immunity that",
      titleB: "stays by their side",
      sub: "Supplement made with 6 medicinal mushrooms native to Chile",
      formats: "Glass jar or doypack · 60 g · freeze-dried powder",
      ctaBuy: "Buy now — $22,000 CLP",
      ctaMore: "Learn more",
    },
    pillars: {
      eyebrow: "Why VitaPet",
      title: "Four pillars for a longer life",
      sub: "A formula made to support dogs and cats at every stage, blending mushroom wisdom with scientific evidence.",
      items: [
        { t: "Strengthens defenses", d: "Naturally activates immune cells for a robust response." },
        { t: "100% natural and safe", d: "No artificial additives or preservatives — only what nature offers." },
        { t: "Whole-body wellbeing", d: "Energy, vitality and support for balanced metabolic health." },
        { t: "More life together", d: "Prevention is the best gift for the one who's always by your side." },
      ],
    },
    mushrooms: {
      eyebrow: "Six mushrooms · one formula",
      title: "Medicinal mushrooms native to Chile",
      sub: "Harvested and cultivated in the native forests of southern Chile. Each mushroom brings a unique property; together they form the heart of VitaPet Inmuno+.",
      origin: "Origin: native forests of Chile 🇨🇱",
      list: [
        { name: "Turkey Tail", benefits: ["Activates NK immune cells", "Rich in PSK and PSP polysaccharides", "Support during veterinary treatments"] },
        { name: "Reishi", benefits: ["Adaptogen: regulates stress", "Natural anti-inflammatory", "Cardiovascular and liver support"] },
        { name: "Shiitake", benefits: ["Lentinan, immune modulator", "Supports gut microbiota", "Natural source of vitamins D and B"] },
        { name: "Lion's Mane", benefits: ["Stimulates NGF (nerve factor)", "Cognitive and neuroprotective support", "Digestive and gastric mucosa health"] },
        { name: "Maitake", benefits: ["D-fraction beta-glucans", "Metabolic and glycemic balance", "Modulates immune response"] },
        { name: "Chaga", benefits: ["Highest antioxidant capacity (ORAC)", "Cellular support against aging", "Rich in melanin and betulinic acid"] },
      ],
    },
    process: {
      eyebrow: "The process",
      titleA: "From nature to packaging,",
      titleB: "without losing a thing",
      sub: "Freeze-drying is the gentlest method for active compounds. It preserves the beta-glucans, triterpenes and polysaccharides that give mushrooms their immune power.",
      steps: [
        { t: "Harvest", d: "Medicinal mushrooms picked at their peak ripeness." },
        { t: "Deep freezing", d: "Frozen at −40 °C to preserve all bioactive compounds." },
        { t: "Vacuum & sublimation", d: "Water goes from solid to gas without melting, keeping cell structure intact." },
        { t: "Freeze-dried powder", d: "Ultra-fine powder with up to 10× more beta-glucan concentration than simple powder." },
        { t: "Quality control", d: "Bioavailability and purity testing before packaging, batch by batch." },
        { t: "Sealed packaging", d: "60 g sealed in jar or doypack, protected from moisture and light." },
      ],
      simpleLabel: "Simple powder",
      simpleTitle: "Base concentration",
      simpleText: "More diluted beta-glucans. Lower bioavailability and limited stability against moisture and light.",
      vitaLabel: "VitaPet freeze-dried",
      vitaTitle: "Up to 10× more potent",
      vitaText: "Preserved cell structure, higher concentration of bioactives and superior absorption.",
    },
    benefits: {
      eyebrow: "Backed by science",
      title: "Science that feels at home",
      sub: "Medicinal mushrooms are an active research field in veterinary medicine. VitaPet brings the best of that evidence into a single product.",
      blocks: [
        { title: "For those who grow up playing", items: ["Activates NK cells and macrophages", "Boosts energy and vitality", "Support against seasonal infections"] },
        { title: "For your home companions", items: ["Improves gut microbiota", "Reduces systemic inflammation", "Proven antioxidant action"] },
        { title: "For those who grow old with you", items: ["Joint and metabolic support", "Modulates immune response in adults", "Long-term wellbeing"] },
      ],
      studies: "Studies referenced:",
    },
    product: {
      eyebrow: "The product",
      title: "VitaPet Inmuno+",
      desc: "Freeze-dried powder of six medicinal mushrooms native to Chile, formulated for dogs and cats. Available in two 60 g presentations at the same price — pick the one you prefer.",
      jar: "Glass jar",
      jarDesc: "Amber glass with airtight lid. Perfect for home use, protects from light and oxygen.",
      doypack: "Resealable doypack",
      doypackDesc: "Kraft pouch with zip closure. Light, practical and low-impact.",
      sameSize: "60 g · Freeze-dried powder",
      samePrice: "Same price in both presentations",
      specs: [
        ["Net weight", "60 g"],
        ["Presentations", "Jar · Doypack"],
        ["Origin", "Chile 🇨🇱 native"],
        ["Use", "Mix with food"],
      ],
      buy: "BUY NOW · $22,000 CLP",
      paymentNote: "Webpay and Mercado Pago coming soon · For now, message us and we'll arrange your order.",
    },
    tech: {
      eyebrow: "Technology & innovation",
      titleA: "From nature to science,",
      titleB: "from science to your pet",
      items: [
        { t: "Compound analysis", d: "Microscopy and chromatography identify active beta-glucans and triterpenes." },
        { t: "Precision freeze-drying", d: "Cryogenic chambers stabilize every compound without altering it." },
        { t: "Certified bioavailability", d: "Beta-glucan molecules ready to be absorbed by your pet." },
        { t: "Result at home", d: "Forest, lab and daily love — all in a single package." },
      ],
    },
    pricing: {
      title: "VitaPet Inmuno+ · 60 g",
      sub: "Freeze-dried powder of 6 medicinal mushrooms native to Chile. Available in jar or doypack at the same price.",
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
