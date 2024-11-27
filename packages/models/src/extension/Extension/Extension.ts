import { classes } from "polytype";
import type { ExtensionData, ExtensionListItemData } from "./types.js";
import {
  DataModel,
  ReferenceModel,
  AggregateMetaData,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Extension extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "extension",
    "extension",
  );

  public static ofId(id: string): Extension {
    return new Extension(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ExtensionDetailed | undefined> => {
      const data = await config.behaviors.extension.find(id);

      if (data) {
        return new ExtensionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ExtensionDetailed> => {
      const extension = await this.find(id);
      assertObjectFound(extension, this, id);
      return extension;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    ExtensionDetailed | undefined
  > => {
    return await Extension.find(this.id);
  }, [this.id]) as AsyncResourceVariant<ExtensionDetailed | undefined, []>;

  public getDetailed = provideReact(
    () => Extension.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ExtensionDetailed, []>;
}

class ExtensionCommon extends classes(
  DataModel<ExtensionData | ExtensionListItemData>,
  Extension,
) {
  public constructor(data: ExtensionData | ExtensionListItemData) {
    super([data], [data.id]);
  }
}

export class ExtensionDetailed extends classes(
  ExtensionCommon,
  DataModel<ExtensionData>,
) {
  public constructor(data: ExtensionData) {
    super([data], [data]);
  }
}

export class ExtensionListItem extends classes(
  ExtensionCommon,
  DataModel<ExtensionListItemData>,
) {
  public constructor(data: ExtensionListItemData) {
    super([data], [data]);
  }
}
