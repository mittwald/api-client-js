import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import { BaseModel } from "./BaseModel.js";

@GhostMakerModel({
  getId: (model) => model.id,
})
export abstract class ReferenceModel extends BaseModel {
  public readonly id: string;

  public constructor(id: string) {
    super();
    this.id = id;
  }

  public describe(): string {
    return `${this.constructor.name}@${this.id}`;
  }
}
