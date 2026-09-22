import type { DnsZoneCommon } from "../DnsZone";
import type {
  DnsRecordSrvEntry,
  SrvRecordListItem,
  DnsRecordSrvData,
} from "./types";

import { DataModel } from "../../base";
import {
  type DnsRecordSettingsData,
  DnsRecordSettings,
} from "../DnsRecordSettings";

export class DnsRecordSrv extends DataModel<DnsRecordSrvData> {
  public readonly dnsZone: DnsZoneCommon;
  public readonly records?: DnsRecordSrvEntry[];
  public readonly settings?: DnsRecordSettings;

  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordSrvData) {
    super(data);
    this.dnsZone = dnsZone;
    if ("records" in data) {
      this.records = data.records;
      this.settings = new DnsRecordSettings(data.settings);
    }
  }

  public async addEntry(
    newEntry: DnsRecordSrvEntry,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems = this.dnsZone.recordSet.srv.records ?? [];
    return await this.dnsZone.setSrvRecord(
      [newEntry, ...existingItems],
      settings,
    );
  }

  public asList(): SrvRecordListItem[] {
    if (!this.records) {
      return [];
    }
    return this.records.map((i) => {
      return {
        recordType: "srv",
        ...i,
      };
    });
  }

  public getTtl(): number | "auto" {
    if (this.settings) {
      return this.settings.ttl;
    }
    return "auto";
  }
  public isEmpty(): boolean {
    return (this.records ?? []).length === 0;
  }

  public async removeEntry(entry: DnsRecordSrvEntry) {
    if (
      this.dnsZone.recordSet.srv.records &&
      this.dnsZone.recordSet.srv.settings
    ) {
      const update = (this.dnsZone.recordSet.srv.records ?? []).filter(
        (i) => !this.areEntriesEqual(entry, i),
      );
      await this.dnsZone.setSrvRecord(
        update,
        this.dnsZone.recordSet.srv.settings.data,
      );
    }
  }

  public async setEmpty() {
    return await this.dnsZone.setSrvRecord([]);
  }

  public async updateEntry(
    oldEntry: DnsRecordSrvEntry,
    newEntry: DnsRecordSrvEntry,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems = this.dnsZone.recordSet.srv.records ?? [];
    if (existingItems.length < 1) {
      return;
    }
    const update = existingItems.map((i) =>
      this.areEntriesEqual(i, oldEntry) ? newEntry : i,
    );
    return await this.dnsZone.setSrvRecord(update, settings);
  }

  private areEntriesEqual(a: DnsRecordSrvEntry, b: DnsRecordSrvEntry): boolean {
    return (
      a.port === b.port &&
      a.fqdn === b.fqdn &&
      a.weight === b.weight &&
      a.priority === b.priority
    );
  }
}
