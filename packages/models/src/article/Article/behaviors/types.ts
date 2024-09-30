import {
  ArticleData,
  ArticleListItemData,
  ArticleListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ArticleBehaviors {
  find: (id: string) => Promise<ArticleData | undefined>;
  list: (
    query?: ArticleListQueryData,
  ) => Promise<QueryResponseData<ArticleListItemData>>;
}
