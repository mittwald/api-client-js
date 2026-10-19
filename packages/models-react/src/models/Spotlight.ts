import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SpotlightGhost = makeGhost(Models.Spotlight);
export type SpotlightGhost = MaybeReactGhost<Models.Spotlight>;
