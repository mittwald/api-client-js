import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type {
  FeedbackListItemData,
  FeedbackCreateData,
  FeedbackListQuery,
} from "./types.js";

import { ReferenceModel, WithData } from "../../base/index.js";
import { config } from "../../config/index.js";

@GhostMakerModel({
  name: "Feedback",
})
export class Feedback extends ReferenceModel {
  public static async create(data: FeedbackCreateData) {
    await config.behaviors.feedback.create(data);
  }

  public static async isSubmitted(userId: string, subject: string) {
    const feedbackList = await this.list(userId, { subject });

    return feedbackList.length > 0;
  }

  public static async list(userId: string, query: FeedbackListQuery) {
    const data = await config.behaviors.feedback.list(userId, query);

    return Object.freeze(data.map((d) => new FeedbackListItem(d)));
  }

  public static ofId(id: string) {
    return new Feedback(id);
  }
}

export class FeedbackCommon extends WithData<FeedbackListItemData>()(Feedback) {
  public override readonly data: FeedbackListItemData;
  public constructor(data: FeedbackListItemData) {
    super(data.id);
    this.data = data;
  }
}

export class FeedbackListItem extends FeedbackCommon {
  public constructor(data: FeedbackListItemData) {
    super(data);
  }
}
