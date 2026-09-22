import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { NewsletterInfoData } from "./types.js";

import { ReferenceModel, WithData } from "../../base/index.js";
import { config } from "../../config/index.js";
import { User } from "../../user/index.js";

@GhostMakerModel({
  name: "Newsletter",
})
export class Newsletter extends ReferenceModel {
  public static async getInfo(requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.newsletter.getInfo(requestConfig);

    return new NewsletterInfo(data);
  }

  public static async subscribe(data?: {
    firstName: string;
    lastName: string;
  }) {
    const { firstName, lastName } = data ?? (await User.self.getDetailed());

    await config.behaviors.newsletter.subscribe({
      firstName,
      lastName,
    });
  }

  public static async unsubscribe() {
    await config.behaviors.newsletter.unsubscribe();
  }
}

export class NewsletterInfo extends WithData<NewsletterInfoData>()(Newsletter) {
  public override readonly data: NewsletterInfoData;
  public readonly status: "confirmationPending" | "inactive" | "active";
  public constructor(data: NewsletterInfoData) {
    super(data.email);
    this.data = data;
    this.status = data.active
      ? "active"
      : data.registered
        ? "confirmationPending"
        : "inactive";
  }
}
