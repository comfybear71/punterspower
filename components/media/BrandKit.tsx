import { PpaLogo, PpaTitleMark } from "@/components/PpaLogo";

export function BrandKit() {
  return (
    <section
      id="branding"
      className="scroll-mt-20 border-b border-line bg-surface sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            Branding for your videos
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Slap the logo on every clip
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Official PPA mark — kangaroo, fist, PPA. Use it on end screens so
            every phone clip looks like it belongs to the same push.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2">
          {/* Dark example */}
          <div className="border border-ppa-gold/40 bg-ppa-green-deep p-5 text-ppa-cream sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-gold">
              On dark (end screen)
            </p>
            <div className="mt-6 flex flex-col items-center gap-5">
              <PpaLogo size="xl" />
              <PpaTitleMark className="max-w-md" />
            </div>
            <p className="mt-6 text-center font-display text-xs font-semibold uppercase tracking-[0.16em] text-ppa-gold-soft">
              No one left behind · We grow together
            </p>
          </div>

          {/* Light example */}
          <div className="border border-line bg-ppa-cream p-5 text-[#121212] sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-red">
              On light (still works)
            </p>
            <div className="mt-6 flex flex-col items-center gap-5">
              <PpaLogo size="xl" />
              <div className="w-full max-w-md overflow-hidden rounded-sm ring-1 ring-ppa-green/25">
                <PpaTitleMark />
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-ppa-green">
              Green plate + gold mark stays sharp on cream too.
            </p>
          </div>
        </div>

        <div className="mt-6 border border-dashed border-ppa-gold/50 bg-surface-muted p-5 sm:p-6">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
            CapCut tip (phone)
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
            <li>Export or screenshot the logo from this page (or save logo.jpg).</li>
            <li>In CapCut: Overlay → Add image → place bottom-right or centre end card.</li>
            <li>
              End-screen text:{" "}
              <span className="font-semibold text-foreground">
                Join at punterspower.au — No one left behind. We grow together.
              </span>
            </li>
            <li>Tag #PunterPower then submit your link below.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
