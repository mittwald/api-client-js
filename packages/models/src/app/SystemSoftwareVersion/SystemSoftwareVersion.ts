import { ReferenceModel } from "../../base/ReferenceModel.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import {
  SystemSoftwareVersionData,
  SystemSoftwareVersionFeePeriod,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionListQuery,
} from "./types.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import semverCompare from "semver-compare";
import { DateTime } from "luxon";

export class SystemSoftwareVersion extends ReferenceModel {
  public static ofId(id: string): SystemSoftwareVersion {
    return new SystemSoftwareVersion(id);
  }

  public static find = provideReact(
    async (
      id: string,
      systemSoftwareId: string,
    ): Promise<SystemSoftwareVersionDetailed | undefined> => {
      const data = await config.behaviors.systemSoftwareVersion.find(
        id,
        systemSoftwareId,
      );

      if (data !== undefined) {
        return new SystemSoftwareVersionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (
      id: string,
      systemSoftwareId: string,
    ): Promise<SystemSoftwareVersionDetailed> => {
      const systemSoftwareVersion = await this.find(id, systemSoftwareId);

      assertObjectFound(systemSoftwareVersion, this, id);

      return systemSoftwareVersion;
    },
  );

  public getDetailed = provideReact(() =>
    SystemSoftwareVersion.get(this.id),
  ) as AsyncResourceVariant<SystemSoftwareVersionDetailed, []>;

  public static list = provideReact(
    async (
      systemSoftwareId: string,
      query: SystemSoftwareVersionListQuery = {},
    ): Promise<Readonly<Array<SystemSoftwareVersionListItem>>> => {
      const data = await config.behaviors.systemSoftwareVersion.list(
        systemSoftwareId,
        query,
      );

      return Object.freeze(
        data
          .map((d) => new SystemSoftwareVersionListItem(d))
          .sort((a, b) =>
            semverCompare(b.data.internalVersion, a.data.internalVersion),
          ),
      );
    },
  );
}

class SystemSoftwareVersionCommon extends classes(
  DataModel<SystemSoftwareVersionData | SystemSoftwareVersionListItemData>,
  SystemSoftwareVersion,
) {
  public constructor(
    data: SystemSoftwareVersionData | SystemSoftwareVersionListItemData,
  ) {
    super([data], [data.id]);
  }

  public currentFee(): SystemSoftwareVersionFeePeriod | undefined {
    const fee = this.data.fee;
    const now = DateTime.now().toString();

    if (!fee || !("periods" in fee)) {
      return undefined;
    }

    return fee.periods.find(
      (period) =>
        period.feeValidFrom <= now &&
        (!period.feeValidUntil || period.feeValidUntil > now),
    );
  }

  public imminentFee(): SystemSoftwareVersionFeePeriod | undefined {
    const fee = this.data.fee;
    const now = DateTime.now().toString();
    const sixMonthsFromNow = DateTime.now().plus({ month: 6 }).toString();

    if (!fee || !("periods" in fee) || this.currentFee()) {
      return undefined;
    }

    return fee.periods.find(
      (period) =>
        period.feeValidFrom > now && period.feeValidFrom < sixMonthsFromNow,
    );
  }

  public imminentExpiryDate(): string | undefined {
    const expiryDate = this.data.expiryDate;
    const sixMonthsFromNow = DateTime.now().plus({ month: 6 }).toString();

    if (expiryDate && expiryDate < sixMonthsFromNow) {
      return expiryDate;
    }
  }
}

export class SystemSoftwareVersionDetailed extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionData>,
) {
  public constructor(data: SystemSoftwareVersionData) {
    super([data], [data]);
  }
}

export class SystemSoftwareVersionListItem extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionListItemData>,
) {
  public constructor(data: SystemSoftwareVersionListItemData) {
    super([data], [data]);
  }
}
