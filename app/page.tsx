import Link from "next/link";
import { PpaImage } from "@/components/media/PpaImage";
import { assets } from "@/lib/assets";

const values = [
  {
    title: "No one left behind",
    description:
      "If a mate is struggling, we show up. Support is the standard — not the exception.",
  },
  {
    title: "We are all the same",
    description:
      "No hierarchies. No egos. Punters, families, and friends standing level.",
  },
  {
    title: "Grow together",
    description:
      "Shared tools, shared knowledge, shared wins. Rising alone was never the point.",
  },
  {
    title: "If we don’t go, nobody goes",
    description:
      "Change starts with us. We move first so others can follow with confidence.",
  },
];

const benefits = [
  {
    title: "Community that has your back",
    description:
      "A real network of Aussie punters who look out for each other — online and on the ground.",
  },
  {
    title: "Tools & guides that cut through",
    description:
      "Clear, practical resources built for everyday punters — not gatekept for the few.",
  },
  {
    title: "A voice that carries weight",
    description:
      "Together we push for fairness, respect, and better outcomes across the industry.",
  },
  {
    title: "Transparent $10 membership",
    description:
      "Know exactly where your money goes. Every dollar tracked. Every decision open.",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ppa-green-deep text-ppa-cream">
        <div className="absolute inset-0" aria-hidden="true">
          <PpaImage
            src={assets.wooliesColes.src}
            alt={assets.wooliesColes.alt}
            cover
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(15,61,38,0.88)_0%,rgba(18,18,18,0.72)_42%,rgba(15,61,38,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,160,23,0.22),transparent_40%),radial-gradient(ellipse_at_10%_90%,rgba(193,18,31,0.2),transparent_45%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(-12deg,transparent,transparent_18px,rgba(247,244,239,0.4)_18px,rgba(247,244,239,0.4)_19px)]" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-16">
          <p className="animate-rise font-display text-sm font-semibold uppercase tracking-[0.28em] text-ppa-gold-soft sm:text-base">
            Punterspower.au
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Punter Power <span className="text-ppa-gold">Australia</span>
          </h1>
          <div className="animate-draw-line mt-5 h-1 w-28 bg-ppa-red sm:w-36" />
          <p className="animate-rise-delay-2 mt-6 max-w-xl text-xl font-medium leading-snug text-ppa-cream/90 sm:text-2xl">
            No One Left Behind. We Grow Together.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/join"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-gold px-8 text-base font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-gold"
            >
              Join for $10
            </Link>
            <Link
              href="/fund"
              className="inline-flex min-h-12 items-center justify-center border-2 border-ppa-cream/70 px-8 text-base font-semibold uppercase tracking-wide text-ppa-cream transition hover:border-ppa-cream hover:bg-ppa-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-cream"
            >
              See the fund
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-line bg-surface-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              The problem
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Too many punters get left on their own
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
            <p>
              When things go wrong, support can feel scarce. Information stays
              locked up. Communities fragment. People fall through the cracks.
            </p>
            <p>
              Punter Power Australia exists to flip that script — building a
              movement where belonging comes first, knowledge is shared, and
              nobody gets written off.
            </p>
            <p className="font-semibold text-ppa-green dark:text-ppa-gold-soft">
              If we don’t go, nobody goes. So we go — together.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-green dark:text-ppa-gold">
              Our values
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              What we stand for
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              These aren&apos;t slogans on a wall. They&apos;re how we show up
              for each other every day.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="relative border-l-4 border-ppa-gold pl-5"
              >
                <span className="font-display text-sm font-semibold text-ppa-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-ppa-green-deep text-ppa-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
              Membership
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              What you get
            </h2>
            <p className="mt-4 text-lg text-ppa-cream/80">
              Ten bucks. Real support. A seat at the table with people who get
              it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="border border-ppa-cream/15 bg-ppa-green/40 p-6 transition hover:border-ppa-gold/50 hover:bg-ppa-green/60 sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold-soft">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ppa-cream/80 sm:text-lg">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Fund teaser */}
      <section className="bg-surface-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Transparent fund
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Your $10. Open books.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Membership money fuels community support, tools, and action —
              never mystery spending. Track inflows, outflows, and priorities in
              plain English.
            </p>
          </div>
          <Link
            href="/fund"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#121212] px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-ppa-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#121212] dark:bg-ppa-gold dark:text-[#121212] dark:hover:bg-ppa-gold-soft"
          >
            View fund transparency
          </Link>
        </div>
      </section>

      {/* What We're Up Against teaser */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              What we&apos;re up against
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              They&apos;re watching. We&apos;re paying.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Flock cameras, big-data platforms, facial recognition, data
              brokers — how the watch-and-profit stack hits cost of living,
              insurance, and freedom. Straight talk. No conspiracy theatre.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/against"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-green-deep px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-ppa-green"
            >
              See what we&apos;re up against
            </Link>
            <p className="text-sm text-ink-muted lg:text-center">
              Awareness. Tools. Collective pushback.
            </p>
          </div>
        </div>
      </section>

      {/* Mass Media Power teaser */}
      <section className="bg-surface-muted">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
              Mass media power
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Phone + truth = media
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
              You don&apos;t need a studio. Film 15–60s, tag #PunterPower, send
              the link — we amplify the best ones. Every punter can spread the
              message.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/media"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-red px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
            >
              Film your video now
            </Link>
            <p className="text-sm text-ink-muted lg:text-center">
              Join the Mass Media Push
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#121212] text-ppa-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,160,23,0.2),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(27,94,59,0.35),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Ready to stand with us?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ppa-cream/80 sm:text-xl">
            Join Punter Power Australia for $10. No one left behind. We grow
            together.
          </p>
          <Link
            href="/join"
            className="mt-10 inline-flex min-h-14 items-center justify-center bg-ppa-red px-10 text-lg font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-red"
          >
            Join for $10
          </Link>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ppa-gold">
            If we don&apos;t go, nobody goes
          </p>
        </div>
      </section>
    </div>
  );
}
