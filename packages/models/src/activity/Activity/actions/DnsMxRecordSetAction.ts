import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction";

type ActivityDnsMxRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsMxRecordSet;

export class DnsMxRecordSetAction extends DnsRecordSetAction<ActivityDnsMxRecordSet> {}
