import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordAction } from "./DnsRecordAction";

type ActivityDnsMxRecordSetManaged =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsMxRecordSetManaged;

export class DnsMxRecordSetManagedAction extends DnsRecordAction<ActivityDnsMxRecordSetManaged> {}
