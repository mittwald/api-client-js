import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContainerGhost = makeGhost(Models.Container);
export type ContainerGhost = MaybeReactGhost<Models.Container>;

export const ContainerListQueryGhost = makeGhost(Models.ContainerListQuery);
export type ContainerListQueryGhost =
  MaybeReactGhost<Models.ContainerListQuery>;

export const ContainerStackGhost = makeGhost(Models.ContainerStack);
export type ContainerStackGhost = MaybeReactGhost<Models.ContainerStack>;
