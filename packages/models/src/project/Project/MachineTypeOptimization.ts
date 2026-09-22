import type { ArticleDetailed } from "../../article";

import { ArticleTagName } from "../../article/Article/internal";

export const machineTypeOptimizationType = [
  ArticleTagName.ramOptimized,
  ArticleTagName.cpuOptimized,
  ArticleTagName.balancedOptimized,
] as const;

export type MachineTypeOptimizationType =
  (typeof machineTypeOptimizationType)[number];

export class MachineTypeOptimization {
  public readonly type: MachineTypeOptimizationType;

  public constructor(type: MachineTypeOptimizationType) {
    this.type = type;
  }

  public static fromArticle(article: ArticleDetailed) {
    if (article.hasTag(ArticleTagName.ramOptimized)) {
      return new MachineTypeOptimization(ArticleTagName.ramOptimized);
    } else if (article.hasTag(ArticleTagName.cpuOptimized)) {
      return new MachineTypeOptimization(ArticleTagName.cpuOptimized);
    } else if (article.hasTag(ArticleTagName.balancedOptimized)) {
      return new MachineTypeOptimization(ArticleTagName.balancedOptimized);
    }
    throw new Error("Unknown machine type optimization for article");
  }
}
