import { SystemSoftwareData, SystemSoftwareListItemData } from "../types.js";

export interface SystemSoftwareBehaviors {
  find: (id: string) => Promise<SystemSoftwareData | undefined>;
  list: () => Promise<SystemSoftwareListItemData[]>;
}
