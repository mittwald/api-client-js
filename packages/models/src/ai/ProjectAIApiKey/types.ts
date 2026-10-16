import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectAIApiKeyListItemData =
  MittwaldAPIV2.Operations.AiHostingProjectGetKeys.ResponseData[number];

export type ProjectAIApiKeyListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeys.Get.Parameters.Query;

export type ProjectAIApiKeyRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeys.Post.Parameters.RequestBody;

export type ProjectAIApiKeyUpdateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.RequestBody;
