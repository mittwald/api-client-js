import type { QueryResponseData } from "../../../base";
import type {
  SftpUserCreateRequestData,
  SftpUserUpdateRequestData,
  SftpUserListQueryData,
  SftpUserListItemData,
  SftpUserData,
} from "../types";

export interface SftpUserBehaviors {
  list: (
    projectId: string,
    query?: SftpUserListQueryData,
  ) => Promise<QueryResponseData<SftpUserListItemData>>;

  create: (
    projectId: string,
    data: SftpUserCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (
    sftpUserId: string,
    data: SftpUserUpdateRequestData,
  ) => Promise<void>;

  find: (sftpUserId: string) => Promise<SftpUserData | undefined>;

  delete: (sftpUserId: string) => Promise<void>;
}
