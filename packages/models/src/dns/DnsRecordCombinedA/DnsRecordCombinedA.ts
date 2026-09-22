import type { DnsZoneCommon } from "../DnsZone/index.js";
import type {
  DnsRecordCombinedAManagedData,
  DnsRecordCombinedACustomData,
  DnsRecordCombinedAUnsetData,
  DnsRecordCombinedAData,
  ARecordCustomListItem,
  ARecordListItem,
} from "./types.js";

import { Ingress } from "../../ingress/Ingress/index.js";
import { DataModel } from "../../base/index.js";
import {
  type DnsRecordSettingsData,
  DnsRecordSettings,
} from "../DnsRecordSettings/index.js";

export abstract class DnsRecordCombinedABase<
  T extends DnsRecordCombinedAData,
> extends DataModel<T> {
  public readonly dnsZone: DnsZoneCommon;
  public constructor(dnsZone: DnsZoneCommon, data: T) {
    super(data);
    this.dnsZone = dnsZone;
  }

  public async addEntry(
    type: "aaaa" | "a",
    entry: string,
    settings?: DnsRecordSettingsData,
  ) {
    const record = this.dnsZone.recordSet.combinedA;
    const existingARecords = record.type === "custom" ? record.a : [];
    const existingAaaaRecords = record.type === "custom" ? record.aaaa : [];

    if (type === "a") {
      return await this.dnsZone.setCustomARecord(
        [...existingARecords, entry],
        existingAaaaRecords,
        settings,
      );
    }
    return await this.dnsZone.setCustomARecord(
      existingARecords,
      [...existingAaaaRecords, entry],
      settings,
    );
  }

  public async removeEntry(type: "aaaa" | "a", entry: string) {
    const record = this.dnsZone.recordSet.combinedA;
    if (record.type !== "custom") {
      return;
    }
    if (type === "aaaa") {
      return await this.dnsZone.setCustomARecord(
        record.a,
        record.aaaa.filter((i) => i !== entry),
        record.settings.data,
      );
    }
    return await this.dnsZone.setCustomARecord(
      record.a.filter((i) => i !== entry),
      record.aaaa,
      record.settings.data,
    );
  }

  public async setEmpty() {
    return await this.dnsZone.setCustomARecord([], []);
  }

  public async setManaged() {
    await this.dnsZone.setRecordManaged("a");
  }

  public async updateEntry(
    oldType: "aaaa" | "a",
    oldEntry: string,
    newType: "aaaa" | "a",
    newEntry: string,
    settings?: DnsRecordSettingsData,
  ) {
    const record = this.dnsZone.recordSet.combinedA;
    if (record.type !== "custom") {
      return;
    }

    if (oldType === newType) {
      const a =
        newType === "a"
          ? record.a.map((i) => (i === oldEntry ? newEntry : i))
          : record.a;
      const aaaa =
        newType === "aaaa"
          ? record.aaaa.map((i) => (i === oldEntry ? newEntry : i))
          : record.aaaa;
      return await this.dnsZone.setCustomARecord(a, aaaa, settings);
    }

    if (newType === "aaaa") {
      const a = record.a.filter((i) => i !== oldEntry);
      const aaaa = [...record.aaaa, newEntry];
      return await this.dnsZone.setCustomARecord(a, aaaa, settings);
    }
    const a = [...record.a, newEntry];
    const aaaa = record.aaaa.filter((i) => i !== oldEntry);
    return await this.dnsZone.setCustomARecord(a, aaaa, settings);
  }
}

export class DnsRecordCombinedAManaged extends DnsRecordCombinedABase<DnsRecordCombinedAManagedData> {
  public readonly managedBy: Ingress;
  public readonly type = "managed";
  public constructor(
    dnsZone: DnsZoneCommon,
    data: DnsRecordCombinedAManagedData,
  ) {
    super(dnsZone, data);
    this.managedBy = Ingress.ofId(data.managedBy.ingressId);
  }

  public asList(): ARecordListItem[] {
    return [{ type: "managed", recordType: "a" }];
  }

  public getTtl(): number | "auto" {
    return "auto";
  }

  public hasIpAddress() {
    return false;
  }

  public isEmpty(): boolean {
    return false;
  }
}

export class DnsRecordCombinedACustom extends DnsRecordCombinedABase<DnsRecordCombinedACustomData> {
  public readonly a: string[];

  public readonly aaaa: string[];
  public readonly settings: DnsRecordSettings;
  public readonly type = "custom";

  public constructor(
    dnsZone: DnsZoneCommon,
    data: DnsRecordCombinedACustomData,
  ) {
    super(dnsZone, data);
    this.a = data.a;
    this.aaaa = data.aaaa;
    this.settings = new DnsRecordSettings(data.settings);
  }

  public asList(): ARecordListItem[] {
    const a: ARecordCustomListItem[] = this.a.map((i) => ({
      recordType: "a",
      type: "custom",
      isIpV6: false,
      ip: i,
    }));

    const aaaa: ARecordCustomListItem[] = this.aaaa.map((i) => ({
      recordType: "a",
      type: "custom",
      isIpV6: true,
      ip: i,
    }));

    return [...a, ...aaaa];
  }

  public getTtl(): number | "auto" {
    return this.settings.ttl;
  }
  public hasIpAddress(ip: string) {
    return [...this.a, ...this.aaaa].includes(ip);
  }
  public isEmpty(): boolean {
    return this.a.length === 0 && this.aaaa.length === 0;
  }
}

export class DnsRecordCombinedAUnset extends DnsRecordCombinedABase<DnsRecordCombinedAUnsetData> {
  public readonly type = "unset";
  public constructor(
    dnsZone: DnsZoneCommon,
    data: DnsRecordCombinedAUnsetData,
  ) {
    super(dnsZone, data);
  }

  public asList(): ARecordListItem[] {
    return [];
  }

  public getTtl(): number | "auto" {
    return "auto";
  }

  public hasIpAddress() {
    return false;
  }
  public isEmpty(): boolean {
    return true;
  }
}

export type DnsRecordCombinedA =
  | DnsRecordCombinedAManaged
  | DnsRecordCombinedACustom
  | DnsRecordCombinedAUnset;

export const dnsRecordCombinedAFactory = (
  dnsZone: DnsZoneCommon,
  data: DnsRecordCombinedAData,
): DnsRecordCombinedA => {
  if ("a" in data) {
    return new DnsRecordCombinedACustom(dnsZone, data);
  }
  if ("managedBy" in data) {
    return new DnsRecordCombinedAManaged(dnsZone, data);
  }
  return new DnsRecordCombinedAUnset(dnsZone, data);
};
