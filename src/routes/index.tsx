import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Mushrooms } from "@/components/sections/Mushrooms";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { Product } from "@/components/sections/Product";
import { Tech } from "@/components/sections/Tech";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VitaPet · Suplemento Inmunológico para Mascotas · Chile" },
      {
        name: "description",
        content:
          "VitaPet Inmuno+: hongos medicinales liofilizados para perros y gatos. 60 g · $22.000 CLP. Inmunidad que los acompaña siempre.",
      },
      { property: "og:title", content: "VitaPet · Inmunidad que los acompaña siempre" },
      {
        property: "og:description",
        content:
          "Suplemento inmunológico de hongos medicinales liofilizados para mascotas. Hecho en Chile.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Pillars />
      <Mushrooms />
      <Process />
      <Benefits />
      <Product />
      <Tech />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
