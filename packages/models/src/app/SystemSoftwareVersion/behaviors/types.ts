import { SystemSoftwareVersionData } from "../types.js";

export interface SystemSoftwareVersionBehaviors {
  find: (
    id: string,
    SystemSoftwareId: string,
  ) => Promise<SystemSoftwareVersionData | undefined>;
}
