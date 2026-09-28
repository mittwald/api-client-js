import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordAction } from "./DnsRecordAction.js";

type ActivityDnsARecordSetManaged =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsARecordSetManaged;

export class DnsARecordSetManagedAction extends DnsRecordAction<ActivityDnsARecordSetManaged> {}
