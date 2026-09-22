import { SpaceServerArticleTemplate } from "../templates/SpaceServerArticleTemplate";
import { ProSpaceArticleTemplate } from "../templates/ProSpaceArticleTemplate";
import { ServerArticleTemplate } from "../templates/ServerArticleTemplate";
import { MachineTypeSpecs } from "../../../project/internal";
import { RecommendedProjectsArticleAttribute, ArticleTagName, HostingArticle , Article } from "../internal";

export class ServerArticle extends HostingArticle {
  public get isProSpace(): boolean {
    return this.template instanceof ProSpaceArticleTemplate;
  }

  public get machineTypeSpecs(): MachineTypeSpecs {
    return MachineTypeSpecs.fromArticle(this);
  }

  public static readonly getOrderableArticles = (
    dedicated: boolean,
    proSpace = false,
  ) => {
    const tags = dedicated
      ? [ArticleTagName.dedicated]
      : proSpace
        ? [ArticleTagName.proSpace]
        : [ArticleTagName.vServer];

    return Article.query({
      templateNames: [
        (proSpace ? ProSpaceArticleTemplate : ServerArticleTemplate)
          .templateName,
      ],
      orderable: ["deprecated", "full"],
      ...{ tags },
    });
  };

  public static readonly getRecommendedProjects = (
    article: ServerArticle,
  ): string | undefined => {
    return article.getAttribute(RecommendedProjectsArticleAttribute)?.value;
  };

  protected getModifierBytes(): number[] {
    if (this.template instanceof ServerArticleTemplate) {
      if (this.hasTag(ArticleTagName.dedicated)) {
        return [300, 500, 850, 1500, 2000, 2500];
      } else {
        return [100, 150, 300, 500, 850, 1500, 2000];
      }
    }

    if (this.template instanceof SpaceServerArticleTemplate) {
      return [100, 150, 300, 500, 850, 1500, 2000];
    }

    if (this.template instanceof ProSpaceArticleTemplate) {
      return [40, 60, 100, 200, 300, 400, 500];
    }

    return [];
  }
}
