import { Logo } from "./Logo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-cream/70 max-w-xs">
            Inmunidad que los acompaña siempre.
          </p>
        </div>
        <nav className="flex flex-wrap items-start gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/80 hover:text-gold transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-cream/70">
          <a
            href="mailto:vitapetinmunomas@gmail.com"
            className="hover:text-gold"
          >
            vitapetinmunomas@gmail.com
          </a>
          <p className="mt-3">
            Hecho con amor · Respaldado por la ciencia · Chile 🇨🇱
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50">
        © {new Date().getFullYear()} VitaPet. Todos los derechos reservados.
      </div>
    </footer>
  );
}
