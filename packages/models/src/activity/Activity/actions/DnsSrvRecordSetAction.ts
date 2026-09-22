import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction";

type ActivityDnsSrvRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsSrvRecordSet;

export class DnsSrvRecordSetAction extends DnsRecordSetAction<ActivityDnsSrvRecordSet> {}
