import type { PerformanceListItemData } from "../../performance/Performance/types";

export function buildPerformanceListItemData(
  overrides?: Partial<PerformanceListItemData>,
): PerformanceListItemData {
  return {
    paths: [
      {
        createdAt: "2024-01-01T00:00:00.000Z",
        screenshotFileRef: "file-1",
        performanceScore: 90,
        path: "/",
      },
    ],
    domain: "example.com",
    ...overrides,
  };
}
