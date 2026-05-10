import { Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.contact.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-forest">
            {t.contact.titleA}
            <br /> <span className="italic">{t.contact.titleB}</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">{t.contact.sub}</p>
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
            {t.contact.name}
            <input
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring"
              placeholder={t.contact.namePh}
            />
          </label>
          <label className="block text-sm font-medium text-forest mt-4">
            {t.contact.email}
            <input
              required
              type="email"
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring"
              placeholder={t.contact.emailPh}
            />
          </label>
          <label className="block text-sm font-medium text-forest mt-4">
            {t.contact.message}
            <textarea
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder={t.contact.messagePh}
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-gradient-leaf px-6 py-3 font-medium text-cream shadow-soft hover:scale-[1.01] transition"
          >
            {sent ? t.contact.sent : t.contact.send}
          </button>
          <p className="mt-2 text-xs text-muted-foreground text-center">{t.contact.reply}</p>
        </form>
      </div>
    </section>
  );
}
