import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#beneficios", label: t.pillars.eyebrow },
    { href: "#proceso", label: t.nav.process },
    { href: "#producto", label: t.nav.product },
    { href: "#contacto", label: t.nav.contact },
  ];
  return (
    <footer className="bg-forest text-cream py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-cream/70 max-w-xs">{t.footer.tagline}</p>
          <div className="mt-5">
            <LanguageToggle variant="dark" />
          </div>
        </div>
        <nav className="flex flex-wrap items-start gap-x-6 gap-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/80 hover:text-gold transition">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-cream/70">
          <a href="mailto:vitapetinmunomas@gmail.com" className="hover:text-gold">
            vitapetinmunomas@gmail.com
          </a>
          <p className="mt-3">{t.footer.madeWith}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50">
        © {new Date().getFullYear()} VitaPet. {t.footer.rights}
      </div>
    </footer>
  );
}
