import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityDnsZoneDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsZoneDeleted;

export class DnsZoneDeletedAction extends ActivityAction<ActivityDnsZoneDeleted> {
  public readonly parameters;

  constructor(data: ActivityDnsZoneDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.domain.name;
    this.type = "delete";
  }
}
