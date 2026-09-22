import type { ArticleTagData } from "./types";

import { DataModel } from "../../base/index";

export enum ArticleTagName {
  balancedOptimized = "balance-optimized",
  ramOptimized = "ram-optimized",
  cpuOptimized = "cpu-optimized",
  proSpaceLite = "ps-basic",
  dedicated = "dedicated",
  proSpace = "ps-plus",
  vServer = "vserver",
}

export class ArticleTag extends DataModel<ArticleTagData> {
  public readonly description?: string;
  public readonly hexColor?: string;
  public readonly id: string;
  public readonly name?: string;

  public constructor(data: ArticleTagData) {
    super(data);
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.hexColor = data.hexColor;
  }
}
