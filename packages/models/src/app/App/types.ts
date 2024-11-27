import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppData = MittwaldAPIV2.Operations.AppGetApp.ResponseData;

export type AppListItemData =
  MittwaldAPIV2.Operations.AppListApps.ResponseData[number];
