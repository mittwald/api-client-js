import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { MySql } from "../MySql";

export type MySqlUserData =
  MittwaldAPIV2.Operations.DatabaseGetMysqlUser.ResponseData;

export type MySqlUserListItemData =
  MittwaldAPIV2.Operations.DatabaseListMysqlUsers.ResponseData[number];

export type MySqlUserListQueryData =
  MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Query;

export type MySqlUserListQueryModelData = {
  database: string | MySql;
} & MySqlUserListQueryData;

export type MySqlUserCreateRequestData =
  MittwaldAPIV2.Paths.V2MysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.RequestBody;

export type MySqlUserAccessLevel = MySqlUserData["accessLevel"];

export type MySqlUserUpdateRequestData =
  MittwaldAPIV2.Paths.V2MysqlUsersMysqlUserId.Patch.Parameters.RequestBody;
