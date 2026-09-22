import type {
  ProjectInviteCreateRequestData,
  ProjectInviteListQueryData,
  ProjectInviteListItemData,
  ProjectInviteData,
} from "../types";

export interface ProjectInviteBehaviors {
  list: (
    projectId: string,
    query?: ProjectInviteListQueryData,
  ) => Promise<{ items: ProjectInviteListItemData[]; totalCount: number }>;

  listIncoming: (
    query?: ProjectInviteListQueryData,
  ) => Promise<{ items: ProjectInviteListItemData[] }>;

  create: (
    projectId: string,
    data: ProjectInviteCreateRequestData,
  ) => Promise<{ id: string }>;

  accept: (projectInviteId: string, invitationToken?: string) => Promise<void>;

  find: (projectInviteId: string) => Promise<ProjectInviteData | undefined>;

  getByToken: (token: string) => Promise<{ id: string }>;

  decline: (projectInviteId: string) => Promise<void>;

  delete: (projectInviteId: string) => Promise<void>;
}
