import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  CertificateData,
  CertificateListItemData,
  CertificateListQueryModelData,
} from "./types.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { Project } from "../../project/index.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Certificate extends ReferenceModel {
  public static ofId(certificateId: string): Certificate {
    return new Certificate(certificateId);
  }

  public static find = provideReact(
    async (id: string): Promise<Certificate | undefined> => {
      const data = await config.behaviors.certificate.find(id);
      if (data !== undefined) {
        return new CertificateDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (certificateId: string): Promise<Certificate> => {
      const certificate = await this.find(certificateId);
      assertObjectFound(certificate, this, certificateId);
      return certificate;
    },
  );

  public getDetailed = provideReact(() => Certificate.get(this.id));
  public findDetailed = provideReact(() =>
    Certificate.find(this.id),
  ) as AsyncResourceVariant<() => Promise<CertificateDetailed | undefined>>;

  public async replace(certificate: string, privateKey: string): Promise<void> {
    await config.behaviors.certificate.replace(
      this.id,
      certificate,
      privateKey,
    );
  }

  public async delete(): Promise<void> {
    await config.behaviors.certificate.delete(this.id);
  }
}

export class CertificateCommon extends classes(
  DataModel<CertificateData>,
  Certificate,
) {
  public constructor(data: CertificateData) {
    super([data], [data.id]);
  }
}

export class CertificateDetailed extends classes(
  CertificateCommon,
  DataModel<CertificateData>,
) {
  public constructor(data: CertificateData) {
    super([data], [data]);
  }
}

export class CertificateListQuery extends ListQueryModel<CertificateListQueryModelData> {
  public readonly project: Project;

  public constructor(
    project: Project,
    query: CertificateListQueryModelData = {},
  ) {
    super(query, { dependencies: [project.id] });
    this.project = project;
  }

  public refine(query: CertificateListQueryModelData = {}) {
    return new CertificateListQuery(this.project, { ...this.query, ...query });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.certificate.query(
      this.project.id,
    );
    return new CertificateList(
      this.project,
      this.query,
      items.map((c) => new CertificateListItem(c)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { items } = await this.refine({}).execute();
    return items.length;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({}).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class CertificateListItem extends classes(
  CertificateCommon,
  DataModel<CertificateData>,
) {
  public constructor(data: CertificateListItemData) {
    super([data], [data]);
  }
}

export class CertificateList extends classes(
  CertificateListQuery,
  ListDataModel<CertificateListItem>,
) {
  public constructor(
    project: Project,
    query: CertificateListQueryModelData,
    certificates: CertificateListItem[],
    totalCount: number,
  ) {
    super([project, query], [certificates, totalCount]);
  }
}
