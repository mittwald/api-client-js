import type {
  MySqlUserCreateRequestData,
  MySqlUserUpdateRequestData,
  MySqlUserListQueryData,
  MySqlUserListItemData,
  MySqlUserData,
} from "../types";

export interface MySqlUserBehaviors {
  list: (
    databaseId: string,
    query?: MySqlUserListQueryData,
  ) => Promise<{ items: MySqlUserListItemData[]; totalCount: number }>;

  create: (
    mySqlDatabaseId: string,
    data: MySqlUserCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (
    mysqlUserId: string,
    data: MySqlUserUpdateRequestData,
  ) => Promise<void>;

  updatePassword: (mysqlUserId: string, password: string) => Promise<void>;

  find: (mysqlUserId: string) => Promise<MySqlUserData | undefined>;

  getPhpMyAdminUrl: (mysqlUserId: string) => Promise<string>;

  delete: (mysqlUserId: string) => Promise<void>;
}
