import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContractItemData =
  MittwaldAPIV2.Components.Schemas.ContractContractItem;

export type ContractItemReferenceData = NonNullable<
  MittwaldAPIV2.Components.Schemas.ContractContractItem["aggregateReference"]
>;

export type ContractItemTerminationCreateRequestData =
  MittwaldAPIV2.Operations.ContractTerminateContractItem.RequestData;
