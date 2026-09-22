import type { MetricsRequestOptions } from "./Metrics";
import type { ServerDetailed } from "../../server";
import type {
  ServerMetricsDataObject,
  MetricsQueryRequest,
} from "../lib/metrics";

import { Metrics } from "./Metrics";

export class ServerUsageMetrics {
  public readonly server: ServerDetailed;

  private constructor(server: ServerDetailed) {
    this.server = server;
  }

  public static of(server: ServerDetailed): ServerUsageMetrics {
    return new ServerUsageMetrics(server);
  }

  public getCpuLimit(): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM (cloudhosting_projectgroup_limits_cpu_seconds:5m{project_group="${this.server.groupId}"})`,
    );
  }

  public getCpuUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    return Metrics.getRequest(
      `
      (SUM (cloudhosting_databasesetmember_usage_cpu_seconds_total_rate:5m{project_group="${this.server.groupId}"} or vector (0)) +
      SUM (cloudhosting_project_usage_cpu_seconds_total_rate:5m{project_group="${this.server.groupId}"})) /
      SUM (cloudhosting_projectgroup_limits_cpu_seconds:5m{project_group="${this.server.groupId}"})
      `,
      options,
    );
  }

  public getDbCpuUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM(cloudhosting_databasesetmember_usage_cpu_seconds_total_rate:5m{project_group="${this.server.groupId}"} OR vector(0)) by (database_type, database_version)`,
      options,
    );
  }

  public getDbMemoryUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM(cloudhosting_databasesetmember_usage_memory_bytes:5m:max{project_group="${this.server.groupId}"} OR vector(0)) by (database_type, database_version)`,
      options,
    );
  }

  public getDetailedUsage(
    type: "cpu" | "ram",
    options: MetricsRequestOptions,
  ): Promise<ServerMetricsDataObject> {
    if (type === "cpu") {
      return this.getServerCpuMetrics(options);
    } else {
      return this.getServerMemoryMetrics(options);
    }
  }

  public getMemoryLimit(): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM (cloudhosting_projectgroup_limits_memory_bytes:5m{project_group="${this.server.groupId}"})`,
    );
  }

  public getMemoryUsage(options: MetricsRequestOptions): MetricsQueryRequest {
    return Metrics.getRequest(
      `
      (SUM (cloudhosting_databasesetmember_usage_memory_bytes:5m:max{project_group="${this.server.groupId}"} or vector (0)) +
      SUM (cloudhosting_project_usage_memory_bytes:5m:max{project_group="${this.server.groupId}"})) /
      SUM (cloudhosting_projectgroup_limits_memory_bytes:5m{project_group="${this.server.groupId}"})
      `,
      options,
    );
  }

  public getProjectCpuUsage(
    options: MetricsRequestOptions,
  ): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM (cloudhosting_project_usage_cpu_seconds_total_rate:5m{project_group="${this.server.groupId}"} OR vector(0)) /
      SUM (cloudhosting_projectgroup_limits_cpu_seconds:5m{project_group="${this.server.groupId}"})`,
      options,
    );
  }

  public getProjectMemoryUsage(
    options: MetricsRequestOptions,
  ): MetricsQueryRequest {
    return Metrics.getRequest(
      `SUM (cloudhosting_project_usage_memory_bytes:5m:max{project_group="${this.server.groupId}"} OR vector(0)) /
      SUM (cloudhosting_projectgroup_limits_memory_bytes:5m{project_group="${this.server.groupId}"})`,
      options,
    );
  }

  public async getServerCpuMetrics(
    options: MetricsRequestOptions,
  ): Promise<ServerMetricsDataObject> {
    const projectUsage = await this.getProjectCpuUsage({
      from: options.from,
      to: options.to,
    }).getData();
    const dbUsage = await this.getDbCpuUsage({
      from: options.from,
      to: options.to,
    }).getData();
    const summaryUsage = await this.getCpuUsage({
      from: options.from,
      to: options.to,
    }).getData();
    const limitResponse = await this.getCpuLimit().getData();
    const limit = limitResponse.getFirstValue() ?? 0;

    return {
      databases: dbUsage.getMultiFrameDataPoints([
        "database_type",
        "database_version",
      ]),
      project: projectUsage.getDataPoints(),
      summary: summaryUsage.getDataPoints(),
      limit,
    };
  }

  public async getServerMemoryMetrics(
    options: MetricsRequestOptions,
  ): Promise<ServerMetricsDataObject> {
    const projectUsage = await this.getProjectMemoryUsage({
      from: options.from,
      to: options.to,
    }).getData();
    const dbUsage = await this.getDbMemoryUsage({
      from: options.from,
      to: options.to,
    }).getData();
    const summaryUsage = await this.getMemoryUsage({
      from: options.from,
      to: options.to,
    }).getData();

    const limitResponse = await this.getMemoryLimit().getData();
    const limit = limitResponse.getFirstValue() ?? 0;

    return {
      databases: dbUsage.getMultiFrameDataPoints([
        "database_type",
        "database_version",
      ]),
      project: projectUsage.getDataPoints(),
      summary: summaryUsage.getDataPoints(),
      limit,
    };
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
