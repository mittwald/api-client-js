import type { DnsZoneCommon } from "../DnsZone";
import type {
  DnsRecordMxManagedData,
  DnsRecordMxCustomData,
  DnsRecordMxUnsetData,
  DnsRecordMxEntry,
  MxRecordListItem,
  DnsRecordMxData,
} from "./types";

import { DataModel } from "../../base";
import { DnsZone } from "../DnsZone";
import {
  type DnsRecordSettingsData,
  DnsRecordSettings,
} from "../DnsRecordSettings";

export abstract class DnsRecordMxBase<T extends DnsRecordMxData> extends DataModel<T> {
  public readonly dnsZone: DnsZoneCommon;
  public constructor(dnsZone: DnsZoneCommon, data: T) {
    super(data);
    this.dnsZone = dnsZone;
  }

  public async addEntry(
    entry: DnsRecordMxEntry,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems =
      this.dnsZone.recordSet.mx.type === "custom"
        ? this.dnsZone.recordSet.mx.records
        : [];
    return await this.dnsZone.setCustomMxRecord(
      [entry, ...existingItems],
      settings,
    );
  }

  public async removeEntry(entry: DnsRecordMxEntry) {
    const { mx } = this.dnsZone.recordSet;

    const existingItems = mx.type === "custom" ? mx.records : [];

    if (mx.type === "custom" && mx.settings && mx.records) {
      const updated = existingItems.filter(
        (i) => i.priority !== entry.priority && i.fqdn !== entry.fqdn,
      );
      await this.dnsZone.setCustomMxRecord(updated, mx.settings.data);
    }
  }

  public async setEmpty() {
    return await this.dnsZone.setCustomMxRecord([]);
  }

  public async setManaged() {
    await this.dnsZone.setRecordManaged("mx");
  }

  public async updateEntry(
    entry: DnsRecordMxEntry,
    newEntry: DnsRecordMxEntry,
    settings?: DnsRecordSettingsData,
  ) {
    const existingItems =
      this.dnsZone.recordSet.mx.type === "custom"
        ? this.dnsZone.recordSet.mx.records
        : [];
    if (
      existingItems.length < 1 ||
      this.dnsZone.recordSet.mx.type !== "custom"
    ) {
      return;
    }
    const updatedArray = this.dnsZone.recordSet.mx.records.map((i) =>
      i.priority === entry.priority && i.fqdn === entry.fqdn ? newEntry : i,
    );
    return await this.dnsZone.setCustomMxRecord(updatedArray, settings);
  }
}

export class DnsRecordMxManaged extends DnsRecordMxBase<DnsRecordMxManagedData> {
  public readonly type = "managed";

  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordMxManagedData) {
    super(dnsZone, data);
  }

  public asList(): MxRecordListItem[] {
    return DnsZone.mittwaldMxRecords.map((i) => ({
      ...i,
      recordType: "mx",
      type: "managed",
    }));
  }

  public getTtl(): number | "auto" {
    return "auto";
  }

  public isEmpty(): boolean {
    return false;
  }
}

export class DnsRecordMxCustom extends DnsRecordMxBase<DnsRecordMxCustomData> {
  public readonly records: DnsRecordMxEntry[];
  public readonly settings: DnsRecordSettings;
  public readonly type = "custom";
  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordMxCustomData) {
    super(dnsZone, data);
    this.records = data.records;
    this.settings = new DnsRecordSettings(data.settings);
  }

  public asList(): MxRecordListItem[] {
    return this.records.map((i) => {
      return { recordType: "mx", type: "custom", ...i };
    });
  }

  public getTtl(): number | "auto" {
    return this.settings.ttl;
  }

  public isEmpty(): boolean {
    return this.records.length === 0;
  }
}

export class DnsRecordMxUnset extends DnsRecordMxBase<DnsRecordMxUnsetData> {
  public readonly type = "unset";
  public constructor(dnsZone: DnsZoneCommon, data: DnsRecordMxUnsetData) {
    super(dnsZone, data);
  }

  public asList(): MxRecordListItem[] {
    return [];
  }

  public getTtl(): number | "auto" {
    return "auto";
  }

  public isEmpty(): boolean {
    return true;
  }
}

export type DnsRecordMx =
  | DnsRecordMxManaged
  | DnsRecordMxCustom
  | DnsRecordMxUnset;

export const dnsRecordMxFactory = (
  dnsZone: DnsZoneCommon,
  data: DnsRecordMxData,
): DnsRecordMx => {
  if ("records" in data) {
    return new DnsRecordMxCustom(dnsZone, data);
  }
  if ("managed" in data) {
    return new DnsRecordMxManaged(dnsZone, data);
  }
  return new DnsRecordMxUnset(dnsZone, data);
};
