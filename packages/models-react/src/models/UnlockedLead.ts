import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const UnlockedLeadGhost = makeGhost(Models.UnlockedLead);
export type UnlockedLeadGhost = MaybeReactGhost<Models.UnlockedLead>;

export const UnlockedLeadListQueryGhost = makeGhost(
  Models.UnlockedLeadListQuery,
);
export type UnlockedLeadListQueryGhost =
  MaybeReactGhost<Models.UnlockedLeadListQuery>;
