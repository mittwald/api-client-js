import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MfaGhost = makeGhost(Models.Mfa);
export type MfaGhost = MaybeReactGhost<Models.Mfa>;
