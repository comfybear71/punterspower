import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join Punter Power Australia for $10. We grow together — community, tools, and a transparent fund.",
};

const benefits = [
  "Full access to Tools & Guides as they drop",
  "Community feed, chapter leaders, and mate check-ins",
  "Vote on where fund dollars go next",
  "Open-book transparency on every membership dollar",
  "A seat at a movement that refuses to leave people behind",
];

export default function JoinPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="Membership"
        title="We grow together"
        description="Ten dollars isn’t a tip jar — it’s a ticket into a community that shows up. Equal voice. Shared tools. Money you can track."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Why join
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Stronger as a pack
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Solo struggle is expensive. Together we cut through bills, share
              what works, and put support behind the people who need it —
              without shame, without hierarchy.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-base sm:text-lg">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 bg-ppa-gold"
                  />
                  <span className="text-ink-muted">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-green dark:text-ppa-gold">
              No one left behind • We are all the same
            </p>
          </div>

          <div className="border border-line bg-surface-muted p-6 sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-red">
              Standard membership
            </p>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-6xl font-bold tracking-tight">
                $10
              </span>
              <span className="mb-2 text-ink-muted">/ month</span>
            </div>
            <p className="mt-3 text-base text-ink-muted">
              One price. Same access for everyone. Cancel anytime — we’re here
              when you’re ready.
            </p>

            <form className="mt-8 space-y-4" action="#" method="post">
              <label className="block">
                <span className="text-sm font-semibold">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">State / Territory</span>
                <select
                  name="state"
                  defaultValue=""
                  className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>NSW</option>
                  <option>VIC</option>
                  <option>QLD</option>
                  <option>WA</option>
                  <option>SA</option>
                  <option>TAS</option>
                  <option>ACT</option>
                  <option>NT</option>
                </select>
              </label>
              <button
                type="button"
                className="inline-flex min-h-12 w-full items-center justify-center bg-ppa-red px-6 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
              >
                Join for $10
              </button>
              <p className="text-center text-xs text-ink-muted">
                Payment checkout coming soon — this form is a placeholder.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121212] text-ppa-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,160,23,0.18),transparent_40%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            If we don’t go, nobody goes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ppa-cream/80">
            Your membership is the first step. The community is the rest. See
            the fund, meet the people, grow with us.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fund"
              className="inline-flex min-h-12 items-center justify-center border-2 border-ppa-cream/70 px-6 text-sm font-bold uppercase tracking-wide transition hover:bg-ppa-cream/10"
            >
              Inspect the fund
            </Link>
            <Link
              href="/community"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
            >
              Meet the community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
