import { ReferenceModel } from "../../base/ReferenceModel.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import {
  ExtensionData,
  ExtensionListItemData,
  ExtensionListQuery,
} from "./types.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Extension extends ReferenceModel {
  public static ofId(id: string): Extension {
    return new Extension(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ExtensionDetailed | undefined> => {
      const data = await config.behaviors.extension.find(id);

      if (data !== undefined) {
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

  public getDetailed = provideReact(() =>
    Extension.get(this.id),
  ) as AsyncResourceVariant<ExtensionDetailed, []>;

  public static list = provideReact(
    async (
      query: ExtensionListQuery,
    ): Promise<Readonly<Array<ExtensionListItem>>> => {
      const data = await config.behaviors.extension.list(query);
      return Object.freeze(data.map((d) => new ExtensionListItem(d)));
    },
  );

  public static listAvailable = provideReact(
    async (
      query: ExtensionListQuery,
    ): Promise<Readonly<Array<ExtensionListItem>>> => {
      const extensions = await this.list(query);
      return extensions.filter((e) => !e.isBlocked && !e.isDisabled);
    },
  );
}

class ExtensionCommon extends classes(
  DataModel<ExtensionData | ExtensionListItemData>,
  Extension,
) {
  public readonly isDisabled: boolean;
  public readonly isBlocked: boolean;
  // Todo: Aktivieren wenn Contributor Model existiert
  // public readonly contributor: Contributor;

  public constructor(data: ExtensionData | ExtensionListItemData) {
    super([data], [data.id]);
    this.isDisabled = data.state === "disabled";
    this.isBlocked = data.state === "blocked";
    // this.contributor = Contributor.ofId(data.contributorId);
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
