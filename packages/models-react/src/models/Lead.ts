import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const LeadGhost = makeGhost(Models.Lead);
export type LeadGhost = MaybeReactGhost<Models.Lead>;

export const LeadListQueryGhost = makeGhost(Models.LeadListQuery);
export type LeadListQueryGhost = MaybeReactGhost<Models.LeadListQuery>;
