import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AIApiKeyData = MittwaldAPIV2.Components.Schemas.AihostingKey;

export type AIApiKeyContainerMetaData = AIApiKeyData["containerMeta"];
export type AIApiKeyRateLimitData = AIApiKeyData["rateLimit"];
export type AIApiKeyTokenUsageData = {
  formattedUsed: string;
} & AIApiKeyData["tokenUsage"];
