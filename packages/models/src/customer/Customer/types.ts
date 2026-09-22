import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { ContractPartnerData } from "../ContractPartner/index.js";

export type CustomerListQueryData =
  MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Query;

export type CustomerData =
  MittwaldAPIV2.Operations.CustomerGetCustomer.ResponseData;

export type CustomerListItemData =
  MittwaldAPIV2.Operations.CustomerListCustomers.ResponseData[number];

export type CustomerCreateRequestData =
  MittwaldAPIV2.Paths.V2Customers.Post.Parameters.RequestBody;

export type CustomerUpdateRequestData = Omit<
  MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.RequestBody,
  "customerId"
>;

export type CustomerExpressInterestToContributeRequestData =
  MittwaldAPIV2.Operations.ContributorExpressInterestToContribute.RequestData;

export type ContractPartnerModelData = Omit<
  ContractPartnerData,
  "phoneNumbers"
> & {
  phoneNumber?: string;
};

export type CustomerExecutingUserRoles =
  MittwaldAPIV2.Components.Schemas.CustomerRole;

export type CustomerVatIdValidationState = NonNullable<
  MittwaldAPIV2.Components.Schemas.CustomerCustomer["vatIdValidationState"]
>;

export type CustomerPaymentMethodData =
  MittwaldAPIV2.Operations.MarketplaceCustomerGetPaymentMethod.ResponseData;
