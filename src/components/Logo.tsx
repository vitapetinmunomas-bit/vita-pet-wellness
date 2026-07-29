import logo from "@/assets/logo-nour.png";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="Nour"
        width={512}
        height={512}
        className="w-9 h-9 object-contain object-center"
        style={{ objectPosition: "center 32%" }}
      />
      <span className="leading-none">
        <span
          className={`block font-display text-xl tracking-[0.32em] ${
            variant === "dark" ? "text-cream" : "text-forest"
          }`}
        >
          NOUR
        </span>
        <span className="block font-alt text-[0.6rem] tracking-[0.3em] text-gold mt-1">
          VITAPET
        </span>
      </span>
    </div>
  );
}
