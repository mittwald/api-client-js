import type { MittwaldAPIV2 } from "@mittwald/api-client";
import type { Schema as SchemaObject } from "jsonschema";

export type TldData = MittwaldAPIV2.Components.Schemas.DomainTopLevel;

export type TldListItemData =
  MittwaldAPIV2.Operations.DomainListTlds.ResponseData[number];

export type TldListQueryData =
  MittwaldAPIV2.Paths.V2DomainTlds.Get.Parameters.Query;

export type TldPriceData =
  MittwaldAPIV2.Components.Schemas.ArticleReadableArticle;

export type TldPriceListItemData =
  MittwaldAPIV2.Operations.ArticleListArticles.ResponseData[number];

export type TldPriceListQueryData =
  MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Query;

export type TransferAuthenticationData =
  MittwaldAPIV2.Components.Schemas.DomainTransferAuthentication;

export interface TldContactSchemas {
  jsonSchemaAdminC?: SchemaObject;
  jsonSchemaOwnerC: SchemaObject;
}
