import { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerMembershipData =
  MittwaldAPIV2.Operations.CustomerGetCustomerMembership.ResponseData;

export type CustomerMembershipListItemData =
  MittwaldAPIV2.Operations.CustomerListCustomerMemberships.ResponseData[number];
