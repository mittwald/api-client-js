import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type {
  SpotlightInteractionData,
  SpotlightFeedbackData,
  SpotlightStateData,
} from "./types.js";

import { ReferenceModel, WithData } from "../../base/index.js";
import { config } from "../../config/index.js";

@GhostMakerModel({
  name: "Spotlight",
})
export class Spotlight extends ReferenceModel {
  public static ofId(id: string) {
    return new Spotlight(id);
  }

  public async getSelfState(requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.spotlight.getSelfState(
      this.id,
      requestConfig,
    );

    return new SpotlightState(data);
  }

  public async reportInteraction(data: SpotlightInteractionData) {
    await config.behaviors.spotlight.reportInteraction(this.id, data);
  }

  public async submitFeedback(data: SpotlightFeedbackData) {
    await config.behaviors.spotlight.submitFeedback(this.id, data);
  }
}

export class SpotlightState extends WithData<SpotlightStateData>()(Spotlight) {
  public override readonly data: SpotlightStateData;

  public constructor(data: SpotlightStateData) {
    super(data.spotlightId);
    this.data = data;
  }

  public isFeedbackDue(tracksUse: boolean) {
    if (this.data.decision !== undefined) {
      return false;
    }

    return tracksUse ? this.data.used : this.data.acknowledged;
  }

  public isPromoDue() {
    return !this.data.acknowledged;
  }
}
