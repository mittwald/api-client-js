import { ReferenceModel } from "../../base/ReferenceModel.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import { ExtensionInstanceData } from "./types.js";

export class ExtensionInstance extends ReferenceModel {
  public static ofId(id: string): ExtensionInstance {
    return new ExtensionInstance(id);
  }
}

class ExtensionInstanceCommon extends classes(
  DataModel<ExtensionInstanceData>,
  ExtensionInstance,
) {
  public constructor(data: ExtensionInstanceData) {
    super([data], [data.id]);
  }
}

export class ExtensionInstanceDetailed extends classes(
  ExtensionInstanceCommon,
  DataModel<ExtensionInstanceData>,
) {
  public constructor(data: ExtensionInstanceData) {
    super([data], [data]);
  }
}
