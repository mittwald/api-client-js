import type { ArticleModifierData } from "../types.js";

import { StorageArticleModifier, ArticleModifier } from "../internal.js";

export const articleModifierFactory = (data: ArticleModifierData) => {
  if (data.articleId.toLowerCase().endsWith("-storage")) {
    return new StorageArticleModifier(data);
  }
  return new ArticleModifier(data);
};
