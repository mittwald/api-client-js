import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { getSubdomain } from "tldts";
import { omit } from "remeda";

import type { CertificateListQuery } from "../../certificate/Certificate";
import type { TlsStatus, Tls } from "../../certificate/Tls";
import type { IngressTargetData } from "../IngressTarget";
import type {
  IngressListQueryModelData,
  CertificateSettings,
  IngressListItemData,
  IngressPathSettings,
  DnsValidationError,
  IngressData,
} from "./types";

import { Certificate } from "../../certificate/Certificate/Certificate";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { tlsFactory } from "../../certificate/Tls";
import { Project } from "../../project/internal";
import { AggregateMetaData } from "../../common";
import { IngressPath } from "../IngressPath";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Ingress",
})
export class Ingress extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("ingress", "ingress");

  public static async create(
    projectId: string,
    hostname: string,
    paths: IngressPathSettings[],
  ) {
    const { id } = await config.behaviors.ingress.create(
      projectId,
      hostname,
      paths,
    );
    return new Ingress(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.ingress.find(id);
    if (data) {
      return new IngressDetailed(data);
    }
  }

  public static async findDefaultIngress(project?: Project | string) {
    const ingresses = await this.query({ project }).execute();

    return ingresses.items.find((i) => i.data.isDefault);
  }

  public static async get(id: string) {
    const ingress = await this.find(id);
    assertObjectFound(ingress, Ingress, id);
    return ingress;
  }

  /**
   * Ingresses compatible with a certificate — either an existing one (pass the
   * `Certificate` model or its id) or a not-yet-saved one (pass its project and
   * raw PEM `certificateContent`).
   */
  public static async listCompatibleWithCertificate(
    certificate:
      | { certificateContent: string; project: Project | string }
      | Certificate
      | string,
  ) {
    if (
      typeof certificate === "string" ||
      certificate instanceof ReferenceModel
    ) {
      return await config.behaviors.ingress.listCompatibleWithCertificate({
        certificateId: extractId(certificate),
      });
    }
    return await config.behaviors.ingress.listCompatibleWithCertificate({
      certificateContent: certificate.certificateContent,
      projectId: extractId(certificate.project),
    });
  }

  public static ofHostname(hostname: string) {
    return Ingress.ofId(hostname);
  }

  public static ofId(id: string) {
    return new Ingress(id);
  }

  public static query = (query: IngressListQueryModelData = {}) =>
    new IngressListQuery(query);

  public async delete() {
    await config.behaviors.ingress.delete(this.id);
  }

  public findCommon():
    Promise<IngressCommon | undefined> | IngressCommon | undefined {
    return this instanceof IngressCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<IngressDetailed | undefined> {
    return Ingress.find(this.id);
  }

  public getCommon(): Promise<IngressCommon> | IngressCommon {
    return this instanceof IngressCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<IngressDetailed> {
    return Ingress.get(this.id);
  }
  public async requestAcmeCertificate() {
    await config.behaviors.ingress.requestAcmeCertificate(this.id);
  }
  public async updatePaths(paths: IngressPathSettings[]) {
    await config.behaviors.ingress.updatePaths(this.id, paths);
  }
  public async updateTls(certificate: CertificateSettings) {
    await config.behaviors.ingress.updateTls(this.id, certificate);
    if (certificate.type === "acme" && certificate.acme) {
      await this.requestAcmeCertificate();
    }
  }

  public async verifyOwnership() {
    return await config.behaviors.ingress.verifyOwnership(this.id);
  }
}

export class IngressCommon extends WithData<
  IngressListItemData | IngressData
>()(Ingress) {
  public readonly baseUrl: string;
  public readonly certificates: CertificateListQuery;
  public override readonly data: IngressListItemData | IngressData;
  public readonly defaultPath: IngressPath;
  public readonly dnsValidationErrors: DnsValidationError[];
  public readonly hostname: string;
  public readonly hostnameWithProtocol: string;
  public readonly ips: string[];
  public readonly isDefault: boolean;
  public readonly isEnabled: boolean;
  public readonly isSubdomain: boolean;
  public readonly isVerified: boolean;
  public readonly paths: readonly IngressPath[];
  public readonly project: Project;
  public readonly tls: Tls;
  public readonly verificationTxtRecord?: string;

  public constructor(data: IngressListItemData | IngressData) {
    super(data.id);
    this.data = data;
    this.baseUrl = `https://${data.hostname}`;
    this.paths = Object.freeze(data.paths.map((p) => new IngressPath(this, p)));
    this.isDefault = data.isDefault;
    const subdomain = getSubdomain(data.hostname);
    this.isSubdomain = subdomain !== null && subdomain !== "";
    this.isVerified = data.ownership.verified;
    this.tls = tlsFactory(data.tls);

    const defaultPath = this.paths.find((p) => p.path === "/");
    if (defaultPath === undefined) {
      throw new Error(`Ingress ${this.describe()} has no default path.`);
    }
    this.defaultPath = defaultPath;
    this.hostname = data.hostname;
    this.hostnameWithProtocol = `https://${data.hostname}`;
    this.ips = data.ips.v4;
    this.verificationTxtRecord = data.ownership.txtRecord;
    this.project = Project.ofId(data.projectId);
    this.dnsValidationErrors = data.dnsValidationErrors;
    this.isEnabled = data.isEnabled;
    this.certificates = Certificate.query({ ingress: this });
  }

  public async addPath(path: string, target: IngressTargetData) {
    const paths: IngressPathSettings[] = this.paths.map((i) => i.data);
    await this.updatePaths([...paths, { target, path }]);
  }

  public getTlsAcmeStatus(): TlsStatus | undefined {
    if (!this.isEnabled) {
      return undefined;
    }
    return this.tls.type === "acme" ? this.tls.getStatus() : undefined;
  }
  public async removePath(path: string) {
    const paths: IngressPathSettings[] = this.paths
      .filter((i) => i.path !== path)
      .map((i) => i.data);
    await this.updatePaths(paths);
  }

  public async setDefaultPath(target: IngressTargetData) {
    await this.updatePath("/", { path: "/", target });
  }

  public async updatePath(path: string, newPath: IngressPathSettings) {
    const paths: IngressPathSettings[] = this.paths.map((i) => {
      if (i.path === path) {
        return {
          target: newPath.target,
          path: newPath.path,
        };
      }
      return {
        target: i.target!.data,
        path: i.path,
      };
    });

    await this.updatePaths(paths);
  }
}

export class IngressDetailed extends IngressCommon {
  public override readonly data: IngressData;
  public constructor(data: IngressData) {
    super(data);
    this.data = data;
  }
}

export class IngressListItem extends IngressCommon {
  public override readonly data: IngressListItemData;
  public constructor(data: IngressListItemData) {
    super(data);
    this.data = data;
  }
}

export class IngressListQuery extends ListQueryModel<IngressListQueryModelData> {
  public async execute(options?: AxiosRequestConfig) {
    const { totalCount, items } = await config.behaviors.ingress.list(
      {
        ...omit(this.query, [
          "project",
          "certificate",
          "appInstallation",
          "container",
        ]),
        appInstallationId: extractId(this.query.appInstallation),
        certificateId: extractId(this.query.certificate),
        containerId: extractId(this.query.container),
        projectId: extractId(this.query.project),
      },
      options,
    );

    return new IngressList(
      this.query,
      items.map((d) => new IngressListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: IngressListQueryModelData) {
    return new IngressListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class IngressList extends WithListData<IngressListItem>()(
  IngressListQuery,
) {
  public override readonly items: readonly IngressListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: IngressListQueryModelData,
    ingresses: IngressListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(ingresses);
    this.totalCount = totalCount;
  }
}
