import type {
  SystemSoftwareVersionListQueryData,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionData,
} from "../types";

export interface SystemSoftwareVersionBehaviors {
  list: (
    systemSoftwareId: string,
    query?: SystemSoftwareVersionListQueryData,
  ) => Promise<{
    items: SystemSoftwareVersionListItemData[];
    totalCount: number;
  }>;

  find: (
    systemSoftwareVersionId: string,
    SystemSoftwareId: string,
  ) => Promise<SystemSoftwareVersionData | undefined>;
}
