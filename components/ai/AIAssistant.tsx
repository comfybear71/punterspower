"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChatPanel } from "./ChatPanel";

export function AIAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (pathname === "/ai") return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-2 bg-ppa-red px-5 text-sm font-bold uppercase tracking-wide text-ppa-cream shadow-lg transition hover:bg-[#a50e19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppa-red sm:bottom-6 sm:right-6"
        aria-expanded={open}
        aria-controls="ppa-ai-panel"
      >
        {open ? "Close" : "Ask AI"}
      </button>

      {open && (
        <div
          id="ppa-ai-panel"
          className="fixed inset-x-3 bottom-24 z-50 flex h-[min(70vh,560px)] flex-col overflow-hidden border border-line bg-surface shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[400px]"
          role="dialog"
          aria-label="PPA AI Assistant"
        >
          <ChatPanel compact />
          <div className="border-t border-line bg-surface-muted px-4 py-2 text-center">
            <Link
              href="/ai"
              className="text-xs font-semibold uppercase tracking-wide text-ppa-green transition hover:text-ppa-gold dark:text-ppa-gold"
              onClick={() => setOpen(false)}
            >
              Open full AI page
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
