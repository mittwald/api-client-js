import { ReferenceModel } from "../../base/ReferenceModel.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceData,
  ExtensionInstanceListItemData,
  ExtensionInstanceListQuery,
} from "./types.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
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

  public getDetailed = provideReact(() =>
    ExtensionInstance.get(this.id),
  ) as AsyncResourceVariant<ExtensionInstanceDetailed, []>;

  public static list = provideReact(
    async (
      query: ExtensionInstanceListQuery,
    ): Promise<Readonly<Array<ExtensionInstanceListItem>>> => {
      const data = await config.behaviors.extensionInstance.list(query);

      return Object.freeze(data.map((d) => new ExtensionInstanceListItem(d)));
    },
  );

  public static async create(
    data: ExtensionInstanceCreateRequestData,
  ): Promise<ExtensionInstance> {
    const { id } = await config.behaviors.extensionInstance.create(data);

    return new ExtensionInstance(id);
  }

  public async consentToScopes(
    data: ExtensionInstanceConsentToScopesRequestData,
  ): Promise<void> {
    await config.behaviors.extensionInstance.consentToScopes(this.id, data);
  }

  public async enable(): Promise<void> {
    await config.behaviors.extensionInstance.enable(this.id);
  }

  public async disable(): Promise<void> {
    await config.behaviors.extensionInstance.disable(this.id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.extensionInstance.delete(this.id);
  }

  /* ToDo: Activate when User model is merged
  public static async replaceFrontendComponentUrlParams(
    url: string,
  ): Promise<string> {
    const accessTokenRetrievalKeyData = await User.getAccessTokenRetrievalKey();

    return url
      .replace(":userId", accessTokenRetrievalKeyData.userId)
      .replace(
        ":accessTokenRetrievalKey",
        accessTokenRetrievalKeyData.accessTokenRetrievalKey,
      );
  }
  */
}

class ExtensionInstanceCommon extends classes(
  DataModel<ExtensionInstanceData | ExtensionInstanceListItemData>,
  ExtensionInstance,
) {
  // ToDo: Activate when Extension model is merged
  // public readonly extension: Extension;
  // ToDo: Activate when Contributor model is merged
  // public readonly contributor: Contributor;

  public constructor(
    data: ExtensionInstanceData | ExtensionInstanceListItemData,
  ) {
    super([data], [data.id]);

    //this.extension = Extension.ofId(data.extensionId);
    //this.contributor = Contributor.ofId(this.extension.id);
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
