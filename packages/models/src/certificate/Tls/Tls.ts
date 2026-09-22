import { DateTime } from "luxon";

import type { TlsCertificateData, TlsAcmeData, TlsStatus, TlsData, } from "./types.js";

import { Certificate } from "../Certificate/index.js";
import { DataModel } from "../../base/index.js";

export abstract class TlsBase<T extends TlsData> extends DataModel<T> {
  public constructor(data: T) {
    super(data);
  }
}

export class TlsCertificate extends TlsBase<TlsCertificateData> {
  public readonly certificate: Certificate;
  public readonly type = "certificate";

  public constructor(data: TlsCertificateData) {
    super(data);
    this.certificate = Certificate.ofId(data.certificateId);
  }
}

export class TlsAcme extends TlsBase<TlsAcmeData> {
  public readonly acme: boolean;
  public readonly isCreated: boolean;
  public readonly requestDeadline: DateTime | undefined;
  public readonly type = "acme";
  public constructor(data: TlsAcmeData) {
    super(data);
    this.acme = data.acme;
    this.isCreated = data.isCreated;
    this.requestDeadline = data.requestDeadline
      ? DateTime.fromISO(data.requestDeadline)
      : undefined;
  }

  public getStatus(): TlsStatus | undefined {
    if (this.isCreated) {
      return undefined;
    }
    if (!this.acme) {
      return "disabled";
    }
    if (!this.requestDeadline) {
      return "exceeded";
    }
    const deadlineExceeded =
      DateTime.now().toMillis() > this.requestDeadline.toMillis();
    if (deadlineExceeded) {
      return "exceeded";
    }
    return "running";
  }
}

export type Tls = TlsCertificate | TlsAcme;

export const tlsFactory = (data: TlsData): Tls => {
  if ("certificateId" in data) {
    return new TlsCertificate(data);
  }
  return new TlsAcme(data);
};
