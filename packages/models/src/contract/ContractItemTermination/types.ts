import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContractItemTerminationCreateRequest =
  MittwaldAPIV2.Operations.ContractTerminateContractItem.RequestData;

export type ContractItemTerminationCreateResponse =
  MittwaldAPIV2.Paths.V2ContractsContractIdItemsContractItemIdTermination.Post.Responses.$201.Content.ApplicationJson;

export type ContractItemTerminationCancelResponse =
  MittwaldAPIV2.Operations.ContractCancelContractItemTermination.ResponseData;
