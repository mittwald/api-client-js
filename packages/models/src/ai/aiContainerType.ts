export const aiContainerTypes = [
  "openwebui",
  "anythingllm",
  "librechat",
] as const;

export type AIContainerType = (typeof aiContainerTypes)[number];

export const DEFAULT_AI_CONTAINER_TYPE: AIContainerType = "openwebui";
