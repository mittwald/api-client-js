import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerInviteData =
  MittwaldAPIV2.Operations.CustomerGetCustomerInvite.ResponseData;

export type CustomerInviteListItemData =
  MittwaldAPIV2.Operations.CustomerListCustomerInvites.ResponseData[number];

export type CustomerInviteListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Get.Parameters.Query;

export type CustomerInviteCreateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvites.Post.Parameters.RequestBody;
