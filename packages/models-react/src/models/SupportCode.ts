import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SupportCodeGhost = makeGhost(Models.SupportCode);
export type SupportCodeGhost = MaybeReactGhost<Models.SupportCode>;
