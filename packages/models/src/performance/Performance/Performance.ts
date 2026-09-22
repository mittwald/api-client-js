import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  PerformanceSubpageItemData,
  PerformanceListQueryData,
  PerformanceListItemData,
  PerformanceMetricData,
  PerformanceData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Ingress } from "../../ingress/Ingress/Ingress.js";
import { Project } from "../../project/internal.js";
import { File } from "../../file/File/internal.js";
import { config } from "../../config/index.js";
import { Bytes } from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  DataModel,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Performance",
})
export class Performance extends ReferenceModel {
  public readonly date?: DateTime;
  public readonly hostname: string;
  public readonly ingress: Ingress;
  public readonly path: string;
  public readonly project: Project;

  public constructor(
    projectId: string,
    ingressId: string,
    hostname: string,
    path = "/",
    date?: string,
  ) {
    super(`${projectId}/${hostname}${path}`);
    this.ingress = Ingress.ofId(ingressId);
    this.project = Project.ofId(projectId);
    this.hostname = hostname;
    this.path = path;
    this.date = date ? DateTime.fromISO(date).plus({ hour: 12 }) : undefined;
  }

  public static async find(
    projectId: string,
    ingressId: string,
    hostname: string,
    path = "/",
    date?: string,
  ) {
    const data = await config.behaviors.performance.find(hostname, path, date);
    if (data !== undefined) {
      return new PerformanceDetailed(data, projectId, ingressId);
    }
  }

  public static async get(
    projectId: string,
    ingressId: string,
    hostname: string,
    path = "/",
    date?: string,
  ) {
    const performance = await Performance.find(
      projectId,
      ingressId,
      hostname,
      path,
      date,
    );
    assertObjectFound(
      performance,
      Performance,
      `${projectId}/${hostname}${path}`,
    );
    return performance;
  }

  public static ofIdentifier(
    projectId: string,
    ingressId: string,
    hostname: string,
    path = "/",
    date?: string,
  ): Performance {
    return new Performance(projectId, ingressId, hostname, path, date);
  }

  public static query(
    project: Project,
    query: PerformanceListQueryData = {},
  ): PerformanceListQuery {
    return new PerformanceListQuery(project, query);
  }

  public async findCommon(): Promise<PerformanceCommon | undefined> {
    return this instanceof PerformanceCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<PerformanceDetailed | undefined> {
    return Performance.find(
      this.project.id,
      this.ingress.id,
      this.hostname,
      this.path,
      this.date?.toISO() ?? undefined,
    );
  }

  public async getCommon(): Promise<PerformanceCommon> {
    return this instanceof PerformanceCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<PerformanceDetailed> {
    return Performance.get(
      this.project.id,
      this.ingress.id,
      this.hostname,
      this.path,
      this.date?.toISO() ?? undefined,
    );
  }
}

export class PerformanceCommon extends WithData<
  PerformanceListItemData | PerformanceData
>()(Performance) {
  public readonly createdAt?: DateTime;

  public override readonly data: PerformanceListItemData | PerformanceData;
  public readonly domain: string;
  public readonly performanceScore: number;
  public readonly screenshot?: File;

  public constructor(
    data: PerformanceListItemData | PerformanceData,
    projectId: string,
    ingressId: string,
  ) {
    const path = "path" in data ? data.path : "/";
    super(projectId, ingressId, data.domain, path);
    this.data = data;
    this.domain = data.domain;

    if ("performanceScore" in data) {
      this.performanceScore = data.performanceScore;
    } else {
      this.performanceScore = 0;
    }
    if ("screenshotFileRef" in data) {
      this.screenshot =
        typeof data.screenshotFileRef === "string"
          ? File.ofId(data.screenshotFileRef)
          : undefined;
    } else if ("screenshot" in data && data.screenshot) {
      this.screenshot =
        typeof data.screenshot.fileRef === "string"
          ? File.ofId(data.screenshot.fileRef)
          : undefined;
    }

    if ("createdAt" in data && data.createdAt) {
      this.createdAt = DateTime.fromISO(data.createdAt);
    }
  }
}

export class PerformanceDetailed extends PerformanceCommon {
  public override readonly data: PerformanceData;

  public readonly metrics: NonNullable<PerformanceData["metrics"]>;
  public readonly moreDataAvailable: DateTime[];

  public get co2SustainableWebGrams(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_co2_sustainable_web_grams",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value} g` : undefined,
      mediumThreshold: 0.48,
      value: metric?.value,
      lowThreshold: 1.49,
      highest: 0,
      lowest: 3,
    });
  }

  public get contentDownloadedBytes(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_content_downloaded_bytes",
    );
    return new PerformanceMetric({
      text: metric ? Bytes.of(metric.value, "bytes").text() : undefined,
      mediumThreshold: 2750000,
      lowThreshold: 6000000,
      value: metric?.value,
      lowest: 8000000,
      highest: 0,
    });
  }

  public get cumulativeLayoutShift(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_cumulative_layout_shift",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)}` : undefined,
      value: metric?.value,
      mediumThreshold: 0.1,
      lowThreshold: 0.25,
      lowest: 0.4,
      highest: 0,
    });
  }

  public get firstContentfulPaint(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_first_contentful_paint_seconds",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      mediumThreshold: 0.934,
      value: metric?.value,
      lowThreshold: 1.6,
      lowest: 2.0,
      highest: 0,
    });
  }

  public get largestContentfulPaint(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_largest_contentful_paint_seconds",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      value: metric?.value,
      mediumThreshold: 1.2,
      lowThreshold: 2.4,
      highest: 0,
      lowest: 4,
    });
  }

  public get loadTimeSeconds(): PerformanceMetric {
    const metric = this.findMetric("page_insights_browser_load_time_seconds");
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      value: metric?.value,
      mediumThreshold: 4.0,
      lowThreshold: 6.5,
      highest: 0,
      lowest: 9,
    });
  }

  public get performanceScoreMetric(): PerformanceMetric {
    return new PerformanceMetric({
      text: `${Math.trunc(this.performanceScore)}%`,
      value: this.performanceScore,
      mediumThreshold: 90,
      lowThreshold: 50,
      highest: 100,
      lowest: 0,
    });
  }

  public get serverProcessingSeconds(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_httpstats_server_processing_seconds",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      value: metric?.value,
      mediumThreshold: 0.6,
      lowThreshold: 1.2,
      highest: 0,
      lowest: 2,
    });
  }

  public get speedIndex(): PerformanceMetric {
    const metric = this.findMetric("page_insights_browser_speed_index_seconds");
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      mediumThreshold: 1.311,
      value: metric?.value,
      lowThreshold: 2.3,
      lowest: 3.5,
      highest: 0,
    });
  }

  public get startRenderSeconds(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_start_render_seconds",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      value: metric?.value,
      mediumThreshold: 4.0,
      lowThreshold: 6.5,
      highest: 0,
      lowest: 9,
    });
  }

  public get totalBlockingTimeSeconds(): PerformanceMetric {
    const metric = this.findMetric(
      "page_insights_browser_total_blocking_time_seconds",
    );
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      mediumThreshold: 0.15,
      value: metric?.value,
      lowThreshold: 0.35,
      lowest: 0.6,
      highest: 0,
    });
  }

  public get ttfbSeconds(): PerformanceMetric {
    const metric = this.findMetric("page_insights_browser_ttfb_seconds");
    return new PerformanceMetric({
      text: metric ? `${metric.value.toFixed(2)} s` : undefined,
      value: metric?.value,
      mediumThreshold: 0.8,
      lowThreshold: 1.8,
      highest: 0,
      lowest: 3,
    });
  }

  public constructor(
    data: PerformanceData,
    projectId: string,
    ingressId: string,
  ) {
    super(data, projectId, ingressId);
    this.data = data;
    this.metrics = data.metrics ?? [];
    this.moreDataAvailable =
      data.moreDataAvailable?.map((d) => DateTime.fromISO(d)) ?? [];
  }

  private findMetric(
    name: string,
  ): { value: number; name: string; } | undefined {
    return this.metrics?.find((m) => m.name === name);
  }
}

export class PerformanceSubpageItem extends DataModel<PerformanceSubpageItemData> {
  public readonly createdAt?: DateTime;
  public readonly path: string;
  public readonly performanceScore: number;
  public readonly screenshotFileRef?: string;

  public constructor(data: PerformanceSubpageItemData) {
    super(data);
    this.path = data.path;
    this.performanceScore = data.performanceScore;
    this.screenshotFileRef = data.screenshotFileRef;
    if (data.createdAt) {
      this.createdAt = DateTime.fromISO(data.createdAt);
    }
  }
}

export class PerformanceListItem extends PerformanceCommon {
  public override readonly data: PerformanceListItemData;

  public readonly subpages: PerformanceSubpageItem[];

  public constructor(
    data: PerformanceListItemData,
    projectId: string,
    ingressId: string,
  ) {
    super(data, projectId, ingressId);
    this.data = data;
    this.subpages = data.paths?.map((p) => new PerformanceSubpageItem(p)) ?? [];
  }
}

export class PerformanceListQuery extends ListQueryModel<PerformanceListQueryData> {
  public readonly project: Project;

  public constructor(project: Project, query: PerformanceListQueryData = {}) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public async execute() {
    const [{ items: performanceItems, totalCount }, ingresses] =
      await Promise.all([
        config.behaviors.performance.list(this.project.id, this.query),
        Ingress.query({ project: this.project.id }).execute(),
      ]);

    const items = performanceItems
      .map((performanceItem) => {
        const ingress = ingresses.items.find(
          (i) => i.hostname === performanceItem.domain,
        );

        if (!ingress) {
          return undefined;
        }

        return new PerformanceListItem(
          performanceItem,
          this.project.id,
          ingress.id,
        );
      })
      .filter((item): item is PerformanceListItem => undefined !== item);

    return new PerformanceList(this.project, this.query, items, totalCount);
  }

  public refine(query: PerformanceListQueryData) {
    return new PerformanceListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class PerformanceList extends WithListData<PerformanceListItem>()(
  PerformanceListQuery,
) {
  public override readonly items: readonly PerformanceListItem[];
  public override readonly totalCount: number;

  public constructor(
    project: Project,
    query: PerformanceListQueryData,
    performances: PerformanceListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(performances);
    this.totalCount = totalCount;
  }
}

export class PerformanceMetric {
  public readonly desired: "max" | "min";
  public readonly highest: number;
  public readonly lowest: number;
  public readonly lowThreshold: number;
  public readonly lowThresholdPercent: number;
  public readonly mediumThreshold: number;
  public readonly mediumThresholdPercent: number;
  public readonly range: number;
  public readonly text: string;
  public readonly value: number;
  public readonly valueIsHigh: boolean;
  public readonly valueIsLow: boolean;
  public readonly valueIsMedium: boolean;
  public readonly valuePercent: number;

  public constructor(data: PerformanceMetricData) {
    this.value = data.value ?? 0;
    this.text = data.text ?? "–";
    this.highest = data.highest;
    this.lowest = data.lowest;
    this.desired = this.lowest < this.highest ? "max" : "min";
    this.range =
      this.desired === "max"
        ? this.highest - this.lowest
        : this.lowest - this.highest;
    this.mediumThreshold = data.mediumThreshold;
    this.mediumThresholdPercent = (100 / this.range) * this.mediumThreshold;
    this.lowThreshold = data.lowThreshold;
    this.lowThresholdPercent = (100 / this.range) * this.lowThreshold;
    this.valuePercent =
      this.desired === "max"
        ? 100 - (100 / this.range) * this.value
        : (100 / this.range) * this.value;
    this.valueIsHigh =
      this.desired === "max"
        ? this.value > this.mediumThreshold
        : this.value < this.mediumThreshold;
    this.valueIsMedium =
      this.desired === "max"
        ? this.value <= this.mediumThreshold && this.value > this.lowThreshold
        : this.value >= this.mediumThreshold && this.value < this.lowThreshold;
    this.valueIsLow =
      this.desired === "max"
        ? this.value <= this.lowThreshold
        : this.value >= this.lowThreshold;
  }
}
