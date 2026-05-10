import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#hongos", label: t.nav.mushrooms },
    { href: "#proceso", label: t.nav.process },
    { href: "#ciencia", label: t.nav.science },
    { href: "#producto", label: t.nav.product },
    { href: "#precio", label: t.nav.price },
    { href: "#contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between text-cream">
        <a href="#inicio" aria-label="VitaPet">
          <Logo />
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-cream/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle variant="dark" />
          <a
            href="#precio"
            className="inline-flex items-center rounded-full bg-gradient-leaf px-4 py-2 text-sm font-medium text-cream shadow-soft hover:opacity-95"
          >
            {t.nav.buy}
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-cream/10"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-forest/95 backdrop-blur-md border-t border-cream/10">
          <ul className="px-5 py-4 space-y-3 text-cream">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex items-center justify-between gap-3">
              <LanguageToggle variant="dark" />
              <a
                href="#precio"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center rounded-full bg-gradient-leaf px-4 py-2 font-medium"
              >
                {t.nav.buyNow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
