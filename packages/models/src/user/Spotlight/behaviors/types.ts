import type { AxiosRequestConfig } from "axios";

import type {
  SpotlightInteractionData,
  SpotlightFeedbackData,
  SpotlightStateData,
} from "../types.js";

export interface SpotlightBehaviors {
  getSelfState: (
    spotlightId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<SpotlightStateData>;

  reportInteraction: (
    spotlightId: string,
    data: SpotlightInteractionData,
  ) => Promise<void>;

  submitFeedback: (
    spotlightId: string,
    data: SpotlightFeedbackData,
  ) => Promise<void>;
}
