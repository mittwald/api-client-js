import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type {
  CertificateListQueryModelData,
  CertificateListItemData,
  CertificateData,
  CertificateType,
} from "./types.js";

import { CertificateCheckReplaceResponse } from "../CertificateCheckReplaceResponse/index.js";
import { CertificateContact } from "../CertificateContact/CertificateContact.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { CertificateRequest } from "../CertificateRequest/index.js";
import { DnsCertificateSpec } from "../DnsCertificateSpec/index.js";
import { Ingress } from "../../ingress/Ingress/Ingress.js";
import { Project } from "../../project/internal.js";
import { AggregateMetaData } from "../../common/index.js";
import { Order } from "../../order/Order/Order.js";
import { CertificateTypes } from "./types.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Certificate",
})
export class Certificate extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("ssl", "certificate");

  public static async find(id: string) {
    const data = await config.behaviors.certificate.find(id);
    if (data) {
      return new CertificateDetailed(data);
    }
  }

  public static async get(id: string) {
    const certificate = await this.find(id);
    assertObjectFound(certificate, Certificate, id);
    return certificate;
  }

  public static ofId(id: string) {
    return new Certificate(id);
  }

  public static query(query: CertificateListQueryModelData = {}) {
    return new CertificateListQuery(query);
  }

  public async checkReplace(
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ): Promise<CertificateCheckReplaceResponse> {
    const response = await config.behaviors.certificate.checkReplace(
      this.id,
      certificate,
      privateKey,
      certificateAuthority,
    );
    return new CertificateCheckReplaceResponse(response);
  }

  public async delete() {
    await config.behaviors.certificate.delete(this.id);
  }

  public async findCommon(): Promise<CertificateCommon | undefined> {
    return this instanceof CertificateCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<CertificateDetailed | undefined> {
    return Certificate.find(this.id);
  }

  public async getCommon(): Promise<CertificateCommon> {
    return this instanceof CertificateCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<CertificateDetailed> {
    return Certificate.get(this.id);
  }

  public async replace(
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ) {
    await config.behaviors.certificate.replace(
      this.id,
      certificate,
      privateKey,
      certificateAuthority,
    );
  }
}

export class CertificateCommon extends WithData<CertificateData>()(
  Certificate,
) {
  public readonly caBundle?: string;
  public readonly certificate?: string;
  public readonly certificateOrder?: Order;
  public readonly certificateRequest: CertificateRequest;
  public readonly certificateType: CertificateType;
  public readonly commonName?: string;
  public readonly contact?: CertificateContact;
  public override readonly data: CertificateData;
  public readonly displayName: string;
  public readonly dnsCertSpec?: DnsCertificateSpec;
  public readonly dnsNames: string[];
  public readonly isExpired: boolean;
  public readonly issuer?: string;
  public readonly lastExpirationThresholdHit?: number;
  public readonly project: Project;
  public readonly validFrom?: DateTime;
  public readonly validTo?: DateTime;
  /**
   * The ingresses that reference this certificate. A lazy query getter (not an
   * eager ctor field), so the accepted `certificate ↔ ingress` module cycle
   * carries no import-time hazard — see the import-cycle trap in
   * docs/implementation-patterns.md.
   */
  public get linkedIngresses() {
    return Ingress.query({ certificate: this });
  }

  public constructor(data: CertificateData) {
    super(data.id);
    this.data = data;
    this.caBundle = data.caBundle;
    this.certificate = data.certificate;
    if (data.certificateOrderId) {
      this.certificateOrder = Order.ofId(data.certificateOrderId);
    }
    this.certificateRequest = CertificateRequest.ofId(
      data.certificateRequestId,
    );
    this.certificateType = data.certificateType;
    this.commonName = data.commonName;
    if (data.contact) {
      this.contact = new CertificateContact(data.contact);
    }
    this.dnsNames = data.dnsNames ?? [];
    this.isExpired = data.isExpired ?? false;
    this.issuer = data.issuer;
    this.lastExpirationThresholdHit = data.lastExpirationThresholdHit;
    this.project = Project.ofId(data.projectId);
    if (data.validFrom) {
      this.validFrom = DateTime.fromISO(data.validFrom);
    }
    if (data.validTo) {
      this.validTo = DateTime.fromISO(data.validTo);
    }
    this.displayName = this.commonName ?? this.dnsNames[0] ?? "";
    if (data.dnsCertSpec) {
      this.dnsCertSpec = new DnsCertificateSpec(data.dnsCertSpec);
    }
  }

  public expired() {
    return (
      this.isExpired || (this.validTo && this.validTo.diffNow("days").days <= 0)
    );
  }

  public expiresSoon() {
    return this.validTo && this.validTo?.diffNow("months").months <= 1;
  }

  public getStatus() {
    if (this.certificateType === CertificateTypes.DNS) {
      if (this.dnsCertSpec?.status) {
        return this.dnsCertSpec.status.status;
      }
    }
  }

  public readonly isCompatibleWithHostname = (hostname: string) => {
    const itemsToCheck = this.dnsNames;
    if (this.commonName) {
      itemsToCheck.push(this.commonName);
    }

    for (const item of itemsToCheck) {
      if (item === hostname) {
        return true;
      }
      if (item.startsWith("*.")) {
        const hostnameParts = hostname.split(".");
        if (
          hostnameParts.slice(1, hostnameParts.length).join(".") ===
          item.replace("*.", "")
        ) {
          return true;
        }
      }
    }
    return false;
  };

  public isWildcard() {
    return this.displayName.startsWith("*.");
  }

  /**
   * The ingresses in this certificate's project that are compatible with it. A
   * lazy delegator to the ingress-side query; part of the accepted `certificate
   * ↔ ingress` module cycle (lazy, deep import).
   */
  public async listCompatibleIngresses() {
    return Ingress.listCompatibleWithCertificate(this);
  }
}

export class CertificateDetailed extends CertificateCommon {
  public constructor(data: CertificateData) {
    super(data);
  }
}

export class CertificateListQuery extends ListQueryModel<CertificateListQueryModelData> {
  public constructor(query: CertificateListQueryModelData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.certificate.query({
      ...omit(this.query, ["project", "ingress"]),
      projectId: extractId(this.query.project),
      ingressId: extractId(this.query.ingress),
    });
    return new CertificateList(
      this.query,
      items.map((c) => new CertificateListItem(c)),
      totalCount,
    );
  }

  public refine(query: CertificateListQueryModelData = {}) {
    return new CertificateListQuery({ ...this.query, ...query });
  }
}

export class CertificateListItem extends CertificateCommon {
  public constructor(data: CertificateListItemData) {
    super(data);
  }
}

export class CertificateList extends WithListData<CertificateListItem>()(
  CertificateListQuery,
) {
  public override readonly items: readonly CertificateListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: CertificateListQueryModelData,
    certificates: CertificateListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(certificates);
    this.totalCount = totalCount;
  }

  public getItemsCompatibleWithHostname(hostname: string) {
    return this.items.filter((i) => i.isCompatibleWithHostname(hostname));
  }
}
