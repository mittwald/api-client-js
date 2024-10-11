import { DataModel } from "../../base/index.js";
import { DnsRecordSetData } from "./types.js";
import { DnsZone, DnsZoneCommon } from "../DnsZone/index.js";

export class DnsRecordSet extends DataModel<DnsRecordSetData> {
  public readonly zone: DnsZone;
  public constructor(zone: DnsZoneCommon, data: DnsRecordSetData) {
    super(data);
    this.zone = zone;
  }
}
