import { MittwaldAPIV2 } from "@mittwald/api-client";

export const conversationStatusList = [
  "open",
  "closed",
  "answered",
  "inProgress",
  "waiting",
] as const;

export type ConversationStatusData =
  MittwaldAPIV2.Components.Schemas.ConversationStatus &
    (typeof conversationStatusList)[number];
