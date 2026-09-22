import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityDnsZoneCreated =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsZoneCreated;

export class DnsZoneCreatedAction extends ActivityAction<ActivityDnsZoneCreated> {
  public readonly parameters;

  constructor(data: ActivityDnsZoneCreated) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.domain.name;
    this.type = "create";
  }
}
