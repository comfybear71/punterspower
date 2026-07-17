import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our mission, values, and the story behind Punter Power Australia — if we don’t go, nobody goes.",
};

const values = [
  {
    title: "No one left behind",
    body: "Hard times hit differently when you’re alone. We organise so every member has people, tools, and dignity when they need them most.",
  },
  {
    title: "We are all the same",
    body: "No VIP lanes. No talking down. Punters, partners, and mates share the same table and the same voice.",
  },
  {
    title: "Grow together",
    body: "Knowledge compounds when it’s shared. Wins are celebrated out loud. Progress belongs to the group, not the gatekeepers.",
  },
  {
    title: "If we don’t go, nobody goes",
    body: "Waiting for permission never built a movement. We take the first step so others can walk with us.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="About PPA"
        title="Built by punters, for punters"
        description="Punter Power Australia is a member-led community fighting isolation with solidarity — practical support, transparent funds, and a clear set of values we live by."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Mission
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Leave no mate behind
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              Too many people in racing and betting culture are expected to
              tough it out alone — bills stacking up, information locked away,
              support arriving too late or not at all.
            </p>
            <p>
              Our mission is simple: build a trustworthy home where members
              look after each other, share what works, and put money into
              outcomes everyone can see.
            </p>
            <p className="font-semibold text-ppa-green dark:text-ppa-gold-soft">
              Ten dollars gets you in. Belonging keeps you here.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-green dark:text-ppa-gold">
              Values
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              What guides every decision
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="border border-line bg-surface p-6 sm:p-8"
              >
                <span className="font-display text-sm font-semibold text-ppa-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ppa-green-deep text-ppa-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Our story
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            If we don’t go, nobody goes
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ppa-cream/85">
              <p>
                PPA started with a hard truth: waiting for big institutions to
                put everyday punters first was a losing bet. If the people
                closest to the problem didn’t organise, nothing would move.
              </p>
              <p>
                So we went first. We built a membership anyone can afford, a
                fund anyone can inspect, and a community that treats support as
                normal — not charity, not pity, just mateship with structure.
              </p>
              <p>
                That line — <em>if we don’t go, nobody goes</em> — isn’t bravado.
                It’s responsibility. We take the first step so the next person
                doesn’t have to walk alone.
              </p>
            </div>
            <aside className="border border-ppa-cream/20 bg-ppa-green/40 p-6 sm:p-8">
              <p className="font-display text-2xl font-bold uppercase leading-snug text-ppa-gold-soft">
                We are all the same.
                <br />
                We grow together.
                <br />
                No one left behind.
              </p>
              <Link
                href="/join"
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
              >
                Stand with us — $10
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
