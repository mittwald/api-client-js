import { SpaceServerArticleTemplate } from "../templates/SpaceServerArticleTemplate.js";
import { WebhostingArticleTemplate } from "../templates/WebhostingArticleTemplate.js";
import { AIHostingArticleTemplate } from "../templates/AIHostingArticleTemplate.js";
import { ProSpaceArticleTemplate } from "../templates/ProSpaceArticleTemplate.js";
import { StorageArticleTemplate } from "../templates/StorageArticleTemplate.js";
import { ServerArticleTemplate } from "../templates/ServerArticleTemplate.js";
import {
  WebhostingArticle,
  AIHostingArticle,
  ServerArticle,
} from "../internal.js";
import {
  type ArticleCommon,
  ArticleTagName,
  StorageArticle,
} from "../internal.js";

export const articleFactory = (article: ArticleCommon) => {
  if (
    article.template.name === ProSpaceArticleTemplate.templateName &&
    article.hasTag(ArticleTagName.proSpaceLite)
  ) {
    return new WebhostingArticle(article.data);
  }

  switch (article.template.name) {
    case SpaceServerArticleTemplate.templateName:
    case ProSpaceArticleTemplate.templateName:
    case ServerArticleTemplate.templateName:
      return new ServerArticle(article.data);
    case WebhostingArticleTemplate.templateName:
      return new WebhostingArticle(article.data);
    case AIHostingArticleTemplate.templateName:
      return new AIHostingArticle(article.data);
    case StorageArticleTemplate.templateName:
      return new StorageArticle(article.data);
    default:
      return article;
  }
};
