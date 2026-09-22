import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const AuthGhost = makeGhost(Models.Auth);
export type AuthGhost = MaybeReactGhost<Models.Auth>;
