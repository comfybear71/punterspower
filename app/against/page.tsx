import type { Metadata } from "next";
import Link from "next/link";
import { PpaImage } from "@/components/media/PpaImage";
import { PpaVideo } from "@/components/media/PpaVideo";
import { PageHero } from "@/components/PageHero";
import { assets, type PpaMediaAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "What We're Up Against",
  description:
    "Flock cameras, big-data surveillance, facial recognition, and data brokers — how the watch-and-profit system hits everyday Aussies, and what PPA is doing about it.",
};

const topics = [
  {
    id: "flock",
    title: "Flock cameras & ANPR",
    icon: "camera",
    lead: "Automated number plate recognition turns ordinary roads into continuous checkpoints.",
    body: [
      "Flock-style and government ANPR networks photograph plates at scale — often marketed for stolen cars and crime — then store location trails over time.",
      "Once plates become searchable history, everyday driving can be reconstructed: where you went, when, how often. That data can be shared across agencies and, in some models, with private partners.",
      "You don’t get a clear “I agree” moment when you drive past a pole. The cost is quiet: less anonymity on public roads, more room for errors, and more power for whoever holds the database.",
    ],
    impact:
      "Surveillance infrastructure is expensive to buy and run — paid for through taxes, contracts, and rates — while households still carry rising fuel, rego, insurance, and fine pressure.",
    ppa: "We publish plain-English explainers on how plate cameras work, what questions to ask local councils and agencies, and how members can share verified reports without fear-mongering. Awareness first, then collective pushback for clear limits, retention rules, and public accountability.",
    media: [assets.ppaLogo, assets.clipPower] as PpaMediaAsset[],
  },
  {
    id: "palantir",
    title: "Palantir & big-data platforms",
    icon: "grid",
    lead: "Government and corporations plug into platforms that fuse records you never meant to connect.",
    body: [
      "Companies like Palantir sell software that stitches together siloed datasets — policing, services, logistics, corporate systems — so analysts can search people, places, and patterns in one pane.",
      "Similar “data lake” and AI analytics stacks are used across agencies and large firms. The pitch is efficiency. The risk is scope: once fused, ordinary admin data becomes a high-resolution profile.",
      "This isn’t sci-fi. It’s procurement and contracts. The public often learns after systems are live, not before the design choices are locked in.",
    ],
    impact:
      "When risk scores and fused profiles feed decisions, mistakes hit hardest on people already doing it tough — more friction accessing help, more “computer says no,” more time unpaid fixing bureaucracy.",
    ppa: "We track public reporting on major data platforms in Australia, translate vendor jargon into mate-speak, and build tools so members know what to request under FOI / privacy rights. Collective pushback means asking for purpose limits, audit trails, and human review — not blank-cheque surveillance.",
    media: [assets.clipResources, assets.clipPower] as PpaMediaAsset[],
  },
  {
    id: "face-data",
    title: "Facial recognition, data brokers & tracking",
    icon: "face",
    lead: "Your face, feed, and shopping trail are products — sold, scored, and recycled.",
    body: [
      "Facial recognition shows up in retail, venues, policing trials, and identity systems. Accuracy gaps and false matches are a documented problem — especially for people already over-scrutinised.",
      "Data brokers buy and sell marketing, location, and behavioural profiles. Social platforms track clicks, dwell time, and networks to target ads and shape what you see.",
      "Separately these feel small. Together they build a commercial map of who you are, what you earn pressure looks like, and how to squeeze another dollar out of you.",
    ],
    impact:
      "Tracking fuels dynamic pricing, sharper insurance underwriting, and ad pressure that pushes debt products when households are already stretched. Loss of freedom isn’t only cameras — it’s fewer real choices when the algorithm knows your weak spots.",
    ppa: "We ship privacy hygiene guides (settings, permissions, broker opt-outs where they exist), share “what to refuse” checklists for venues and apps, and push for alternatives that don’t require trading dignity for a discount. Grow together means skills, not shame.",
    media: [assets.unitPrice, assets.clipMessage] as PpaMediaAsset[],
  },
  {
    id: "connects",
    title: "How this hits your hip pocket & freedom",
    icon: "link",
    lead: "Surveillance and scoring don’t sit in a separate universe from cost of living.",
    body: [
      "Insurance: more behavioural and location data can mean finer risk slicing — good for some, brutal for others, opaque for most.",
      "Policing & fines: automated enforcement scales faster than support services. Errors and disputes cost time and money people don’t have.",
      "Cost of living: data-driven marketing and pricing extract more from stressed households while public money flows into watch systems that rarely lower your power bill.",
      "Freedom: when movement, face, and online life are logged by default, “nothing to hide” becomes “nowhere to rest.” Chill effects are real even if you’ve done nothing wrong.",
    ],
    impact:
      "The pattern is simple: they’re watching and profiting — through contracts, ads, premiums, and platform rent — while everyday Aussies pay in cash, time, and autonomy.",
    ppa: "PPA connects the dots in member briefings, funds practical guides, and backs collective pushback for transparency and fairer defaults. If we don’t go, nobody goes — so we organise before the next system quietly expands.",
    media: [assets.wooliesColes, assets.clipDuopoly] as PpaMediaAsset[],
  },
];

function TopicIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 64 64",
    className: "h-14 w-14 text-ppa-gold",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "camera":
      return (
        <svg {...common}>
          <rect x="8" y="18" width="36" height="28" />
          <circle cx="26" cy="32" r="8" />
          <path d="M44 28h12v16H44z" />
          <path d="M14 18l6-8h12l6 8" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="18" height="18" />
          <rect x="36" y="10" width="18" height="18" />
          <rect x="10" y="36" width="18" height="18" />
          <rect x="36" y="36" width="18" height="18" />
          <path d="M28 19h8M19 28v8M45 28v8M28 45h8" />
        </svg>
      );
    case "face":
      return (
        <svg {...common}>
          <rect x="14" y="12" width="36" height="40" rx="4" />
          <circle cx="26" cy="28" r="3" />
          <circle cx="38" cy="28" r="3" />
          <path d="M24 40c2.5 3 13.5 3 16 0" />
          <path d="M8 22h6M8 32h6M8 42h6M50 22h6M50 32h6M50 42h6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="8" />
          <circle cx="44" cy="44" r="8" />
          <path d="M26 26l12 12" />
          <path d="M14 44h12M38 20h12" />
        </svg>
      );
  }
}

export default function AgainstPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="What we're up against"
        title="They're watching. We're paying."
        description="Straight facts on road cameras, big-data platforms, facial recognition, and data brokers — and how that stack squeezes everyday Aussies. No conspiracy theatre. Just the system as it operates."
      />

      <section className="border-b border-line bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Power and profit concentrate when movement, identity, and behaviour
            are logged by default. PPA names the machinery in plain English —
            then builds awareness, tools, and collective pushback so no one is
            left navigating it alone.
          </p>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-red">
            No one left behind • We grow together
          </p>
        </div>
      </section>

      {topics.map((topic, index) => {
        const muted = index % 2 === 1;
        return (
          <section
            key={topic.id}
            id={topic.id}
            className={muted ? "bg-surface-muted" : "bg-surface"}
          >
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
              <div className="grid gap-10 lg:grid-cols-[120px_1fr] lg:gap-14">
                <div className="flex h-24 w-24 items-center justify-center border border-line bg-surface">
                  <TopicIcon name={topic.icon} />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
                    {topic.title}
                  </h2>
                  <p className="mt-4 text-xl font-medium leading-snug text-foreground sm:text-2xl">
                    {topic.lead}
                  </p>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                    {topic.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-6 border-l-4 border-ppa-gold pl-4 text-base font-medium leading-relaxed text-foreground sm:text-lg">
                    {topic.impact}
                  </p>
                  <div className="mt-8 border border-ppa-green/30 bg-ppa-green-deep p-5 text-ppa-cream sm:p-6">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-gold">
                      What PPA is doing about it
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-ppa-cream/90 sm:text-lg">
                      {topic.ppa}
                    </p>
                  </div>
                  {topic.media?.length ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {topic.media.map((item) =>
                        item.type === "video" ? (
                          <PpaVideo
                            key={item.src}
                            src={item.src}
                            poster={item.poster}
                            caption={item.caption}
                            alt={item.alt}
                            controls
                            muted
                            loop
                          />
                        ) : (
                          <PpaImage
                            key={item.src}
                            src={item.src}
                            alt={item.alt}
                            caption={item.caption}
                            aspect="video"
                          />
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Supermarket / resources visual section */}
      <section id="supermarket" className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            Resources & the checkout
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Duopoly dollars. Family budgets.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            While surveillance stacks grow, the trolley still shocks. Here&apos;s
            the cost-of-living front line — and the alternatives punters are
            sharing.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PpaImage
              src={assets.wooliesColes.src}
              alt={assets.wooliesColes.alt}
              caption={assets.wooliesColes.caption}
              aspect="photo"
              className="lg:col-span-2"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <PpaImage
              src={assets.aldiShopping.src}
              alt={assets.aldiShopping.alt}
              caption={assets.aldiShopping.caption}
              aspect="photo"
            />
            <PpaImage
              src={assets.bulkHacks.src}
              alt={assets.bulkHacks.alt}
              caption={assets.bulkHacks.caption}
              aspect="photo"
            />
            <PpaImage
              src={assets.shopLocal.src}
              alt={assets.shopLocal.alt}
              caption={assets.shopLocal.caption}
              aspect="photo"
            />
            <PpaVideo
              src={assets.clipCheckout.src}
              poster={assets.clipCheckout.poster}
              caption={assets.clipCheckout.caption}
              alt={assets.clipCheckout.alt}
              controls
              muted
              loop
            />
          </div>
          <div className="mt-8 border border-ppa-green/30 bg-ppa-green-deep p-5 text-ppa-cream sm:p-6">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-gold">
              What PPA is doing about it
            </p>
            <p className="mt-3 text-base leading-relaxed text-ppa-cream/90 sm:text-lg">
              Unit-price guides, ALDI/local alternatives, and member clips that
              call out the markup without conspiracy theatre. Awareness, tools,
              collective pushback — grow together at the checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121212] text-ppa-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(193,18,31,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(212,160,23,0.15),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Eyes open. Wallets shut less often.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ppa-cream/80">
            PPA doesn&apos;t sell panic. We sell clarity, tools, and a community
            that shows up — so the watch-and-profit machine doesn&apos;t get a
            free run over everyday Aussies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-red px-6 text-sm font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
            >
              Join for $10
            </Link>
            <Link
              href="/tools"
              className="inline-flex min-h-12 items-center justify-center border-2 border-ppa-cream/70 px-6 text-sm font-bold uppercase tracking-wide transition hover:bg-ppa-cream/10"
            >
              Get the tools
            </Link>
            <Link
              href="/ai"
              className="inline-flex min-h-12 items-center justify-center bg-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
            >
              Ask PPA AI
            </Link>
          </div>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ppa-gold">
            If we don&apos;t go, nobody goes
          </p>
        </div>
      </section>
    </div>
  );
}
