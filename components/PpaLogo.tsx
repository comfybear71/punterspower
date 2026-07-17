import Image from "next/image";
import { assets } from "@/lib/assets";

type LogoSize = "sm" | "md" | "lg" | "xl";

const sizeClass: Record<LogoSize, string> = {
  sm: "h-9 w-9 sm:h-10 sm:w-10",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-20 w-20 sm:h-24 sm:w-24",
  xl: "h-28 w-28 sm:h-36 sm:w-36",
};

type PpaLogoProps = {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
  /** Show wordmark beside the badge (nav / footer) */
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

/**
 * Official PPA badge (kangaroo + fist + PPA).
 * Works on dark and light: green plate reads as a brand badge either way.
 */
export function PpaLogo({
  size = "md",
  className = "",
  priority = false,
  withWordmark = false,
  wordmarkClassName = "",
}: PpaLogoProps) {
  const badge = (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-sm ring-1 ring-ppa-gold/35 shadow-[0_0_0_1px_rgba(15,61,38,0.35)] ${sizeClass[size]} ${className}`}
    >
      <Image
        src={assets.ppaLogo.src}
        alt={assets.ppaLogo.alt}
        fill
        sizes="144px"
        priority={priority}
        className="object-cover object-center"
      />
    </span>
  );

  if (!withWordmark) return badge;

  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-3">
      {badge}
      <span
        className={`min-w-0 font-display font-bold uppercase leading-none tracking-tight text-ppa-gold ${wordmarkClassName}`}
      >
        <span className="block text-base sm:text-lg">Punter Power</span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.2em] text-ppa-cream/80 sm:text-xs">
          Australia
        </span>
      </span>
    </span>
  );
}

type PpaTitleMarkProps = {
  className?: string;
  priority?: boolean;
};

/** Horizontal “Punter Power Australia” title plate for dark brand surfaces */
export function PpaTitleMark({
  className = "",
  priority = false,
}: PpaTitleMarkProps) {
  return (
    <span
      className={`relative block w-full max-w-xl overflow-hidden rounded-sm ring-1 ring-ppa-gold/30 ${className}`}
    >
      <Image
        src={assets.ppaTitle.src}
        alt={assets.ppaTitle.alt}
        width={1200}
        height={400}
        priority={priority}
        sizes="(max-width: 768px) 90vw, 576px"
        className="h-auto w-full object-cover"
      />
    </span>
  );
}
