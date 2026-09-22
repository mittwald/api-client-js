import type { PerformanceData } from "../../performance/Performance/types";

export function buildPerformanceData(
  overrides?: Partial<PerformanceData>,
): PerformanceData {
  return {
    metrics: [
      {
        name: "page_insights_browser_ttfb_seconds",
        createdAt: "2024-01-01T00:00:00.000Z",
        value: 0.5,
      },
      {
        name: "page_insights_browser_speed_index_seconds",
        createdAt: "2024-01-01T00:00:00.000Z",
        value: 1,
      },
      {
        name: "page_insights_browser_content_downloaded_bytes",
        createdAt: "2024-01-01T00:00:00.000Z",
        value: 1_000_000,
      },
    ],
    screenshot: {
      createdAt: "2024-01-01T00:00:00.000Z",
      fileRef: "file-ref-1",
    },
    moreDataAvailable: ["2024-06-01", "2024-06-02"],
    createdAt: "2024-01-01T00:00:00.000Z",
    performanceScore: 87.5,
    domain: "example.com",
    path: "/",
    ...overrides,
  };
}
