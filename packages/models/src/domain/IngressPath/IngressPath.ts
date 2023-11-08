import { DataModel } from "../../base/DataModel.js";
import { IngressPathData } from "./types.js";
import { IngressCommon, Ingress } from "../Ingress/index.js";
import {
  IngressTarget,
  ingressTargetFactory,
} from "../IngressTarget/IngressTarget.js";

export class IngressPath extends DataModel<IngressPathData> {
  public readonly ingress: Ingress;
  public readonly path: string;
  public readonly url: URL;
  public readonly target: IngressTarget;

  public constructor(ingress: IngressCommon, data: IngressPathData) {
    super(data);
    this.ingress = ingress;
    this.path = data.path;
    this.url = new URL(data.path, ingress.baseUrl);
    this.target = ingressTargetFactory(this, data.target);
  }
}
