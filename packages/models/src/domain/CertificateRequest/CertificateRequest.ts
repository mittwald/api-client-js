import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { classes } from "polytype";
import {
  CertificateRequestData,
  CertificateRequestListItemData,
  CertificateRequestListQueryModelData,
} from "./types.js";
import { CertificateListQueryModelData } from "../Certificate/types.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { CertificateListQuery } from "../Certificate/index.js";

export class CertificateRequest extends ReferenceModel {
  public static async ofId(
    certificateRequestId: string,
  ): Promise<CertificateRequest> {
    return new CertificateRequest(certificateRequestId);
  }

  public static find = provideReact(
    async (id: string): Promise<CertificateRequest | undefined> => {
      const data = await config.behaviors.certificateRequest.find(id);
      if (data !== undefined) {
        return new CertificateRequestDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<CertificateRequest> => {
      const certificateRequest = await this.find(id);
      assertObjectFound(certificateRequest, this, id);
      return certificateRequest;
    },
  );

  public findDetailed = provideReact(
    () => CertificateRequest.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<
    () => Promise<CertificateRequestDetailed | undefined>
  >;

  public getDetailed = provideReact(
    () => CertificateRequest.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<CertificateRequestDetailed>>;

  public static query(query: CertificateRequestListQueryModelData = {}) {
    return new CertificateListQuery(query);
  }

  public static async create(
    projectId: string,
    certificate: string,
    privateKey: string,
  ): Promise<CertificateRequest> {
    const { id } = await config.behaviors.certificateRequest.create(
      projectId,
      certificate,
      privateKey,
    );
    return new CertificateRequest(id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.certificateRequest.delete(this.id);
  }
}

export class CertificateRequestCommon extends classes(
  DataModel<CertificateRequestData>,
  CertificateRequest,
) {
  public constructor(data: CertificateRequestData) {
    super([data], [data.id]);
  }
}

export class CertificateRequestDetailed extends classes(
  CertificateRequestCommon,
  DataModel<CertificateRequestData>,
) {
  public constructor(data: CertificateRequestData) {
    super([data], [data]);
  }
}

export class CertificateRequestListQuery extends ListQueryModel<CertificateListQueryModelData> {
  public constructor(query: CertificateRequestListQueryModelData = {}) {
    super(query);
  }

  public refine(query: CertificateRequestListQueryModelData = {}) {
    return new CertificateRequestListQuery(query);
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } =
      await config.behaviors.certificateRequest.query(query);
    return new CertificateRequestList(
      this.query,
      items.map((r) => new CertificateRequestListItem(r)),
      totalCount,
    );
  }, [this.queryId]);
}

export class CertificateRequestListItem extends classes(
  CertificateRequestCommon,
  DataModel<CertificateRequestData>,
) {
  public constructor(data: CertificateRequestListItemData) {
    super([data], [data]);
  }
}

export class CertificateRequestList extends classes(
  CertificateRequestListQuery,
  ListDataModel<CertificateRequestListItem>,
) {
  public constructor(
    query: CertificateRequestListQueryModelData,
    certificateRequests: CertificateRequestListItem[],
    totalCount: number,
  ) {
    super([query], [certificateRequests, totalCount]);
  }
}
