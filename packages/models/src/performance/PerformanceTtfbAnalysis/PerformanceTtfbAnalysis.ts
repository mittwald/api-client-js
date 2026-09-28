import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type {
  PerformanceTtfbAnalysisStraceData,
  PerformanceTtfbSummaryMetricData,
  PerformanceTtfbAnalysisData,
  EnrichedNetworkingOps,
  EnrichedDbQueries,
  EnrichedFileOps,
} from "./types.js";

import { ReferenceModel, DataModel } from "../../base/index.js";
import { config } from "../../config/index.js";

export class PerformanceTtfbAnalysisDetailed extends DataModel<PerformanceTtfbAnalysisData> {
  public readonly actualUrl: string;
  public readonly executedAt: DateTime;
  public readonly totalDuration: number;

  public get dbQueries(): EnrichedDbQueries {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    if (!result.dbQueries) {
      return [];
    }
    return result.dbQueries.map((op) => {
      return {
        ...op,
        stats: {
          ...op.stats,
          totalTimeMs:
            (Number(op.stats.kernelMs) + Number(op.stats.userspaceMs)) /
            result.slowdownFactor,
        },
      };
    });
  }

  public get dbStatsSummary(): PerformanceTtfbSummaryMetric {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    return new PerformanceTtfbSummaryMetric(
      {
        userspaceMs: result.dbStats.userspaceMs,
        slowdownFactor: result.slowdownFactor,
        kernelMs: result.dbStats.kernelMs,
      },
      750,
      250,
    );
  }

  public get fileOps(): EnrichedFileOps {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    if (!result.fileOps) {
      return [];
    }
    return result.fileOps.map((op) => {
      return {
        ...op,
        stats: {
          ...op.stats,
          totalTimeMs:
            (Number(op.stats.kernelMs) + Number(op.stats.userspaceMs)) /
            result.slowdownFactor,
        },
      };
    });
  }

  public get fileStatsSummary(): PerformanceTtfbSummaryMetric {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    return new PerformanceTtfbSummaryMetric(
      {
        userspaceMs: result.fileOpsStats.userspaceMs,
        kernelMs: result.fileOpsStats.kernelMs,
        slowdownFactor: result.slowdownFactor,
      },
      2000,
      1200,
    );
  }

  public get miscStatsSummary(): PerformanceTtfbSummaryMetric {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    return new PerformanceTtfbSummaryMetric({
      userspaceMs: result.miscStats.userspaceMs,
      slowdownFactor: result.slowdownFactor,
      kernelMs: result.miscStats.kernelMs,
    });
  }

  public get networkingOps(): EnrichedNetworkingOps {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    if (!result.networkingOps) {
      return [];
    }
    return result.networkingOps.map((op) => {
      return {
        ...op,
        stats: {
          ...op.stats,
          totalTimeMs:
            (Number(op.stats.kernelMs) + Number(op.stats.userspaceMs)) /
            result.slowdownFactor,
        },
      };
    });
  }

  public get networkStatsSummary(): PerformanceTtfbSummaryMetric {
    const result = this.data.result as PerformanceTtfbAnalysisStraceData;
    return new PerformanceTtfbSummaryMetric(
      {
        userspaceMs: result.networkingStats.userspaceMs,
        kernelMs: result.networkingStats.kernelMs,
        slowdownFactor: result.slowdownFactor,
      },
      100,
      25,
    );
  }

  public constructor(data: PerformanceTtfbAnalysisData) {
    super(data);
    this.executedAt = DateTime.fromISO(data.executedAt);
    if ("result" in data && data.result && "ttfbMs" in data.result) {
      this.totalDuration = Math.round(
        data.result.ttfbMs / data.result.slowdownFactor,
      );
      this.actualUrl = data.result.actualUrl;
    } else {
      this.totalDuration = 0;
      this.actualUrl = "";
    }
  }
}

export class PerformanceTtfbSummaryMetric {
  public readonly classification: string;
  public readonly rating: 0 | 1 | 2 | 3 | 4 | 5;
  public readonly value: number;

  public constructor(
    data: PerformanceTtfbSummaryMetricData,
    errorThreshold?: number,
    warningThreshold?: number,
  ) {
    this.value = Math.round(
      (data.kernelMs + data.userspaceMs) / data.slowdownFactor,
    );

    if (!errorThreshold || !warningThreshold) {
      this.rating = 3;
      this.classification = "detail.ttfb.stats.classification.mid";
      return;
    }

    if (this.value >= errorThreshold) {
      this.rating = 1;
      this.classification = "detail.ttfb.stats.classification.high";
    } else if (this.value >= warningThreshold) {
      this.rating = 2;
      this.classification = "detail.ttfb.stats.classification.high";
    } else if (this.value > warningThreshold * 0.5) {
      this.rating = 3;
      this.classification = "detail.ttfb.stats.classification.mid";
    } else if (this.value > warningThreshold * 0.25) {
      this.rating = 4;
      this.classification = "detail.ttfb.stats.classification.low";
    } else {
      this.rating = 5;
      this.classification = "detail.ttfb.stats.classification.low";
    }
  }
}

@GhostMakerModel({
  name: "PerformanceTtfbAnalysis",
})
export class PerformanceTtfbAnalysis extends ReferenceModel {
  public readonly projectId: string;
  public readonly ttfbAnalysisId: string;

  public constructor(projectId: string, ttfbAnalysisId: string) {
    super(`${projectId}/${ttfbAnalysisId}`);
    this.projectId = projectId;
    this.ttfbAnalysisId = ttfbAnalysisId;
  }

  public static async find(
    projectId: string,
    ttfbAnalysisId: string,
    requestConfig?: AxiosRequestConfig,
  ): Promise<PerformanceTtfbAnalysisDetailed | undefined> {
    const data = await config.behaviors.performanceTtfbAnalysis.find(
      projectId,
      ttfbAnalysisId,
      requestConfig,
    );

    if (data) {
      return new PerformanceTtfbAnalysisDetailed(data);
    }
  }

  public static ofId(
    projectId: string,
    ttfbAnalysisId: string,
  ): PerformanceTtfbAnalysis {
    return new PerformanceTtfbAnalysis(projectId, ttfbAnalysisId);
  }

  public static async trigger(projectId: string, url: string) {
    return config.behaviors.performanceTtfbAnalysis.trigger(projectId, url);
  }

  public async findDetailed(
    requestConfig?: AxiosRequestConfig,
  ): Promise<PerformanceTtfbAnalysisDetailed | undefined> {
    return PerformanceTtfbAnalysis.find(
      this.projectId,
      this.ttfbAnalysisId,
      requestConfig,
    );
  }
}
