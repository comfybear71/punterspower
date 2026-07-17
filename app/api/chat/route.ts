import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { isLlmProvider, type LlmProvider } from "@/lib/ai/models";
import { PPA_ASSISTANT_SYSTEM } from "@/lib/ai/prompts";
import {
  getLanguageModel,
  getProviderApiKeyName,
  hasProviderKey,
} from "@/lib/ai/providers";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages as UIMessage[] | undefined;
    const provider = (body.provider ?? "grok") as LlmProvider;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Messages are required." }, { status: 400 });
    }

    if (!isLlmProvider(provider)) {
      return Response.json({ error: "Invalid provider." }, { status: 400 });
    }

    if (!hasProviderKey(provider)) {
      return Response.json(
        {
          error: `Add ${getProviderApiKeyName(provider)} to .env.local to chat with ${provider}.`,
        },
        { status: 503 },
      );
    }

    const result = streamText({
      model: getLanguageModel(provider),
      system: PPA_ASSISTANT_SYSTEM,
      messages: await convertToModelMessages(messages),
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";
    return Response.json({ error: message }, { status: 500 });
  }
}
