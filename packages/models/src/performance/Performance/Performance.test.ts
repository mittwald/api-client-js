import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildPerformanceIngressListItemData } from "../../testing/builders/buildPerformanceIngressListItemData";
import { buildPerformanceListItemData } from "../../testing/builders/buildPerformanceListItemData";
import { buildPerformanceData } from "../../testing/builders/buildPerformanceData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { ListQueryModel, ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { Project } from "../../project";
import {
  PerformanceSubpageItem,
  PerformanceListQuery,
  PerformanceDetailed,
  PerformanceListItem,
  PerformanceMetric,
  PerformanceList,
  Performance,
} from "./Performance";

afterEach(resetBehaviors);

describe("Performance", () => {
  test("constructs a reference from its identifiers", () => {
    const performance = Performance.ofIdentifier(
      "p-1",
      "i-1",
      "example.com",
      "/some",
      "2024-06-01",
    );

    expect(performance.id).toBe("p-1/example.com/some");
    expect(performance.hostname).toBe("example.com");
    expect(performance.path).toBe("/some");
    expect(performance.project.id).toBe("p-1");
    expect(performance.ingress.id).toBe("i-1");
    expect(performance.date?.hour).toBe(12);
    expect(
      Performance.ofIdentifier("p-1", "i-1", "example.com").date,
    ).toBeUndefined();
  });

  test("find delegates and maps present data", async () => {
    const data = buildPerformanceData();
    const find = vi.fn().mockResolvedValue(data);
    installBehaviors({ performance: { find } });

    const result = await Performance.find(
      "p-1",
      "i-1",
      "example.com",
      "/some",
      "2024-06-01",
    );

    expect(find).toHaveBeenCalledWith("example.com", "/some", "2024-06-01");
    expect(result).toBeInstanceOf(PerformanceDetailed);
  });

  test("find returns undefined when no data exists", async () => {
    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      Performance.find("p-1", "i-1", "example.com"),
    ).resolves.toBeUndefined();
  });

  test("get returns details or throws ObjectNotFoundError", async () => {
    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(buildPerformanceData()) },
    });
    await expect(
      Performance.get("p-1", "i-1", "example.com"),
    ).resolves.toBeInstanceOf(PerformanceDetailed);

    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const promise = Performance.get("p-1", "i-1", "example.com");
    await expect(promise).rejects.toThrow();
    await expect(promise).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("reference detail methods delegate with normalized identifiers", async () => {
    const find = vi.fn().mockResolvedValue(buildPerformanceData());
    installBehaviors({ performance: { find } });
    const reference = Performance.ofIdentifier(
      "p-1",
      "i-1",
      "example.com",
      "/some",
      "2024-06-01",
    );

    await expect(reference.findDetailed()).resolves.toBeInstanceOf(
      PerformanceDetailed,
    );
    await expect(reference.getDetailed()).resolves.toBeInstanceOf(
      PerformanceDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(
      1,
      "example.com",
      "/some",
      reference.date?.toISO(),
    );
    expect(find).toHaveBeenNthCalledWith(
      2,
      "example.com",
      "/some",
      reference.date?.toISO(),
    );
  });
});

describe("PerformanceDetailed", () => {
  test("exposes metrics and derived values", () => {
    const data = buildPerformanceData();
    const detailed = new PerformanceDetailed(data, "p-1", "i-1");

    expect(detailed.metrics).toEqual(data.metrics);
    expect(detailed.moreDataAvailable).toHaveLength(2);
    expect(detailed.moreDataAvailable.every((date) => date.isValid)).toBe(true);
    expect(detailed.performanceScoreMetric).toMatchObject({
      value: 87.5,
      text: "87%",
    });
    expect(detailed.ttfbSeconds).toMatchObject({ text: "0.50 s", value: 0.5 });
    expect(detailed.speedIndex).toMatchObject({ text: "1.00 s", value: 1 });
    expect(detailed.loadTimeSeconds).toMatchObject({ text: "–", value: 0 });
  });

  test("preserves the ghostmaker identity chain", () => {
    const detailed = new PerformanceDetailed(
      buildPerformanceData(),
      "p-1",
      "i-1",
    );
    const listItem = new PerformanceListItem(
      buildPerformanceListItemData(),
      "p-1",
      "i-1",
    );

    expect(listItem).toBeInstanceOf(PerformanceListItem);
    expect(listItem).toBeInstanceOf(Performance);
    expect(listItem).toBeInstanceOf(ReferenceModel);
    expect(listItem.data).toBeDefined();
    expect(detailed).toBeInstanceOf(PerformanceDetailed);
    expect(detailed).toBeInstanceOf(Performance);
    expect(detailed).toBeInstanceOf(ReferenceModel);
    expect(detailed.data).toBeDefined();
  });
});

describe("Performance common variant", () => {
  test("findCommon delegates to the detailed lookup for a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(buildPerformanceData());
    installBehaviors({ performance: { find } });
    const reference = Performance.ofIdentifier(
      "p-1",
      "i-1",
      "example.com",
      "/some",
      "2024-06-01",
    );

    const common = await reference.findCommon();

    expect(find).toHaveBeenCalledWith(
      "example.com",
      "/some",
      reference.date?.toISO(),
    );
    expect(common).toBeInstanceOf(PerformanceDetailed);
  });

  test("findCommon resolves undefined when the reference cannot be found", async () => {
    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      Performance.ofIdentifier("p-1", "i-1", "example.com").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates for a bare reference and throws when not found", async () => {
    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(buildPerformanceData()) },
    });
    await expect(
      Performance.ofIdentifier("p-1", "i-1", "example.com").getCommon(),
    ).resolves.toBeInstanceOf(PerformanceDetailed);

    installBehaviors({
      performance: { find: vi.fn().mockResolvedValue(undefined) },
    });
    await expect(
      Performance.ofIdentifier("p-1", "i-1", "example.com").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("findCommon on an already-materialized model returns itself without re-fetching", async () => {
    const find = vi.fn().mockResolvedValue(buildPerformanceData());
    installBehaviors({ performance: { find } });

    const detailed = new PerformanceDetailed(
      buildPerformanceData(),
      "p-1",
      "i-1",
    );
    await expect(detailed.findCommon()).resolves.toBe(detailed);

    const listItem = new PerformanceListItem(
      buildPerformanceListItemData(),
      "p-1",
      "i-1",
    );
    await expect(listItem.findCommon()).resolves.toBe(listItem);

    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already-materialized model returns itself without re-fetching", async () => {
    const find = vi.fn().mockResolvedValue(buildPerformanceData());
    installBehaviors({ performance: { find } });

    const detailed = new PerformanceDetailed(
      buildPerformanceData(),
      "p-1",
      "i-1",
    );
    await expect(detailed.getCommon()).resolves.toBe(detailed);

    const listItem = new PerformanceListItem(
      buildPerformanceListItemData(),
      "p-1",
      "i-1",
    );
    await expect(listItem.getCommon()).resolves.toBe(listItem);

    expect(find).not.toHaveBeenCalled();
  });
});

describe("Performance absent-optional edge cases", () => {
  test("PerformanceDetailed defaults metrics and moreDataAvailable to empty arrays when absent", () => {
    const detailed = new PerformanceDetailed(
      buildPerformanceData({ moreDataAvailable: undefined, metrics: undefined }),
      "p-1",
      "i-1",
    );

    expect(detailed.metrics).toEqual([]);
    expect(detailed.moreDataAvailable).toEqual([]);
  });

  test("metric getters fall back to neutral display when the metric is missing", () => {
    const detailed = new PerformanceDetailed(
      buildPerformanceData({ metrics: [] }),
      "p-1",
      "i-1",
    );

    expect(detailed.ttfbSeconds).toMatchObject({ text: "–", value: 0 });
    expect(detailed.speedIndex).toMatchObject({ text: "–", value: 0 });
    expect(detailed.contentDownloadedBytes).toMatchObject({
      text: "–",
      value: 0,
    });
  });

  test("PerformanceListItem yields no subpages when paths are absent", () => {
    const item = new PerformanceListItem(
      buildPerformanceListItemData({ paths: undefined }),
      "p-1",
      "i-1",
    );

    expect(item.subpages).toEqual([]);
  });

  test("common variant leaves screenshot/createdAt undefined and score at zero when source omits them", () => {
    const item = new PerformanceListItem(
      buildPerformanceListItemData({ paths: undefined }),
      "p-1",
      "i-1",
    );

    expect(item.screenshot).toBeUndefined();
    expect(item.createdAt).toBeUndefined();
    expect(item.performanceScore).toBe(0);
  });
});

describe("PerformanceMetric", () => {
  test("classifies min-desired boundary values", () => {
    const create = (value: number) =>
      new PerformanceMetric({
        mediumThreshold: 10,
        lowThreshold: 20,
        highest: 0,
        lowest: 30,
        value,
      });

    expect(create(9)).toMatchObject({ valueIsHigh: true, desired: "min" });
    expect(create(10)).toMatchObject({ valueIsMedium: true });
    expect(create(20)).toMatchObject({ valueIsLow: true });
  });

  test("classifies max-desired boundary values and defaults missing display data", () => {
    const create = (value?: number) =>
      new PerformanceMetric({
        mediumThreshold: 70,
        lowThreshold: 40,
        highest: 100,
        lowest: 0,
        value,
      });

    expect(create(71)).toMatchObject({ valueIsHigh: true, desired: "max" });
    expect(create(70)).toMatchObject({ valueIsMedium: true });
    expect(create(40)).toMatchObject({ valueIsLow: true });
    expect(create()).toMatchObject({ text: "–", value: 0 });
  });
});

describe("Performance lists", () => {
  test("query and refine preserve the project and merge query data", async () => {
    const project = Project.ofId("project-1");
    const query = Performance.query(project, { domain: "x" });
    const refined = query.refine({ domain: "y" });

    expect(query).toBeInstanceOf(PerformanceListQuery);
    expect(query.project).toBe(project);
    expect(refined).not.toBe(query);
    expect(refined.project).toBe(project);

    // The merged query is observable through the list behavior on execute().
    const list = vi.fn().mockResolvedValue({ items: [] });
    installBehaviors({
      ingress: { list: vi.fn().mockResolvedValue({ totalCount: 0, items: [] }) },
      performance: { list },
    });

    await refined.execute();

    expect(list).toHaveBeenCalledWith("project-1", { domain: "y" });
  });

  test("execute joins matching ingresses and creates list items", async () => {
    installBehaviors({
      ingress: {
        list: vi.fn().mockResolvedValue({
          items: [buildPerformanceIngressListItemData()],
          totalCount: 1,
        }),
      },
      performance: {
        list: vi.fn().mockResolvedValue({
          items: [buildPerformanceListItemData()],
        }),
      },
    });

    const result = await Performance.query(Project.ofId("project-1")).execute();

    expect(result).toBeInstanceOf(PerformanceList);
    expect(result).toBeInstanceOf(PerformanceListQuery);
    expect(result.items).toBeDefined();
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(PerformanceListItem);
  });

  test("execute filters performance data without a matching ingress", async () => {
    installBehaviors({
      performance: {
        list: vi.fn().mockResolvedValue({
          items: [buildPerformanceListItemData()],
        }),
      },
      ingress: {
        list: vi.fn().mockResolvedValue({ totalCount: 0, items: [] }),
      },
    });

    const result = await Performance.query(Project.ofId("project-1")).execute();
    expect(result.items).toHaveLength(0);
  });

  test("list items expose subpages", () => {
    const item = new PerformanceListItem(
      buildPerformanceListItemData(),
      "p-1",
      "i-1",
    );

    expect(item.subpages).toHaveLength(1);
    expect(item.subpages[0]).toBeInstanceOf(PerformanceSubpageItem);
    expect(item.subpages[0]?.path).toBe("/");
  });
});
