import type { CnameRecordListItem, DnsRecordCnameData } from "./types.js";
import type { DnsZoneCommon } from "../DnsZone/index.js";

import { DnsRecordSettings } from "../DnsRecordSettings/index.js";
import { DataModel } from "../../base/index.js";

export class DnsRecordCname extends DataModel<DnsRecordCnameData> {
  public readonly dnsZone: DnsZoneCommon;
  public readonly fqdn?: string;
  public readonly settings?: DnsRecordSettings;
  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordCnameData) {
    super(data);
    this.dnsZone = dnsZone;
    if ("fqdn" in data) {
      this.fqdn = data.fqdn;
      this.settings = new DnsRecordSettings(data.settings);
    }
  }
  public asList(): CnameRecordListItem[] {
    if (this.fqdn) {
      return [
        {
          recordType: "cname",
          fqdn: this.fqdn,
        },
      ];
    }
    return [];
  }

  public getTtl(): number | "auto" {
    if (this.settings) {
      return this.settings.ttl;
    }
    return "auto";
  }

  public isEmpty() {
    return this.fqdn === undefined;
  }

  public async setEmpty() {
    await this.dnsZone.removeCname();
  }
}
