import type { QueryResponseData } from "../../../base/index.js";
import type {
  MySqlCharsetUpdateRequestData,
  MySqlCharsetListQueryData,
  MySqlCharsetListItemData,
  MySqlCreateRequestData,
  MySqlCopyRequestData,
  MySqlListQueryData,
  MySqlListItemData,
  MySqlVersionData,
  MySqlData,
} from "../types.js";

export interface MySqlBehaviors {
  listCharsets: (query?: MySqlCharsetListQueryData) => Promise<{
    items: MySqlCharsetListItemData[];
    totalCount: number;
  }>;

  list: (
    projectId: string,
    query?: MySqlListQueryData,
  ) => Promise<QueryResponseData<MySqlListItemData>>;

  updateDefaultCharset: (
    mysqlDatabaseId: string,
    data: MySqlCharsetUpdateRequestData,
  ) => Promise<void>;

  create: (
    projectId: string,
    data: MySqlCreateRequestData,
  ) => Promise<{ id: string }>;

  copyDatabase: (
    mysqlDatabaseId: string,
    data: MySqlCopyRequestData,
  ) => Promise<void>;

  updateDescription: (
    mysqlDatabaseId: string,
    description: string,
  ) => Promise<void>;

  updateVersion: (mysqlDatabaseId: string, version: string) => Promise<void>;

  find: (mysqlDatabaseId: string) => Promise<MySqlData | undefined>;

  delete: (mysqlDatabaseId: string) => Promise<void>;

  listVersions: () => Promise<MySqlVersionData>;
}
