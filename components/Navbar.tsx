"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ppa-cream/10 bg-ppa-green-deep/95 text-ppa-cream backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-gold"
        >
          <span className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold transition group-hover:text-ppa-gold-soft">
            PPA
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.18em] text-ppa-cream/85 sm:inline">
            Punter Power
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 text-[11px] font-semibold uppercase leading-tight tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppa-gold xl:px-2.5 xl:text-xs ${
                  active
                    ? "text-ppa-gold"
                    : "text-ppa-cream/85 hover:text-ppa-gold-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/join"
            className="hidden min-h-10 items-center justify-center bg-ppa-gold px-4 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppa-gold sm:inline-flex"
          >
            Join $10
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-ppa-cream/30 text-ppa-cream transition hover:border-ppa-gold hover:text-ppa-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppa-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-ppa-cream/10 bg-ppa-green-deep lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-ppa-cream/10 py-3.5 text-base font-semibold uppercase tracking-wide transition last:border-b-0 ${
                  active
                    ? "text-ppa-gold"
                    : "text-ppa-cream/90 hover:text-ppa-gold-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="mt-4 inline-flex min-h-12 items-center justify-center bg-ppa-gold px-6 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
          >
            Join for $10
          </Link>
        </nav>
      </div>
    </header>
  );
}
