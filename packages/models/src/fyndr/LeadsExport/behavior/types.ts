import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  LeadsExportListQueryData,
  LeadsExportListItemData,
  LeadsExportRequestData,
} from "../types.js";

export interface LeadsExportBehavior {
  create: (
    customerId: string,
    data: LeadsExportRequestData,
  ) => Promise<
    | {
        errorType: "NoLeadsToExport" | string;
        errorMessage: string | undefined;
      }
    | {
        base64FileContent: string;
        exportId: string;
      }
    | undefined
  >;
  list: (
    customerId: string,
    query: LeadsExportListQueryData,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<LeadsExportListItemData>>;
}
