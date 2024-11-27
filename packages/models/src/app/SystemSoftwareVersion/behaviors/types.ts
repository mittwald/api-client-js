import {
  SystemSoftwareVersionData,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface SystemSoftwareVersionBehaviors {
  find: (
    id: string,
    SystemSoftwareId: string,
  ) => Promise<SystemSoftwareVersionData | undefined>;

  list: (
    systemSoftwareId: string,
    query?: SystemSoftwareVersionListQueryData,
  ) => Promise<QueryResponseData<SystemSoftwareVersionListItemData>>;
}
