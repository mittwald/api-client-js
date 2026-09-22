import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DnsRecordSetAction } from "./DnsRecordSetAction.js";

type ActivityDnsTxtRecordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsTxtRecordSet;

export class DnsTxtRecordSetAction extends DnsRecordSetAction<ActivityDnsTxtRecordSet> {}
