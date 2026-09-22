import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const FinderProfileGhost = makeGhost(Models.FinderProfile);
export type FinderProfileGhost = MaybeReactGhost<Models.FinderProfile>;

export const FinderProfileListQueryGhost = makeGhost(
  Models.FinderProfileListQuery,
);
export type FinderProfileListQueryGhost =
  MaybeReactGhost<Models.FinderProfileListQuery>;
