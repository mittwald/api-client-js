import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type SpotlightDecision =
  MittwaldAPIV2.Components.Schemas.UserUserFeedbackSpotlightDecision;

export type SpotlightStateData =
  MittwaldAPIV2.Operations.UserGetSpotlightInfo.ResponseData;

// API-DRIFT: both request bodies declare an `owner` and the feedback body marks
// it required; the client sends neither, so it is omitted here and cast away
// where the feedback is submitted (resolve: drop `owner` from the request
// schemas)
export type SpotlightInteractionData = Omit<
  MittwaldAPIV2.Paths.V2UsersSelfSpotlightsSpotlightId.Post.Parameters.RequestBody,
  "owner"
>;

export type SpotlightFeedbackData = Omit<
  MittwaldAPIV2.Paths.V2UsersSelfSpotlightsSpotlightIdFeedback.Post.Parameters.RequestBody,
  "owner"
>;
