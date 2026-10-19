import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContributorExtensionGhost = makeGhost(Models.ContributorExtension);
export type ContributorExtensionGhost =
  MaybeReactGhost<Models.ContributorExtension>;

export const ContributorExtensionListQueryGhost = makeGhost(
  Models.ContributorExtensionListQuery,
);
export type ContributorExtensionListQueryGhost =
  MaybeReactGhost<Models.ContributorExtensionListQuery>;
