import type { IngressCommon, Ingress } from "../Ingress/index.js";
import type { IngressTarget } from "../IngressTarget/index.js";
import type { IngressPathData } from "./types.js";

import { ingressTargetFactory } from "../IngressTarget/index.js";
import { Project } from "../../project/internal.js";
import { DataModel } from "../../base/index.js";

export class IngressPath extends DataModel<IngressPathData> {
  public readonly ingress: Ingress;
  public readonly path: string;
  public readonly project: Project;
  public readonly target?: IngressTarget;
  public readonly url: URL;

  public constructor(ingress: IngressCommon, data: IngressPathData) {
    super(data);
    this.ingress = ingress;
    this.project = Project.ofId(ingress.data.projectId);
    this.path = data.path;
    this.url = new URL(data.path, ingress.baseUrl);
    this.target = ingressTargetFactory(this, data.target);
  }
}
