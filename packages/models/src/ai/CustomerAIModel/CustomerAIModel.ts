import type {
  CustomerAIModelListQueryData,
  CustomerAIModelData,
} from "./types";

import { makeScopedAIModelClasses } from "../lib/makeScopedAIModelClasses";
import { config } from "../../config";

const classes = makeScopedAIModelClasses<
  CustomerAIModelData,
  CustomerAIModelListQueryData
>({
  resolveBehavior: () => config.behaviors.customerAIModel,
  ghostName: "CustomerAIModel",
});

export const CustomerAIModel = classes.ScopedAIModel;
export type CustomerAIModel = InstanceType<typeof classes.ScopedAIModel>;

export const CustomerAIModelCommon = classes.ScopedAIModelCommon;
export type CustomerAIModelCommon = InstanceType<
  typeof classes.ScopedAIModelCommon
>;

export const CustomerAIModelListItem = classes.ScopedAIModelListItem;
export type CustomerAIModelListItem = InstanceType<
  typeof classes.ScopedAIModelListItem
>;

export const CustomerAIModelListQuery = classes.ScopedAIModelListQuery;
export type CustomerAIModelListQuery = InstanceType<
  typeof classes.ScopedAIModelListQuery
>;

export const CustomerAIModelList = classes.ScopedAIModelList;
export type CustomerAIModelList = InstanceType<typeof classes.ScopedAIModelList>;
