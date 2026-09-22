import type {
  SystemSoftwareListQueryData,
  SystemSoftwareListItemData,
  SystemSoftwareData,
} from "../types";

export interface SystemSoftwareBehaviors {
  list: (
    query?: SystemSoftwareListQueryData,
  ) => Promise<{ items: SystemSoftwareListItemData[]; totalCount: number }>;

  find: (systemSoftwareId: string) => Promise<SystemSoftwareData | undefined>;
}
