import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ArticleListQueryData =
  MittwaldAPIV2.Paths.V2Articles.Get.Parameters.Query;

export type ArticleData =
  MittwaldAPIV2.Operations.ArticleGetArticle.ResponseData;

export type ArticleListItemData =
  MittwaldAPIV2.Operations.ArticleListArticles.ResponseData[number];

export type ArticleListQueryModelData = ArticleListQueryData;
