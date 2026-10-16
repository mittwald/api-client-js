import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Customer } from "../../customer/index.js";

export type ArticleListQueryData =
  MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Query;

export type ArticleData =
  MittwaldAPIV2.Operations.ArticleGetArticle.ResponseData;

export type ArticleListItemData =
  MittwaldAPIV2.Operations.ArticleListArticles.ResponseData[number];

export type ArticleListQueryModelData = Omit<
  ArticleListQueryData,
  "customerId"
> & {
  customer?: Customer | string;
};

export type ArticleTagData = MittwaldAPIV2.Components.Schemas.ArticleArticleTag;

export type ArticleAttributeData =
  MittwaldAPIV2.Components.Schemas.ArticleArticleAttributes;

export type ArticleModifierData =
  MittwaldAPIV2.Components.Schemas.ArticleReadableModifierArticleOptions;

export type ArticleTemplateData =
  MittwaldAPIV2.Components.Schemas.ArticleArticleTemplate;

export type ArticleType =
  | "proSpaceDedicated"
  | "dedicatedServer"
  | "webhosting"
  | "proSpace"
  | "vServer"
  | "ai";
