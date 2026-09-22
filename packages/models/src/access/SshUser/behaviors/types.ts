import type {
  SshUserCreateRequestData,
  SshUserUpdateRequestData,
  SshUserListQueryData,
  SshUserListItemData,
  SshUserData,
} from "../types.js";

export interface SshUserBehaviors {
  list: (
    projectId: string,
    query?: SshUserListQueryData,
  ) => Promise<{ items: SshUserListItemData[]; totalCount: number }>;

  create: (
    projectId: string,
    data: SshUserCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (sshUserId: string, data: SshUserUpdateRequestData) => Promise<void>;

  find: (sshUserId: string) => Promise<SshUserData | undefined>;

  delete: (sshUserId: string) => Promise<void>;
}
