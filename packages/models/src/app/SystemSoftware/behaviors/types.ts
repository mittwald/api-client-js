import { SystemSoftwareData } from "../types.js";

export interface SystemSoftwareBehaviors {
  find: (id: string) => Promise<SystemSoftwareData | undefined>;
}
