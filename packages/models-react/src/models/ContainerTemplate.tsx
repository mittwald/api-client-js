import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ContainerTemplateGhost = makeGhost(Models.ContainerTemplate);
export type ContainerTemplateGhost = MaybeReactGhost<Models.ContainerTemplate>;

export const ContainerTemplateListQueryGhost = makeGhost(
  Models.ContainerTemplateListQuery,
);
export type ContainerTemplateListQueryGhost =
  MaybeReactGhost<Models.ContainerTemplateListQuery>;
