import type { DnsRecordSettingsData } from "../DnsRecordSettings";
import type { DnsZoneCommon } from "../DnsZone";
import type {
  CaaRecordListItem,
  DnsRecordCaaEntry,
  DnsRecordCaaData,
} from "./types";

import { DnsRecordSettings } from "../DnsRecordSettings";
import { DataModel } from "../../base";

export class DnsRecordCaa extends DataModel<DnsRecordCaaData> {
  public readonly dnsZone: DnsZoneCommon;
  public readonly records?: DnsRecordCaaEntry[];
  public readonly settings?: DnsRecordSettings;
  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordCaaData) {
    super(data);
    this.dnsZone = dnsZone;
    if ("records" in data) {
      this.records = data.records;
      this.settings = new DnsRecordSettings(data.settings);
    }
  }

  public async addRecord(
    newRecord: DnsRecordCaaEntry,
    settings?: DnsRecordSettingsData,
  ) {
    return await this.dnsZone.setCaaRecord(
      [...(this.records ?? []), newRecord],
      settings,
    );
  }

  public asList(): CaaRecordListItem[] {
    if (!this.records) {
      return [];
    }
    return this.records.map((i) => {
      return {
        recordType: "caa",
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

  public async removeRecord(record: DnsRecordCaaEntry) {
    await this.dnsZone.setCaaRecord(
      (this.records ?? []).filter((i) => !this.areRecordsEqual(record, i)),
    );
  }

  public async setEmpty() {
    return await this.dnsZone.setCaaRecord([]);
  }

  public async updateRecord(
    oldRecord: DnsRecordCaaEntry,
    newRecord: DnsRecordCaaEntry,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems = this.dnsZone.recordSet.caa.records ?? [];
    const update = existingItems.map((i) =>
      this.areRecordsEqual(oldRecord, i) ? newRecord : i,
    );
    return await this.dnsZone.setCaaRecord(update, settings);
  }

  private areRecordsEqual(a: DnsRecordCaaEntry, b: DnsRecordCaaEntry): boolean {
    return a.tag === b.tag && a.flags === b.flags && a.value === b.value;
  }
}
