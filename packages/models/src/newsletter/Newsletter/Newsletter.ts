import { ReferenceModel, DataModel } from "../../base/index.js";
import { type AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { NewsletterData } from "./types.js";

export class Newsletter extends ReferenceModel {
  public static ofId(id: string): Newsletter {
    return new Newsletter(id);
  }

  public static get = provideReact(async (): Promise<NewsletterDetailed> => {
    const data = await config.behaviors.newsletter.get();

    return new NewsletterDetailed(data);
  });

  public getDetailed = provideReact(() =>
    Newsletter.get(),
  ) as AsyncResourceVariant<() => Promise<NewsletterDetailed>>;
}

class NewsletterCommon extends classes(DataModel<NewsletterData>, Newsletter) {
  public constructor(data: NewsletterData) {
    super([data], [data.email]);
  }
}

export class NewsletterDetailed extends classes(
  NewsletterCommon,
  DataModel<NewsletterData>,
) {
  public constructor(data: NewsletterData) {
    super([data], [data]);
  }
}
