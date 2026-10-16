import type { DnsRecordCombinedA } from "../DnsRecordCombinedA/index.js";
import type { DnsRecordSetData, RecordListItem } from "./types.js";
import type { DnsZoneCommon, DnsZone } from "../DnsZone/index.js";
import type { DnsRecordMx } from "../DnsRecordMx/index.js";

import { dnsRecordCombinedAFactory } from "../DnsRecordCombinedA/index.js";
import { dnsRecordMxFactory } from "../DnsRecordMx/index.js";
import { DnsRecordCname } from "../DnsRecordCname/index.js";
import { DnsRecordCaa } from "../DnsRecordCaa/index.js";
import { DnsRecordSrv } from "../DnsRecordSrv/index.js";
import { DnsRecordTxt } from "../DnsRecordTxt/index.js";
import { DataModel } from "../../base/index.js";

export class DnsRecordSet extends DataModel<DnsRecordSetData> {
  public readonly caa: DnsRecordCaa;

  public readonly cname: DnsRecordCname;
  public readonly combinedA: DnsRecordCombinedA;
  public readonly mx: DnsRecordMx;
  public readonly srv: DnsRecordSrv;
  public readonly txt: DnsRecordTxt;
  public readonly zone: DnsZone;
  public constructor(zone: DnsZoneCommon, data: DnsRecordSetData) {
    super(data);
    this.zone = zone;
    this.combinedA = dnsRecordCombinedAFactory(zone, data.combinedARecords);
    this.mx = dnsRecordMxFactory(zone, data.mx);
    this.srv = new DnsRecordSrv(zone, data.srv);
    this.txt = new DnsRecordTxt(zone, data.txt);
    this.cname = new DnsRecordCname(zone, data.cname);
    this.caa = new DnsRecordCaa(zone, data.caa);
  }

  public asList(): RecordListItem[] {
    return [
      ...this.combinedA.asList(),
      ...this.mx.asList(),
      ...this.txt.asList(),
      ...this.srv.asList(),
      ...this.cname.asList(),
      ...this.caa.asList(),
    ];
  }

  public async clearRecords(): Promise<void> {
    const records = [
      this.combinedA,
      this.mx,
      this.srv,
      this.txt,
      this.cname,
      this.caa,
    ].filter((i) => !i.isEmpty());

    await Promise.all(records.map((i) => i.setEmpty()));
  }

  public getRecordCount(
    record: "combinedA" | "cname" | "txt" | "srv" | "caa" | "mx",
  ): number {
    switch (record) {
      case "combinedA":
        return this.combinedA.asList().length;
      case "cname":
        return this.cname.asList().length;
      case "txt":
        return (this.txt.entries ?? []).length;
      case "srv":
        return (this.srv.records ?? []).length;
      case "caa":
        return (this.caa.records ?? []).length;
      case "mx":
        return this.mx.asList().length;
    }
  }
}
