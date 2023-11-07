import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { isUuid } from "../../lib/isUuid.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import type { AsyncResourceVariant } from "../../react/index.js";
import { withAsyncResourceVariant } from "../../react/index.js";
import { IngressCompactData, IngressData, IngressListQuery } from "./types.js";
import { IngressPath } from "../IngressPath/IngressPath.js";

export class IngressProxy extends ProxyModel {
  protected async getUuid(): Promise<string> {
    return IngressProxy.getUuid(this.id);
  }

  public static async getUuid(hostnameOrUuid: string): Promise<string> {
    if (isUuid(hostnameOrUuid)) {
      return hostnameOrUuid;
    }
    const allIngress = await IngressListItem.list();

    const uuid = allIngress.find(
      (p) => p.data.isEnabled && p.data.hostname === hostnameOrUuid,
    )?.id;

    if (uuid === undefined) {
      throw new ObjectNotFoundError(Ingress.name, hostnameOrUuid);
    }

    return uuid;
  }

  public getDetailed = withAsyncResourceVariant(() =>
    Ingress.get(this.id),
  ) as AsyncResourceVariant<IngressDetailed, []>;

  public static ofId(id: string): IngressProxy {
    return new IngressProxy(id);
  }

  public static ofHostname(hostname: string): IngressProxy {
    return IngressProxy.ofId(hostname);
  }
}

export class IngressBase extends classes(
  DataModel<IngressCompactData | IngressData>,
  IngressProxy,
) {
  public readonly baseUrl: string;
  public readonly paths: IngressPath[];

  public constructor(data: IngressCompactData | IngressData) {
    super([data], [data.id]);
    this.baseUrl = `https://${data.hostname}`;
    this.paths = data.paths.map((p) => new IngressPath(this, p));
  }
}

export class IngressDetailed extends classes(
  IngressBase,
  DataModel<IngressData>,
) {
  public constructor(data: IngressData) {
    super([data], [data]);
  }

  public static find = withAsyncResourceVariant(
    async (id: string): Promise<IngressDetailed | undefined> => {
      const data = await config.behaviors.ingress.find(
        await IngressProxy.getUuid(id),
      );
      if (data !== undefined) {
        return new IngressDetailed(data);
      }
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<IngressDetailed> => {
      const ingress = await this.find(id);
      assertObjectFound(ingress, this, id);
      return ingress;
    },
  );
}

export class IngressListItem extends classes(
  IngressBase,
  DataModel<IngressCompactData>,
) {
  public constructor(data: IngressCompactData) {
    super([data], [data]);
  }

  public static list = withAsyncResourceVariant(
    async (query: IngressListQuery = {}): Promise<Array<IngressListItem>> => {
      const data = await config.behaviors.ingress.list(query);
      return data.map((d) => new IngressListItem(d));
    },
  );
}

export class Ingress extends classes(IngressDetailed, IngressListItem) {}
