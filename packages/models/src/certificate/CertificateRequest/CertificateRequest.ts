import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type { CertificateType } from "../Certificate/index.js";
import type {
  CertificateRequestListQueryModelData,
  CertificateRequestCertificateData,
  CertificateRequestListItemData,
  CertificateRequestData,
} from "./types.js";

import { CertificateContact } from "../CertificateContact/CertificateContact.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Project } from "../../project/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "CertificateRequest",
})
export class CertificateRequest extends ReferenceModel {
  public static async create(
    projectId: string,
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ) {
    const { id } = await config.behaviors.certificateRequest.create(
      projectId,
      certificate,
      privateKey,
      certificateAuthority,
    );
    return new CertificateRequest(id);
  }

  public static async createDnsCertificate(
    project: Project,
    commonName: string,
  ) {
    return await config.behaviors.certificateRequest.createDnsCertificate(
      commonName,
      project.id,
    );
  }

  public static async find(id: string) {
    const data = await config.behaviors.certificateRequest.find(id);
    if (data) {
      return new CertificateRequestDetailed(data);
    }
  }

  public static async get(id: string) {
    const certificateRequest = await this.find(id);
    assertObjectFound(certificateRequest, CertificateRequest, id);
    return certificateRequest;
  }

  public static ofId(certificateRequestId: string) {
    return new CertificateRequest(certificateRequestId);
  }

  public static query(query: CertificateRequestListQueryModelData = {}) {
    return new CertificateRequestListQuery(query);
  }
  public async delete() {
    await config.behaviors.certificateRequest.delete(this.id);
  }

  public async findCommon(): Promise<CertificateRequestCommon | undefined> {
    return this instanceof CertificateRequestCommon
      ? this
      : this.findDetailed();
  }

  public findDetailed(): Promise<CertificateRequestDetailed | undefined> {
    return CertificateRequest.find(this.id);
  }

  public async getCommon(): Promise<CertificateRequestCommon> {
    return this instanceof CertificateRequestCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<CertificateRequestDetailed> {
    return CertificateRequest.get(this.id);
  }
}

export class CertificateRequestCommon extends WithData<CertificateRequestData>()(
  CertificateRequest,
) {
  public readonly certificateData: CertificateRequestCertificateData;
  public readonly certificateType: CertificateType;
  public readonly commonName?: string;
  public readonly contact?: CertificateContact;
  public readonly createdAt: DateTime;
  public override readonly data: CertificateRequestData;
  public readonly dnsNames: string[];
  public readonly isCompleted: boolean;
  public readonly issuer?: string;
  public readonly project?: Project;
  public readonly validFrom?: DateTime;
  public readonly validTo?: DateTime;
  public constructor(data: CertificateRequestData) {
    super(data.id);
    this.data = data;
    this.certificateData = data.certificateData;
    this.certificateType = data.certificateType;
    this.commonName = data.commonName;
    this.contact = data.contact
      ? new CertificateContact(data.contact)
      : undefined;
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.dnsNames = data.dnsNames ?? [];
    this.isCompleted = data.isCompleted;
    this.issuer = data.issuer;
    if (data.projectId) {
      this.project = Project.ofId(data.projectId);
    }
    this.validFrom = data.validFrom
      ? DateTime.fromISO(data.validFrom)
      : undefined;
    this.validTo = data.validTo ? DateTime.fromISO(data.validTo) : undefined;
  }
}

export class CertificateRequestDetailed extends CertificateRequestCommon {
  public constructor(data: CertificateRequestData) {
    super(data);
  }
}

export class CertificateRequestListItem extends CertificateRequestCommon {
  public constructor(data: CertificateRequestListItemData) {
    super(data);
  }
}

export class CertificateRequestListQuery extends ListQueryModel<CertificateRequestListQueryModelData> {
  public constructor(query: CertificateRequestListQueryModelData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.certificateRequest.query({
        ...omit(this.query, ["project", "ingress"]),
        projectId: extractId(this.query.project),
        ingressId: extractId(this.query.ingress),
      });
    return new CertificateRequestList(
      this.query,
      items.map((r) => new CertificateRequestListItem(r)),
      totalCount,
    );
  }

  public refine(query: CertificateRequestListQueryModelData = {}) {
    return new CertificateRequestListQuery(query);
  }
}

export class CertificateRequestList extends WithListData<CertificateRequestListItem>()(
  CertificateRequestListQuery,
) {
  public override readonly items: readonly CertificateRequestListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: CertificateRequestListQueryModelData,
    certificateRequests: CertificateRequestListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(certificateRequests);
    this.totalCount = totalCount;
  }
}
