import { PpaVideo } from "./PpaVideo";

const CAPTION =
  "Mate, we dig it up, ship it out — and somehow still get flogged at the checkout.";

type FeaturedExampleVideoProps = {
  src: string;
  poster?: string;
  scriptHref?: string;
};

export function FeaturedExampleVideo({
  src,
  poster,
  scriptHref = "#script-resources",
}: FeaturedExampleVideoProps) {
  return (
    <section className="border-b border-line bg-[#0a1a12] text-ppa-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-gold">
            Example video
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Watch. Then film yours.
          </h2>
          <p className="mt-4 text-base text-ppa-cream/75 sm:text-lg">
            One raw take on the resources sell-off — same energy we want from
            every phone in the country.
          </p>
        </div>

        <div className="mt-8 max-w-4xl border border-ppa-gold/40 sm:mt-10">
          <PpaVideo
            src={src}
            poster={poster}
            alt="Example PPA clip — resources sell-off"
            caption={CAPTION}
            autoPlay
            muted
            loop
            controls
            aspect="video"
            className="border-0"
          />
          <div className="flex flex-col gap-3 border-t border-ppa-gold/30 bg-[#121212] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ppa-gold-soft">
              No one left behind · We grow together
            </p>
            <a
              href={scriptHref}
              className="inline-flex min-h-12 items-center justify-center bg-ppa-red px-6 text-sm font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
            >
              Use This Script
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
