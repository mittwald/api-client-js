import { type ArticleTemplateData } from "./types";
import { DataModel } from "../../base";

export class ArticleTemplate extends DataModel<ArticleTemplateData> {
  public static readonly templateName: string = "unknown";
  public readonly id: string;
  public readonly name: string;

  public constructor(data: ArticleTemplateData) {
    super(data);
    this.id = data.id;
    this.name = data.name;
  }
}
