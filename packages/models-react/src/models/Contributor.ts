import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContributorGhost = makeGhost(Models.Contributor);
export type ContributorGhost = MaybeReactGhost<Models.Contributor>;

export const ContributorListQueryGhost = makeGhost(Models.ContributorListQuery);
export type ContributorListQueryGhost =
  MaybeReactGhost<Models.ContributorListQuery>;
