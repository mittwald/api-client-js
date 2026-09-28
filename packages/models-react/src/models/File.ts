import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const FileGhost = makeGhost(Models.File);
export type FileGhost = MaybeReactGhost<Models.File>;
