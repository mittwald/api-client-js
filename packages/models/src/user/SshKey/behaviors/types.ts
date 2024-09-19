import {
  SshKeyCreateData,
  SshKeyData,
  SshKeyListItemData,
  SshKeyUpdateData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface SshKeyBehaviors {
  find: (id: string) => Promise<SshKeyData | undefined>;

  list: () => Promise<QueryResponseData<SshKeyListItemData>>;

  create: (data: SshKeyCreateData) => Promise<void>;

  update: (id: string, data: SshKeyUpdateData) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
