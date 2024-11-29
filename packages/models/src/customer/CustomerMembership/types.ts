import { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerMembershipData =
  MittwaldAPIV2.Operations.CustomerGetCustomerMembership.ResponseData;

export type CustomerMembershipListItemData =
  MittwaldAPIV2.Operations.CustomerListCustomerMemberships.ResponseData[number];

export type CustomerMembershipListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdMemberships.Get.Parameters.Query;
