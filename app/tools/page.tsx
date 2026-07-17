import type { Metadata } from "next";
import Link from "next/link";
import { ContentGenerator } from "@/components/ai/ContentGenerator";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tools & Guides",
  description:
    "Practical PPA guides for health, energy, groceries, and more — built for everyday Aussie punters.",
};

const guides = [
  {
    title: "Health Insurance No-Gap Guide",
    summary:
      "How to spot no-gap options, avoid junk extras, and ask the right questions before you renew.",
    tag: "Health",
    status: "PDF coming soon",
  },
  {
    title: "Energy Bill Hack",
    summary:
      "A plain-English walkthrough for comparing plans, reading usage, and cutting waste without the jargon.",
    tag: "Bills",
    status: "PDF coming soon",
  },
  {
    title: "Beating Supermarket Duopoly",
    summary:
      "Tactics for stretching the shop: unit pricing, timing, substitutes, and member-shared local tips.",
    tag: "Cost of living",
    status: "PDF coming soon",
  },
  {
    title: "Banking & Fee Escape Plan",
    summary:
      "Find fee-free basics, switch with less friction, and stop paying for accounts that don’t serve you.",
    tag: "Money",
    status: "PDF coming soon",
  },
  {
    title: "Responsible Punters Checklist",
    summary:
      "Guardrails that keep the punt in its place — limits, cool-offs, and how mates can check in properly.",
    tag: "Wellbeing",
    status: "PDF coming soon",
  },
  {
    title: "Community Support Playbook",
    summary:
      "What to do when a member is doing it tough: scripts, resources, and how PPA can help next.",
    tag: "Community",
    status: "PDF coming soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="Tools & Guides"
        title="Practical power, shared freely"
        description="Guides built for real life — bills, health, groceries, and looking after each other. Members get first access; everyone gets clarity."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Guide library
              </h2>
              <p className="mt-3 text-lg text-ink-muted">
                Placeholder downloads for now — final PDFs land here as each
                guide is finished.
              </p>
            </div>
            <Link
              href="/join"
              className="inline-flex min-h-11 shrink-0 items-center justify-center bg-ppa-green-deep px-5 text-sm font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-ppa-green"
            >
              Unlock as a member
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="flex flex-col border border-line bg-surface-muted p-6 transition hover:border-ppa-gold/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-red">
                    {guide.tag}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    {guide.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-tight">
                  {guide.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">
                  {guide.summary}
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-6 inline-flex min-h-11 items-center justify-center border border-line bg-surface px-4 text-sm font-bold uppercase tracking-wide text-ink-muted"
                >
                  Download PDF (soon)
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <ContentGenerator />
          <p className="mt-10 max-w-3xl text-lg text-ink-muted">
            Got a guide idea the community needs?{" "}
            <Link
              href="/community"
              className="font-semibold text-ppa-green underline decoration-ppa-gold decoration-2 underline-offset-4 dark:text-ppa-gold"
            >
              Share it in Community
            </Link>{" "}
            or{" "}
            <Link
              href="/ai"
              className="font-semibold text-ppa-green underline decoration-ppa-gold decoration-2 underline-offset-4 dark:text-ppa-gold"
            >
              ask the AI assistant
            </Link>{" "}
            — we grow together by building what people actually use.
          </p>
        </div>
      </section>
    </div>
  );
}
