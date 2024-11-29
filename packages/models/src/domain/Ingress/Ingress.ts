import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import {
  CertificateSettings,
  IngressData,
  IngressListItemData,
  IngressListQueryModelData,
  PathSettings,
} from "./types.js";
import {
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
  DataModel,
  AggregateMetaData,
} from "../../base/index.js";
import { extractId } from "../../base/index.js";
import { omit } from "remeda";
import { IngressPath } from "../IngressPath/index.js";

export class Ingress extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("ingress", "ingress");

  public static ofId(id: string): Ingress {
    return new Ingress(id);
  }

  public static ofHostname(hostname: string): Ingress {
    return Ingress.ofId(hostname);
  }

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

  public findDetailed = provideReact(
    () => Ingress.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<IngressDetailed | undefined>>;

  public getDetailed = provideReact(
    () => Ingress.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<IngressDetailed>>;

  public static query = (query: IngressListQueryModelData = {}) =>
    new IngressListQuery(query);

  public static findDefaultIngress = provideReact(
    async (project?: string): Promise<IngressListItem | undefined> => {
      const ingresses = await this.query({ project }).execute();

      return ingresses.items.find((i) => i.data.isDefault);
    },
  );

  public static async create(
    projectId: string,
    hostname: string,
    paths: PathSettings[],
  ): Promise<Ingress> {
    const { id } = await config.behaviors.ingress.create(
      projectId,
      hostname,
      paths,
    );
    return new Ingress(id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.ingress.delete(this.id);
  }

  public async updatePaths(paths: PathSettings[]): Promise<void> {
    await config.behaviors.ingress.updatePaths(this.id, paths);
  }
  public async updateTls(certificate: CertificateSettings): Promise<void> {
    await config.behaviors.ingress.updateTls(this.id, certificate);
  }
  public async requestAcmeCertificate(): Promise<void> {
    await config.behaviors.ingress.requestAcmeCertificate(this.id);
  }
  public async verifyOwnership(): Promise<void> {
    await config.behaviors.ingress.verifyOwnership(this.id);
  }

  public static async listCompatibleWithCertificate(
    projectId: string,
    certificate: string,
  ): Promise<Ingress[]> {
    return await config.behaviors.ingress.listCompatibleWithCertificate(
      projectId,
      certificate,
    );
  }
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

export class IngressListQuery extends ListQueryModel<IngressListQueryModelData> {
  public refine(query: IngressListQueryModelData) {
    return new IngressListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.ingress.list({
      ...omit(this.query, ["project"]),
      projectId: extractId(this.query.project),
    });

    return new IngressList(
      this.query as IngressListQueryModelData,
      items.map((d) => new IngressListItem(d)),
      totalCount,
    );
  }, [this.queryId]);
}

export class IngressList extends classes(
  IngressListQuery,
  ListDataModel<IngressListItem>,
) {
  public constructor(
    query: IngressListQueryModelData,
    ingresses: IngressListItem[],
    totalCount: number,
  ) {
    super([query], [ingresses, totalCount]);
  }
}
