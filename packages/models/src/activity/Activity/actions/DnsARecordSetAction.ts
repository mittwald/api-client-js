import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction";

type ActivityDnsARecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsARecordSet;

export class DnsARecordSetAction extends DnsRecordSetAction<ActivityDnsARecordSet> {}
