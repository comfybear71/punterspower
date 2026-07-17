import { PpaLogo } from "@/components/PpaLogo";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  showLogo?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  showLogo = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ppa-green-deep text-ppa-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(212,160,23,0.22),transparent_45%),linear-gradient(160deg,#0f3d26_0%,#163f2a_100%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {showLogo ? (
          <div className="mb-5">
            <PpaLogo size="md" priority />
          </div>
        ) : null}
        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl">
          {title}
        </h1>
        <div className="mt-5 h-1 w-24 bg-ppa-red" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ppa-cream/85 sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
