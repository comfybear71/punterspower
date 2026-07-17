import type { Metadata } from "next";
import { ChatPanel } from "@/components/ai/ChatPanel";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "AI Assistant",
  description:
    "Chat with PPA AI — Grok, DeepSeek, or Claude — for cost of living help, guides, and content.",
};

export default function AiPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="AI Assistant"
        title="Ask. Build. Share."
        description="Pick Grok, DeepSeek, or Claude. Get no-BS help with bills, gaps, bureaucracy, and PPA content — always with no one left behind."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="h-[min(70vh,720px)] overflow-hidden border border-line">
            <ChatPanel />
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Tip: add your keys to{" "}
            <code className="text-foreground">.env.local</code> (
            <code className="text-foreground">XAI_API_KEY</code>,{" "}
            <code className="text-foreground">DEEPSEEK_API_KEY</code>,{" "}
            <code className="text-foreground">ANTHROPIC_API_KEY</code>) then
            restart the dev server.
          </p>
        </div>
      </section>
    </div>
  );
}
