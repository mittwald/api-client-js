import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const AppInstallationGhost = makeGhost(Models.AppInstallation);
export type AppInstallationGhost = MaybeReactGhost<Models.AppInstallation>;

export const AppInstallationListQueryGhost = makeGhost(
  Models.AppInstallationListQuery,
);
export type AppInstallationListQueryGhost =
  MaybeReactGhost<Models.AppInstallationListQuery>;
