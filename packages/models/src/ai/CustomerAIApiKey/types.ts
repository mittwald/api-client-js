import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerAIApiKeyListItemData =
  MittwaldAPIV2.Operations.AiHostingCustomerGetKeys.ResponseData[number];

export type CustomerAIApiKeyListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeys.Get.Parameters.Query;

export type CustomerAIApiKeyRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeys.Post.Parameters.RequestBody;

export type CustomerAIApiKeyUpdateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.RequestBody;
