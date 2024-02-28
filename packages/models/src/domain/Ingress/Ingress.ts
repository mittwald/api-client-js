import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import type { AsyncResourceVariant } from "../../lib/provideReact.js";
import { provideReact } from "../../lib/provideReact.js";
import { IngressListItemData, IngressData, IngressListQuery } from "./types.js";
import { IngressPath } from "../IngressPath/IngressPath.js";

export class Ingress extends ReferenceModel {
  public static ofId(id: string): Ingress {
    return new Ingress(id);
  }

  public static ofHostname(hostname: string): Ingress {
    return Ingress.ofId(hostname);
  }

  public static list = provideReact(
    async (query: IngressListQuery = {}): Promise<Array<IngressListItem>> => {
      const data = await config.behaviors.ingress.list(query);
      return data.map((d) => new IngressListItem(d));
    },
  );

  public static find = provideReact(
    async (id: string): Promise<IngressDetailed | undefined> => {
      const data = await config.behaviors.ingress.find(id);
      if (data !== undefined) {
        return new IngressDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<IngressDetailed> => {
      const ingress = await this.find(id);
      assertObjectFound(ingress, this, id);
      return ingress;
    },
  );

  public getDetailed = provideReact(() =>
    Ingress.get(this.id),
  ) as AsyncResourceVariant<IngressDetailed, []>;
}

export class IngressCommon extends classes(
  DataModel<IngressListItemData | IngressData>,
  Ingress,
) {
  public readonly baseUrl: string;
  public readonly paths: ReadonlyArray<IngressPath>;
  public readonly defaultPath: IngressPath;

  public constructor(data: IngressListItemData | IngressData) {
    super([data], [data.id]);
    this.baseUrl = `https://${data.hostname}`;
    this.paths = Object.freeze(data.paths.map((p) => new IngressPath(this, p)));

    const defaultPath = this.paths.find((p) => p.path === "/");
    if (defaultPath === undefined) {
      throw new Error(`Ingress ${this.describe()} has no default path.`);
    }
    this.defaultPath = defaultPath;
  }
}

export class IngressDetailed extends classes(
  IngressCommon,
  DataModel<IngressData>,
) {
  public constructor(data: IngressData) {
    super([data], [data]);
  }
}

export class IngressListItem extends classes(
  IngressCommon,
  DataModel<IngressListItemData>,
) {
  public constructor(data: IngressListItemData) {
    super([data], [data]);
  }
}
