import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ExtensionInstanceGhost = makeGhost(Models.ExtensionInstance);
export type ExtensionInstanceGhost = MaybeReactGhost<Models.ExtensionInstance>;

export const ExtensionInstanceListQueryGhost = makeGhost(
  Models.ExtensionInstanceListQuery,
);
export type ExtensionInstanceListQueryGhost =
  MaybeReactGhost<Models.ExtensionInstanceListQuery>;
