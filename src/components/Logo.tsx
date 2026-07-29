import star from "@/assets/logo-nour-star.png";

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
        src={star}
        alt="Nour"
        width={705}
        height={563}
        className="w-8 h-8 object-contain"
      />
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-bold tracking-[0.34em] ${
            variant === "dark" ? "text-cream" : "text-forest"
          }`}
        >
          NOUR
        </span>
        <span className="block font-alt text-[0.58rem] tracking-[0.32em] text-gold mt-1">
          VITAPET
        </span>
      </span>
    </div>
  );
}
