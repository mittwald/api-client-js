import { afterEach, describe, expect, test, vi } from "vitest";

import type { PerformanceTtfbAnalysisStraceData } from "./types";

import { buildPerformanceTtfbAnalysisData } from "../../testing/builders/buildPerformanceTtfbAnalysisData";
import { ReferenceModel, DataModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  PerformanceTtfbAnalysisDetailed,
  PerformanceTtfbSummaryMetric,
  PerformanceTtfbAnalysis,
} from "./PerformanceTtfbAnalysis";

afterEach(resetBehaviors);

describe("PerformanceTtfbAnalysis", () => {
  test("constructs a reference", () => {
    const analysis = PerformanceTtfbAnalysis.ofId("p-1", "t-1");

    expect(analysis.id).toBe("p-1/t-1");
    expect(analysis.projectId).toBe("p-1");
    expect(analysis.ttfbAnalysisId).toBe("t-1");
    expect(analysis).toBeInstanceOf(ReferenceModel);
  });

  test("trigger delegates and returns the behavior result", async () => {
    const scheduled = { id: "scheduled-1" };
    const trigger = vi.fn().mockResolvedValue(scheduled);
    installBehaviors({ performanceTtfbAnalysis: { trigger } });

    await expect(
      PerformanceTtfbAnalysis.trigger("p-1", "https://example.com/"),
    ).resolves.toBe(scheduled);
    expect(trigger).toHaveBeenCalledWith("p-1", "https://example.com/");
  });

  test("find delegates with request config and maps present data", async () => {
    const data = buildPerformanceTtfbAnalysisData();
    const find = vi.fn().mockResolvedValue(data);
    const requestConfig = { headers: { "x-test": "yes" } };
    installBehaviors({ performanceTtfbAnalysis: { find } });

    const result = await PerformanceTtfbAnalysis.find(
      "p-1",
      "t-1",
      requestConfig,
    );

    expect(find).toHaveBeenCalledWith("p-1", "t-1", requestConfig);
    expect(result).toBeInstanceOf(PerformanceTtfbAnalysisDetailed);
    expect(result).toBeInstanceOf(DataModel);
  });

  test("find returns undefined when no data exists", async () => {
    installBehaviors({
      performanceTtfbAnalysis: {
        find: vi.fn().mockResolvedValue(undefined),
      },
    });

    await expect(
      PerformanceTtfbAnalysis.find("p-1", "t-1"),
    ).resolves.toBeUndefined();
  });

  test("findDetailed delegates reference identifiers and request config", async () => {
    const find = vi.fn().mockResolvedValue(buildPerformanceTtfbAnalysisData());
    const requestConfig = { retryCache: false };
    installBehaviors({ performanceTtfbAnalysis: { find } });

    await PerformanceTtfbAnalysis.ofId("p-1", "t-1").findDetailed(
      requestConfig,
    );
    expect(find).toHaveBeenCalledWith("p-1", "t-1", requestConfig);
  });
});

describe("PerformanceTtfbAnalysisDetailed", () => {
  test("derives core values from successful strace data", () => {
    const detailed = new PerformanceTtfbAnalysisDetailed(
      buildPerformanceTtfbAnalysisData(),
    );

    expect(detailed.executedAt.isValid).toBe(true);
    expect(detailed.totalDuration).toBe(200);
    expect(detailed.actualUrl).toBe("https://example.com/");
  });

  test("uses empty core values for an error result", () => {
    const detailed = new PerformanceTtfbAnalysisDetailed(
      buildPerformanceTtfbAnalysisData({ result: { errorMessage: "boom" } }),
    );

    expect(detailed.totalDuration).toBe(0);
    expect(detailed.actualUrl).toBe("");
  });

  test("builds stats summaries with values, ratings, and classifications", () => {
    const detailed = new PerformanceTtfbAnalysisDetailed(
      buildPerformanceTtfbAnalysisData(),
    );

    expect(detailed.fileStatsSummary).toMatchObject({ value: 600 });
    expect(detailed.networkStatsSummary).toMatchObject({ value: 20 });
    expect(detailed.dbStatsSummary).toMatchObject({ value: 300 });
    for (const summary of [
      detailed.fileStatsSummary,
      detailed.networkStatsSummary,
      detailed.dbStatsSummary,
    ]) {
      expect(summary).toBeInstanceOf(PerformanceTtfbSummaryMetric);
      expect(summary.rating).toBeGreaterThanOrEqual(1);
      expect(summary.rating).toBeLessThanOrEqual(5);
      expect(summary.classification).toEqual(expect.any(String));
    }
    expect(detailed.miscStatsSummary).toMatchObject({
      classification: "detail.ttfb.stats.classification.mid",
      rating: 3,
    });
  });

  test("enriches operation timing", () => {
    const detailed = new PerformanceTtfbAnalysisDetailed(
      buildPerformanceTtfbAnalysisData(),
    );

    expect(detailed.fileOps[0]?.stats.totalTimeMs).toBe(75);
    expect(detailed.dbQueries[0]?.stats.totalTimeMs).toBe(75);
    expect(detailed.networkingOps[0]?.stats.totalTimeMs).toBe(75);
  });

  test("returns empty operations when an operation list is empty", () => {
    const data = buildPerformanceTtfbAnalysisData();
    const result = data.result as PerformanceTtfbAnalysisStraceData;
    const detailed = new PerformanceTtfbAnalysisDetailed(
      buildPerformanceTtfbAnalysisData({
        result: { ...result, networkingOps: [], dbQueries: [], fileOps: [] },
      }),
    );

    expect(detailed.fileOps).toEqual([]);
    expect(detailed.dbQueries).toEqual([]);
    expect(detailed.networkingOps).toEqual([]);
  });
});

describe("PerformanceTtfbSummaryMetric", () => {
  const create = (value: number) =>
    new PerformanceTtfbSummaryMetric(
      { slowdownFactor: 1, kernelMs: value, userspaceMs: 0 },
      100,
      50,
    );

  test("rates error and warning threshold values", () => {
    expect(create(100).rating).toBe(1);
    expect(create(75).rating).toBe(2);
  });

  test("rates low values in the low classifications", () => {
    expect(create(20).rating).toBe(4);
    expect(create(10).rating).toBe(5);
  });
});
