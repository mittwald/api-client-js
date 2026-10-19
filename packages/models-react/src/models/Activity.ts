import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ActivityGhost = makeGhost(Models.Activity);
export type ActivityGhost = MaybeReactGhost<Models.Activity>;

export const ActivityListQueryGhost = makeGhost(Models.ActivityListQuery);
export type ActivityListQueryGhost = MaybeReactGhost<Models.ActivityListQuery>;
