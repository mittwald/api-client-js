import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const AppVersionGhost = makeGhost(Models.AppVersion);
export type AppVersionGhost = MaybeReactGhost<Models.AppVersion>;

export const AppVersionListQueryGhost = makeGhost(Models.AppVersionListQuery);
export type AppVersionListQueryGhost =
  MaybeReactGhost<Models.AppVersionListQuery>;
