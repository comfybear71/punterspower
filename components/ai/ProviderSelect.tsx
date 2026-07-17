"use client";

import {
  LLM_PROVIDER_OPTIONS,
  type LlmProvider,
} from "@/lib/ai/models";

type ProviderSelectProps = {
  value: LlmProvider;
  onChange: (provider: LlmProvider) => void;
  id?: string;
  className?: string;
};

export function ProviderSelect({
  value,
  onChange,
  id = "llm-provider",
  className = "",
}: ProviderSelectProps) {
  return (
    <label className={`block ${className}`}>
      <span className="sr-only">Choose AI model</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as LlmProvider)}
        className="w-full border border-line bg-surface px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground outline-none transition focus:border-ppa-gold"
      >
        {LLM_PROVIDER_OPTIONS.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
