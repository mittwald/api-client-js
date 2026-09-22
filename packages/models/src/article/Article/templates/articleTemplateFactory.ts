import type { ArticleTemplate } from "../ArticleTemplate";

import { SpaceServerArticleTemplate } from "./SpaceServerArticleTemplate";
import { WebhostingArticleTemplate } from "./WebhostingArticleTemplate";
import { AIHostingArticleTemplate } from "./AIHostingArticleTemplate";
import { ProSpaceArticleTemplate } from "./ProSpaceArticleTemplate";
import { StorageArticleTemplate } from "./StorageArticleTemplate";
import { ServerArticleTemplate } from "./ServerArticleTemplate";
import { MailArticleTemplate } from "./MailArticleTemplate";

export const articleTemplateFactory = (template: ArticleTemplate) => {
  switch (template.name) {
    case SpaceServerArticleTemplate.templateName:
      return new SpaceServerArticleTemplate(template.data);
    case WebhostingArticleTemplate.templateName:
      return new WebhostingArticleTemplate(template.data);
    case AIHostingArticleTemplate.templateName:
      return new AIHostingArticleTemplate(template.data);
    case ProSpaceArticleTemplate.templateName:
      return new ProSpaceArticleTemplate(template.data);
    case StorageArticleTemplate.templateName:
      return new StorageArticleTemplate(template.data);
    case ServerArticleTemplate.templateName:
      return new ServerArticleTemplate(template.data);
    case MailArticleTemplate.templateName:
      return new MailArticleTemplate(template.data);
    default:
      return template;
  }
};
