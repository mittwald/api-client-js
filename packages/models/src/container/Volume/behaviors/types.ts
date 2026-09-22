import type { QueryResponseData } from "../../../base";
import type {
  VolumeListQueryData,
  VolumeListItemData,
  VolumeData,
} from "../types";

export interface VolumeBehaviors {
  list: (
    projectId: string,
    query?: VolumeListQueryData,
  ) => Promise<QueryResponseData<VolumeListItemData>>;

  find: (volumeId: string, stackId: string) => Promise<VolumeData | undefined>;

  create: (stackId: string, name: string) => Promise<{ id: string }>;

  delete: (volumeId: string, stackId: string) => Promise<void>;
}
