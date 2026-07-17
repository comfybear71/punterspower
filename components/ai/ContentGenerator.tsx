"use client";

import { useCompletion } from "@ai-sdk/react";
import { useMemo, useState } from "react";
import {
  CONTENT_TYPE_OPTIONS,
  type ContentType,
  type LlmProvider,
} from "@/lib/ai/models";
import { ProviderSelect } from "./ProviderSelect";

export type ContentPreset = {
  contentType: ContentType;
  prompt: string;
};

const defaultPresets: ContentPreset[] = [
  {
    contentType: "story",
    prompt: "Create a relatable story about medical gaps",
  },
  {
    contentType: "image-prompt",
    prompt: "Generate an image prompt for a PPA meme about sticking together",
  },
  {
    contentType: "video-script",
    prompt: "Write a 30-second video script about beating supermarket prices",
  },
  {
    contentType: "meme",
    prompt: "Meme idea about energy bill shock for Aussie households",
  },
  {
    contentType: "guide-outline",
    prompt: "Outline a no-gap health insurance guide for everyday punters",
  },
];

export const mediaPresets: ContentPreset[] = [
  {
    contentType: "video-script",
    prompt:
      "Write a 30-second phone-to-camera script about Woolies & Coles prices. End with Join at punterspower.au — No one left behind. Tag #PunterPower.",
  },
  {
    contentType: "video-script",
    prompt:
      "15–45s script on Flock cameras / ANPR — factual, angry but actionable, close with We grow together.",
  },
  {
    contentType: "meme",
    prompt: "Meme concept about energy bill shock for Aussie households",
  },
  {
    contentType: "image-prompt",
    prompt:
      "Generate an image prompt for a PPA media-push thumbnail about local shopping power",
  },
  {
    contentType: "story",
    prompt:
      "Short relatable story about medical gaps that a punter could turn into a 60s video",
  },
];

type ContentGeneratorProps = {
  presets?: ContentPreset[];
  eyebrow?: string;
  title?: string;
  description?: string;
  defaultProvider?: LlmProvider;
};

export function ContentGenerator({
  presets = defaultPresets,
  eyebrow = "Generate content",
  title = "PPA content studio",
  description = "Spin up stories, image prompts, scripts, memes, and guide outlines — always tied to no one left behind, we grow together.",
  defaultProvider = "claude",
}: ContentGeneratorProps) {
  const [provider, setProvider] = useState<LlmProvider>(defaultProvider);
  const [contentType, setContentType] = useState<ContentType>(
    presets[0]?.contentType ?? "video-script",
  );
  const [input, setInput] = useState(presets[0]?.prompt ?? "");

  const body = useMemo(
    () => ({ provider, contentType }),
    [provider, contentType],
  );

  const { completion, complete, isLoading, error, stop, setCompletion } =
    useCompletion({
      api: "/api/generate",
      body,
      streamProtocol: "text",
    });

  const placeholder =
    CONTENT_TYPE_OPTIONS.find((item) => item.id === contentType)?.placeholder ??
    "Describe what you want to create…";

  async function handleGenerate(event: React.FormEvent) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt || isLoading) return;
    setCompletion("");
    await complete(prompt);
  }

  return (
    <section className="border border-line bg-surface-muted p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink-muted">{description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.prompt}
            type="button"
            onClick={() => {
              setContentType(preset.contentType);
              setInput(preset.prompt);
            }}
            className="border border-line bg-surface px-3 py-2 text-left text-xs font-medium transition hover:border-ppa-gold"
          >
            {preset.prompt}
          </button>
        ))}
      </div>

      <form onSubmit={handleGenerate} className="mt-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Content type
            </span>
            <select
              value={contentType}
              onChange={(event) =>
                setContentType(event.target.value as ContentType)
              }
              className="mt-2 w-full border border-line bg-surface px-3 py-2 text-sm font-semibold uppercase tracking-wide outline-none focus:border-ppa-gold"
            >
              {CONTENT_TYPE_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Model — Grok, DeepSeek, or Claude
            </span>
            <ProviderSelect
              value={provider}
              onChange={setProvider}
              className="mt-2"
              id={`generate-provider-${title.replace(/\s+/g, "-").toLowerCase()}`}
            />
          </div>
        </div>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Brief
          </span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={3}
            placeholder={placeholder}
            className="mt-2 w-full resize-y border border-line bg-surface px-3 py-3 text-sm outline-none focus:border-ppa-gold"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {isLoading ? (
            <button
              type="button"
              onClick={() => stop()}
              className="inline-flex min-h-11 items-center justify-center bg-[#121212] px-5 text-sm font-bold uppercase tracking-wide text-ppa-cream"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="inline-flex min-h-11 items-center justify-center bg-ppa-green-deep px-5 text-sm font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-ppa-green disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate
            </button>
          )}
        </div>
      </form>

      {error && (
        <p className="mt-4 border border-ppa-red/40 bg-ppa-red/10 px-3 py-2 text-sm text-ppa-red">
          {error.message || "Generation failed. Check API keys in .env.local / Vercel."}
        </p>
      )}

      {(completion || isLoading) && (
        <div className="mt-6 border border-line bg-surface p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ppa-gold">
              Output
            </p>
            {completion && (
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(completion)}
                className="text-xs font-semibold uppercase tracking-wide text-ink-muted transition hover:text-foreground"
              >
                Copy
              </button>
            )}
          </div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
            {completion || "Generating…"}
          </pre>
        </div>
      )}
    </section>
  );
}
