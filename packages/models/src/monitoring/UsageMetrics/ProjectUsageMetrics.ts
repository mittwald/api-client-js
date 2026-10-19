import type { MetricsQueryRequest } from "../lib/metrics/index.js";
import type { MetricsRequestOptions } from "./Metrics.js";
import type { ProjectDetailed } from "../../project/index.js";

import { Metrics } from "./Metrics.js";

export class ProjectUsageMetrics {
  public readonly project: ProjectDetailed;

  public constructor(project: ProjectDetailed) {
    this.project = project;
  }

  public static of(project: ProjectDetailed): ProjectUsageMetrics {
    return new ProjectUsageMetrics(project);
  }

  public getCpuUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    if (this.project.isProSpaceLite) {
      return Metrics.getRequest(
        `
        SUM (cloudhosting_project_usage_cpu_seconds_total_rate:5m{project="${this.project.shortId}"}) /
        SUM (cloudhosting_project_limits_cpu_seconds:5m{project="${this.project.shortId}"})
        `,
        options,
      );
    }

    if (this.project.server) {
      return Metrics.getRequest(
        `
      SUM (cloudhosting_project_usage_cpu_seconds_total_rate:5m{project="${this.project.shortId}"}) /
      SUM (cloudhosting_projectgroup_limits_cpu_seconds:5m{project_group="${this.project.serverGroupId}"})
      `,
        options,
      );
    }

    return Metrics.getRequest(
      `clamp_max(
      (SUM (cloudhosting_databasesetmember_usage_cpu_seconds_total_rate:5m{project_group="${this.project.serverGroupId}"} or vector (0)) +
      SUM (cloudhosting_project_usage_cpu_seconds_total_rate:5m{project="${this.project.shortId}"})) /
      SUM (cloudhosting_projectgroup_limits_cpu_seconds:5m{project_group="${this.project.serverGroupId}"}),
      1)`,
      options,
    );
  }

  public getMemoryUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    if (this.project.isProSpaceLite) {
      return Metrics.getRequest(
        `SUM (cloudhosting_project_usage_memory_bytes:5m:max{project="${this.project.shortId}"}) /
         SUM (cloudhosting_project_limits_memory_bytes:5m{project="${this.project.shortId}"})`,
        options,
      );
    }

    if (this.project.server) {
      return Metrics.getRequest(
        `
      SUM (cloudhosting_project_usage_memory_bytes:5m:max{project="${this.project.shortId}"}) /
      SUM (cloudhosting_projectgroup_limits_memory_bytes:5m{project_group="${this.project.serverGroupId}"})
      `,
        options,
      );
    }

    return Metrics.getRequest(
      `
      (SUM (cloudhosting_databasesetmember_usage_memory_bytes:5m:max{project_group="${this.project.serverGroupId}"} or vector (0)) +
      SUM (cloudhosting_project_usage_memory_bytes:5m:max{project="${this.project.shortId}"})) /
      SUM (cloudhosting_projectgroup_limits_memory_bytes:5m{project_group="${this.project.serverGroupId}"})`,
      options,
    );
  }

  public getUsage(
    type: "cpu" | "ram",
    options: MetricsRequestOptions,
  ): MetricsQueryRequest {
    if (type === "cpu") {
      return this.getCpuUsage(options);
    } else {
      return this.getMemoryUsage(options);
    }
  }
}
