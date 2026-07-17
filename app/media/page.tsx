import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentGenerator,
  mediaPresets,
} from "@/components/ai/ContentGenerator";
import { Gallery } from "@/components/media/Gallery";
import { VideoSubmitForm } from "@/components/media/VideoSubmitForm";
import { mediaGalleryItems } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Join the Mass Media Push",
  description:
    "Mass Media Power — every punter can spread the message. Film on your phone, tag #PunterPower, send your link to PPA.",
};

const topicsThatWork = [
  "Resources sell-off",
  "Housing crisis",
  "Flock cameras / Palantir surveillance",
  "Medical gaps",
  "Supermarket duopoly",
  "Indigenous empowerment",
];

const steps = [
  {
    title: "Film 15–60 seconds on your phone",
    detail:
      "Talk like you’re at the pub. Face the light. Vertical video. One point. No studio required.",
  },
  {
    title: "Pick a topic that works",
    detail:
      "Resources sell-off, housing crisis, Flock cameras / Palantir surveillance, medical gaps, supermarket duopoly, Indigenous empowerment — one topic per clip.",
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
    title: "Send the link to PPA",
    detail:
      "We share and amplify the best ones across the community. Your phone becomes mass media.",
  },
];

const scripts = [
  {
    topic: "Resources sell-off",
    lines: [
      "Mate, we’re a resource country and somehow still getting flogged at the checkout.",
      "Wealth leaves. Prices stay. Ask who profits and what comes back to wages, hospitals, and the regions.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Housing crisis",
    lines: [
      "You can work full-time and still lose the roof race.",
      "Rent and mortgages chew the fortnight before groceries do. Say your suburb. Say your hit.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Flock cameras / Palantir",
    lines: [
      "Your number plate’s becoming a timeline.",
      "ANPR and big-data platforms stitch ordinary trips into searchable history. Ask about retention, sharing, and who profits from the watch.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Medical gaps",
    lines: [
      "Private cover and still getting a gap fee — explain that to the kids.",
      "No-gap isn’t automatic. Ask what’s covered. Get the out-of-pocket in writing before they start.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
  {
    topic: "Supermarket duopoly",
    lines: [
      "Two giants. One trolley. Same shock at the register every week.",
      "Unit price. Specials with a brain. Share one tip that actually saved you money this week.",
      "Join at punterspower.au — No one left behind.",
    ],
  },
];

const thumbnails = [
  {
    title: "PHONE + TRUTH",
    line: "No studio. Just facts.",
  },
  {
    title: "FAIR SHARE",
    line: "Resources → households",
  },
  {
    title: "WATCHING US",
    line: "Plates. Data. Profit.",
  },
  {
    title: "GAP FEE",
    line: "Insured ≠ no gap",
  },
];

const captions = [
  {
    label: "General",
    text: "You don’t need a studio. You just need your phone and the truth.\n\nJoin at punterspower.au — No one left behind.\n\n#PunterPower #AussiePunters #NoOneLeftBehind #FairShareOz",
  },
  {
    label: "Housing",
    text: "Full-time work. Still losing the roof race.\n\nFilm your story. Tag #PunterPower. Send the link to PPA — we amplify the best ones.\n\n#AussiePunters #NoOneLeftBehind #FairShareOz",
  },
  {
    label: "Surveillance",
    text: "They’re filming the plates. We’re paying for the poles.\n\nAsk the hard questions. Keep it factual.\n\nJoin at punterspower.au — No one left behind.\n\n#PunterPower #FairShareOz",
  },
  {
    label: "Cost of living",
    text: "Supermarket shock. Energy shock. Same story every fortnight.\n\nOne tip. One clip. Tag #PunterPower.\n\n#AussiePunters #NoOneLeftBehind",
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
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-ppa-gold">
            Mass Media Power
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Join the Mass Media Push
          </h1>
          <div className="mt-5 h-1.5 w-32 bg-ppa-red" />
          <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-ppa-cream sm:text-3xl">
            You don&apos;t need a studio. You just need your phone and the
            truth.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ppa-cream/80">
            Every punter can spread the message. Raw. Honest. Actionable. The
            people are the power.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#film-now"
              className="inline-flex min-h-14 items-center justify-center bg-ppa-red px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-red"
            >
              Film Your Video Now
            </a>
            <a
              href="#scripts"
              className="inline-flex min-h-14 items-center justify-center border-2 border-ppa-gold px-8 text-base font-bold uppercase tracking-wide text-ppa-gold transition hover:bg-ppa-gold/10"
            >
              Grab a script
            </a>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Why it matters
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Viral content wakes punters up
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              When one honest clip hits the feed, thousands of Aussies see their
              own bills, their own street, their own fight — and realise
              they&apos;re not alone.
            </p>
            <p>
              That&apos;s how real power builds: not waiting for a TV panel, but
              phones in pockets, facts out loud, and a clear path to stand
              together at{" "}
              <span className="font-semibold text-foreground">
                punterspower.au
              </span>
              .
            </p>
            <p className="font-semibold text-ppa-green dark:text-ppa-gold-soft">
              Mass media used to be a few gates. Now it&apos;s every punter with
              the guts to hit record.
            </p>
          </div>
        </div>
      </section>

      <Gallery
        eyebrow="Inspiration gallery"
        title="Visual ammo for the push"
        description="Six hard-hitting stills and two campaign clips — steal the energy, keep your voice, tag #PunterPower."
        items={mediaGalleryItems}
        className="bg-surface"
      />

      {/* Inspiration */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Inspiration
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Raw Aussie energy — like Punter&apos;s Politics
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-2 border-ppa-red bg-[#121212] p-6 text-ppa-cream sm:p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-gold">
                Style to study
              </p>
              <p className="mt-4 font-display text-3xl font-bold uppercase leading-none sm:text-4xl">
                Punter&apos;s Politics / Conrad energy
              </p>
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-ppa-cream/85">
                <li className="border-l-4 border-ppa-red pl-4">
                  Raw, honest Aussie bloke energy — talk like the pub, not a
                  press release
                </li>
                <li className="border-l-4 border-ppa-gold pl-4">
                  Call out the bullshit with facts, not conspiracy fog
                </li>
                <li className="border-l-4 border-ppa-red pl-4">
                  Always land a solution or a clear next step
                </li>
                <li className="border-l-4 border-ppa-gold pl-4">
                  Phone camera. Real face. Zero polish theatre
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center border border-line bg-surface p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-ink-muted">
                Steal the courage. Keep your own voice. PPA&apos;s lane stays
                fair for everyday punters — no party ads, no culture-war
                cosplay. Heat + honesty + a join link.
              </p>
              <p className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ppa-red">
                You don&apos;t need to be perfect. You just need to be real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section id="film-now" className="scroll-mt-24 bg-ppa-green-deep text-ppa-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Step-by-step
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Five moves. Then you&apos;re live.
          </h2>

          <ol className="mt-10 space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 border border-ppa-cream/15 bg-ppa-green/35 p-5 sm:grid-cols-[4rem_1fr] sm:p-6"
              >
                <span className="font-display text-4xl font-bold text-ppa-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ppa-cream/85">
                    {step.detail}
                  </p>
                  {index === 1 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {topicsThatWork.map((topic) => (
                        <li
                          key={topic}
                          className="border border-ppa-gold/40 bg-[#121212]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ppa-gold-soft"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                  {index === 3 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {hashtags.map((tag) => (
                        <li
                          key={tag}
                          className="bg-ppa-red px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ppa-cream"
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

          <a
            href="#submit"
            className="mt-10 inline-flex min-h-14 items-center justify-center bg-ppa-red px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
          >
            Film Your Video Now
          </a>
        </div>
      </section>

      {/* Scripts */}
      <section id="scripts" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            Ready-to-use scripts
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Five scripts. Say them out loud.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Swap in your suburb and your numbers. Keep the close every time.
          </p>
          <div className="mt-10 space-y-4">
            {scripts.map((script, index) => (
              <article
                key={script.topic}
                className="border border-line border-l-4 border-l-ppa-red bg-surface-muted p-5 sm:p-6"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-gold">
                  Script 0{index + 1} — {script.topic}
                </p>
                <ol className="mt-4 space-y-3">
                  {script.lines.map((line, lineIndex) => (
                    <li key={line} className="flex gap-3 text-base sm:text-lg">
                      <span className="font-display font-bold text-ppa-red">
                        {lineIndex + 1}.
                      </span>
                      <span
                        className={
                          lineIndex === script.lines.length - 1
                            ? "font-semibold text-foreground"
                            : "text-ink-muted"
                        }
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <p className="mt-8 text-base text-ink-muted">
            Need a custom cut?{" "}
            <Link
              href="/ai"
              className="font-semibold text-ppa-red underline decoration-ppa-gold decoration-2 underline-offset-4"
            >
              Ask PPA AI
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Thumbnails & captions */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Thumbnails & captions
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Clickable. Shareable. Human.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.title}
                className="flex aspect-[9/16] max-h-72 flex-col justify-between border-2 border-ppa-gold bg-[#121212] p-4 text-ppa-cream"
              >
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-ppa-red">
                  Thumbnail
                </p>
                <div>
                  <p className="font-display text-2xl font-bold uppercase leading-none text-ppa-gold">
                    {thumb.title}
                  </p>
                  <p className="mt-2 text-sm text-ppa-cream/85">{thumb.line}</p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-ppa-red">
                  #PunterPower
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {captions.map((caption) => (
              <article
                key={caption.label}
                className="border border-line bg-surface p-5 sm:p-6"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-red">
                  Caption — {caption.label}
                </p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink-muted">
                  {caption.text}
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Generate Content */}
      <section id="generate" className="scroll-mt-24 border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <ContentGenerator
            presets={mediaPresets}
            eyebrow="AI content tool"
            title="Generate your clip script"
            description="Pick Grok, DeepSeek, or Claude. Get a raw, no-BS script or meme idea for the media push — always with no one left behind, we grow together."
            defaultProvider="grok"
          />
        </div>
      </section>

      {/* CTA + form */}
      <section id="submit" className="scroll-mt-24 bg-surface-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14 lg:py-24">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
              Call to action
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
              Film your story. We&apos;ll push it further.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Film your video, tag{" "}
              <span className="font-semibold text-foreground">#PunterPower</span>
              , send the link to PPA — we&apos;ll boost the best ones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#film-now"
                className="inline-flex min-h-14 items-center justify-center bg-ppa-red px-8 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
              >
                Film Your Video Now
              </a>
              <a
                href="#generate"
                className="inline-flex min-h-14 items-center justify-center bg-ppa-gold px-8 text-base font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
              >
                Generate a script
              </a>
            </div>
            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-gold">
              Every punter can spread the message
            </p>
          </div>
          <VideoSubmitForm />
        </div>
      </section>
    </div>
  );
}
