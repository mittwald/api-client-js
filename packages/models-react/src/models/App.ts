import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const AppGhost = makeGhost(Models.App);
export type AppGhost = MaybeReactGhost<Models.App>;

export const AppListQueryGhost = makeGhost(Models.AppListQuery);
export type AppListQueryGhost = MaybeReactGhost<Models.AppListQuery>;
