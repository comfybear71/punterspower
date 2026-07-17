"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useMemo, useState } from "react";
import {
  LLM_PROVIDER_OPTIONS,
  type LlmProvider,
} from "@/lib/ai/models";
import { ProviderSelect } from "./ProviderSelect";

function messageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

const starters = [
  "How do I compare energy plans without the jargon?",
  "What should I ask about health insurance gaps?",
  "Give me a checklist for cutting the grocery bill.",
  "Explain flock cameras / ANPR in plain English.",
  "Help me write a short PPA community update.",
];

type ChatPanelProps = {
  compact?: boolean;
  className?: string;
};

export function ChatPanel({ compact = false, className = "" }: ChatPanelProps) {
  const [provider, setProvider] = useState<LlmProvider>("grok");
  const [input, setInput] = useState("");

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ provider }),
      }),
    [provider],
  );

  const { messages, sendMessage, status, error, stop, setMessages } = useChat({
    transport,
  });

  const busy = status === "submitted" || status === "streaming";
  const providerMeta = LLM_PROVIDER_OPTIONS.find((item) => item.id === provider);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    await sendMessage({ text });
  }

  return (
    <div
      className={`flex h-full min-h-0 flex-col bg-surface text-foreground ${className}`}
    >
      <div className="shrink-0 border-b border-line p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight">
              PPA AI Assistant
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {providerMeta?.description ?? "Practical help for Aussie punters."}
            </p>
          </div>
          {messages.length > 0 && (
            <button
              type="button"
              onClick={() => setMessages([])}
              className="text-xs font-semibold uppercase tracking-wide text-ink-muted transition hover:text-ppa-red"
            >
              Clear
            </button>
          )}
        </div>
        <ProviderSelect
          value={provider}
          onChange={setProvider}
          className="mt-3"
          id={compact ? "llm-provider-compact" : "llm-provider-page"}
        />
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-ink-muted">
              Ask about cost of living, insurance gaps, energy bills, bureaucracy,
              or content ideas. No one left behind — we grow together.
            </p>
            <div className="flex flex-wrap gap-2">
              {starters.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  disabled={busy}
                  onClick={() => {
                    setInput(starter);
                  }}
                  className="border border-line bg-surface-muted px-3 py-2 text-left text-xs font-medium text-foreground transition hover:border-ppa-gold"
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => {
            const text = messageText(message);
            if (!text) return null;
            const isUser = message.role === "user";
            return (
              <div
                key={message.id}
                className={`max-w-[92%] whitespace-pre-wrap px-3 py-2 text-sm leading-relaxed ${
                  isUser
                    ? "ml-auto bg-ppa-green-deep text-ppa-cream"
                    : "mr-auto border border-line bg-surface-muted"
                }`}
              >
                {!isUser && (
                  <p className="mb-1 font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-ppa-gold">
                    {providerMeta?.label ?? "AI"}
                  </p>
                )}
                {text}
              </div>
            );
          })
        )}
        {busy && (
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Thinking…
          </p>
        )}
        {error && (
          <p className="border border-ppa-red/40 bg-ppa-red/10 px-3 py-2 text-sm text-ppa-red">
            {error.message || "Something went wrong. Try again in a moment."}
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-line p-3 sm:p-4"
      >
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={compact ? 2 : 3}
            placeholder="Ask PPA AI…"
            className="min-h-[2.75rem] w-full resize-none border border-line bg-background px-3 py-2 text-sm outline-none transition focus:border-ppa-gold"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void handleSubmit(event);
              }
            }}
          />
          {busy ? (
            <button
              type="button"
              onClick={() => stop()}
              className="inline-flex min-h-11 shrink-0 items-center justify-center bg-[#121212] px-4 text-xs font-bold uppercase tracking-wide text-ppa-cream"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="inline-flex min-h-11 shrink-0 items-center justify-center bg-ppa-gold px-4 text-xs font-bold uppercase tracking-wide text-[#121212] transition hover:bg-ppa-gold-soft disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
