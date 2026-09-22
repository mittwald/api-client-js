import type { ArticleModifierData } from "../types";

import { StorageArticleModifier , ArticleModifier } from "../internal";

export const articleModifierFactory = (data: ArticleModifierData) => {
  if (data.articleId.toLowerCase().endsWith("-storage")) {
    return new StorageArticleModifier(data);
  }
  return new ArticleModifier(data);
};
