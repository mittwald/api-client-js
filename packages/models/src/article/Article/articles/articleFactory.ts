import { SpaceServerArticleTemplate } from "../templates/SpaceServerArticleTemplate";
import { WebhostingArticleTemplate } from "../templates/WebhostingArticleTemplate";
import { AIHostingArticleTemplate } from "../templates/AIHostingArticleTemplate";
import { ProSpaceArticleTemplate } from "../templates/ProSpaceArticleTemplate";
import { StorageArticleTemplate } from "../templates/StorageArticleTemplate";
import { ServerArticleTemplate } from "../templates/ServerArticleTemplate";
import { WebhostingArticle , AIHostingArticle , ServerArticle } from "../internal";
import {
  type ArticleCommon,
  ArticleTagName,
  StorageArticle,
} from "../internal";

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
