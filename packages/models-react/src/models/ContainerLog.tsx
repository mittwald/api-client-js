import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContainerLogGhost = makeGhost(Models.ContainerLog);
export type ContainerLogGhost = MaybeReactGhost<Models.ContainerLog>;
