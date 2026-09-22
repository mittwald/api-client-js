import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ArticleBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiArticleBehaviors = (
  client: MittwaldAPIV2Client,
): ArticleBehaviors => ({
  list: async (query) => {
    const response = await client.article.listArticles({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (articleId) => {
    const response = await client.article.getArticle({
      articleId,
    });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },
});
