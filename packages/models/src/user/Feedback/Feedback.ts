import { ReferenceModel, DataModel } from "../../base/index.js";
import { classes } from "polytype";
import {
  FeedbackCreateData,
  FeedbackListItemData,
  FeedbackListQuery,
} from "./types.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";

export class Feedback extends ReferenceModel {
  public static ofId(id: string): Feedback {
    return new Feedback(id);
  }

  public static list = provideReact(
    async (
      userId: string,
      query: FeedbackListQuery,
    ): Promise<Readonly<Array<FeedbackListItem>>> => {
      const data = await config.behaviors.feedback.list(userId, query);

      return Object.freeze(data.map((d) => new FeedbackListItem(d)));
    },
  );

  public static async create(data: FeedbackCreateData): Promise<void> {
    await config.behaviors.feedback.create(data);
  }

  public static async isSubmitted(
    userId: string,
    subject: string,
  ): Promise<boolean> {
    const feedbackList = await this.list(userId, { subject });

    return feedbackList.length > 0;
  }
}

export class FeedbackCommon extends classes(
  DataModel<FeedbackListItemData>,
  Feedback,
) {
  public constructor(data: FeedbackListItemData) {
    super([data], [data.id]);
  }
}

export class FeedbackListItem extends classes(
  FeedbackCommon,
  DataModel<FeedbackListItemData>,
) {
  public constructor(data: FeedbackListItemData) {
    super([data], [data]);
  }
}
