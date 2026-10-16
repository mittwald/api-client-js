import type {
  CertificateDetailed,
  CertificateListItem,
} from "../Certificate/index.js";
import type { IngressListItem } from "../../ingress/Ingress/index.js";
import type {
  CertificateDifferencesResolveResponse,
  CertificateCheckReplaceResponseData,
  CertificateCheckReplaceChanges,
  CertificateErrorData,
} from "./types.js";

import { DataModel } from "../../base/index.js";

export class CertificateCheckReplaceResponse extends DataModel<CertificateCheckReplaceResponseData> {
  public readonly changes?: CertificateCheckReplaceChanges;
  public readonly errors: CertificateErrorData[];
  public readonly isReplaceable: boolean;
  public constructor(data: CertificateCheckReplaceResponseData) {
    super(data);
    this.isReplaceable = data.isReplaceable;
    this.changes = data.changes;
    this.errors = data.errors ?? [];
  }

  public getAddedDnsNames(incldeCommonName = true): string[] {
    const hostnames = [
      ...(this.changes?.dnsNames?.addedValues ?? []),
      ...(this.changes?.dnsNames?.values ?? []),
    ];
    if (incldeCommonName && this.changes?.commonName?.newValue) {
      hostnames.push(this.changes?.commonName?.newValue);
    }
    return hostnames;
  }

  public getRemovedDnsNames(): string[] {
    return this.changes?.dnsNames?.removedValues ?? [];
  }

  public resolveCertificateChanges(
    oldCertificate: CertificateDetailed | CertificateListItem,
    newCompatibleIngresses: IngressListItem[],
    oldCompatibleIngresses: IngressListItem[],
  ): CertificateDifferencesResolveResponse {
    const addedHostnames = this.getAddedDnsNames();
    const newHostnames = addedHostnames
      .filter((i, index, array) => array.indexOf(i) === index)
      .filter((i) =>
        newCompatibleIngresses.find((ingress) => ingress.hostname === i),
      );

    const oldIngresses = oldCompatibleIngresses
      .filter(
        (i) =>
          i.tls.type === "certificate" &&
          i.tls.certificate.id === oldCertificate.id,
      )
      .filter((i) => !this.hostnameMatchesWildcard(i.hostname, newHostnames));

    if (!this.changes?.dnsNames) {
      const hostnames = oldIngresses.map((i) => i.hostname);
      newHostnames.push(...hostnames);
    }

    const removedOldIngresses = !this.changes?.dnsNames
      ? []
      : oldIngresses.map((ingress) => ingress.hostname);

    const removedOldCommonName = !this.changes?.commonName
      ? []
      : [this.changes.commonName.oldValue];

    const removedDnsNames = this.getRemovedDnsNames();

    const removedHostnames = [
      ...removedOldIngresses,
      ...removedOldCommonName,
      ...removedDnsNames,
    ].filter((i, pos, array) => array.indexOf(i) === pos);

    const ingressWillReceiveCertificate = newCompatibleIngresses.filter(
      (i) =>
        this.hostnameMatchesWildcard(i.hostname, newHostnames) &&
        ((i.tls.type === "certificate" &&
          i.tls.certificate.id === oldCertificate.id) ||
          i.tls.type === "acme"),
    );

    const ingressWillBeDowngradedToLetsEncrypt = [
      ...newCompatibleIngresses,
      ...oldIngresses,
    ]
      .filter(
        (i) =>
          this.hostnameMatchesWildcard(i.hostname, removedHostnames) &&
          i.tls.type === "certificate" &&
          i.tls.certificate.id === oldCertificate.id,
      )
      .filter(
        (ingress, pos, array): ingress is IngressListItem =>
          array.findIndex((i) => i.hostname === ingress.hostname) === pos,
      );

    const removed = ingressWillBeDowngradedToLetsEncrypt.map((i) => i.hostname);
    const added = ingressWillReceiveCertificate.map((i) => i.hostname);
    return { removed, added };
  }

  private hostnameMatchesWildcard(
    hostname: string,
    wildcards: string[],
  ): boolean {
    for (const wildcard of wildcards) {
      if (hostname === wildcard) {
        return true;
      }
      if (wildcard.startsWith("*.")) {
        const hostnameParts = hostname.split(".");
        if (
          hostnameParts.slice(1, hostnameParts.length).join(".") ===
          wildcard.replace("*.", "")
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
