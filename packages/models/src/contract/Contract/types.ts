import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContractListQueryData =
  MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Query;

export type ContractData =
  MittwaldAPIV2.Operations.ContractGetDetailOfContract.ResponseData;

export type ContractListItemData =
  MittwaldAPIV2.Operations.ContractListContracts.ResponseData[number];

export type ContractTerminationCreateRequestData =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody;
