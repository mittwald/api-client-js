import type { AIModelData } from "../../ai/AIModel/types.js";

export function buildAIModelData(overrides?: Partial<AIModelData>): AIModelData {
  return {
    termsOfServiceLink: "https://tos.example.com/model",
    docLink: "https://docs.example.com/model",
    displayName: "GPT Test",
    name: "gpt-test",
    label: "stable",
    tokenFactor: 1,
    ...overrides,
  };
}
