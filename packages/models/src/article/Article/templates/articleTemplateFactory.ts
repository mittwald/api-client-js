import type { ArticleTemplate } from "../ArticleTemplate.js";

import { SpaceServerArticleTemplate } from "./SpaceServerArticleTemplate.js";
import { WebhostingArticleTemplate } from "./WebhostingArticleTemplate.js";
import { AIHostingArticleTemplate } from "./AIHostingArticleTemplate.js";
import { ProSpaceArticleTemplate } from "./ProSpaceArticleTemplate.js";
import { StorageArticleTemplate } from "./StorageArticleTemplate.js";
import { ServerArticleTemplate } from "./ServerArticleTemplate.js";
import { MailArticleTemplate } from "./MailArticleTemplate.js";

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
