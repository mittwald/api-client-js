import type { QueryResponseData } from "../../../base/index.js";
import type {
  VolumeListQueryData,
  VolumeListItemData,
  VolumeData,
} from "../types.js";

export interface VolumeBehaviors {
  list: (
    projectId: string,
    query?: VolumeListQueryData,
  ) => Promise<QueryResponseData<VolumeListItemData>>;

  find: (volumeId: string, stackId: string) => Promise<VolumeData | undefined>;

  create: (stackId: string, name: string) => Promise<{ id: string }>;

  delete: (volumeId: string, stackId: string) => Promise<void>;
}
