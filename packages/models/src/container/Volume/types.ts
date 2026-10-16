import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { ContainerStack } from "../Container/ContainerStack.js";
import type { Project } from "../../project/index.js";

export type VolumeData =
  MittwaldAPIV2.Components.Schemas.ContainerVolumeResponse;

export type VolumeListItemData =
  MittwaldAPIV2.Operations.ContainerListVolumes.ResponseData[number];

export type VolumeListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdVolumes.Get.Parameters.Query;

export type VolumeListQueryModelData = {
  stack?: ContainerStack | string;
  project: Project | string;
} & Omit<VolumeListQueryData, "stackId">;

export const volumeNameRegExp = /^[a-zA-Z0-9][a-zA-Z0-9_.-]+$/;
