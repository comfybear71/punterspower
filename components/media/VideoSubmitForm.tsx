"use client";

import { useState } from "react";

export function VideoSubmitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!link.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ppa-gold/50 bg-ppa-green-deep p-6 text-ppa-cream sm:p-8">
        <p className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold">
          Got it — legend.
        </p>
        <p className="mt-3 text-base leading-relaxed text-ppa-cream/85">
          Thanks{name.trim() ? `, ${name.trim()}` : ""}. We&apos;ll check your
          link and amplify the strongest clips. Keep filming. No one left
          behind.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setLink("");
            setNotes("");
          }}
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-ppa-gold px-5 text-sm font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ppa-red/40 bg-surface-muted p-6 sm:p-8"
    >
      <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
        Amplify my video
      </p>
      <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-none tracking-tight">
        Send your link to PPA
      </h3>
      <p className="mt-3 text-base text-ink-muted">
        Paste TikTok, FB, Insta, X, or YouTube. We share and boost the best
        ones.
      </p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-semibold">Your name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Optional"
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="So we can reply (optional)"
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Platform</span>
          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
          >
            <option value="">Select</option>
            <option>TikTok</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>X</option>
            <option>YouTube</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Video link</span>
          <input
            type="url"
            required
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="https://"
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Topic / notes</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="Housing, medical gaps, Flock cameras…"
            className="mt-2 w-full resize-y border border-line bg-surface px-4 py-3 text-base outline-none transition focus:border-ppa-gold"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center bg-ppa-red px-6 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
        >
          Submit video link
        </button>
        <p className="text-center text-xs text-ink-muted">
          Form stores locally for now — backend inbox coming soon.
        </p>
      </div>
    </form>
  );
}
