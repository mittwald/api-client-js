import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction.js";

type ActivityDnsCnameRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsCnameRecordSet;

export class DnsCnameRecordSetAction extends DnsRecordSetAction<ActivityDnsCnameRecordSet> {}
