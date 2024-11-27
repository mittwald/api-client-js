import { classes } from "polytype";
import type {
  ExtensionInstanceData,
  ExtensionInstanceListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class ExtensionInstance extends ReferenceModel {
  public static ofId(id: string): ExtensionInstance {
    return new ExtensionInstance(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ExtensionInstanceDetailed | undefined> => {
      const data = await config.behaviors.extensionInstance.find(id);

      if (data) {
        return new ExtensionInstanceDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ExtensionInstanceDetailed> => {
      const extensionInstance = await this.find(id);
      assertObjectFound(extensionInstance, this, id);
      return extensionInstance;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    ExtensionInstanceDetailed | undefined
  > => {
    return await ExtensionInstance.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    ExtensionInstanceDetailed | undefined,
    []
  >;

  public getDetailed = provideReact(
    () => ExtensionInstance.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ExtensionInstanceDetailed, []>;
}

class ExtensionInstanceCommon extends classes(
  DataModel<ExtensionInstanceData | ExtensionInstanceListItemData>,
  ExtensionInstance,
) {
  public constructor(
    data: ExtensionInstanceData | ExtensionInstanceListItemData,
  ) {
    super([data], [data.id]);
  }
}

export class ExtensionInstanceDetailed extends classes(
  ExtensionInstanceCommon,
  DataModel<ExtensionInstanceData>,
) {
  public constructor(data: ExtensionInstanceData) {
    super([data], [data]);
  }
}

export class ExtensionInstanceListItem extends classes(
  ExtensionInstanceCommon,
  DataModel<ExtensionInstanceListItemData>,
) {
  public constructor(data: ExtensionInstanceListItemData) {
    super([data], [data]);
  }
}
