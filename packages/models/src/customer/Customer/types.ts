import { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerListQueryData =
  MittwaldAPIV2.Paths.V2Customers.Get.Parameters.Query;

export type CustomerData =
  MittwaldAPIV2.Operations.CustomerGetCustomer.ResponseData;

export type CustomerListItemData =
  MittwaldAPIV2.Operations.CustomerListCustomers.ResponseData[number];

export type CustomerUpdateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerId.Put.Parameters.RequestBody;
