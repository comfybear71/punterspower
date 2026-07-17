import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentGenerator,
  mediaPresets,
} from "@/components/ai/ContentGenerator";
import { Gallery } from "@/components/media/Gallery";
import { ScriptCard } from "@/components/media/ScriptCard";
import { VideoSubmitForm } from "@/components/media/VideoSubmitForm";
import { mediaGalleryItems, mediaGalleryVideos } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Mass Media Power — Ready Video Scripts",
  description:
    "Ready-to-use 15–45s video scripts for Aussie punters: resources, housing, surveillance, medical gaps, supermarket duopoly, Indigenous empowerment. Film on your phone. Tag #PunterPower. Join at punterspower.au.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Join the Mass Media Push | Punter Power Australia",
    description:
      "You don’t need a studio. Grab a raw Aussie script, film 15–45 seconds, tag #PunterPower, and send your link — we amplify the best ones.",
    url: "/media",
    type: "website",
    images: [
      {
        url: "/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg",
        width: 1200,
        height: 630,
        alt: "Woolies & Coles jacking prices? — PPA media push",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Mass Media Push | Punter Power Australia",
    description:
      "Ready video scripts for everyday Aussie punters. Film on your phone. Tag #PunterPower.",
    images: ["/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg"],
  },
};

const topicsThatWork = [
  "Resources sell-off",
  "Housing crisis",
  "Flock cameras / Palantir",
  "Medical gaps",
  "Supermarket duopoly",
  "Indigenous empowerment",
];

const steps = [
  {
    title: "Film 15–45 seconds on your phone",
    detail:
      "Talk like you’re at the pub. Face the light. Vertical video. One point. No studio required.",
  },
  {
    title: "Pick a topic that works",
    detail:
      "One topic per clip — resources, housing, surveillance, medical gaps, supermarket prices, or Indigenous empowerment.",
  },
  {
    title: "End every video with the CTA",
    detail:
      "Say it clear: “Join at punterspower.au — No one left behind.” Same close every time so it sticks.",
  },
  {
    title: "Post everywhere + hit the hashtags",
    detail:
      "TikTok, Facebook, Instagram, X, YouTube. Use #PunterPower #AussiePunters #NoOneLeftBehind #FairShareOz",
  },
  {
    title: "Submit your video to PPA",
    detail:
      "Send the link via the form below. We share and amplify the best ones across the community.",
  },
];

const scripts = [
  {
    topic: "Resources sell-off & sovereign wealth",
    duration: "~30s",
    lines: [
      "Mate, we dig it up, ship it out — and somehow still get flogged at the checkout.",
      "Australia’s sitting on serious wealth. Everyday punters get the price of living. Ask what stays here for wages, hospitals, regions — a fair share, not a farewell tour.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Housing crisis for everyday punters",
    duration: "~25s",
    lines: [
      "You can work full-time and still lose the roof race. That’s not a vibe — that’s a fortnight eaten before groceries.",
      "Rent. Mortgage. Bond. Same story in every suburb. Say your suburb. Say your hit. Make it real.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Surveillance — Flock cameras + Palantir",
    duration: "~35s",
    lines: [
      "Your number plate’s becoming a timeline. ANPR cameras watch the roads. Big-data platforms stitch ordinary trips into searchable history.",
      "Marketed as safety. Paid for by us. Ask about retention. Ask who gets the data. Keep it factual — not conspiracy theatre.",
      "Join at punterspower.au — No one left behind. If we don’t go, nobody goes.",
    ],
  },
  {
    topic: "Medical insurance gaps",
    duration: "~30s",
    lines: [
      "Private cover and still copping a gap fee — explain that to the kids.",
      "No-gap isn’t automatic. Ask what’s covered. Get the out-of-pocket in writing before they start. Shame helps no one — sharing the tip does.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Supermarket duopoly",
    duration: "~25s",
    lines: [
      "Two giants. One trolley. Same shock at the register every week.",
      "Check the unit price per 100 grams. Specials aren’t always special. Share one move that actually saved you money this week.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Indigenous empowerment",
    duration: "~35s",
    lines: [
      "Empowerment isn’t a slogan — it’s seats at the table and resources that stick.",
      "First Nations communities deserve real power over outcomes that affect them: housing, health, jobs, decisions. Same rule as every punter — dignity first. Nobody left behind.",
      "Join at punterspower.au — We are all the same. We grow together.",
    ],
  },
];

const hashtags = [
  "#PunterPower",
  "#AussiePunters",
  "#NoOneLeftBehind",
  "#FairShareOz",
];

export default function MediaPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#121212] text-ppa-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(193,18,31,0.45),transparent_45%),radial-gradient(ellipse_at_85%_80%,rgba(212,160,23,0.28),transparent_40%),linear-gradient(165deg,#121212_0%,#1a0a0c_50%,#0f3d26_100%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-ppa-gold sm:text-sm">
            Mass Media Power
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl lg:text-7xl">
            Join the Mass Media Push
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-ppa-red sm:mt-5 sm:w-32" />
          <p className="mt-5 max-w-2xl text-xl font-medium leading-snug text-ppa-cream sm:mt-6 sm:text-3xl">
            You don&apos;t need a studio. You just need your phone and the
            truth.
          </p>
          <p className="mt-3 max-w-2xl text-base text-ppa-cream/80 sm:mt-4 sm:text-lg">
            Six ready scripts. Fifteen to forty-five seconds. Raw, honest,
            actionable — then join at punterspower.au.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href="#scripts"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-red px-6 text-sm font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19] sm:min-h-14 sm:px-8 sm:text-base"
            >
              Ready video scripts
            </a>
            <a
              href="#submit"
              className="inline-flex min-h-12 items-center justify-center border-2 border-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-ppa-gold transition hover:bg-ppa-gold/10 sm:min-h-14 sm:px-8 sm:text-base"
            >
              Submit your video
            </a>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Why it matters
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Viral content wakes punters up
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink-muted sm:space-y-5 sm:text-lg">
            <p>
              When one honest clip hits the feed, thousands of Aussies see their
              own bills, their own street, their own fight — and realise
              they&apos;re not alone.
            </p>
            <p className="font-semibold text-ppa-green dark:text-ppa-gold-soft">
              You don&apos;t need to be perfect. You just need to be real. The
              people are the power.
            </p>
          </div>
        </div>
      </section>

      {/* Ready Video Scripts — primary ask */}
      <section id="scripts" className="scroll-mt-20 bg-surface-muted sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            Ready video scripts
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Six scripts. Say them out loud.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
            Conrad / Punter&apos;s Politics energy — raw Aussie, facts first,
            finish on a hard CTA. Copy, film, post. 15–45 seconds.
          </p>
          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {scripts.map((script, index) => (
              <ScriptCard
                key={script.topic}
                index={index + 1}
                topic={script.topic}
                duration={script.duration}
                lines={script.lines}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted sm:text-base">
            Need a custom cut?{" "}
            <Link
              href="/ai"
              className="font-semibold text-ppa-red underline decoration-ppa-gold decoration-2 underline-offset-4"
            >
              Ask PPA AI
            </Link>{" "}
            or{" "}
            <a
              href="#generate"
              className="font-semibold text-ppa-red underline decoration-ppa-gold decoration-2 underline-offset-4"
            >
              generate a script
            </a>
            .
          </p>
        </div>
      </section>

      {/* Step-by-step */}
      <section id="film-now" className="scroll-mt-20 bg-ppa-green-deep text-ppa-cream sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Step-by-step
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Five moves. Then you&apos;re live.
          </h2>

          <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-3 border border-ppa-cream/15 bg-ppa-green/35 p-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4 sm:p-6"
              >
                <span className="font-display text-3xl font-bold text-ppa-gold sm:text-4xl">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ppa-cream/85 sm:text-base">
                    {step.detail}
                  </p>
                  {index === 1 && (
                    <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {topicsThatWork.map((topic) => (
                        <li
                          key={topic}
                          className="border border-ppa-gold/40 bg-[#121212]/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ppa-gold-soft sm:px-3 sm:py-1.5 sm:text-xs"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                  {index === 3 && (
                    <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {hashtags.map((tag) => (
                        <li
                          key={tag}
                          className="bg-ppa-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ppa-cream sm:px-3 sm:py-1.5 sm:text-xs"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Gallery
        eyebrow="Inspiration"
        title="Visual ammo for the push"
        description="Stills first for speed — steal the energy, keep your voice, tag #PunterPower."
        items={mediaGalleryItems}
        className="bg-surface"
      />

      <Gallery
        eyebrow="Campaign clips"
        title="Watch. Then film yours."
        description="Videos load only when you hit play — kinder on mobile data."
        items={mediaGalleryVideos}
        className="border-t border-line bg-surface-muted"
      />

      {/* AI Generate Content */}
      <section
        id="generate"
        className="scroll-mt-20 border-t border-line bg-surface sm:scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <ContentGenerator
            presets={mediaPresets}
            eyebrow="AI content tool"
            title="Generate your clip script"
            description="Pick Grok, DeepSeek, or Claude. Get a raw, no-BS script for the media push — always with no one left behind, we grow together."
            defaultProvider="grok"
          />
        </div>
      </section>

      {/* Submit Your Video */}
      <section id="submit" className="scroll-mt-20 bg-surface-muted sm:scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Submit your video
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Film it. Tag it. Send it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg">
              Tag{" "}
              <span className="font-semibold text-foreground">#PunterPower</span>
              , then submit your link. We boost the best ones. Every punter can
              spread the message.
            </p>
            <a
              href="#scripts"
              className="mt-6 inline-flex min-h-12 items-center justify-center bg-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft sm:mt-8"
            >
              Back to scripts
            </a>
            <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-gold">
              Join at punterspower.au
            </p>
          </div>
          <VideoSubmitForm />
        </div>
      </section>
    </div>
  );
}
