import type { TxtRecordListItem, DnsRecordTxtData } from "./types.js";
import type { DnsZoneCommon } from "../DnsZone/index.js";

import { DataModel } from "../../base/index.js";
import {
  type DnsRecordSettingsData,
  DnsRecordSettings,
} from "../DnsRecordSettings/index.js";

export class DnsRecordTxt extends DataModel<DnsRecordTxtData> {
  public readonly dnsZone: DnsZoneCommon;
  public readonly entries?: string[];
  public readonly settings?: DnsRecordSettings;
  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordTxtData) {
    super(data);
    this.dnsZone = dnsZone;
    if ("entries" in data) {
      this.entries = data.entries;
      this.settings = new DnsRecordSettings(data.settings);
    }
  }

  public async addEntry(entry: string, settings?: DnsRecordSettingsData) {
    const existingEntries = this.dnsZone.recordSet.txt.entries ?? [];
    return await this.dnsZone.setTxtRecord(
      [entry, ...existingEntries],
      settings,
    );
  }

  public asList(): TxtRecordListItem[] {
    if (!this.entries) {
      return [];
    }
    return this.entries.map((i) => ({ recordType: "txt", entry: i }));
  }

  public getTtl(): number | "auto" {
    if (this.settings) {
      return this.settings.ttl;
    }
    return "auto";
  }

  public isEmpty(): boolean {
    return (this.entries ?? []).length === 0;
  }

  public async removeEntry(entry: string) {
    const existingItems = this.dnsZone.recordSet.txt.entries ?? [];
    if (
      this.dnsZone.recordSet.txt.entries &&
      this.dnsZone.recordSet.txt.settings
    ) {
      await this.dnsZone.setTxtRecord(
        existingItems.filter((i) => i !== entry),
        this.dnsZone.recordSet.txt.settings.data,
      );
    }
  }

  public async setEmpty() {
    return await this.dnsZone.setTxtRecord([]);
  }
  public async updateEntry(
    entry: string,
    newEntry: string,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems = this.dnsZone.recordSet.txt.entries ?? [];
    const update = existingItems.map((i) => (i === entry ? newEntry : i));
    return await this.dnsZone.setTxtRecord(update, settings);
  }
}
