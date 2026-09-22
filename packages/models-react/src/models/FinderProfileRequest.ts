import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const FinderProfileRequestGhost = makeGhost(Models.FinderProfileRequest);
export type FinderProfileRequestGhost =
  MaybeReactGhost<Models.FinderProfileRequest>;

export const FinderProfileRequestListQueryGhost = makeGhost(
  Models.FinderProfileRequestListQuery,
);
export type FinderProfileRequestListQueryGhost =
  MaybeReactGhost<Models.FinderProfileRequestListQuery>;
