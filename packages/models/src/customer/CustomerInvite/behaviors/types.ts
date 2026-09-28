import type {
  CustomerInviteCreateRequestData,
  CustomerInviteListQueryData,
  CustomerInviteListItemData,
  CustomerInviteData,
} from "../types.js";

export interface CustomerInviteBehaviors {
  list: (
    customerId: string,
    query?: CustomerInviteListQueryData,
  ) => Promise<{ items: CustomerInviteListItemData[]; totalCount: number }>;

  listIncoming: (
    query?: CustomerInviteListQueryData,
  ) => Promise<{ items: CustomerInviteListItemData[] }>;

  create: (
    customerId: string,
    data: CustomerInviteCreateRequestData,
  ) => Promise<{ id: string }>;

  accept: (customerInviteId: string, invitationToken?: string) => Promise<void>;

  find: (customerInviteId: string) => Promise<CustomerInviteData | undefined>;

  getByToken: (token: string) => Promise<{ id: string }>;

  decline: (customerInviteId: string) => Promise<void>;

  delete: (customerInviteId: string) => Promise<void>;
}
