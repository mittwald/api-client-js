import type {
  ProjectAIModelListQueryData,
  ProjectAIModelData,
} from "./types.js";

import { makeScopedAIModelClasses } from "../lib/makeScopedAIModelClasses.js";
import { config } from "../../config/index.js";

const classes = makeScopedAIModelClasses<
  ProjectAIModelData,
  ProjectAIModelListQueryData
>({
  resolveBehavior: () => config.behaviors.projectAIModel,
  ghostName: "ProjectAIModel",
});

export const ProjectAIModel = classes.ScopedAIModel;
export type ProjectAIModel = InstanceType<typeof classes.ScopedAIModel>;

export const ProjectAIModelCommon = classes.ScopedAIModelCommon;
export type ProjectAIModelCommon = InstanceType<
  typeof classes.ScopedAIModelCommon
>;

export const ProjectAIModelListItem = classes.ScopedAIModelListItem;
export type ProjectAIModelListItem = InstanceType<
  typeof classes.ScopedAIModelListItem
>;

export const ProjectAIModelListQuery = classes.ScopedAIModelListQuery;
export type ProjectAIModelListQuery = InstanceType<
  typeof classes.ScopedAIModelListQuery
>;

export const ProjectAIModelList = classes.ScopedAIModelList;
export type ProjectAIModelList = InstanceType<typeof classes.ScopedAIModelList>;
