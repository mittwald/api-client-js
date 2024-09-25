import { ArticleBehaviors } from "./types.js";
import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";

export const apiArticleBehaviors = (
  client: MittwaldAPIV2Client,
): ArticleBehaviors => ({
  find: async (id) => {
    const response = await client.article.getArticle({
      articleId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },

  list: async (query) => {
    const response = await client.article.listArticles({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
});
