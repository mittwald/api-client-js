import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const AIModelGhost = makeGhost(Models.AIModel);
export type AIModelGhost = MaybeReactGhost<Models.AIModel>;

export const AIModelListQueryGhost = makeGhost(Models.AIModelListQuery);
export type AIModelListQueryGhost = MaybeReactGhost<Models.AIModelListQuery>;
