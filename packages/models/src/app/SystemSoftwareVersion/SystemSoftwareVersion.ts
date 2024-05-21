import { ReferenceModel } from "../../base/ReferenceModel.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import {
  SystemSoftwareVersionData,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionListQuery,
} from "./types.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import semverCompare from "semver-compare";
import { DateTime } from "luxon";

export class SystemSoftwareVersion extends ReferenceModel {
  public readonly systemSoftwareId: string;

  public constructor(id: string, systemSoftwareId: string) {
    super(id);
    this.systemSoftwareId = systemSoftwareId;
  }

  public static ofId(
    id: string,
    systemSoftwareId: string,
  ): SystemSoftwareVersion {
    return new SystemSoftwareVersion(id, systemSoftwareId);
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
        return new SystemSoftwareVersionDetailed(data, systemSoftwareId);
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
    SystemSoftwareVersion.get(this.id, this.systemSoftwareId),
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
          .map((d) => new SystemSoftwareVersionListItem(d, systemSoftwareId))
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
    systemSoftwareId: string,
  ) {
    super([data], [data.id, systemSoftwareId]);
  }

  // ToDo: activate when new App specs are available in prod

  /*
  public currentFee(): SystemSoftwareVersionFeePeriod | undefined {
    const fee = this.data.fee;
    const now = DateTime.now();

    if (!fee || !("periods" in fee)) {
      return undefined;
    }

    return fee.periods.find((period) => {
      const validFrom = DateTime.fromISO(period.feeValidFrom);
      const validUntil =
        period.feeValidUntil && DateTime.fromISO(period.feeValidUntil);

      return validFrom <= now && (!validUntil || validUntil > now);
    });
  }

  public imminentFee(): SystemSoftwareVersionFeePeriod | undefined {
    const fee = this.data.fee;
    const now = DateTime.now();
    const sixMonthsFromNow = DateTime.now().plus({ month: 6 });

    if (!fee || !("periods" in fee) || this.currentFee()) {
      return undefined;
    }

    return fee.periods.find((period) => {
      const validFrom = DateTime.fromISO(period.feeValidFrom);
      return validFrom > now && validFrom < sixMonthsFromNow;
    });
  }

  */

  public imminentExpiryDate(): string | undefined {
    const expiryDate =
      this.data.expiryDate && DateTime.fromISO(this.data.expiryDate);
    const sixMonthsFromNow = DateTime.now().plus({ month: 6 });

    if (expiryDate && expiryDate < sixMonthsFromNow) {
      return this.data.expiryDate;
    }
  }
}

export class SystemSoftwareVersionDetailed extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionData>,
) {
  public constructor(
    data: SystemSoftwareVersionData,
    systemSoftwareId: string,
  ) {
    super([data, systemSoftwareId], [data]);
  }
}

export class SystemSoftwareVersionListItem extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionListItemData>,
) {
  public constructor(
    data: SystemSoftwareVersionListItemData,
    systemSoftwareId: string,
  ) {
    super([data, systemSoftwareId], [data]);
  }
}
