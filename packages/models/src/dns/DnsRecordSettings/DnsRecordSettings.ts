import type { DnsRecordSettingsData } from "./types";

import { DataModel } from "../../base";

export class DnsRecordSettings extends DataModel<DnsRecordSettingsData> {
  public readonly ttl: number | "auto";
  public constructor(data: DnsRecordSettingsData) {
    super(data);
    if (data.ttl !== undefined && "seconds" in data.ttl) {
      this.ttl = data.ttl.seconds;
    } else {
      this.ttl = "auto";
    }
  }
}
