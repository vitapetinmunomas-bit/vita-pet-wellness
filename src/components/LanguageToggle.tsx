import { useI18n, type Lang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { lang, setLang, t } = useI18n();
  const base =
    variant === "dark"
      ? "border-cream/30 text-cream hover:border-gold/60"
      : "border-forest/30 text-forest hover:border-gold/70";
  const activeCls =
    variant === "dark"
      ? "bg-gold text-forest"
      : "bg-forest text-cream";
  const inactiveCls =
    variant === "dark" ? "text-cream/70" : "text-forest/70";

  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      aria-label={`${t.misc.langLabel}: ${label}`}
      aria-pressed={lang === l}
      onClick={() => setLang(l)}
      className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
        lang === l ? activeCls : inactiveCls
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-1 backdrop-blur ${base}`}
      role="group"
      aria-label={t.misc.langLabel}
    >
      <Languages className="w-3.5 h-3.5 mx-1 opacity-70" aria-hidden />
      {btn("es", "ES")}
      {btn("en", "EN")}
    </div>
  );
}
