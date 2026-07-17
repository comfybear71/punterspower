import { anthropic } from "@ai-sdk/anthropic";
import { deepseek } from "@ai-sdk/deepseek";
import { xai } from "@ai-sdk/xai";
import type { LanguageModel } from "ai";
import type { LlmProvider } from "./models";

const envKeys: Record<LlmProvider, string> = {
  grok: "XAI_API_KEY",
  deepseek: "DEEPSEEK_API_KEY",
  claude: "ANTHROPIC_API_KEY",
};

export function getProviderApiKeyName(provider: LlmProvider): string {
  return envKeys[provider];
}

export function hasProviderKey(provider: LlmProvider): boolean {
  const value = process.env[envKeys[provider]];
  return Boolean(value && value.trim() && !value.includes("your_"));
}

export function getLanguageModel(provider: LlmProvider): LanguageModel {
  if (!hasProviderKey(provider)) {
    throw new Error(
      `Missing ${envKeys[provider]}. Add it to .env.local to use ${provider}.`,
    );
  }

  switch (provider) {
    case "grok":
      return xai("grok-latest");
    case "deepseek":
      return deepseek("deepseek-chat");
    case "claude":
      return anthropic("claude-sonnet-4-5");
  }
}
