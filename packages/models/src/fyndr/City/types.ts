import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CitiesListItemData =
  MittwaldAPIV2.Operations.LeadfyndrGetCities.ResponseData[number];

export type CitiesListQueryData =
  MittwaldAPIV2.Paths.V2Cities.Get.Parameters.Query;
