import Link from "next/link";
import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ppa-cream/10 bg-[#0a1a12] text-ppa-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold">
              Punter Power Australia
            </p>
            <p className="mt-3 text-base leading-relaxed text-ppa-cream/75">
              A community built so every punter has somewhere to stand — and
              someone standing with them.
            </p>
            <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-gold-soft">
              No One Left Behind • We Grow Together
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-cream/55">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ppa-cream/80 transition hover:text-ppa-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ppa-cream/10 pt-6 text-sm text-ppa-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Punter Power Australia</p>
          <p className="font-display uppercase tracking-[0.16em] text-ppa-red">
            If we don&apos;t go, nobody goes
          </p>
        </div>
      </div>
    </footer>
  );
}
