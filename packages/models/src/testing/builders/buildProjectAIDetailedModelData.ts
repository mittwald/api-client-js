import type { ProjectAIModelData } from "../../ai/ProjectAIModel/types.js";

export function buildProjectAIDetailedModelData(
  overrides?: Partial<ProjectAIModelData>,
): ProjectAIModelData {
  return {
    termsOfServiceLink: "https://tos.example.com/detailed",
    docLink: "https://docs.example.com/detailed",
    activeAt: "2024-01-01T00:00:00.000Z",
    displayName: "GPT Detailed",
    replacesModelNames: [],
    name: "gpt-detailed",
    status: "active",
    label: "stable",
    tokenFactor: 1,
    ...overrides,
  };
}
