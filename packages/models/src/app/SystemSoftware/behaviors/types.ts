import {
  SystemSoftwareData,
  SystemSoftwareListItemData,
  SystemSoftwareListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface SystemSoftwareBehaviors {
  find: (id: string) => Promise<SystemSoftwareData | undefined>;

  list: (
    query?: SystemSoftwareListQueryData,
  ) => Promise<QueryResponseData<SystemSoftwareListItemData>>;
}
