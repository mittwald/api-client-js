import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordAction } from "./DnsRecordAction.js";

type ActivityDnsMxRecordSetManaged =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsMxRecordSetManaged;

export class DnsMxRecordSetManagedAction extends DnsRecordAction<ActivityDnsMxRecordSetManaged> {}
