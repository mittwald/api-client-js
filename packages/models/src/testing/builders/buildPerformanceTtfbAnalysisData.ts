import type {
  PerformanceTtfbAnalysisStraceData,
  PerformanceTtfbAnalysisData,
} from "../../performance/PerformanceTtfbAnalysis/types";

type StraceStatistics = PerformanceTtfbAnalysisStraceData["dbStats"];

export function buildStraceStatistics(
  overrides?: Partial<StraceStatistics>,
): StraceStatistics {
  return {
    syscallCount: 10,
    userspaceMs: 50,
    occurrences: 1,
    kernelMs: 100,
    ...overrides,
  };
}

export function buildPerformanceTtfbAnalysisData(
  overrides?: Partial<PerformanceTtfbAnalysisData>,
): PerformanceTtfbAnalysisData {
  return {
    result: {
      networkingOps: [
        {
          stats: buildStraceStatistics(),
          description: "HTTPS request",
          connectionType: "EXTERNAL",
          warnLevel: "SEVERE",
          ip: "203.0.113.1",
          port: 443,
        },
      ],
      fileOps: [
        {
          filepath: "/var/www/index.php",
          stats: buildStraceStatistics(),
          filename: "index.php",
          warnLevel: "WARN",
        },
      ],
      dbQueries: [
        {
          stats: buildStraceStatistics(),
          query: "SELECT 1",
          warnLevel: "NO",
        },
      ],
      networkingStats: buildStraceStatistics({
        userspaceMs: 10,
        kernelMs: 30,
      }),
      fileOpsStats: buildStraceStatistics({
        userspaceMs: 400,
        kernelMs: 800,
      }),
      dbStats: buildStraceStatistics({ userspaceMs: 200, kernelMs: 400 }),
      miscStats: buildStraceStatistics({ userspaceMs: 20, kernelMs: 60 }),
      actualUrl: "https://example.com/",
      slowdownFactor: 2,
      ttfbMs: 400,
    },
    executedAt: "2024-01-01T00:00:00.000Z",
    id: "strace-1",
    ...overrides,
  };
}
