import type {
  DomainMigrationDnsRecordData,
  DomainMigrationDnsRecordType,
} from "./types.js";

import { DataModel } from "../../base/index.js";

export class DomainMigrationDnsRecord extends DataModel<DomainMigrationDnsRecordData> {
  public readonly ttl: number;
  public readonly type: DomainMigrationDnsRecordType;
  public readonly value: string;
  public constructor(data: DomainMigrationDnsRecordData) {
    super(data);
    this.type = data.type;
    this.value = data.value;
    this.ttl = data.ttl;
  }
}
