import type { ContractData } from "../../../contract/index.js";
import type {
  LicenseListQueryData,
  LicenseListItemData,
  LicenseData,
} from "../types.js";

export interface LicenseBehaviors {
  list: (
    projectId: string,
    query?: LicenseListQueryData,
  ) => Promise<{ items: LicenseListItemData[]; totalCount: number }>;
  find: (licenseId: string) => Promise<LicenseData | undefined>;
  getContract: (licenseId: string) => Promise<ContractData>;
  rotateKey: (licenseId: string) => Promise<void>;
}
