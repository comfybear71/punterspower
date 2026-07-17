import Link from "next/link";
import { navLinks } from "@/lib/nav";

const footerGroups = [
  {
    title: "About",
    links: [
      { href: "/about", label: "Our story" },
      { href: "/against", label: "What we're up against" },
      { href: "/join", label: "Join for $10" },
    ],
  },
  {
    title: "Take action",
    links: [
      { href: "/media", label: "Mass Media Power" },
      { href: "/tools", label: "Tools & Guides" },
      { href: "/ai", label: "AI Assistant" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/community", label: "Community" },
      { href: "/fund", label: "Fund transparency" },
      { href: "/media#submit", label: "Submit a video" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ppa-cream/10 bg-[#0a1a12] text-ppa-cream">
      <div className="border-b border-ppa-cream/10 bg-ppa-green-deep/80">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-ppa-gold sm:px-8">
          No one left behind. We grow together.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold transition hover:text-ppa-gold-soft"
            >
              Punter Power Australia
            </Link>
            <p className="mt-3 text-base leading-relaxed text-ppa-cream/75">
              Everyday Aussie punters looking out for each other — tools,
              community, transparent fund, and a media push built for mates, not
              gatekeepers.
            </p>
            <p className="mt-5 text-sm text-ppa-cream/60">
              <a
                href="https://punterspower.au"
                className="font-semibold text-ppa-gold transition hover:text-ppa-gold-soft"
              >
                punterspower.au
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ppa-cream/55">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
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
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ppa-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ppa-cream/55">
            © {year} Punter Power Australia. All rights reserved.
          </p>
          <nav aria-label="Footer quick links" className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide text-ppa-cream/50 transition hover:text-ppa-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
