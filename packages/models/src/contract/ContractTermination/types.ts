import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContractTerminationCreateRequest =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Parameters.RequestBody;

export type ContractTerminationCreateResponse =
  MittwaldAPIV2.Paths.V2ContractsContractIdTermination.Post.Responses.$201.Content.ApplicationJson;

export type ContractTerminationCancelResponse =
  MittwaldAPIV2.Operations.ContractCancelContractTermination.ResponseData;
