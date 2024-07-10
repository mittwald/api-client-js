import {
  SshKeyCreateData,
  SshKeyData,
  SshKeyListItemData,
  SshKeyUpdateData,
} from "../types.js";

export interface SshKeyBehaviors {
  find: (id: string) => Promise<SshKeyData | undefined>;

  list: () => Promise<SshKeyListItemData[]>;

  create: (data: SshKeyCreateData) => Promise<void>;

  update: (id: string, data: SshKeyUpdateData) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
