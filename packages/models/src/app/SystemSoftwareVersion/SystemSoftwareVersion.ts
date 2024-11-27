import { classes } from "polytype";
import type {
  SystemSoftwareVersionData,
  SystemSoftwareVersionListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { SystemSoftware } from "../SystemSoftware/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class SystemSoftwareVersion extends ReferenceModel {
  public readonly systemSoftware: SystemSoftware;

  public constructor(id: string, systemSoftware: SystemSoftware) {
    super(id);
    this.systemSoftware = systemSoftware;
  }

  public static ofId(
    id: string,
    systemSoftware: SystemSoftware,
  ): SystemSoftwareVersion {
    return new SystemSoftwareVersion(id, systemSoftware);
  }

  public static find = provideReact(
    async (
      id: string,
      systemSoftware: SystemSoftware,
    ): Promise<SystemSoftwareVersionDetailed | undefined> => {
      const data = await config.behaviors.systemSoftwareVersion.find(
        id,
        systemSoftware.id,
      );
      if (data) {
        return new SystemSoftwareVersionDetailed(data, systemSoftware);
      }
    },
  );

  public static get = provideReact(
    async (
      id: string,
      systemSoftware: SystemSoftware,
    ): Promise<SystemSoftwareVersionDetailed> => {
      const systemSoftwareVersion = await this.find(id, systemSoftware);
      assertObjectFound(systemSoftwareVersion, this, id);
      return systemSoftwareVersion;
    },
  );

  public findDetailed = provideReact(
    () => SystemSoftwareVersion.find(this.id, this.systemSoftware),
    [this.id],
  ) as AsyncResourceVariant<SystemSoftwareVersionDetailed | undefined, []>;

  public getDetailed = provideReact(
    () => SystemSoftwareVersion.get(this.id, this.systemSoftware),
    [this.id],
  ) as AsyncResourceVariant<SystemSoftwareVersionDetailed, []>;
}

class SystemSoftwareVersionCommon extends classes(
  DataModel<SystemSoftwareVersionData | SystemSoftwareVersionListItemData>,
  SystemSoftwareVersion,
) {
  public constructor(
    data: SystemSoftwareVersionData | SystemSoftwareVersionListItemData,
    systemSoftware: SystemSoftware,
  ) {
    super([data], [data.id, systemSoftware]);
  }
}

export class SystemSoftwareVersionDetailed extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionData>,
) {
  public constructor(
    data: SystemSoftwareVersionData,
    systemSoftware: SystemSoftware,
  ) {
    super([data, systemSoftware], [data]);
  }
}

export class SystemSoftwareVersionListItem extends classes(
  SystemSoftwareVersionCommon,
  DataModel<SystemSoftwareVersionListItemData>,
) {
  public constructor(
    data: SystemSoftwareVersionListItemData,
    systemSoftware: SystemSoftware,
  ) {
    super([data, systemSoftware], [data]);
  }
}
