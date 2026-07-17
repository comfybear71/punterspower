export const LLM_PROVIDERS = ["grok", "deepseek", "claude"] as const;

export type LlmProvider = (typeof LLM_PROVIDERS)[number];

export const LLM_PROVIDER_OPTIONS: {
  id: LlmProvider;
  label: string;
  description: string;
}[] = [
  {
    id: "grok",
    label: "Grok (xAI)",
    description: "Direct, sharp answers with Aussie edge",
  },
  {
    id: "deepseek",
    label: "DeepSeek",
    description: "Clear step-by-step practical help",
  },
  {
    id: "claude",
    label: "Claude (Anthropic)",
    description: "Careful, thorough guidance",
  },
];

export function isLlmProvider(value: unknown): value is LlmProvider {
  return (
    typeof value === "string" &&
    (LLM_PROVIDERS as readonly string[]).includes(value)
  );
}

export const CONTENT_TYPES = [
  "story",
  "image-prompt",
  "video-script",
  "meme",
  "guide-outline",
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];

export const CONTENT_TYPE_OPTIONS: {
  id: ContentType;
  label: string;
  placeholder: string;
}[] = [
  {
    id: "story",
    label: "Relatable story",
    placeholder: "Create a relatable story about medical gaps",
  },
  {
    id: "image-prompt",
    label: "Image prompt",
    placeholder: "Generate an image prompt for a PPA meme",
  },
  {
    id: "video-script",
    label: "Video script",
    placeholder: "30-second reel about beating supermarket prices",
  },
  {
    id: "meme",
    label: "Meme concept",
    placeholder: "Meme idea about energy bill shock",
  },
  {
    id: "guide-outline",
    label: "Guide outline",
    placeholder: "Outline a no-gap health insurance guide",
  },
];

export function isContentType(value: unknown): value is ContentType {
  return (
    typeof value === "string" &&
    (CONTENT_TYPES as readonly string[]).includes(value)
  );
}
