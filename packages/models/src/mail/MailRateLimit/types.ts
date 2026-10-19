import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type MailRateLimitData =
  MittwaldAPIV2.Components.Schemas.MailsystemRateLimit;

export type MailRateLimitQueryData =
  MittwaldAPIV2.Paths.V2MailRateLimits.Get.Parameters.Query;

export type MailRateLimitListItemData =
  MittwaldAPIV2.Operations.MailListMailRateLimits.ResponseData[number];
