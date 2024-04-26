import {
  SystemSoftwareVersionData,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionListQuery,
} from "../types.js";

export interface SystemSoftwareVersionBehaviors {
  find: (
    id: string,
    SystemSoftwareId: string,
  ) => Promise<SystemSoftwareVersionData | undefined>;

  list: (
    systemSoftwareId: string,
    query?: SystemSoftwareVersionListQuery,
  ) => Promise<SystemSoftwareVersionListItemData[]>;
}
