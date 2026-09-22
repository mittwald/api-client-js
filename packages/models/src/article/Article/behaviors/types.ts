import type { QueryResponseData } from "../../../base/index.js";
import type {
  ArticleListQueryData,
  ArticleListItemData,
  ArticleData,
} from "../types.js";

export interface ArticleBehaviors {
  list: (
    query?: ArticleListQueryData,
  ) => Promise<QueryResponseData<ArticleListItemData>>;
  find: (articleId: string) => Promise<ArticleData | undefined>;
}
