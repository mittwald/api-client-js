import { classes } from "polytype";
import type {
  SystemSoftwareData,
  SystemSoftwareListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class SystemSoftware extends ReferenceModel {
  public static ofId(id: string): SystemSoftware {
    return new SystemSoftware(id);
  }

  public static find = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed | undefined> => {
      const data = await config.behaviors.systemSoftware.find(id);

      if (data) {
        return new SystemSoftwareDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed> => {
      const systemSoftware = await this.find(id);
      assertObjectFound(systemSoftware, this, id);
      return systemSoftware;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    SystemSoftwareDetailed | undefined
  > => {
    return SystemSoftware.find(this.id);
  }, [this.id]) as AsyncResourceVariant<SystemSoftwareDetailed | undefined, []>;

  public getDetailed =
    provideReact(async (): Promise<SystemSoftwareDetailed> => {
      return SystemSoftware.get(this.id);
    }, [this.id]) as AsyncResourceVariant<SystemSoftwareDetailed, []>;
}

class SystemSoftwareCommon extends classes(
  DataModel<SystemSoftwareData | SystemSoftwareListItemData>,
  SystemSoftware,
) {
  public constructor(data: SystemSoftwareData | SystemSoftwareListItemData) {
    super([data], [data.id]);
  }
}

export class SystemSoftwareDetailed extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareData>,
) {
  public constructor(data: SystemSoftwareData) {
    super([data], [data]);
  }
}

export class SystemSoftwareListItem extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareListItemData>,
) {
  public constructor(data: SystemSoftwareListItemData) {
    super([data], [data]);
  }
}
