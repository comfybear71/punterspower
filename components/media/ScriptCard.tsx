"use client";

import { useState } from "react";

type ScriptCardProps = {
  index: number;
  topic: string;
  duration: string;
  lines: string[];
};

export function ScriptCard({ index, topic, duration, lines }: ScriptCardProps) {
  const [copied, setCopied] = useState(false);
  const fullScript = lines.join("\n\n");

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(fullScript);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="border border-line border-l-4 border-l-ppa-red bg-surface-muted p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-gold">
            Script {String(index).padStart(2, "0")} · {duration}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl">
            {topic}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => void copyScript()}
          className="inline-flex min-h-10 shrink-0 items-center justify-center border border-line bg-surface px-3 text-xs font-bold uppercase tracking-wide transition hover:border-ppa-gold"
        >
          {copied ? "Copied" : "Copy script"}
        </button>
      </div>
      <ol className="mt-4 space-y-3">
        {lines.map((line, lineIndex) => (
          <li key={line} className="flex gap-3 text-sm leading-relaxed sm:text-base">
            <span className="font-display font-bold text-ppa-red">
              {lineIndex + 1}.
            </span>
            <span
              className={
                lineIndex === lines.length - 1
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
  );
}
