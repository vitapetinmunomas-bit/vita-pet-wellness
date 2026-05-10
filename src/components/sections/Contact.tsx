import { Mail, Instagram } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Contacto
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            ¿Tienes dudas?
            <br /> <span className="italic">Estamos aquí.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Cuéntanos sobre tu mascota y te ayudaremos a elegir la mejor forma
            de incorporar VitaPet a su rutina diaria.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href="mailto:vitapetinmunomas@gmail.com"
              className="inline-flex items-center gap-3 text-forest hover:text-primary transition"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-leaf grid place-items-center text-cream">
                <Mail className="w-5 h-5" />
              </span>
              vitapetinmunomas@gmail.com
            </a>
            <a
              href="https://instagram.com/vitapetbio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-forest hover:text-primary transition"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-leaf grid place-items-center text-cream">
                <Instagram className="w-5 h-5" />
              </span>
              @vitapetbio
            </a>
          </div>
        </div>

        <form
          className="reveal rounded-2xl bg-background border border-gold/30 p-7 shadow-soft"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-sm font-medium text-forest">
            Nombre
            <input
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tu nombre"
            />
          </label>
          <label className="block text-sm font-medium text-forest mt-4">
            Email
            <input
              required
              type="email"
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring"
              placeholder="tu@email.cl"
            />
          </label>
          <label className="block text-sm font-medium text-forest mt-4">
            Mensaje
            <textarea
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Cuéntanos de tu mascota…"
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-gradient-leaf px-6 py-3 font-medium text-cream shadow-soft hover:scale-[1.01] transition"
          >
            {sent ? "¡Recibido! Te contactamos en 24 hrs" : "Enviar mensaje"}
          </button>
          <p className="mt-2 text-xs text-muted-foreground text-center">
            Nos contactaremos en 24 hrs.
          </p>
        </form>
      </div>
    </section>
  );
}
