import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  ServerProjectStatistics,
  StorageMetricsData,
  StorageMetricsKind,
} from "./types.js";

import { StorageStatisticsCategory } from "./StorageStatisticsCategory.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ReferenceModel, WithData } from "../../base/index.js";
import { Project } from "../../project/internal.js";
import { config } from "../../config/index.js";
import { Bytes } from "../../common/index.js";

@GhostMakerModel({
  name: "StorageMetrics",
})
export class StorageMetrics extends ReferenceModel {
  public static readonly storageUsageError = 100;
  public static readonly storageUsageWarning = 90;
  public readonly kind: StorageMetricsKind;

  public constructor(id: string, kind: StorageMetricsKind) {
    super(id);
    this.kind = kind;
  }

  public static async find(id: string, type: StorageMetricsKind) {
    const data =
      type === "project"
        ? await config.behaviors.storageMetrics.findByProject(id)
        : await config.behaviors.storageMetrics.findByServer(id);

    if (data !== undefined) {
      return new StorageMetricsDetailed(data);
    }
  }

  public static async get(id: string, type: StorageMetricsKind) {
    const storageMetrics = await StorageMetrics.find(id, type);
    assertObjectFound(storageMetrics, StorageMetrics, id);
    return storageMetrics;
  }

  public static ofId(id: string, kind: StorageMetricsKind) {
    return new StorageMetrics(id, kind);
  }
}

export class StorageMetricsDetailed extends WithData<StorageMetricsData>()(
  StorageMetrics,
) {
  public readonly childStatistics?: StorageMetricsDetailed[];
  public override readonly data: StorageMetricsData;
  public readonly exceedanceSetAt?: DateTime;
  public readonly notificationActive: boolean;
  public readonly notificationThreshold?: Bytes;
  public readonly notificationThresholdSuggestion: Bytes;
  public readonly notificationThresholdUsedAsLimit: boolean;
  public readonly projectStatistics?: ServerProjectStatistics;
  public readonly statisticCategories: {
    container: StorageStatisticsCategory;
    webspace: StorageStatisticsCategory;
    backup: StorageStatisticsCategory;
    mySql: StorageStatisticsCategory;
    redis: StorageStatisticsCategory;
    mail: StorageStatisticsCategory;
  };
  public readonly storageAlmostExceeded: boolean;
  public readonly storageExceeded: boolean;
  public readonly storageLimit?: Bytes;
  public readonly totalStorageAvailable?: Bytes;
  public readonly totalStorageFree?: Bytes;
  public readonly totalStorageUsage: Bytes;

  public constructor(data: StorageMetricsData) {
    super(data.id, data.kind);
    this.data = data;
    this.childStatistics = data.childStatistics?.map(
      (s) => new StorageMetricsDetailed(s),
    );
    this.notificationActive = !!data.notificationThresholdInBytes;
    this.notificationThreshold = data.notificationThresholdInBytes
      ? Bytes.of(data.notificationThresholdInBytes, "bytes")
      : undefined;
    this.totalStorageUsage = Bytes.of(data.meta.totalUsageInBytes, "bytes");
    this.storageLimit = data.meta.limitInBytes
      ? Bytes.of(data.meta.limitInBytes, "bytes")
      : undefined;

    this.notificationThresholdSuggestion = this.storageLimit
      ? this.storageLimit.multiply(0.8)
      : this.totalStorageUsage.gib < 1
        ? Bytes.of(1, "GiB")
        : this.totalStorageUsage.multiply(1.5);
    if (
      this.storageLimit &&
      this.storageLimit.isGreaterThan(this.notificationThresholdSuggestion)
    ) {
      this.notificationThresholdSuggestion = this.storageLimit;
    }
    this.notificationThresholdUsedAsLimit =
      !!data.meta.notificationThresholdUsedAsLimit;
    this.storageExceeded = data.meta.totalUsageInPercentage
      ? data.meta.totalUsageInPercentage >= StorageMetrics.storageUsageError
      : false;
    this.storageAlmostExceeded = data.meta.totalUsageInPercentage
      ? !this.storageExceeded &&
        data.meta.totalUsageInPercentage >= StorageMetrics.storageUsageWarning
      : false;

    this.statisticCategories = {
      container: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "containerVolume"),
      ),
      backup: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "projectBackup"),
      ),
      mySql: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "mysqlDatabase"),
      ),
      redis: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "redisDatabase"),
      ),
      webspace: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "webspace"),
      ),
      mail: new StorageStatisticsCategory(
        data.statisticCategories?.find((c) => c.kind === "mailAddress"),
      ),
    };

    this.totalStorageFree = data.meta.totalFreeInBytes
      ? Bytes.of(data.meta.totalFreeInBytes, "bytes")
      : undefined;

    const totalStorageAvailable = this.totalStorageFree
      ? this.totalStorageUsage.add(this.totalStorageFree)
      : this.storageLimit;

    this.totalStorageAvailable = this.notificationThresholdUsedAsLimit
      ? undefined
      : totalStorageAvailable;

    this.projectStatistics = data.childStatistics
      ?.filter((s) => s.kind === "project")
      .sort((a, b) => b.meta.totalUsageInBytes - a.meta.totalUsageInBytes)
      .map((s) => ({
        notificationThreshold: s.notificationThresholdInBytes
          ? Bytes.of(s.notificationThresholdInBytes, "bytes")
          : undefined,
        totalStorageUsage: Bytes.of(s.meta.totalUsageInBytes, "bytes"),
        project: Project.ofId(s.id),
      }));

    this.exceedanceSetAt = data.meta.totalExceedanceInBytesSetAt
      ? DateTime.fromISO(data.meta.totalExceedanceInBytesSetAt)
      : undefined;
  }
}
