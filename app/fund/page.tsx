import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fund Transparency",
  description:
    "See where PPA membership money goes — live balances, recent spends, and member voting.",
};

const spends = [
  {
    date: "12 Mar 2026",
    item: "Emergency member support — regional QLD",
    amount: "$420",
  },
  {
    date: "04 Mar 2026",
    item: "Guide production — Energy Bill Hack",
    amount: "$260",
  },
  {
    date: "21 Feb 2026",
    item: "Community meetup — western Sydney",
    amount: "$185",
  },
  {
    date: "09 Feb 2026",
    item: "Website hosting & tools (quarterly)",
    amount: "$96",
  },
];

const voteOptions = [
  { title: "Hardship top-ups", detail: "Fast support when a member hits a wall." },
  { title: "Next tool pack", detail: "Fund research + design for two new guides." },
  { title: "Local meetups", detail: "Help chapters host low-cost in-person catch-ups." },
];

export default function FundPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="Transparent Fund"
        title="Open books. Shared decisions."
        description="Membership dollars are tracked in the open. See what’s in, what’s out, and what’s up for a member vote next."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-line bg-surface-muted p-6 sm:col-span-1">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-red">
                Available now
              </p>
              <p className="mt-3 font-display text-5xl font-bold tracking-tight text-ppa-green dark:text-ppa-gold">
                $4,280
              </p>
              <p className="mt-2 text-sm text-ink-muted">Mock balance • updated weekly</p>
            </div>
            <div className="border border-line bg-surface-muted p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-red">
                This month in
              </p>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                $1,140
              </p>
              <p className="mt-2 text-sm text-ink-muted">From $10 memberships</p>
            </div>
            <div className="border border-line bg-surface-muted p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-red">
                This month out
              </p>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                $865
              </p>
              <p className="mt-2 text-sm text-ink-muted">Support, tools, meetups</p>
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Recent spends
              </h2>
              <p className="mt-3 text-ink-muted">
                Every line item is listed for members. No mystery buckets.
              </p>
              <ul className="mt-8 divide-y divide-line border border-line">
                {spends.map((spend) => (
                  <li
                    key={`${spend.date}-${spend.item}`}
                    className="flex flex-col gap-2 bg-surface-muted px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        {spend.date}
                      </p>
                      <p className="mt-1 font-medium">{spend.item}</p>
                    </div>
                    <p className="font-display text-xl font-bold text-ppa-green dark:text-ppa-gold">
                      {spend.amount}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="bg-ppa-green-deep p-6 text-ppa-cream sm:p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-gold">
                Member voting
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight">
                Where next?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ppa-cream/80">
                Mock vote teaser — members will choose the next priority pool.
                One member, one vote.
              </p>
              <ul className="mt-6 space-y-4">
                {voteOptions.map((option) => (
                  <li
                    key={option.title}
                    className="border border-ppa-cream/20 bg-ppa-green/40 p-4"
                  >
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-ppa-gold-soft">
                      {option.title}
                    </p>
                    <p className="mt-1 text-sm text-ppa-cream/75">{option.detail}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/join"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center bg-ppa-gold px-5 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
              >
                Join to vote — $10
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
