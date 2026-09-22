import type { QueryResponseData } from "../../../base/index.js";
import type {
  SshKeyListItemData,
  SshKeyCreateData,
  SshKeyUpdateData,
  SshKeyData,
} from "../types.js";

export interface SshKeyBehaviors {
  update: (sshKeyId: string, data: SshKeyUpdateData) => Promise<void>;

  find: (sshKeyId: string) => Promise<SshKeyData | undefined>;

  list: () => Promise<QueryResponseData<SshKeyListItemData>>;

  create: (data: SshKeyCreateData) => Promise<void>;

  delete: (sshKeyId: string) => Promise<void>;
}
