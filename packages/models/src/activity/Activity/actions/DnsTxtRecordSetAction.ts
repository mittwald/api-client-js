import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction";

type ActivityDnsTxtRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsTxtRecordSet;

export class DnsTxtRecordSetAction extends DnsRecordSetAction<ActivityDnsTxtRecordSet> {}
