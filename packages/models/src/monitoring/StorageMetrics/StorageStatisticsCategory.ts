import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DateTime } from "luxon";

import { Bytes } from "../../common";

export type StorageStatisticsCategoryApiData =
  MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsCategory;
export type StorageStatisticsCategoryKind =
  MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsCategoryKind;

export class StorageStatisticsCategory {
  public readonly data?: StorageStatisticsCategoryApiData;
  public readonly kind?: StorageStatisticsCategoryKind;
  public readonly totalUsage: Bytes;
  public readonly updatedAt?: DateTime;

  public constructor(data?: StorageStatisticsCategoryApiData) {
    this.data = Object.freeze(data);
    this.kind = data?.kind;
    this.totalUsage = new Bytes(data?.totalUsageInBytes ?? 0);

    const updatedAt = data?.resources?.[0]?.usageInBytesSetAt;
    this.updatedAt = updatedAt ? DateTime.fromISO(updatedAt) : undefined;
  }
}
