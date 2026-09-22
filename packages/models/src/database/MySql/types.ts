import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project";

export type MySqlData =
  MittwaldAPIV2.Operations.DatabaseGetMysqlDatabase.ResponseData;

export type MySqlListItemData =
  MittwaldAPIV2.Operations.DatabaseListMysqlDatabases.ResponseData[number];

export type MySqlListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Get.Parameters.Query;

export type MySqlListQueryModelData = {
  project: Project | string;
} & MySqlListQueryData;

export type MySqlCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMysqlDatabases.Post.Parameters.RequestBody;

export interface MySqlCreateRequest {
  description: string;
  password: string;
  version: string;
}

export type MySqlVersionData =
  MittwaldAPIV2.Operations.DatabaseListMysqlVersions.ResponseData;

export type MySqlPatchRequestData =
  MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseId.Patch.Parameters.RequestBody;

export type MySqlCharsetListQueryData =
  MittwaldAPIV2.Paths.V2MysqlCharsets.Get.Parameters.Query;

export type MySqlCharsetListItemData =
  MittwaldAPIV2.Operations.DatabaseListMysqlCharsets.ResponseData[number];

export type MySqlCharsetUpdateRequestData =
  MySqlPatchRequestData["characterSettings"];

export type MySqlCharacterSettings =
  MittwaldAPIV2.Components.Schemas.DatabaseCharacterSettings;

export type MySqlCopyRequestData =
  MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.RequestBody;

export type MySqlDatabaseStatus =
  MittwaldAPIV2.Components.Schemas.DatabaseDatabaseStatus;
