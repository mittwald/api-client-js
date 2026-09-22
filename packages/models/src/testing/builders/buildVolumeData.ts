import type { VolumeData } from "../../container/Volume/types";

export function buildVolumeData(overrides?: Partial<VolumeData>): VolumeData {
  return {
    storageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    linkedServices: ["container-a"],
    storageUsageInBytes: 1024,
    name: "test-volume",
    stackId: "stack-id",
    id: "volume-id",
    orphaned: false,
    ...overrides,
  };
}
