import { Leaf } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className="grid place-items-center w-9 h-9 rounded-full bg-gradient-leaf shadow-soft"
        aria-hidden
      >
        <Leaf className="w-5 h-5 text-cream" strokeWidth={2.2} />
      </span>
      <span className="font-display text-2xl tracking-tight">
        Vita<span className="text-gold">Pet</span>
      </span>
    </div>
  );
}
