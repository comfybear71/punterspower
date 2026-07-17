import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Community",
  description:
    "PPA community feed — shared wins, local leaders, and members looking out for each other.",
};

const leaders = [
  { name: "Jess M.", role: "NSW Chapter Lead", focus: "Member check-ins" },
  { name: "Dane R.", role: "QLD Chapter Lead", focus: "Tools & guides" },
  { name: "Amina K.", role: "VIC Chapter Lead", focus: "Fund transparency" },
];

const posts = [
  {
    author: "Mitch T.",
    time: "2h ago",
    title: "Switched energy plans using the PPA hack",
    body: "Cut about $38 a month after following the comparison steps. Happy to walk anyone through it this week.",
    tag: "Shared win",
  },
  {
    author: "Sarah L.",
    time: "Yesterday",
    title: "Looking out for a mate in Geelong",
    body: "If anyone local can help with a lift to an appointment Thursday arvo, drop a comment. No one left behind.",
    tag: "Support",
  },
  {
    author: "Chris P.",
    time: "2 days ago",
    title: "Supermarket unit-price challenge results",
    body: "Tried the duopoly guide for a fortnight — saved enough to cover next month’s membership twice over.",
    tag: "Shared win",
  },
  {
    author: "PPA Team",
    time: "3 days ago",
    title: "March fund vote opens Friday",
    body: "Shortlist is up on the Fund page. Members decide where the next support dollars land.",
    tag: "Announcement",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="Community"
        title="We show up for each other"
        description="A simple feed for wins, asks, and leadership in the open. Real people. Real mateship. No corporate fluff."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-12 lg:py-24">
          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Member feed
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Mock posts
              </span>
            </div>

            <ul className="mt-8 space-y-4">
              {posts.map((post) => (
                <li
                  key={post.title}
                  className="border border-line bg-surface-muted p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-ink-muted">{post.time}</span>
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ppa-red">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {post.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-surface-muted p-5 sm:p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-green dark:text-ppa-gold">
                Chapter leaders
              </p>
              <ul className="mt-5 space-y-4">
                {leaders.map((leader) => (
                  <li key={leader.name} className="border-l-2 border-ppa-gold pl-3">
                    <p className="font-semibold">{leader.name}</p>
                    <p className="text-sm text-ink-muted">{leader.role}</p>
                    <p className="text-sm text-ink-muted">Focus: {leader.focus}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ppa-green-deep p-5 text-ppa-cream sm:p-6">
              <p className="font-display text-2xl font-bold uppercase leading-tight">
                Shared wins board
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ppa-cream/80">
                Celebrate the small stuff — bill cuts, check-ins, guides that
                actually helped. Momentum is contagious.
              </p>
              <Link
                href="/join"
                className="mt-5 inline-flex min-h-11 items-center justify-center bg-ppa-gold px-5 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
              >
                Join the feed — $10
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
