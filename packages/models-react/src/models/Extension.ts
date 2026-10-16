import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ExtensionGhost = makeGhost(Models.Extension);
export type ExtensionGhost = MaybeReactGhost<Models.Extension>;

export const ExtensionListQueryGhost = makeGhost(Models.ExtensionListQuery);
export type ExtensionListQueryGhost =
  MaybeReactGhost<Models.ExtensionListQuery>;
