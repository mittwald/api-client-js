import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityDomainDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsDomainDeleted;

export class DomainDeletedAction extends ActivityAction<ActivityDomainDeleted> {
  public readonly parameters;

  constructor(data: ActivityDomainDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.domain.name;
    this.type = "delete";
  }
}
