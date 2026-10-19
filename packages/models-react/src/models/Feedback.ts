import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const FeedbackGhost = makeGhost(Models.Feedback);
export type FeedbackGhost = MaybeReactGhost<Models.Feedback>;
