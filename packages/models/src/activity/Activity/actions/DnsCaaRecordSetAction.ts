import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction.js";

type ActivityDnsCaaRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsCaaRecordSet;

export class DnsCaaRecordSetAction extends DnsRecordSetAction<ActivityDnsCaaRecordSet> {}
