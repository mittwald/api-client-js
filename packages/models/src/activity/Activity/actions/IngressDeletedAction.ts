import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityIngressDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogDnsIngressDeleted;

export class IngressDeletedAction extends ActivityAction<ActivityIngressDeleted> {
  public readonly parameters;

  constructor(data: ActivityIngressDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.domain.name;
    this.type = "delete";
  }
}
