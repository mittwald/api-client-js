import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ExtensionInstanceContextGhost = makeGhost(
  Models.ExtensionInstanceContext,
);
export type ExtensionInstanceContextGhost =
  MaybeReactGhost<Models.ExtensionInstanceContext>;
