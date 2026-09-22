import type { QueryResponseData } from "../../../base";
import type {
  SshKeyListItemData,
  SshKeyCreateData,
  SshKeyUpdateData,
  SshKeyData,
} from "../types";

export interface SshKeyBehaviors {
  update: (sshKeyId: string, data: SshKeyUpdateData) => Promise<void>;

  find: (sshKeyId: string) => Promise<SshKeyData | undefined>;

  list: () => Promise<QueryResponseData<SshKeyListItemData>>;

  create: (data: SshKeyCreateData) => Promise<void>;

  delete: (sshKeyId: string) => Promise<void>;
}
