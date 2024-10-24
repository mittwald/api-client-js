import { MittwaldAPIV2 } from "@mittwald/api-client";

export type TldData = MittwaldAPIV2.Components.Schemas.DomainTopLevel;

export type TldListItemData =
  MittwaldAPIV2.Operations.DomainListTlds.ResponseData[number];

export type TldListQueryData =
  MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Query;

export type TldListQueryModelData = TldListQueryData;
