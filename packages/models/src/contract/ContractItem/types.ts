import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContractItemData =
  MittwaldAPIV2.Operations.ContractGetDetailOfContractItem.ResponseData;

export type ContractItemReferenceData = NonNullable<
  MittwaldAPIV2.Components.Schemas.ContractContractItem["aggregateReference"]
>;

export type ContractItemTerminationCreateRequestData =
  MittwaldAPIV2.Operations.ContractTerminateContractItem.RequestData;
