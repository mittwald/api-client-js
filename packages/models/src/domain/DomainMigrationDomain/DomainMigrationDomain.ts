import type {
  DomainMigrationDomainState,
  DomainMigrationDomainData,
} from "./types.js";

import { DomainMigrationDnsRecord } from "../DomainMigrationDnsRecord/index.js";
import { DataModel } from "../../base/index.js";

export class DomainMigrationDomain extends DataModel<DomainMigrationDomainData> {
  public readonly dnsRecords: DomainMigrationDnsRecord[];
  public readonly domain: string;
  public readonly domainId: string;
  public readonly state: DomainMigrationDomainState;

  public constructor(data: DomainMigrationDomainData) {
    super(data);
    this.domainId = data.domainId;
    this.domain = data.domain;
    this.state = data.state;
    this.dnsRecords = (data.coabData?.dnsRecords ?? []).map(
      (i) => new DomainMigrationDnsRecord(i),
    );
  }

  public findFirstARecord() {
    return this.dnsRecords.find((i) => i.type === "A");
  }
}
