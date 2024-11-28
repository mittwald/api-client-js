import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Customer } from "../../customer/index.js";

export type ContractListQueryData =
  MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Query;

export type ContractListQueryModelData = Omit<
  ContractListQueryData,
  "customerId"
> & {
  customer: Customer;
};

export type ContractData =
  MittwaldAPIV2.Operations.ContractGetDetailOfContract.ResponseData;

export type ContractListItemData =
  MittwaldAPIV2.Operations.ContractListContracts.ResponseData[number];

export type ContractTerminationCreateRequest =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody;

export type ContractTerminationData =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$201.Content.ApplicationJson;
