import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type NewsletterInfoData =
  MittwaldAPIV2.Operations.NewsletterGetInfo.ResponseData;

export type NewsletterSubscribeData =
  MittwaldAPIV2.Paths.V2NewsletterSubscriptions.Post.Parameters.RequestBody;
