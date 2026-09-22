import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Customer } from "../../customer";

export type ContractListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdContracts.Get.Parameters.Query;

export type ContractListQueryModelData = {
  customer: Customer | string;
} & ContractListQueryData;

export type ContractData =
  MittwaldAPIV2.Operations.ContractGetDetailOfContract.ResponseData;

export type ContractListItemData =
  MittwaldAPIV2.Operations.ContractListContracts.ResponseData[number];

export type ContractTerminationCreateRequestData =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody;

export type ContractAggregateReference =
  MittwaldAPIV2.Components.Schemas.ContractAggregateReference;
