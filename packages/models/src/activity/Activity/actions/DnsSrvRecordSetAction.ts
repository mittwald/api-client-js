import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction.js";

type ActivityDnsSrvRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsSrvRecordSet;

export class DnsSrvRecordSetAction extends DnsRecordSetAction<ActivityDnsSrvRecordSet> {}
