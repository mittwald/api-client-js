import type { QueryResponseData } from "../../../base";
import type {
  ArticleListQueryData,
  ArticleListItemData,
  ArticleData,
} from "../types";

export interface ArticleBehaviors {
  list: (
    query?: ArticleListQueryData,
  ) => Promise<QueryResponseData<ArticleListItemData>>;
  find: (articleId: string) => Promise<ArticleData | undefined>;
}
