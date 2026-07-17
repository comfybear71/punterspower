"use client";

import { useState } from "react";

const SUBMIT_EMAIL = "hello@punterspower.au";

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

    const subject = encodeURIComponent("PPA video submission — #PunterPower");
    const body = encodeURIComponent(
      [
        `Name: ${name.trim() || "—"}`,
        `Email: ${email.trim() || "—"}`,
        `Platform: ${platform || "—"}`,
        `Video link: ${link.trim()}`,
        `Notes: ${notes.trim() || "—"}`,
        "",
        "Tag: #PunterPower",
      ].join("\n"),
    );

    window.location.href = `mailto:${SUBMIT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ppa-gold/50 bg-ppa-green-deep p-5 text-ppa-cream sm:p-8">
        <p className="font-display text-2xl font-bold uppercase tracking-tight text-ppa-gold">
          Nearly there — legend.
        </p>
        <p className="mt-3 text-base leading-relaxed text-ppa-cream/85">
          Your email app should open with the video details. Send it through
          and we&apos;ll amplify the strongest clips. Keep filming. No one left
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
      id="submit-form"
      className="border border-ppa-red/40 bg-surface p-5 sm:p-8"
    >
      <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
        Submit your video
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl">
        Send link or email PPA
      </h3>
      <p className="mt-3 text-sm text-ink-muted sm:text-base">
        Paste your TikTok, FB, Insta, X, or YouTube link. We&apos;ll open an
        email to{" "}
        <span className="font-semibold text-foreground">{SUBMIT_EMAIL}</span>{" "}
        so you can hit send.
      </p>

      <div className="mt-6 space-y-3 sm:space-y-4">
        <label className="block">
          <span className="text-sm font-semibold">Your name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            placeholder="Optional"
            className="mt-2 w-full border border-line bg-surface-muted px-3 py-3 text-base outline-none transition focus:border-ppa-gold sm:px-4"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            inputMode="email"
            placeholder="So we can reply"
            className="mt-2 w-full border border-line bg-surface-muted px-3 py-3 text-base outline-none transition focus:border-ppa-gold sm:px-4"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Platform</span>
          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="mt-2 w-full border border-line bg-surface-muted px-3 py-3 text-base outline-none transition focus:border-ppa-gold sm:px-4"
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
            inputMode="url"
            placeholder="https://"
            className="mt-2 w-full border border-line bg-surface-muted px-3 py-3 text-base outline-none transition focus:border-ppa-gold sm:px-4"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Topic / notes</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={2}
            placeholder="Housing, medical gaps, Flock cameras…"
            className="mt-2 w-full resize-y border border-line bg-surface-muted px-3 py-3 text-base outline-none transition focus:border-ppa-gold sm:px-4"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center bg-ppa-red px-6 text-base font-bold uppercase tracking-wide text-ppa-cream transition hover:bg-[#a50e19]"
        >
          Submit Your Video
        </button>
      </div>
    </form>
  );
}
