import {
  createTextStreamResponse,
  streamText,
  toTextStream,
} from "ai";
import {
  isContentType,
  isLlmProvider,
  type ContentType,
  type LlmProvider,
} from "@/lib/ai/models";
import { buildContentSystemPrompt } from "@/lib/ai/prompts";
import {
  getLanguageModel,
  getProviderApiKeyName,
  hasProviderKey,
} from "@/lib/ai/providers";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
    const provider = (body.provider ?? "grok") as LlmProvider;
    const contentType = (body.contentType ?? "story") as ContentType;

    if (!prompt) {
      return Response.json({ error: "Prompt is required." }, { status: 400 });
    }

    if (!isLlmProvider(provider)) {
      return Response.json({ error: "Invalid provider." }, { status: 400 });
    }

    if (!isContentType(contentType)) {
      return Response.json({ error: "Invalid content type." }, { status: 400 });
    }

    if (!hasProviderKey(provider)) {
      return Response.json(
        {
          error: `Add ${getProviderApiKeyName(provider)} to .env.local to generate with ${provider}.`,
        },
        { status: 503 },
      );
    }

    const result = streamText({
      model: getLanguageModel(provider),
      system: buildContentSystemPrompt(contentType),
      prompt,
    });

    return createTextStreamResponse({
      stream: toTextStream({ stream: result.stream }),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";
    return Response.json({ error: message }, { status: 500 });
  }
}
